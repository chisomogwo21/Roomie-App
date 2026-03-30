import { supabase } from './supabaseClient';

export interface DatabaseMessage {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  created_at: string;
}

export async function sendMessage(receiverId: string, content: string): Promise<DatabaseMessage> {
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user) {
    throw new Error('You must be logged in to send a message.');
  }

  const { data, error } = await supabase
    .from('messages')
    .insert([
      {
        sender_id: user.id,
        receiver_id: receiverId,
        content: content,
      }
    ])
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to send message: ${error.message}`);
  }

  return data as DatabaseMessage;
}

export async function fetchMessages(otherUserId: string) {
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user) {
    throw new Error('You must be logged in to fetch messages.');
  }

  // Get conversation history between the two users
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .or(`and(sender_id.eq.${user.id},receiver_id.eq.${otherUserId}),and(sender_id.eq.${otherUserId},receiver_id.eq.${user.id})`)
    .order('created_at', { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch messages: ${error.message}`);
  }

  return { 
    messages: data as DatabaseMessage[], 
    currentUserId: user.id 
  };
}

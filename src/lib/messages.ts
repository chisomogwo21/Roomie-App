import { supabase } from './supabaseClient';

export interface DatabaseMessage {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  created_at: string;
}

export interface ConversationPartner {
  id: string;
  full_name: string;
  avatar_url: string;
  last_message: string;
  last_message_time: string;
  unread_count?: number;
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

/**
 * Subscribe to new messages between the current user and another user.
 */
export function subscribeToMessages(onMessageReceived: (message: DatabaseMessage) => void) {
  return supabase
    .channel('public:messages')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
      },
      (payload) => {
        onMessageReceived(payload.new as DatabaseMessage);
      }
    )
    .subscribe();
}

/**
 * Fetches recent conversations for the current user.
 */
export async function fetchRecentConversations(): Promise<ConversationPartner[]> {
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user) {
    throw new Error('You must be logged in to fetch conversations.');
  }

  // This is a simplified approach. In a complex app, we'd use a dedicated RPC or view.
  // 1. Fetch recent messages involving the user
  const { data: messages, error: msgError } = await supabase
    .from('messages')
    .select('*')
    .or(`sender_id.eq.${user.id},receiver_id.eq.${user.id}`)
    .order('created_at', { ascending: false });

  if (msgError) throw msgError;

  // 2. Extract unique partner IDs
  const partnerIds = new Set<string>();
  const lastMessages = new Map<string, any>();

  messages?.forEach(msg => {
    const partnerId = msg.sender_id === user.id ? msg.receiver_id : msg.sender_id;
    if (!partnerIds.has(partnerId)) {
      partnerIds.add(partnerId);
      lastMessages.set(partnerId, msg);
    }
  });

  if (partnerIds.size === 0) return [];

  // 3. Fetch profiles for these partners
  const { data: profiles, error: profileError } = await supabase
    .from('profiles')
    .select('id, full_name, avatar_url')
    .in('id', Array.from(partnerIds));

  if (profileError) throw profileError;

  // 4. Combine data
  return profiles.map(profile => {
    const lastMsg = lastMessages.get(profile.id);
    return {
      id: profile.id,
      full_name: profile.full_name || 'Roomie User',
      avatar_url: profile.avatar_url || '',
      last_message: lastMsg?.content || '',
      last_message_time: lastMsg?.created_at || '',
    };
  });
}

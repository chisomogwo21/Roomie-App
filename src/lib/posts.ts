import { supabase } from './supabaseClient';

export interface DatabasePost {
  id: string;
  user_id: string;
  text: string;
  category?: string;
  location?: string;
  budget?: string;
  tags?: string[];
  created_at: string;
  profiles?: {
    full_name: string;
    avatar_url: string;
  };
}

/**
 * Fetches all community posts with author profiles.
 */
export async function fetchPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      profiles (
        full_name,
        avatar_url
      )
    `)
    .order('created_at', { ascending: false });

  return { data: data as DatabasePost[], error };
}

/**
 * Creates a new community post.
 */
export async function createPost(postData: {
  text: string;
  category?: string;
  location?: string;
  budget?: string;
  tags?: string[];
}) {
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user) {
    throw new Error('You must be logged in to create a post.');
  }

  const { data, error } = await supabase
    .from('posts')
    .insert([
      {
        user_id: user.id,
        ...postData,
      }
    ])
    .select()
    .single();

  return { data: data as DatabasePost, error };
}

/**
 * Subscribe to new community posts.
 */
export function subscribeToPosts(onPostCreated: (post: DatabasePost) => void) {
  return supabase
    .channel('public:posts')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'posts',
      },
      async (payload) => {
        // Fetch profile info for the new post
        const { data: profile } = await supabase
          .from('profiles')
          .select('full_name, avatar_url')
          .eq('id', payload.new.user_id)
          .single();
          
        const newPost = {
          ...payload.new,
          profiles: profile
        } as DatabasePost;
        
        onPostCreated(newPost);
      }
    )
    .subscribe();
}

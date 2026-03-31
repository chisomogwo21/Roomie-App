import { supabase } from './supabaseClient';

/**
 * Sign in a user with email and password.
 */
export async function signIn({ email, password }: { email: string; password: string }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

/**
 * Sign up a new user with email and password.
 */
export async function signUp({ email, password, options }: { email: string; password: string; options?: any }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      ...options,
      emailRedirectTo: window.location.origin,
    },
  });
  return { data, error };
}

/**
 * Sign out the current user.
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

/**
 * Get the current session.
 */
export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  return { data, error };
}

/**
 * Sign in with Google OAuth.
 */
export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin,
    },
  });
  return { data, error };
}

/**
 * Sign in with Facebook OAuth.
 */
export async function signInWithFacebook() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
    options: {
      redirectTo: window.location.origin,
    },
  });
  return { data, error };
}

/**
 * Get the current user.
 */
export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  return { data, error };
}

/**
 * Send a password reset email.
 */
export async function resetPasswordForEmail(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}`,
  });
  return { data, error };
}

/**
 * Update the user's password.
 */
export async function updatePassword(password: string) {
  const { data, error } = await supabase.auth.updateUser({
    password: password
  });
  return { data, error };
}

/**
 * Update the user's public profile in the profiles table.
 */
export async function updateProfile(profileData: any) {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  
  if (userError || !user) {
    throw new Error('You must be logged in to update your profile.');
  }

  const { data, error } = await supabase
    .from('profiles')
    .upsert({
      id: user.id,
      ...profileData,
      updated_at: new Date().toISOString(),
    })
    .select();

  return { data: data ? data[0] : null, error };
}

/**
 * Get a user's public profile.
 */
export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  return { data, error };
}

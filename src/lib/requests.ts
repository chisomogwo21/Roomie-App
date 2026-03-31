import { supabase } from './supabaseClient';

export interface BookingRequestData {
  listingId: string;
  recipientId: string;
  moveInDate: string;
  lengthOfStay: string;
  budgetConfirmed: boolean;
  introMessage: string;
}

/**
 * Send a booking request
 */
export async function sendBookingRequest(requestData: BookingRequestData) {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  
  if (userError || !user) {
    throw new Error('You must be logged in to send a request.');
  }

  // Attempt to insert into a 'requests' table. If the table doesn't exist, this will throw an error
  // which is handled by the component to show a toast message or fallback.
  const { data, error } = await supabase
    .from('requests')
    .insert([
      {
        listing_id: requestData.listingId,
        recipient_id: requestData.recipientId,
        sender_id: user.id,
        move_in_date: requestData.moveInDate,
        length_of_stay: requestData.lengthOfStay,
        budget_confirmed: requestData.budgetConfirmed,
        intro_message: requestData.introMessage,
        status: 'pending'
      }
    ])
    .select();

  return { data: data ? data[0] : null, error };
}

/**
 * Fetch a single request by ID with full details
 */
export async function fetchRequestById(requestId: string) {
  const { data, error } = await supabase
    .from('requests')
    .select(`
      *,
      properties:listing_id (title, living_setup, city, neighborhood, price, images),
      sender:sender_id (full_name, avatar_url, bio, occupation, date_of_birth, lifestyle_tags),
      recipient:recipient_id (full_name, avatar_url, bio, occupation, date_of_birth, lifestyle_tags)
    `)
    .eq('id', requestId);
  
  return { data: data ? data[0] : null, error };
}

/**
 * Fetch requests received by the current user
 */
export async function fetchReceivedRequests() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { data: null, error: new Error("Not authenticated") };

  const { data, error } = await supabase
    .from('requests')
    .select(`
      *,
      properties:listing_id (title, living_setup, city, neighborhood, price),
      profiles:sender_id (full_name, avatar_url, lifestyle_tags)
    `)
    .eq('recipient_id', user.id);
  
  return { data, error };
}

/**
 * Fetch requests sent by the current user
 */
export async function fetchSentRequests() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { data: null, error: new Error("Not authenticated") };

  const { data, error } = await supabase
    .from('requests')
    .select(`
      *,
      properties:listing_id (title, living_setup, city, neighborhood, price, image_url)
    `)
    .eq('sender_id', user.id);
  
  return { data, error };
}

/**
 * Update request status (Accept/Decline)
 */
export async function updateRequestStatus(requestId: string, status: 'accepted' | 'declined') {
  const { data, error } = await supabase
    .from('requests')
    .update({ status })
    .eq('id', requestId)
    .select();
  
  return { data, error };
}

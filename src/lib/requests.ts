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

import { supabase } from './supabaseClient';
import type { ListingData } from '../app/components/CreateListingContext';

/**
 * Creates a new property listing in the database.
 */
export async function createProperty(listingData: ListingData) {
  // 1. Get the current authenticated user
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  
  if (userError || !user) {
    throw new Error('You must be logged in to create a listing.');
  }

  // 2. Map frontend ListingData to database schema
  const propertyTitle = `${listingData.intent === 'roommate' ? 'Looking for' : 'Rent'}: ${listingData.livingSetup}`;
  const propertyPrice = parseFloat(listingData.rent) || 0;
  const propertyLocation = `${listingData.locationDetails.city}${listingData.locationDetails.area ? `, ${listingData.locationDetails.area}` : ''}`;
  
  let imageUrl: string | null = null;

  if (listingData.photos && listingData.photos.length > 0) {
    const file = listingData.photos[0];
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}-${Date.now()}.${fileExt}`;
    const filePath = `property-images/${fileName}`;

    // Upload to 'properties' bucket
    const { error: uploadError } = await supabase.storage
      .from('properties')
      .upload(filePath, file);

    if (uploadError) {
      throw new Error(`Error uploading image: ${uploadError.message}`);
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('properties')
      .getPublicUrl(filePath);

    imageUrl = urlData.publicUrl;
  }

  // 3. Insert into Supabase
  const { data, error } = await supabase
    .from('properties')
    .insert([
      {
        title: propertyTitle,
        price: propertyPrice,
        location: propertyLocation,
        image_url: imageUrl,
        user_id: user.id
      }
    ])
    .select();

  return { data: data ? data[0] : null, error };
}

/**
 * Fetches all property listings from the database.
 */
export async function fetchProperties() {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false });

  return { data, error };
}

/**
 * Fetches property listings created by the authenticated user.
 */
export async function fetchMyProperties() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  
  if (userError || !user) {
    throw new Error('You must be logged in to view your listings.');
  }

  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  return { data, error };
}

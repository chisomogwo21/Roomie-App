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

  // 2. Handle Multi-Image Upload
  const imageUrls: string[] = [];

  if (listingData.photos && listingData.photos.length > 0) {
    for (const fileOrUrl of listingData.photos) {
      if (fileOrUrl instanceof File) {
        const fileExt = fileOrUrl.name.split('.').pop();
        const fileName = `${user.id}-${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `property-images/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('properties')
          .upload(filePath, fileOrUrl);

        if (uploadError) {
          console.error(`Error uploading image: ${uploadError.message}`);
          continue; // Skip this one but try others
        }

        const { data: urlData } = supabase.storage
          .from('properties')
          .getPublicUrl(filePath);

        imageUrls.push(urlData.publicUrl);
      } else if (typeof fileOrUrl === 'string') {
        imageUrls.push(fileOrUrl);
      }
    }
  }

  // 3. Map frontend ListingData to database schema
  const propertyTitle = `${listingData.intent === 'roommate' ? 'Looking for roomie' : 'Rental'}: ${listingData.livingSetup}`;
  
  const { data, error } = await supabase
    .from('properties')
    .insert([
      {
        user_id: user.id,
        title: propertyTitle,
        price: parseFloat(listingData.rent) || 0,
        location: `${listingData.locationDetails.city}${listingData.locationDetails.area ? `, ${listingData.locationDetails.area}` : ''}`,
        image_url: imageUrls[0] || null, // First image for thumbnails
        images: imageUrls, // All images
        intent: listingData.intent,
        living_setup: listingData.livingSetup,
        bedrooms: listingData.spaceDetails.bedrooms,
        bathrooms: listingData.spaceDetails.bathrooms,
        furnished: listingData.spaceDetails.furnished,
        private_bathroom: listingData.spaceDetails.privateBathroom,
        utilities_included: listingData.spaceDetails.utilitiesIncluded,
        country: listingData.locationDetails.country,
        city: listingData.locationDetails.city,
        area: listingData.locationDetails.area,
        address: listingData.locationDetails.address,
        hide_address: listingData.locationDetails.hideAddress,
        ideal_for: listingData.idealFor,
        nearby_facilities: listingData.nearbyFacilities,
        rent: parseFloat(listingData.rent) || 0,
        deposit: parseFloat(listingData.deposit) || 0,
        move_in_date: listingData.moveInDate,
        minimum_stay: listingData.minimumStay,
        description: listingData.description
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

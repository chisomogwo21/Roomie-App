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
 * Fetches property listings from the database with pagination and field selection.
 * Summarized view for performance.
 */
export async function fetchProperties(page = 1, limit = 10) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error, count } = await supabase
    .from('properties')
    .select('id, title, price, location, image_url, intent, living_setup, bedrooms, bathrooms, rent, city, country', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  return { data, error, count };
}

/**
 * Fetches a single property listing by ID with full details.
 */
export async function fetchPropertyById(id: string) {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single();

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

/**
 * Deletes a property listing and its associated images.
 */
export async function deleteProperty(propertyId: string, imageUrls: string[]) {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  
  if (userError || !user) {
    throw new Error('You must be logged in to delete a listing.');
  }

  // 1. Delete from Storage
  if (imageUrls && imageUrls.length > 0) {
    const pathsToDelete = imageUrls.map(url => {
      // Extract the path after '/public/properties/'
      const parts = url.split('/public/properties/');
      return parts.length > 1 ? parts[1] : null;
    }).filter(path => path !== null) as string[];

    if (pathsToDelete.length > 0) {
      const { error: storageError } = await supabase.storage
        .from('properties')
        .remove(pathsToDelete);
      
      if (storageError) {
        console.error('Error deleting images from storage:', storageError);
      }
    }
  }

  // 2. Delete from Database
  const { error } = await supabase
    .from('properties')
    .delete()
    .eq('id', propertyId)
    .eq('user_id', user.id); // Extra security check

  return { error };
}

/**
 * Updates an existing property listing.
 */
export async function updateProperty(propertyId: string, listingData: ListingData) {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  
  if (userError || !user) {
    throw new Error('You must be logged in to update a listing.');
  }

  // 1. Fetch current property to identify images to delete
  const { data: currentProperty } = await supabase
    .from('properties')
    .select('images')
    .eq('id', propertyId)
    .single();

  const existingImages = currentProperty?.images || [];

  // 2. Handle Multi-Image Upload & Path Tracking
  const imageUrls: string[] = [];
  const currentPhotoStrings = listingData.photos.filter(p => typeof p === 'string') as string[];

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
          continue;
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

  // 3. Cleanup removed images from storage
  const imagesToRemove = existingImages.filter((img: string) => !currentPhotoStrings.includes(img));
  if (imagesToRemove.length > 0) {
    const pathsToDelete = imagesToRemove.map((url: string) => {
      const parts = url.split('/public/properties/');
      return parts.length > 1 ? parts[1] : null;
    }).filter((path: string | null) => path !== null) as string[];

    if (pathsToDelete.length > 0) {
      await supabase.storage.from('properties').remove(pathsToDelete);
    }
  }

  // 4. Update Database
  const propertyTitle = `${listingData.intent === 'roommate' ? 'Looking for roomie' : 'Rental'}: ${listingData.livingSetup}`;
  
  const { data, error } = await supabase
    .from('properties')
    .update({
      title: propertyTitle,
      price: parseFloat(listingData.rent) || 0,
      location: `${listingData.locationDetails.city}${listingData.locationDetails.area ? `, ${listingData.locationDetails.area}` : ''}`,
      image_url: imageUrls[0] || null,
      images: imageUrls,
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
    })
    .eq('id', propertyId)
    .eq('user_id', user.id)
    .select();

  return { data: data ? data[0] : null, error };
}

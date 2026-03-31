import { supabase } from './supabaseClient';
import { getProfile } from './auth';

export interface MatchResult {
  id: string;
  type: 'roommate' | 'listing';
  name: string;
  avatar_url?: string;
  image_url?: string;
  location: string;
  price?: number;
  matchScore: number; // 0 to 100
  lifestyle_tags?: string[];
  bio?: string;
}

/**
 * Basic matching algorithm to find relevant roommates and listings.
 */
export async function getMatches(): Promise<MatchResult[]> {
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) return [];

    // 1. Get current user's profile and preferences
    const { data: myProfile } = await getProfile(user.id);
    if (!myProfile) return [];

    const myTags = myProfile.lifestyle_tags || [];
    const myBudget = myProfile.budget_max || 1000000;
    const myLocation = myProfile.preferred_location || '';

    // 2. Fetch other user profiles (potential roommates)
    const { data: otherProfiles } = await supabase
      .from('profiles')
      .select('*')
      .neq('id', user.id)
      .limit(50);

    // 3. Fetch properties (potential listings)
    const { data: properties } = await supabase
      .from('properties')
      .select('*')
      .limit(50);

    const results: MatchResult[] = [];

    // 4. Calculate match scores for profiles
    otherProfiles?.forEach(profile => {
      let score = 0;
      
      // Lifestyle tag overlap (up to 60 points)
      if (myTags.length > 0 && profile.lifestyle_tags?.length > 0) {
        const commonTags = myTags.filter((tag: string) => profile.lifestyle_tags.includes(tag));
        score += (commonTags.length / myTags.length) * 60;
      }

      // Location match (up to 40 points)
      if (myLocation && profile.preferred_location?.toLowerCase().includes(myLocation.toLowerCase())) {
        score += 40;
      }

      if (score > 20) {
        results.push({
          id: profile.id,
          type: 'roommate',
          name: profile.full_name || 'Roomie User',
          avatar_url: profile.avatar_url,
          location: profile.preferred_location || 'Kigali',
          matchScore: Math.round(score),
          lifestyle_tags: profile.lifestyle_tags,
          bio: profile.bio
        });
      }
    });

    // 5. Calculate match scores for properties
    properties?.forEach(prop => {
      let score = 0;
      
      // Budget match (up to 50 points)
      if (prop.price <= myBudget) {
        score += 50;
      } else if (prop.price <= myBudget * 1.2) {
        score += 30; // Slightly over budget
      }

      // Location match (up to 50 points)
      if (myLocation && prop.location?.toLowerCase().includes(myLocation.toLowerCase())) {
        score += 50;
      }

      if (score > 30) {
        results.push({
          id: prop.id,
          type: 'listing',
          name: prop.title,
          image_url: prop.image_url,
          location: prop.location,
          price: prop.price,
          matchScore: Math.round(score),
          bio: prop.description
        });
      }
    });

    // 6. Sort by score
    return results.sort((a, b) => b.matchScore - a.matchScore);
  } catch (err) {
    console.error("Error calculating matches:", err);
    return [];
  }
}

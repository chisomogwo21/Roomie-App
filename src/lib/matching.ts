import { supabase } from './supabaseClient';

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

/** Clamp a score to the 0–100 range */
function clampScore(score: number): number {
  return Math.max(0, Math.min(100, score));
}

/**
 * Fetch ranked roommate and property matches via Postgres RPC.
 * Scoring is done server-side for performance.
 */
export async function getMatches(): Promise<MatchResult[]> {
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) return [];

    // Run both RPCs in parallel for speed
    const [roommateRes, propertyRes] = await Promise.all([
      supabase.rpc('match_roommates', { p_user_id: user.id }),
      supabase.rpc('match_properties', { p_user_id: user.id }),
    ]);

    if (roommateRes.error) {
      console.warn("RPC match_roommates failed:", roommateRes.error);
    }
    if (propertyRes.error) {
      console.warn("RPC match_properties failed:", propertyRes.error);
    }

    const results: MatchResult[] = [];

    // Map roommate results
    if (roommateRes.data && roommateRes.data.length > 0) {
      for (const profile of roommateRes.data) {
        results.push({
          id: profile.id,
          type: 'roommate',
          name: profile.full_name || 'Roomie User',
          avatar_url: profile.avatar_url,
          location: profile.preferred_location || 'Kigali',
          matchScore: clampScore(profile.match_score || 0),
          lifestyle_tags: profile.lifestyle_tags,
          bio: profile.bio,
        });
      }
    }

    // Map property results
    if (propertyRes.data && propertyRes.data.length > 0) {
      for (const prop of propertyRes.data) {
        results.push({
          id: prop.id,
          type: 'listing',
          name: prop.title,
          image_url: prop.image_url,
          location: prop.location,
          price: Number(prop.price),
          matchScore: clampScore(prop.match_score || 0),
          bio: prop.description,
        });
      }
    }

    // Sort by score descending
    return results.sort((a, b) => b.matchScore - a.matchScore);
  } catch (err) {
    console.error("Error calculating matches:", err);
    return [];
  }
}

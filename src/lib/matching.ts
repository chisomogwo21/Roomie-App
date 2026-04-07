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

    // 1. Fetch Roommate Matches via optimized Postgres RPC
    const { data: rpcRoommates, error: rpcError } = await supabase
      .rpc('match_roommates', { p_user_id: user.id });

    if (rpcError) {
      console.warn("RPC match_roommates failed, falling back or returning empty:", rpcError);
    }

    const results: MatchResult[] = [];

    if (rpcRoommates && rpcRoommates.length > 0) {
      rpcRoommates.forEach((profile: any) => {
        results.push({
          id: profile.id,
          type: 'roommate',
          name: profile.full_name || 'Roomie User',
          avatar_url: profile.avatar_url,
          location: profile.preferred_location || 'Kigali',
          matchScore: profile.match_score || 0,
          lifestyle_tags: profile.lifestyle_tags,
          bio: profile.bio
        });
      });
    }

    // 2. Fetch Property Matches via optimized Postgres RPC
    const { data: rpcProperties, error: propRpcError } = await supabase
      .rpc('match_properties', { p_user_id: user.id });

    if (propRpcError) {
      console.warn("RPC match_properties failed:", propRpcError);
    }

    if (rpcProperties && rpcProperties.length > 0) {
      rpcProperties.forEach((prop: any) => {
        results.push({
          id: prop.id,
          type: 'listing',
          name: prop.title,
          image_url: prop.image_url,
          location: prop.location,
          price: Number(prop.price),
          matchScore: prop.match_score || 0,
          bio: prop.description
        });
      });
    }

    // 3. Sort by combined score
    return results.sort((a, b) => b.matchScore - a.matchScore);
  } catch (err) {
    console.error("Error calculating matches:", err);
    return [];
  }
}

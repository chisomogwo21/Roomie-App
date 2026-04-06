import { useState, useEffect } from "react";
import { Heart, Loader2 } from "lucide-react";
import { getMatches } from "../../lib/matching";

interface Match {
  id: string;
  name: string;
  initial: string;
  compatibility: number;
  livingSetup: string;
  hasUnreadMessage?: boolean;
}

interface MatchesProps {
  onMatchClick: (matchId: string) => void;
}

export function Matches({ onMatchClick }: MatchesProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMatches() {
      setLoading(true);
      try {
        const topMatches = await getMatches();
        
        // Filter roommates/listings appropriately or combine
        // We'll focus on people (roommates) as per previous UI paradigm
        const formatted = topMatches
          .filter(m => m.type === 'roommate')
          .slice(0, 10) // Limit to top 10 on this view
          .map(m => ({
            id: m.id,
            name: m.name,
            initial: m.name.charAt(0).toUpperCase() || '?',
            compatibility: m.matchScore > 100 ? 100 : m.matchScore,
            livingSetup: m.bio || "Looking for roommate", // Fallback to bio or a default
            hasUnreadMessage: false // Dynamic via messages API later
          }));

        setMatches(formatted);
      } catch (err) {
        console.error("Error loading matches for view:", err);
      } finally {
        setLoading(false);
      }
    }
    loadMatches();
  }, []);

  const handleMatchPress = (matchId: string) => {
    // For now, just open chat on regular click
    // Long press functionality can be added with more complex event handling
    onMatchClick(matchId);
  };

  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-[24px] py-[48px] bg-white">
        <Loader2 className="w-[40px] h-[40px] text-[#fe456a] animate-spin mb-[16px]" />
        <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[24px] text-[#1f2a37] mb-[8px]">
          Finding compatible roommates...
        </h2>
      </div>
    );
  }

  if (matches.length === 0) {
    // Empty State
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-[24px] py-[48px] bg-white">
        <div className="w-[80px] h-[80px] bg-[#fef0f3] rounded-full flex items-center justify-center mb-[16px]">
          <Heart className="w-[40px] h-[40px] text-[#fe456a]" />
        </div>
        <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[24px] text-[#1f2a37] mb-[8px]">
          No matches yet
        </h2>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#9da4ae] text-center">
          Keep swiping to find your perfect roommate match
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto bg-white">
      {/* Matches Grid */}
      <div className="p-[16px] grid grid-cols-2 gap-[12px]">
        {matches.map((match) => (
          <button
            key={match.id}
            onClick={() => handleMatchPress(match.id)}
            className="relative bg-white border border-[#e5e7eb] rounded-[12px] p-[16px] hover:border-[#fe456a] hover:shadow-sm transition-all text-left"
          >
            {/* Unread indicator */}
            {match.hasUnreadMessage && (
              <div className="absolute top-[12px] right-[12px] w-[8px] h-[8px] bg-[#fe456a] rounded-full" />
            )}

            {/* Profile Avatar */}
            <div className="w-full aspect-square mb-[12px] rounded-[8px] bg-gradient-to-br from-[#fe456a] to-[#ff758f] flex items-center justify-center">
              <span className="font-['Inter:Bold',sans-serif] font-bold text-[32px] leading-[40px] text-white">
                {match.initial}
              </span>
            </div>

            {/* Name */}
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37] mb-[4px]">
              {match.name}
            </h3>

            {/* Compatibility */}
            <div className="flex items-center gap-[4px] mb-[8px]">
              <Heart className="w-[12px] h-[12px] text-[#fe456a] fill-[#fe456a]" />
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[18px] text-[#fe456a]">
                {match.compatibility}% match
              </span>
            </div>

            {/* Living Setup */}
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae]">
              {match.livingSetup}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

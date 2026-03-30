import { Heart } from "lucide-react";

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
  // Demo matches data
  const matches: Match[] = [
    {
      id: "1",
      name: "Sarah K.",
      initial: "S",
      compatibility: 92,
      livingSetup: "Looking for roommate",
      hasUnreadMessage: true,
    },
    {
      id: "2",
      name: "Alex M.",
      initial: "A",
      compatibility: 88,
      livingSetup: "Room available",
      hasUnreadMessage: false,
    },
    {
      id: "3",
      name: "Emma R.",
      initial: "E",
      compatibility: 85,
      livingSetup: "Looking for roommate",
      hasUnreadMessage: true,
    },
    {
      id: "4",
      name: "Jordan P.",
      initial: "J",
      compatibility: 82,
      livingSetup: "Room available",
      hasUnreadMessage: false,
    },
    {
      id: "5",
      name: "Maria L.",
      initial: "M",
      compatibility: 78,
      livingSetup: "Looking for roommate",
      hasUnreadMessage: false,
    },
    {
      id: "6",
      name: "David N.",
      initial: "D",
      compatibility: 75,
      livingSetup: "Room available",
      hasUnreadMessage: false,
    },
  ];

  const handleMatchPress = (matchId: string) => {
    // For now, just open chat on regular click
    // Long press functionality can be added with more complex event handling
    onMatchClick(matchId);
  };

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

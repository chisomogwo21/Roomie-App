import { useState, useEffect } from "react";
import { ArrowLeft, Sparkles, Loader2 } from "lucide-react";
import { MatchCard } from "./MatchCard";
import { MatchConfirmation } from "./MatchConfirmation";
import { getMatches } from "../../lib/matching";

interface RoommateProfile {
  id: string;
  photoUrl: string;
  firstName: string;
  age: string;
  occupation: string;
  livingSetup: string;
  location: string;
  compatibilityScore: number;
  lifestyleTags: string[];
  matchingTags: string[];
  bio: string;
}

interface RoommateMatchingProps {
  onBack: () => void;
  onViewProfile?: (userId: string) => void;
  onStartChat?: (userId: string) => void;
  userAvatar?: string;
}

export function RoommateMatching({ onBack, onViewProfile, onStartChat, userAvatar }: RoommateMatchingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matchedProfile, setMatchedProfile] = useState<RoommateProfile | null>(null);
  const [profiles, setProfiles] = useState<RoommateProfile[]>([]);
  const [swipedProfiles, setSwipedProfiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfiles() {
      setLoading(true);
      try {
        const matches = await getMatches();
        // filter for roommates
        const roommates = matches.filter(m => m.type === 'roommate');
        if (roommates) {
          setProfiles(roommates.map((p: any) => ({
            id: p.id,
            firstName: p.name || "Roomie",
            age: p.age || "20s",
            occupation: p.occupation || "Professional",
            livingSetup: p.living_setup || "Looking for a Roommate",
            location: p.location || "Rwanda",
            compatibilityScore: p.matchScore || 0,
            lifestyleTags: p.lifestyle_tags || [],
            matchingTags: p.lifestyle_tags?.slice(0, 3) || [],
            bio: p.bio || "",
            photoUrl: p.avatar_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
          })));
        }
      } catch (err) {
        console.error("Error loading profiles:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProfiles();
  }, []);

  const currentProfile = profiles[currentIndex];
  const hasMoreProfiles = currentIndex < profiles.length;

  const handleSwipe = (direction: "left" | "right") => {
    if (!currentProfile) return;

    setSwipedProfiles([...swipedProfiles, currentProfile.id]);

    if (direction === "right") {
      // For demonstration/testing: Always trigger a match on swipe right
      setMatchedProfile(currentProfile);
      return;
    }

    // Move to next profile
    setCurrentIndex(currentIndex + 1);
  };

  const handleCloseMatch = () => {
    setMatchedProfile(null);
    setCurrentIndex(currentIndex + 1);
  };

  if (matchedProfile) {
    return (
      <MatchConfirmation
        profile={matchedProfile}
        userAvatar={userAvatar}
        onClose={handleCloseMatch}
        onStartChat={() => {
          if (onStartChat) {
            onStartChat(matchedProfile.id);
          } else {
            handleCloseMatch();
          }
        }}
      />
    );
  }

  return (
    <div className="size-full flex flex-col bg-[#fafafa]">
      {/* Status Bar Spacer */}
      <div className="h-[44px] bg-white" />

      {/* Header */}
      <div className="bg-white px-[24px] py-[16px] border-b border-[#e5e7eb] flex items-center gap-[16px]">
        <button
          onClick={onBack}
          className="p-[4px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
        >
          <ArrowLeft className="w-[20px] h-[20px] text-[#1f2a37]" />
        </button>
        <div className="flex-1">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
            Find compatible roommates
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae]">
            Based on your lifestyle & preferences
          </p>
        </div>
        <div className="flex items-center gap-[4px] px-[8px] py-[4px] bg-[#fef3f5] rounded-[12px]">
          <Sparkles className="w-[14px] h-[14px] text-[#fe456a]" />
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] leading-[14px] text-[#fe456a]">
            {profiles.length - currentIndex}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden relative">
        {loading ? (
          <div className="size-full flex items-center justify-center">
            <Loader2 className="w-[40px] h-[40px] animate-spin text-[#fe456a]" />
          </div>
        ) : hasMoreProfiles && currentProfile ? (
          <MatchCard
            profile={currentProfile}
            onSwipeLeft={() => handleSwipe("left")}
            onSwipeRight={() => handleSwipe("right")}
            onInfoClick={() => onViewProfile?.(currentProfile.id)}
          />
        ) : (
          <div className="size-full flex flex-col items-center justify-center px-[32px]">
            <div className="w-[80px] h-[80px] bg-[#fef3f5] rounded-full flex items-center justify-center mb-[24px]">
              <Sparkles className="w-[40px] h-[40px] text-[#fe456a]" />
            </div>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[28px] text-[#1f2a37] mb-[8px] text-center">
              No more profiles
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#9da4ae] text-center mb-[32px]">
              You've seen all compatible roommates in your area. Check back later for new matches!
            </p>
            <button
              onClick={onBack}
              className="h-[52px] px-[32px] bg-[#fe456a] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-colors"
            >
              Back to Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

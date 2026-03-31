import { useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { MatchCard } from "./MatchCard";
import { MatchConfirmation } from "./MatchConfirmation";

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

// Mock data re-added for testing profile access and info button
const MOCK_PROFILES: RoommateProfile[] = [
  {
    id: "1",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop",
    firstName: "Amara",
    age: "24",
    occupation: "UX Designer",
    livingSetup: "Looking for a Roommate",
    location: "Kigali, Rwanda",
    compatibilityScore: 94,
    lifestyleTags: ["Early Bird", "Non-smoker", "Clean & Tidy"],
    matchingTags: ["Interior Design", "Hiking", "Cooking"],
    bio: "Hey! I'm a UX designer looking for a friendly roommate to share an apartment in Kigali. I love a clean living space and enjoy weekend hikes. I usually cook at home and value a quiet environment during work hours."
  },
  {
    id: "2",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    firstName: "David",
    age: "27",
    occupation: "Software Engineer",
    livingSetup: "Room Available",
    location: "Kigali, Rwanda",
    compatibilityScore: 88,
    lifestyleTags: ["Night Owl", "Pet Friendly", "Social"],
    matchingTags: ["Gaming", "Code", "Music"],
    bio: "Hi there! I have an extra room in my 2-bedroom apartment. I work as a devs and spend most of my time coding or gaming. I'm social but respect personal space. If you like tech and music, we'll get along great!"
  },
  {
    id: "3",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop",
    firstName: "Elena",
    age: "25",
    occupation: "Marketing Lead",
    livingSetup: "Looking for a Roommate",
    location: "Kigali, Rwanda",
    compatibilityScore: 91,
    lifestyleTags: ["Coffee Lover", "Yoga", "Organized"],
    matchingTags: ["Travel", "Photography", "Art"],
    bio: "I'm Elena, a marketing lead at a local startup. Looking for a roommate who is also organized and values a peaceful home. I do yoga every morning and love exploring local art galleries on weekends. Let's connect!"
  }
];

interface RoommateMatchingProps {
  onBack: () => void;
  onViewProfile?: (userId: string) => void;
  onStartChat?: (userId: string) => void;
}

export function RoommateMatching({ onBack, onViewProfile, onStartChat }: RoommateMatchingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipedProfiles, setSwipedProfiles] = useState<string[]>([]);
  const [matchedProfile, setMatchedProfile] = useState<RoommateProfile | null>(null);

  const currentProfile = MOCK_PROFILES[currentIndex];
  const hasMoreProfiles = currentIndex < MOCK_PROFILES.length;

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
            {MOCK_PROFILES.length - currentIndex}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden relative">
        {hasMoreProfiles && currentProfile ? (
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

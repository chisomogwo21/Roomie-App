import { useState } from "react";
import { X, Heart, ArrowLeft, Sparkles } from "lucide-react";
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

// Mock data for demo
const MOCK_PROFILES: RoommateProfile[] = [
  {
    id: "1",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
    firstName: "Sarah",
    age: "25-30",
    occupation: "Marketing Professional",
    livingSetup: "Private Room (Shared Apartment)",
    location: "Downtown, 2.5 km away",
    compatibilityScore: 87,
    lifestyleTags: ["Clean", "Quiet", "WFH-friendly", "Early bird", "Non-smoker"],
    matchingTags: ["Clean", "Quiet", "WFH-friendly"],
    bio: "I work from home most days and value a clean, peaceful living space. Looking for someone who shares similar values!",
  },
  {
    id: "2",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    firstName: "Alex",
    age: "22-27",
    occupation: "Software Developer",
    livingSetup: "Entire Home (Split Rent)",
    location: "Midtown, 3.8 km away",
    compatibilityScore: 92,
    lifestyleTags: ["Clean", "Social", "WFH-friendly", "Night owl", "Non-smoker"],
    matchingTags: ["Clean", "Social", "WFH-friendly"],
    bio: "Software dev looking for a chill roommate. I enjoy hosting small get-togethers on weekends but keep it quiet during the week.",
  },
  {
    id: "3",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
    firstName: "Maya",
    age: "23-28",
    occupation: "Graduate Student",
    livingSetup: "Co-Living Space",
    location: "University District, 1.2 km away",
    compatibilityScore: 78,
    lifestyleTags: ["Clean", "Quiet", "Early bird", "Non-smoker", "Pet-friendly"],
    matchingTags: ["Clean", "Quiet", "Early bird"],
    bio: "PhD student looking for a quiet place to focus on research. I'm usually up early and in bed by 10pm.",
  },
  {
    id: "4",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
    firstName: "Jamie",
    age: "26-32",
    occupation: "Graphic Designer",
    livingSetup: "Private Room (Shared House)",
    location: "East Side, 4.1 km away",
    compatibilityScore: 85,
    lifestyleTags: ["Social", "Creative", "Night owl", "Non-smoker", "Active"],
    matchingTags: ["Social", "Creative"],
    bio: "Creative professional who loves a vibrant home atmosphere. I enjoy cooking and having friends over!",
  },
];

interface RoommateMatchingProps {
  onBack: () => void;
}

export function RoommateMatching({ onBack }: RoommateMatchingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipedProfiles, setSwipedProfiles] = useState<string[]>([]);
  const [matchedProfile, setMatchedProfile] = useState<RoommateProfile | null>(null);

  const currentProfile = MOCK_PROFILES[currentIndex];
  const hasMoreProfiles = currentIndex < MOCK_PROFILES.length;

  const handleSwipe = (direction: "left" | "right") => {
    if (!currentProfile) return;

    setSwipedProfiles([...swipedProfiles, currentProfile.id]);

    if (direction === "right") {
      // Simulate match (in real app, this would check if other user also swiped right)
      const isMatch = Math.random() > 0.5; // 50% chance of match for demo
      if (isMatch) {
        setMatchedProfile(currentProfile);
        return;
      }
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
          // Navigate to messages screen
          handleCloseMatch();
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

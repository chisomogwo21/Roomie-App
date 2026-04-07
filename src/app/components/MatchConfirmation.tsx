import { Heart, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface RoommateProfile {
  id: string;
  photoUrl: string;
  firstName: string;
  age: string;
  compatibilityScore: number;
}

interface MatchConfirmationProps {
  profile: RoommateProfile;
  userAvatar?: string;
  onClose: () => void;
  onStartChat: () => void;
}

export function MatchConfirmation({ profile, userAvatar, onClose, onStartChat }: MatchConfirmationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        className={`w-full max-w-[400px] mx-[16px] bg-white rounded-[24px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {/* Confetti/Celebration Header */}
        <div className="relative bg-gradient-to-br from-[#fe456a] to-[#ff6b8a] px-[32px] pt-[48px] pb-[32px]">
          {/* Decorative elements */}
          <div className="absolute top-[20px] left-[20px] w-[40px] h-[40px] bg-white/20 rounded-full animate-pulse" />
          <div className="absolute top-[40px] right-[30px] w-[24px] h-[24px] bg-white/30 rounded-full animate-pulse delay-200" />
          <div className="absolute bottom-[30px] right-[50px] w-[32px] h-[32px] bg-white/20 rounded-full animate-pulse delay-300" />

          {/* Heart Icon */}
          <div className="flex justify-center mb-[24px]">
            <div className="relative">
              <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)]">
                <Heart className="w-[50px] h-[50px] text-[#fe456a]" strokeWidth={2} fill="#fe456a" />
              </div>
              <div className="absolute -top-[8px] -right-[8px] w-[36px] h-[36px] bg-[#ffe14d] rounded-full flex items-center justify-center">
                <Sparkles className="w-[20px] h-[20px] text-[#fe456a]" fill="#fe456a" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[32px] leading-[40px] text-white text-center mb-[8px]">
            It's a match!
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-white/90 text-center">
            You and {profile.firstName} liked each other
          </p>
        </div>

        {/* Profile Preview */}
        <div className="px-[32px] py-[32px]">
          {/* Profile Photos */}
          <div className="flex justify-center items-center mb-[24px] relative">
            <div className="w-[100px] h-[100px] rounded-full border-[4px] border-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] overflow-hidden bg-[#e5e7eb] z-10">
              <img
                src={userAvatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop"}
                alt="You"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Heart in the middle */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[40px] h-[40px] bg-[#fe456a] rounded-full flex items-center justify-center z-20 shadow-[0px_4px_12px_0px_rgba(254,69,106,0.4)]">
              <Heart className="w-[20px] h-[20px] text-white" fill="white" strokeWidth={0} />
            </div>

            {/* Match Photo */}
            <div className="w-[100px] h-[100px] rounded-full border-[4px] border-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] overflow-hidden -ml-[20px] z-10">
              <img
                src={profile.photoUrl}
                alt={profile.firstName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Compatibility Badge */}
          <div className="flex justify-center mb-[24px]">
            <div className="px-[20px] py-[12px] bg-[#fef3f5] border border-[#fecdda] rounded-[16px]">
              <div className="flex items-center gap-[8px]">
                <Sparkles className="w-[18px] h-[18px] text-[#fe456a]" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[20px] text-[#fe456a]">
                  {profile.compatibilityScore}% Compatible
                </p>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[11px] leading-[14px] text-[#9da4ae] text-center mt-[4px]">
                Great match for roommates!
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-[12px]">
            <button
              onClick={onStartChat}
              className="w-full h-[52px] bg-[#fe456a] text-white rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-colors flex items-center justify-center gap-[8px]"
            >
              <MessageCircle className="w-[20px] h-[20px]" strokeWidth={2} />
              Start Chat
            </button>
            <button
              onClick={onClose}
              className="w-full h-[52px] bg-transparent text-[#6b7280] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] border-[2px] border-[#e5e7eb] hover:bg-[#f3f4f6] transition-colors"
            >
              Keep Swiping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { X, Heart, MapPin, Briefcase, Home, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

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

interface MatchCardProps {
  profile: RoommateProfile;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export function MatchCard({ profile, onSwipeLeft, onSwipeRight }: MatchCardProps) {
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (clientX: number, clientY: number) => {
    setDragStart({ x: clientX, y: clientY });
    setIsDragging(true);
  };

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!dragStart) return;

    const deltaX = clientX - dragStart.x;
    const deltaY = clientY - dragStart.y;
    setDragOffset({ x: deltaX, y: deltaY });
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const threshold = 100;
    if (Math.abs(dragOffset.x) > threshold) {
      if (dragOffset.x > 0) {
        onSwipeRight();
      } else {
        onSwipeLeft();
      }
    }

    setDragStart(null);
    setDragOffset({ x: 0, y: 0 });
    setIsDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleDragMove(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      const touch = e.touches[0];
      handleDragMove(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Calculate rotation based on drag
  const rotation = dragOffset.x / 10;
  const opacity = 1 - Math.abs(dragOffset.x) / 300;

  // Determine swipe direction indicator
  const swipeDirection = Math.abs(dragOffset.x) > 20 ? (dragOffset.x > 0 ? "right" : "left") : null;

  return (
    <div className="size-full px-[16px] py-[16px] flex items-center justify-center">
      <div
        ref={cardRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full max-w-[400px] h-[calc(100vh-200px)] max-h-[700px] bg-white rounded-[24px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.08),0px_20px_40px_0px_rgba(0,0,0,0.06)] overflow-hidden cursor-grab active:cursor-grabbing relative"
        style={{
          transform: `translateX(${dragOffset.x}px) translateY(${dragOffset.y}px) rotate(${rotation}deg)`,
          opacity,
          transition: isDragging ? "none" : "transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        {/* Swipe Direction Indicators */}
        {swipeDirection === "left" && (
          <div className="absolute top-[40px] right-[40px] z-10 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center border-[4px] border-[#ff4444] shadow-[0px_4px_12px_0px_rgba(255,68,68,0.3)]">
            <X className="w-[40px] h-[40px] text-[#ff4444]" strokeWidth={3} />
          </div>
        )}
        {swipeDirection === "right" && (
          <div className="absolute top-[40px] left-[40px] z-10 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center border-[4px] border-[#00c853] shadow-[0px_4px_12px_0px_rgba(0,200,83,0.3)]">
            <Heart className="w-[40px] h-[40px] text-[#00c853]" strokeWidth={3} fill="#00c853" />
          </div>
        )}

        {/* Profile Image */}
        <div className="relative h-[55%] overflow-hidden">
          <img
            src={profile.photoUrl}
            alt={profile.firstName}
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Compatibility Badge */}
          <div className="absolute top-[20px] right-[20px] bg-white/95 backdrop-blur-sm rounded-[16px] px-[16px] py-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-[6px] mb-[2px]">
              <Sparkles className="w-[16px] h-[16px] text-[#fe456a]" fill="#fe456a" />
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[24px] text-[#fe456a]">
                {profile.compatibilityScore}%
              </p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[12px] text-[#6b7280]">
              Compatible
            </p>
          </div>

          {/* Name & Age */}
          <div className="absolute bottom-[20px] left-[20px] right-[20px]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[32px] leading-[40px] text-white mb-[4px]">
              {profile.firstName}, {profile.age}
            </h2>
            <div className="flex items-center gap-[6px] text-white/90">
              <Briefcase className="w-[16px] h-[16px]" strokeWidth={2} />
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px]">
                {profile.occupation}
              </p>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="h-[45%] overflow-y-auto px-[20px] py-[20px]">
          {/* Living Setup */}
          <div className="mb-[16px]">
            <div className="flex items-center gap-[8px] mb-[8px]">
              <Home className="w-[16px] h-[16px] text-[#fe456a]" strokeWidth={2} />
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37]">
                {profile.livingSetup}
              </p>
            </div>
            <div className="flex items-center gap-[6px]">
              <MapPin className="w-[14px] h-[14px] text-[#9da4ae]" strokeWidth={2} />
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae]">
                {profile.location}
              </p>
            </div>
          </div>

          {/* Compatibility Breakdown */}
          <div className="mb-[16px] p-[12px] bg-[#fef3f5] rounded-[12px] border border-[#fecdda]">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] leading-[14px] text-[#fe456a] mb-[8px]">
              Based on lifestyle, budget, and living preferences
            </p>
            <div className="flex flex-wrap gap-[6px]">
              {profile.lifestyleTags.map((tag, index) => {
                const isMatching = profile.matchingTags.includes(tag);
                return (
                  <span
                    key={index}
                    className={`px-[10px] py-[5px] rounded-[12px] font-['Inter:Medium',sans-serif] font-medium text-[11px] leading-[14px] ${
                      isMatching
                        ? "bg-[#fe456a] text-white"
                        : "bg-white text-[#6b7280] border border-[#e5e7eb]"
                    }`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[18px] text-[#1f2a37] mb-[8px]">
              About
            </p>
            <p
              className={`font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[20px] text-[#6b7280] ${
                showFullBio ? "" : "line-clamp-3"
              }`}
            >
              {profile.bio}
            </p>
            {profile.bio.length > 100 && (
              <button
                onClick={() => setShowFullBio(!showFullBio)}
                className="mt-[8px] flex items-center gap-[4px] font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#fe456a] hover:opacity-70 transition-opacity"
              >
                {showFullBio ? (
                  <>
                    Show less <ChevronUp className="w-[14px] h-[14px]" />
                  </>
                ) : (
                  <>
                    Show more <ChevronDown className="w-[14px] h-[14px]" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-[20px] left-[20px] right-[20px] flex gap-[16px] justify-center">
          <button
            onClick={onSwipeLeft}
            className="w-[64px] h-[64px] bg-white rounded-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] flex items-center justify-center border-[2px] border-[#e5e7eb] hover:border-[#ff4444] hover:bg-[#fff5f5] transition-all"
          >
            <X className="w-[32px] h-[32px] text-[#ff4444]" strokeWidth={2.5} />
          </button>
          <button
            onClick={onSwipeRight}
            className="w-[72px] h-[72px] bg-[#fe456a] rounded-full shadow-[0px_8px_16px_0px_rgba(254,69,106,0.3)] flex items-center justify-center hover:bg-[#e63d5f] transition-all"
          >
            <Heart className="w-[36px] h-[36px] text-white" strokeWidth={2.5} fill="white" />
          </button>
        </div>
      </div>
    </div>
  );
}

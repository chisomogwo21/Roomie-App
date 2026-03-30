import { Settings, Users, Heart, BookmarkCheck, Clock, Info, ChevronRight, CheckSquare, LogOut } from "lucide-react";
import imgProfilePhoto from "../../assets/placeholders/avatar.png";

interface ProfileProps {
  onStartMatching: () => void;
  onEditLifestylePreferences: () => void;
  onRequestHandlingSettings?: () => void;
  onBookingRequests?: () => void;
  onAbout?: () => void;
  onEditProfile?: () => void;
  onSignOut?: () => void;
  onListSpace?: () => void;
  onMyListing?: () => void;
  onSettings?: () => void;
  onFavorite?: () => void;
  onRecentViewed?: () => void;
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
}

interface MenuItem {
  icon: React.ElementType;
  label: string;
  summary?: string;
  onClick: () => void;
}
export function Profile({ 
  onStartMatching, 
  onEditLifestylePreferences, 
  onRequestHandlingSettings, 
  onBookingRequests, 
  onAbout, 
  onEditProfile, 
  onSignOut,
  onListSpace,
  onMyListing,
  onSettings,
  onFavorite,
  onRecentViewed,
  userName = "Dammy",
  userEmail = "dammy@gmail.com",
  userAvatar
}: ProfileProps) {
  const menuItems: MenuItem[] = [
    { icon: Settings, label: "Settings", onClick: onSettings || (() => {}) },
    { 
      icon: Users, 
      label: "Lifestyle Preferences", 
      summary: "Quiet · Clean · WFH",
      onClick: onEditLifestylePreferences 
    },
    { 
      icon: CheckSquare, 
      label: "Request Handling", 
      summary: "Manual approval",
      onClick: onRequestHandlingSettings || (() => {}) 
    },
    { icon: Heart, label: "Favorite", onClick: onFavorite || (() => {}) },
    { icon: BookmarkCheck, label: "Booking Request", onClick: onBookingRequests || (() => {}) },
    { icon: Clock, label: "Recent Viewed", onClick: onRecentViewed || (() => {}) },
    { icon: Info, label: "About", onClick: onAbout || (() => {}) },
    { icon: LogOut, label: "Sign Out", onClick: onSignOut || (() => {}) },
  ];

  return (
    <div className="size-full flex flex-col bg-[#fafafa]">
      {/* Status Bar Spacer */}
      <div className="h-[44px] bg-white" />

      {/* Header */}
      <div className="bg-white px-[24px] py-[16px] border-b border-[#e5e7eb]">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] text-center">
          Profile
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {/* Profile Photo & Info */}
        <button 
          onClick={onEditProfile || (() => {})}
          className="w-full flex flex-col items-center pt-[40px] pb-[24px] hover:bg-[#f9fafb] transition-colors active:bg-[#f3f4f6]"
        >
          <div className="relative mb-[16px]">
            <img
              src={userAvatar || imgProfilePhoto}
              alt="Profile"
              className="w-[100px] h-[100px] rounded-full object-cover border-2 border-[#fe456a]/10"
              onError={(e) => {
                e.currentTarget.src = imgProfilePhoto;
              }}
            />
            <div className="absolute bottom-0 right-0 w-[24px] h-[24px] bg-[#fe456a] rounded-full flex items-center justify-center">
              <svg
                className="w-[13px] h-[12px]"
                fill="white"
                viewBox="0 0 13.3333 12"
              >
                <path d="M12.3333 5.99998C12.3333 6.17681 12.2631 6.34636 12.1381 6.47139C12.0131 6.59641 11.8435 6.66665 11.6667 6.66665H7.33333V10.9999C7.33333 11.1768 7.26309 11.3463 7.13807 11.4714C7.01305 11.5964 6.84348 11.6666 6.66667 11.6666C6.48986 11.6666 6.32029 11.5964 6.19526 11.4714C6.07024 11.3463 6 11.1768 6 10.9999V6.66665H1.66667C1.48986 6.66665 1.32029 6.59641 1.19526 6.47139C1.07024 6.34636 1 6.17681 1 5.99998C1 5.82317 1.07024 5.6536 1.19526 5.52858C1.32029 5.40355 1.48986 5.33331 1.66667 5.33331H6V0.999979C6 0.823171 6.07024 0.653601 6.19526 0.528577C6.32029 0.403553 6.48986 0.333313 6.66667 0.333313C6.84348 0.333313 7.01305 0.403553 7.13807 0.528577C7.26309 0.653601 7.33333 0.823171 7.33333 0.999979V5.33331H11.6667C11.8435 5.33331 12.0131 5.40355 12.1381 5.52858C12.2631 5.6536 12.3333 5.82317 12.3333 5.99998Z" />
              </svg>
            </div>
          </div>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37] mb-[2px]">
            {userName}
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#9da4ae]">
            {userEmail}
          </p>
        </button>

        {/* Action Buttons */}
        <div className="px-[24px] pb-[32px] flex gap-[12px]">
          <button 
            onClick={onListSpace}
            className="flex-1 h-[68px] bg-white rounded-[12px] border border-[#e5e7eb] flex flex-col items-center justify-center gap-[4px] hover:bg-[#f9fafb] transition-colors"
          >
            <svg
              className="w-[24px] h-[24px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fe456a"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#1f2a37]">
              List Your Space
            </p>
          </button>
          <button 
            onClick={onMyListing}
            className="flex-1 h-[68px] bg-white rounded-[12px] border border-[#e5e7eb] flex flex-col items-center justify-center gap-[4px] hover:bg-[#f9fafb] transition-colors"
          >
            <svg
              className="w-[24px] h-[24px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fe456a"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#1f2a37]">
              My Listing
            </p>
          </button>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#d2d6db] mx-[24px] mb-[32px]" />

        {/* Menu Items */}
        <div className="px-[24px] pb-[32px]">
          <div className="flex flex-col gap-[24px]">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="flex items-center gap-[16px] w-full hover:opacity-70 transition-opacity"
                >
                  <Icon className="w-[24px] h-[24px] text-[#fe456a]" strokeWidth={1.5} />
                  <div className="flex-1 text-left">
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[18px] text-[#1f2a37]">
                      {item.label}
                    </p>
                    {item.summary && (
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[11px] leading-[16px] text-[#9da4ae] mt-[2px]">
                        {item.summary}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="w-[24px] h-[24px] text-[#d2d6db]" strokeWidth={1.5} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Matching CTA */}
        <div className="px-[24px] pb-[32px]">
          <div className="bg-gradient-to-br from-[#fe456a] to-[#ff6b8a] rounded-[16px] p-[24px]">
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-white mb-[4px]">
              Find Your Perfect Roommate
            </h3>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-white/90 mb-[20px]">
              Use our smart matching algorithm to find compatible roommates
            </p>
            <button
              onClick={onStartMatching}
              className="w-full h-[48px] bg-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#fe456a] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] hover:bg-[#f9fafb] transition-colors"
            >
              Start Matching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
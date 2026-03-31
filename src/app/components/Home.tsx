import { useState, useEffect } from "react";
import { MapPin, MessageCircle, Bell, Heart, Home as HomeIcon, ArrowRight, ChevronDown, Loader2 } from "lucide-react";
import { fetchProperties } from "../../lib/properties";

interface HomeProps {
  userName?: string;
  hasCompletedPreferences?: boolean;
  currentLocation?: string;
  onLocationChange?: (location: string) => void;
  onOpenMessages?: () => void;
  onOpenNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  hasUnreadMessages?: boolean;
  onStartMatching?: () => void;
  onBrowseHomes?: () => void;
  onCompletePreferences?: () => void;
  onViewListing?: (listing: any) => void;
}
export function Home({
  userName = "Guest",
  hasCompletedPreferences = false,
  currentLocation = "Kicukiro, Kigali",
  onLocationChange,
  onOpenMessages,
  onOpenNotifications,
  hasUnreadNotifications = false,
  hasUnreadMessages = false,
  onStartMatching,
  onBrowseHomes,
  onCompletePreferences,
  onViewListing
}: HomeProps) {

  // Mock data for recommended roommates removed for production
  const recommendedProfiles: any[] = [];

  const [properties, setProperties] = useState<any[]>([]);
  const [loadingProperties, setLoadingProperties] = useState(true);
  const [propertiesError, setPropertiesError] = useState<string | null>(null);
  
  const [selectedTopLocation, setSelectedTopLocation] = useState<string | null>(null);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  useEffect(() => {
    async function getProperties() {
      setLoadingProperties(true);
      const { data, error } = await fetchProperties();
      if (error) {
        setPropertiesError("Failed to load properties.");
      } else {
        setProperties(data || []);
      }
      setLoadingProperties(false);
    }
    
    getProperties();
  }, []);

  // Determine greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] pb-20">
      {/* Header with Location */}
      <div className="bg-white px-6 pt-8 pb-4">
        <div className="flex items-start justify-between">
          {/* Location */}
          <div className="flex-1 relative">
            <button 
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              className="flex flex-col text-left"
            >
              <div className="flex items-center gap-[5px] mb-[4px]">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[14px] text-[#9da4ae]">
                  Location
                </p>
                <ChevronDown className={`w-[16px] h-[16px] text-[#fe456a] transition-transform ${showLocationDropdown ? 'rotate-180' : ''}`} />
              </div>
              <div className="flex items-center gap-[4px]">
                <MapPin className="w-[24px] h-[24px] text-[#fe456a] fill-[#fe456a]" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[20px] text-[#1f2a37]">
                  {currentLocation}
                </p>
              </div>
            </button>
            {showLocationDropdown && (
              <div className="absolute top-full left-0 mt-[8px] w-[220px] bg-white rounded-[12px] shadow-[0px_8px_24px_rgba(31,42,55,0.12)] border border-[#e5e7eb] overflow-hidden z-50">
                {["Kicukiro, Kigali", "Nyarutarama, Kigali", "Kibagabaga, Kigali", "Gikondo, Kigali", "Musanze, Rwanda", "Rubavu, Rwanda"].map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      if (onLocationChange) onLocationChange(loc);
                      setShowLocationDropdown(false);
                    }}
                    className="w-full text-left px-[16px] py-[12px] font-['Inter:Medium',sans-serif] text-[13px] text-[#1f2a37] hover:bg-[#f9fafb] border-b border-[#f3f4f6] last:border-b-0"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-[8px]">
            <button
              onClick={onOpenNotifications}
              className="relative w-[44px] h-[44px] bg-white border border-[#d2d6db] rounded-full flex items-center justify-center hover:bg-[#f9fafb] transition-colors"
            >
              <Bell className="w-[20px] h-[20px] text-[#1f2a37]" />
              {hasUnreadNotifications && (
                <span className="absolute top-[6px] right-[6px] w-[6px] h-[6px] bg-[#f04438] rounded-full" />
              )}
            </button>
            <button
              onClick={onOpenMessages}
              className="relative w-[44px] h-[44px] bg-white border border-[#d2d6db] rounded-full flex items-center justify-center hover:bg-[#f9fafb] transition-colors"
            >
              <MessageCircle className="w-[20px] h-[20px] text-[#1f2a37]" />
              {hasUnreadMessages && (
                <span className="absolute top-[6px] right-[6px] w-[6px] h-[6px] bg-[#f04438] rounded-full" />
              )}
            </button>
          </div>
        </div>

        {/* Greeting */}
        <div className="mt-4">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[24px] text-[#1f2a37] mb-[2px]">
            {getGreeting()}, {userName}
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#6b7280]">
            Based on your lifestyle preferences
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 py-4 bg-white">
        <div className="flex items-center gap-[8px] px-[16px] py-[14px] bg-white border border-[#d2d6db] rounded-[12px]">
          <svg className="w-[20px] h-[20px] flex-shrink-0" fill="none" viewBox="0 0 20 20">
            <circle cx="9" cy="9" r="7.5" stroke="#fe456a" strokeWidth="1.5" />
            <path d="M14.5 14.5L18.5 18.5" stroke="#fe456a" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
          <input
            type="text"
            placeholder="Search Property"
            className="flex-1 font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#9da4ae] outline-none bg-transparent"
          />
          <svg className="w-[20px] h-[20px] flex-shrink-0" fill="none" viewBox="0 0 20 20">
            <path
              d="M7.5 13L2 13M10.5 3.5L17 3.5"
              stroke="#fe456a"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <circle cx="13.5" cy="13" r="2.5" stroke="#fe456a" strokeWidth="1.5" />
            <circle cx="6.5" cy="3.5" r="2.5" stroke="#fe456a" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Complete Preferences Card */}
      <div className="px-6 py-3">
        <button
          onClick={onCompletePreferences}
          className="w-full bg-[#fffaeb] border-2 border-[rgba(253,176,34,0.2)] rounded-[12px] p-[18px] flex items-center gap-[12px] hover:shadow-md transition-all"
        >
          <div className="flex-none w-[40px] h-[40px] bg-[#fdb022] rounded-[10px] flex items-center justify-center">
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
              <path
                d="M7 14.5C7 13.12 5.88 12 4.5 12C3.12 12 2 13.12 2 14.5C2 15.88 3.12 17 4.5 17C5.88 17 7 15.88 7 14.5ZM18 14.5C18 13.12 16.88 12 15.5 12C14.12 12 13 13.12 13 14.5C13 15.88 14.12 17 15.5 17C16.88 17 18 15.88 18 14.5ZM14 5.5C14 4.12 12.88 3 11.5 3C10.12 3 9 4.12 9 5.5C9 6.88 10.12 8 11.5 8C12.88 8 14 6.88 14 5.5ZM7 7L4.5 12M13 7L15.5 12"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.67"
              />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37] mb-[4px]">
              Start your lifestyle preferences
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#6b7280]">
              Help us find better matches for you.
            </p>
          </div>
          <ArrowRight className="flex-none w-[20px] h-[20px] text-[#1f2a37]" />
        </button>
      </div>

      {/* Recommended for you */}
      {hasCompletedPreferences && (
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-[4px]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
              Recommended for you
            </h2>
            <button 
              onClick={onStartMatching}
              className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[14px] text-[#fe456a]"
            >
              See all
            </button>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#9da4ae] mb-[16px]">
            Compatible roommates
          </p>

          {/* Horizontal scroll of profiles */}
          <div className="flex gap-[12px] overflow-x-auto pb-[8px] -mx-6 px-6">
            {recommendedProfiles.map((profile) => (
              <button
                key={profile.id}
                onClick={onStartMatching}
                className="flex-none w-[140px] bg-[#fafafa] rounded-[12px] p-[12px] hover:bg-[#f3f4f6] transition-colors"
              >
                <div className="w-full aspect-square mb-[8px] rounded-[8px] overflow-hidden">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[18px] text-[#1f2a37] mb-[4px] truncate">
                  {profile.name}
                </p>
                <div className="flex items-center gap-[4px] mb-[6px]">
                  <Heart className="w-[10px] h-[10px] text-[#fe456a] fill-[#fe456a]" />
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] leading-[14px] text-[#fe456a]">
                    {profile.compatibility}% match
                  </span>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[14px] text-[#9da4ae] mb-[6px] truncate">
                  {profile.setup}
                </p>
                {/* Lifestyle chips */}
                <div className="flex flex-wrap gap-[4px]">
                  {profile.chips.slice(0, 2).map((chip: string, index: number) => (
                    <span
                      key={index}
                      className="px-[6px] py-[2px] bg-[#f3f4f6] rounded-[4px] font-['Inter:Medium',sans-serif] font-medium text-[9px] leading-[12px] text-[#6b7280]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Top Locations - keeping existing design but styled to match */}
      <div className="px-6 py-4 bg-white border-y border-[#f3f4f6]">
        <div className="flex items-center justify-between mb-[16px]">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
            Top Locations
          </h2>
          <button className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[14px] text-[#fe456a]">
            See all
          </button>
        </div>

        <div className="flex gap-[12px] overflow-x-auto pb-[8px]">
          {["Kibagabaga", "Kicukiro", "Gikondo", "Nyarutarama"].map((location) => (
            <button
              key={location}
              onClick={() => setSelectedTopLocation(selectedTopLocation === location ? null : location)}
              className={`flex items-center gap-[8px] px-[8px] py-[4px] rounded-[10px] flex-shrink-0 ${
                selectedTopLocation === location
                  ? "bg-[#fe456a]"
                  : "bg-[#f9f5ff] border border-[#d2d6db]"
              }`}
            >
              <div className="w-[36px] h-[36px] rounded-[8px] bg-[#d9d9d9]" />
              <p
                className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] leading-[14px] ${
                  selectedTopLocation === location ? "text-white" : "text-[#9da4ae]"
                }`}
              >
                {location}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Homes you might like */}
      <div className="px-6 py-4">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#9da4ae] mb-[16px]">
          Homes you might like
        </p>

        <div className="flex gap-[12px] overflow-x-auto pb-[8px] -mx-6 px-6">
          {!selectedTopLocation ? (
            <p className="text-sm text-[#6b7280] italic px-6 w-full text-center">Select a location above to see available homes</p>
          ) : loadingProperties ? (
            <div className="flex-1 flex justify-center py-[20px]">
              <Loader2 className="w-[32px] h-[32px] animate-spin text-[#fe456a]" />
            </div>
          ) : propertiesError ? (
            <p className="text-sm text-[#f04438]">{propertiesError}</p>
          ) : properties.filter(h => h.location.includes(selectedTopLocation)).length === 0 ? (
            <p className="text-sm text-[#6b7280] px-6 w-full text-center">No properties found in {selectedTopLocation}.</p>
          ) : (
            properties.filter(h => h.location.includes(selectedTopLocation)).map((home) => (
              <button
                key={home.id}
                onClick={() => onViewListing && onViewListing({
                  intent: "rental",
                  livingSetup: "entire-apartment",
                  existingRoommates: [],
                  spaceDetails: { bedrooms: "1", bathrooms: "1", furnished: true, privateBathroom: true, utilitiesIncluded: true },
                  locationDetails: { country: "Rwanda", city: "Kigali", area: home.location, address: home.location, hideAddress: false },
                  idealFor: [],
                  nearbyFacilities: [],
                  rent: home.price.toString(),
                  deposit: home.price.toString(),
                  moveInDate: "2026-04-01",
                  minimumStay: "6-months",
                  photos: [home.image_url],
                  description: home.title
                })}
                className="flex-none w-[160px] bg-[#fafafa] rounded-[12px] overflow-hidden hover:bg-[#f3f4f6] transition-colors text-left"
              >
                <div className="relative">
                  <img
                    src={home.image_url || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=160&h=100&fit=crop"}
                    alt={home.title}
                    className="w-full h-[100px] object-cover"
                  />
                </div>
                <div className="p-[12px]">
                  {/* Listing type label */}
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[9px] leading-[12px] text-[#9da4ae] mb-[4px]">
                    Property
                  </p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[18px] text-[#1f2a37] mb-[4px] truncate">
                    {home.title}
                  </p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] leading-[18px] text-[#fe456a] mb-[4px]">
                    ${home.price}
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[14px] text-[#9da4ae]">
                      /month
                    </span>
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[14px] text-[#9da4ae] mb-[4px]">
                    {home.location}
                  </p>
                </div>
              </button>
            ))
          )}
        </div>

      </div>

      {/* CTA Cards */}
      <div className="px-6 py-4">
        <div className="flex gap-[12px]">
          {/* Start Matching */}
          <button
            onClick={onStartMatching}
            className="flex-1 bg-gradient-to-b from-[#fe456a] to-[#ff758f] rounded-[12px] p-[16px] flex flex-col items-start hover:shadow-md transition-all"
          >
            <div className="w-[40px] h-[40px] bg-white/20 rounded-[10px] flex items-center justify-center mb-[8px]">
              <Heart className="w-[20px] h-[20px] text-white" />
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-white">
              Start Matching
            </p>
          </button>

          {/* Browse Homes */}
          <button
            onClick={onBrowseHomes}
            className="flex-1 bg-[#f3f4f6] rounded-[12px] p-[16px] flex flex-col items-start hover:bg-[#e5e7eb] transition-colors"
          >
            <div className="w-[40px] h-[40px] bg-white rounded-[10px] flex items-center justify-center mb-[8px]">
              <HomeIcon className="w-[20px] h-[20px] text-[#fe456a]" />
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37]">
              Browse Homes
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

import { ArrowLeft, Share, Heart, Home, Bed, Bath, Sofa, Calendar, MapPin, User, Hospital, ShoppingCart, ShoppingBag, Fuel, Bus, GraduationCap, Dumbbell, Plus, Cross, Coffee } from "lucide-react";
import { useState } from "react";
import type { ListingData } from "./CreateListingContext";

interface PropertyDetailsProps {
  onBack: () => void;
  listing?: ListingData; // Optional for demo/testing
  onRequestToJoin?: () => void;
  onViewProfile?: (userId: string) => void;
  isFavorited?: boolean;
  onToggleFavorite?: (listing: ListingData) => void;
}

export function PropertyDetails({ 
  onBack, 
  listing, 
  onRequestToJoin, 
  onViewProfile,
  isFavorited = false,
  onToggleFavorite
}: PropertyDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Demo data for when no listing is provided
  const demoListing: ListingData = {
    intent: "roommate",
    livingSetup: "private-room-apartment",
    existingRoommates: [
      {
        id: "1",
        photoUrl: null,
        firstName: "Alex",
        ageRange: "25-29",
        occupation: "Software Engineer",
        lifestyleBadges: ["Clean", "Quiet", "WFH"],
        bio: "Love cooking and exploring new cafes. Usually working from home during the week.",
      },
      {
        id: "2",
        photoUrl: null,
        firstName: "Jordan",
        ageRange: "25-29",
        occupation: "Graphic Designer",
        lifestyleBadges: ["Social", "Active", "Foodie"],
        bio: "Morning person who loves running and weekend brunches. Friendly and easy-going!",
      },
    ],
    spaceDetails: {
      bedrooms: "3",
      bathrooms: "2",
      furnished: true,
      privateBathroom: false,
      utilitiesIncluded: true,
    },
    idealFor: ["working-professionals", "quiet-lifestyle"],
    locationDetails: {
      country: "Rwanda",
      city: "Kigali",
      area: "Kicukiro",
      address: "Demo Address 123",
      hideAddress: false,
    },
    nearbyFacilities: [
      { id: "hospital", distance: "close" },
      { id: "supermarket", distance: "very-close" },
      { id: "transit", distance: "very-close" },
    ],
    rent: "1200",
    deposit: "1200",
    moveInDate: "2026-02-15",
    minimumStay: "6-months",
    photos: [],
    description: "Bright and airy apartment in a quiet neighborhood, perfect for professionals. The space has tons of natural light, a modern kitchen, and a cozy living room. Close to public transport and cafes.",
  };

  const activeListingData = listing || demoListing;

  // Helper functions
  const getLivingSetupLabel = () => {
    const setupLabels: Record<string, string> = {
      "private-room-apartment": "Private Room · Shared Apartment",
      "private-room-house": "Private Room · Shared House",
      "entire-home-cotenant": "Entire Home",
      "co-living": "Co-Living Space",
      "entire-apartment": "Entire Apartment",
      "entire-house": "Entire House",
      "private-room": "Private Room",
      "premium-home": "Premium Home",
    };
    return setupLabels[activeListingData.livingSetup || ""] || "";
  };

  const getIdealForLabel = (id: string) => {
    const labels: Record<string, string> = {
      students: "Students",
      "working-professionals": "Working professionals",
      couples: "Couples",
      "quiet-lifestyle": "Quiet lifestyle",
      "social-lifestyle": "Social lifestyle",
    };
    return labels[id] || id;
  };

  const isSharedLiving = () => {
    const sharedTypes = [
      "private-room-apartment",
      "private-room-house",
      "entire-home-cotenant",
      "co-living",
      "private-room",
    ];
    return sharedTypes.includes(activeListingData.livingSetup || "");
  };

  const getCTALabel = () => {
    return activeListingData.intent === "roommate" ? "Request to Join" : "Contact Owner";
  };

  // Helper function to get facility info
  const getFacilityInfo = (id: string) => {
    const facilities: Record<string, { label: string; icon: React.ComponentType<{ className?: string }> }> = {
      "hospital": { label: "Hospital", icon: Hospital },
      "supermarket": { label: "Supermarket", icon: ShoppingCart },
      "mall": { label: "Mall", icon: ShoppingBag },
      "gas-station": { label: "Gas Station", icon: Fuel },
      "transit": { label: "Transit", icon: Bus },
      "school": { label: "School", icon: GraduationCap },
      "gym": { label: "Gym", icon: Dumbbell },
      "pharmacy": { label: "Pharmacy", icon: Plus },
      "restaurant": { label: "Café", icon: Coffee },
      "worship": { label: "Worship", icon: Cross },
    };
    return facilities[id] || { label: id, icon: MapPin };
  };

  // Placeholder images
  const placeholderImages = [
    "https://images.unsplash.com/photo-1662454419736-de132ff75638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBiZWRyb29tfGVufDF8fHx8MTc2OTM2NzE0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1713352533011-601ad0689860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbGl2aW5nJTIwcm9vbSUyMGRlY29yfGVufDF8fHx8MTc2OTQ2MDUxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1597497522150-2f50bffea452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBraXRjaGVuJTIwbW9kZXJufGVufDF8fHx8MTc2OTM5MTM0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1611095459865-47682ae3c41c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2OTQ1NDcyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  return (
    <div className="size-full flex flex-col bg-white overflow-auto">
      {/* Status Bar Spacer */}
      <div className="h-[44px]" />

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-[#e5e7eb]">
        <div className="px-[24px] py-[16px] flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-[4px] -ml-[4px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
          >
            <ArrowLeft className="w-[24px] h-[24px] text-[#1f2a37]" />
          </button>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
            Details
          </p>
          <div className="flex items-center gap-[16px]">
            <button className="p-[4px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors">
              <Share className="w-[20px] h-[20px] text-[#1f2a37]" />
            </button>
            <button 
              onClick={() => onToggleFavorite && onToggleFavorite(activeListingData)}
              className="p-[4px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
            >
              <Heart 
                className={`w-[20px] h-[20px] ${isFavorited ? "text-[#fe456a]" : "text-[#1f2a37]"}`} 
                style={{ fill: isFavorited ? "currentColor" : "none" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-[100px]">
        {/* Image Gallery */}
        <div className="px-[24px] pt-[16px]">
          {/* Main Image */}
          <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-[#f3f4f6] mb-[12px]">
            <img
              src={placeholderImages[currentImageIndex]}
              alt="Property"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            {/* Image indicators */}
            <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 flex gap-[8px]">
              {placeholderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-[8px] h-[8px] rounded-full transition-all ${
                    index === currentImageIndex ? "bg-[#fe456a] w-[24px]" : "bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-[8px] overflow-x-auto pb-[2px]">
            {placeholderImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-none w-[76px] h-[72px] rounded-[8px] overflow-hidden border-2 transition-all ${
                  index === currentImageIndex ? "border-[#fe456a]" : "border-transparent"
                }`}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Title & Price */}
        <div className="px-[24px] pt-[24px]">
          <div className="flex items-start justify-between mb-[4px]">
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37] flex-1">
              Rose Garden
            </h1>
            <div className="text-right">
              <span className="font-['Inter:Bold',sans-serif] font-bold text-[14px] leading-[18px] text-[#fe456a]">
                ${activeListingData.rent}
              </span>
              <span className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px] text-[#9da4ae]">
                /month
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-[4px] mb-[12px]">
            <MapPin className="w-[16px] h-[16px] text-[#9da4ae]" />
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#9da4ae]">
              Kibagabaga
            </p>
          </div>

          {/* Living Setup Badge */}
          <div className="inline-flex items-center gap-[6px] px-[12px] py-[6px] bg-[#fef0f3] rounded-[8px]">
            <Home className="w-[14px] h-[14px] text-[#fe456a]" />
            <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#fe456a]">
              {getLivingSetupLabel()}
            </span>
          </div>
        </div>

        {/* Section 2: Living Details */}
        <div className="px-[24px] pt-[32px]">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            Living Details
          </h2>

          <div className="grid grid-cols-3 gap-[16px]">
            {/* Bedrooms */}
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px] text-[#9da4ae]">
                Bedrooms
              </p>
              <div className="flex items-center gap-[4px]">
                <Bed className="w-[16px] h-[16px] text-[#1f2a37]" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] leading-[14px] text-[#1f2a37]">
                  {activeListingData.spaceDetails.bedrooms}
                </p>
              </div>
            </div>

            {/* Bathrooms */}
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px] text-[#9da4ae]">
                Bathrooms
              </p>
              <div className="flex items-center gap-[4px]">
                <Bath className="w-[16px] h-[16px] text-[#fe456a]" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] leading-[14px] text-[#1f2a37]">
                  {activeListingData.spaceDetails.bathrooms}
                </p>
              </div>
            </div>

            {/* Furnished */}
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px] text-[#9da4ae]">
                Furnishing
              </p>
              <div className="flex items-center gap-[4px]">
                <Sofa className="w-[16px] h-[16px] text-[#1f2a37]" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] leading-[14px] text-[#1f2a37]">
                  {activeListingData.spaceDetails.furnished ? "Furnished" : "Unfurnished"}
                </p>
              </div>
            </div>

            {/* Utilities */}
            {activeListingData.spaceDetails.utilitiesIncluded !== null && (
              <div className="flex flex-col gap-[4px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px] text-[#9da4ae]">
                  Utilities
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] leading-[14px] text-[#1f2a37]">
                  {activeListingData.spaceDetails.utilitiesIncluded ? "Included" : "Not included"}
                </p>
              </div>
            )}

            {/* Bathroom Type */}
            {isSharedLiving() && activeListingData.spaceDetails.privateBathroom !== null && (
              <div className="flex flex-col gap-[4px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px] text-[#9da4ae]">
                  Bathroom
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] leading-[14px] text-[#1f2a37]">
                  {activeListingData.spaceDetails.privateBathroom ? "Private" : "Shared"}
                </p>
              </div>
            )}

            {/* Move-in Date */}
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px] text-[#9da4ae]">
                Move-in
              </p>
              <div className="flex items-center gap-[4px]">
                <Calendar className="w-[16px] h-[16px] text-[#1f2a37]" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] leading-[14px] text-[#1f2a37]">
                  {new Date(activeListingData.moveInDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Roommate Profiles (Conditional) */}
        {isSharedLiving() && activeListingData.existingRoommates.length > 0 && (
          <div className="px-[24px] pt-[32px]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[8px]">
              You'll be living with
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#6b7280] mb-[16px]">
              These are the people currently living in this home.
            </p>

            {/* Horizontal scroll of roommate cards */}
            <div className="flex gap-[12px] overflow-x-auto pb-[4px] -mx-[24px] px-[24px]">
              {activeListingData.existingRoommates.map((roommate) => (
                <button
                  key={roommate.id}
                  onClick={() => onViewProfile?.(roommate.id)}
                  className="flex-none w-[260px] bg-white border border-[#e5e7eb] rounded-[12px] p-[16px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-[#fe456a]/30 transition-all text-left"
                >
                  <div className="flex items-start gap-[12px] mb-[12px]">
                    {/* Avatar */}
                    <div className="flex-none w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#fe456a] to-[#ff758f] flex items-center justify-center">
                      <User className="w-[24px] h-[24px] text-white" strokeWidth={2} />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37] mb-[2px]">
                        {roommate.firstName}
                      </h3>
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#6b7280]">
                        {roommate.ageRange} • {roommate.occupation}
                      </p>
                    </div>
                  </div>

                  {/* Lifestyle Badges */}
                  {roommate.lifestyleBadges.length > 0 && (
                    <div className="flex flex-wrap gap-[6px] mb-[8px]">
                      {roommate.lifestyleBadges.map((badge) => (
                        <span
                          key={badge}
                          className="px-[8px] py-[4px] bg-[#fef0f3] text-[#fe456a] rounded-[12px] font-['Inter:Medium',sans-serif] font-medium text-[10px] leading-[14px]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bio */}
                  {roommate.bio && (
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#6b7280]">
                      {roommate.bio}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Ideal Match */}
        {activeListingData.idealFor.length > 0 && (
          <div className="px-[24px] pt-[32px]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
              This home is a good fit for
            </h2>

            <div className="flex flex-wrap gap-[8px]">
              {activeListingData.idealFor.map((item) => (
                <div
                  key={item}
                  className="px-[16px] py-[8px] bg-[#f3f4f6] border border-[#e5e7eb] rounded-[20px]"
                >
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#6b7280]">
                    {getIdealForLabel(item)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 5: About this home */}
        <div className="px-[24px] pt-[32px]">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
            About this home
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#6b7280]">
            {activeListingData.description}
          </p>
        </div>

        {/* Section 5.5: Owner / Lister (Conditional for Shared Living) */}
        {isSharedLiving() && (
          <div className="px-[24px] pt-[32px]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
              Listing Owner
            </h2>

            <div className="bg-white border border-[#e5e7eb] rounded-[12px] p-[16px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-[12px] mb-[12px]">
                {/* Avatar */}
                <div className="flex-none w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#fe456a] to-[#ff758f] flex items-center justify-center">
                  <User className="w-[24px] h-[24px] text-white" strokeWidth={2} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] leading-[20px] text-[#1f2a37] mb-[2px]">
                    Sarah Johnson
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#6b7280]">
                    Listing Owner
                  </p>
                </div>
              </div>

              {/* Privacy Message */}
              <div className="bg-[#fef0f3] border border-[#fecdd3] rounded-[8px] p-[12px] flex items-start gap-[8px]">
                <div className="flex-shrink-0 w-[16px] h-[16px] mt-[2px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8 11C7.725 11 7.5 10.775 7.5 10.5V7.5C7.5 7.225 7.725 7 8 7C8.275 7 8.5 7.225 8.5 7.5V10.5C8.5 10.775 8.275 11 8 11ZM8.5 5.5C8.5 5.775 8.275 6 8 6C7.725 6 7.5 5.775 7.5 5.5C7.5 5.225 7.725 5 8 5C8.275 5 8.5 5.225 8.5 5.5Z" fill="#FE456A"/>
                  </svg>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#be123c] flex-1">
                  Contact will be available after your request is accepted.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section 6: Rent & Terms */}
        <div className="px-[24px] pt-[32px]">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            Rent & Terms
          </h2>

          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center justify-between">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
                Monthly rent
              </p>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37]">
                ${activeListingData.rent}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
                Deposit
              </p>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37]">
                ${activeListingData.deposit}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
                Minimum stay
              </p>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37]">
                {activeListingData.minimumStay.replace("-", " ")}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
                Bills
              </p>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37]">
                {activeListingData.spaceDetails.utilitiesIncluded ? "Included" : "Not included"}
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: Neighborhood & Nearby */}
        <div className="px-[24px] pt-[32px]">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            Neighborhood & Nearby
          </h2>

          {/* Nearby places chips - only show if facilities were added */}
          {activeListingData.nearbyFacilities.length > 0 && (
            <div className="flex flex-wrap gap-[8px] mb-[16px]">
              {activeListingData.nearbyFacilities.map((facility) => {
                const { label, icon: Icon } = getFacilityInfo(facility.id);
                return (
                  <div key={facility.id} className="px-[12px] py-[8px] bg-[#f9f5ff] rounded-[8px] flex items-center gap-[6px]">
                    <Icon className="w-[16px] h-[16px] text-[#fe456a]" />
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[18px] text-[#1f2a37]">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Map placeholder */}
          <div className="w-full h-[180px] bg-[#f3f4f6] rounded-[12px] flex items-center justify-center">
            <MapPin className="w-[48px] h-[48px] text-[#d2d6db]" />
          </div>
        </div>
      </div>

      {/* Section 8: Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e7eb] px-[24px] py-[16px] shadow-[0px_-4px_12px_rgba(0,0,0,0.05)]">
        <button 
          onClick={onRequestToJoin}
          className="w-full h-[52px] bg-[#fe456a] text-white rounded-[8px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-all font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px]"
        >
          {getCTALabel()}
        </button>
      </div>
    </div>
  );
}
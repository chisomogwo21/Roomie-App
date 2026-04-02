import { ArrowLeft, Share, Heart, Home, Bed, Bath, Sofa, Calendar, MapPin, User, Hospital, ShoppingCart, ShoppingBag, Fuel, Bus, GraduationCap, Dumbbell, Plus, Cross, Coffee, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchPropertyById } from "../../lib/properties";

interface PropertyDetailsProps {
  onBack: () => void;
  listing?: any;
  onRequestToJoin?: () => void;
  onViewProfile?: (userId: string) => void;
  isFavorited?: boolean;
  onToggleFavorite?: (listing: any) => void;
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
  const [activeListingData, setActiveListingData] = useState<any>(listing);
  const [loading, setLoading] = useState(!listing || !listing.description);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getFullDetails() {
      if (!listing?.id) return;
      
      // If we already have full details (description), don't fetch
      if (listing.description && listing.spaceDetails?.furnished !== undefined) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const { data, error } = await fetchPropertyById(listing.id);
        if (error) throw error;
        
        // Map database fields to UI state format if needed
        const mappedData = {
          ...data,
          spaceDetails: {
            bedrooms: data.bedrooms || "1",
            bathrooms: data.bathrooms || "1",
            furnished: data.furnished,
            privateBathroom: data.private_bathroom,
            utilitiesIncluded: data.utilities_included
          },
          existingRoommates: data.existing_roommates || [],
          idealFor: data.ideal_for || [],
          nearbyFacilities: data.nearby_facilities || [],
          rent: data.rent || data.price,
          deposit: data.deposit || data.price,
          minimumStay: data.minimum_stay || "6-months",
          moveInDate: data.move_in_date || new Date().toISOString()
        };
        
        setActiveListingData(mappedData);
      } catch (err: any) {
        setError(err.message || "Failed to load listing details.");
      } finally {
        setLoading(false);
      }
    }

    getFullDetails();
  }, [listing?.id]);

  if (loading) {
    return (
      <div className="size-full flex flex-col items-center justify-center bg-white">
        <Loader2 className="w-[40px] h-[40px] animate-spin text-[#fe456a] mb-4" />
        <p className="text-[#9da4ae] font-['Inter:Medium',sans-serif]">Loading listing details...</p>
      </div>
    );
  }

  if (error || !activeListingData) {
    return (
      <div className="size-full flex flex-col items-center justify-center bg-white px-6 text-center">
        <p className="text-[#f04438] mb-4">{error || "Listing details not found."}</p>
        <button onClick={onBack} className="text-[#fe456a] font-medium">Go Back</button>
      </div>
    );
  }

  // Get gallery images
  const galleryImages = activeListingData.images && activeListingData.images.length > 0 
    ? activeListingData.images 
    : [activeListingData.image_url || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"];

  // Helper functions
  const isSharedLiving = () => {
    return activeListingData.intent === "roommate" || activeListingData.livingSetup === "entire-home-cotenant";
  };

  const getLivingSetupLabel = () => {
    const setupLabels: Record<string, string> = {
      "entire-apartment": "Entire Apartment",
      "entire-house": "Entire House",
      "premium-home": "Premium Home",
      "entire-home-cotenant": "Entire Home",
    };
    return setupLabels[activeListingData.livingSetup || ""] || "Entire Home";
  };

  const getIdealForLabel = (id: string) => {
    const labels: Record<string, string> = {
      "student": "Students",
      "professional": "Professionals",
      "couple": "Couples",
      "pet-owner": "Pet Owners",
      "non-smoker": "Non-smokers",
    };
    return labels[id] || id;
  };

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

  const getCTALabel = () => {
    return activeListingData.intent === "roommate" ? "Request to Join" : "Rent Now";
  };

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
              src={galleryImages[currentImageIndex]}
              alt="Property"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            {/* Image indicators */}
            <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 flex gap-[8px]">
              {galleryImages.map((_: any, index: number) => (
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
            {galleryImages.map((img: string, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-none w-[76px] h-[72px] rounded-[8px] overflow-hidden border-2 transition-all ${
                  index === currentImageIndex ? "border-[#fe456a]" : "border-transparent"
                }`}
              >
                <img src={img || ""} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Title & Price */}
        <div className="px-[24px] pt-[24px]">
          <div className="flex items-start justify-between mb-[4px]">
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37] flex-1">
              {activeListingData.title}
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
              {activeListingData.location}
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
              {activeListingData.existingRoommates.map((roommate: any) => (
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
                      {roommate.lifestyleBadges.map((badge: string) => (
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
              {activeListingData.idealFor.map((item: string) => (
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
            <button
              onClick={() => onViewProfile?.("owner-id")} // TODO: Use real owner ID
              className="flex items-center gap-[12px] mb-[12px] w-full hover:bg-[#f9fafb] p-1 rounded-[8px] transition-colors text-left"
            >
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
            </button>

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
              {activeListingData.nearbyFacilities.map((facility: any) => {
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
import { ArrowLeft, Share, Heart, Home, Bed, Bath, Sofa, Calendar, MapPin, User, Phone, MessageCircle, Hospital, ShoppingCart, ShoppingBag, Fuel, Bus, GraduationCap, Dumbbell, Plus, Cross, Coffee } from "lucide-react";
import { useState } from "react";

interface RentalDetailsProps {
  onBack: () => void;
  listing?: any;
  onRentNow?: () => void;
}

export function RentalDetails({ onBack, listing, onRentNow }: RentalDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activeListingData = listing;

  if (!activeListingData) {
    return (
      <div className="size-full flex items-center justify-center bg-white">
        <p className="text-[#6b7280]">Listing details not found.</p>
      </div>
    );
  }

  // Helper functions
  const getLivingSetupLabel = () => {
    const setupLabels: Record<string, string> = {
      "entire-apartment": "Entire Apartment",
      "entire-house": "Entire House",
      "premium-home": "Premium Home",
      "entire-home-cotenant": "Entire Home",
    };
    return setupLabels[activeListingData.livingSetup || ""] || "Entire Home";
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

  // Get gallery images
  const galleryImages = activeListingData.images && activeListingData.images.length > 0 
    ? activeListingData.images 
    : [activeListingData.image_url || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"];

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
            <button className="p-[4px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors">
              <Heart className="w-[20px] h-[20px] text-[#1f2a37]" />
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
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Title & Price */}
        <div className="px-[24px] pt-[24px]">
          <div className="flex items-start justify-between mb-[4px]">
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37] flex-1">
              {activeListingData?.title || "Property Details"}
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
          <div className="inline-flex items-center gap-[6px] px-[12px] py-[6px] bg-[#f0f9ff] rounded-[8px]">
            <Home className="w-[14px] h-[14px] text-[#0ea5e9]" />
            <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#0ea5e9]">
              {getLivingSetupLabel()}
            </span>
          </div>
        </div>

        {/* Info Note */}
        <div className="px-[24px] pt-[16px]">
          <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-[12px] p-[16px] flex items-start gap-[12px]">
            <Home className="w-[20px] h-[20px] text-[#0ea5e9] flex-shrink-0 mt-[2px]" />
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#0c4a6e]">
              This is an entire home. No roommates currently live here.
            </p>
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

        {/* Section 3: Owner Info */}
        <div className="px-[24px] pt-[32px]">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            Owner
          </h2>

          <div className="bg-white border border-[#e5e7eb] rounded-[12px] p-[16px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-[12px] mb-[16px]">
              {/* Avatar */}
              <div className="flex-none w-[56px] h-[56px] rounded-full bg-gradient-to-br from-[#fe456a] to-[#ff758f] flex items-center justify-center">
                <User className="w-[28px] h-[28px] text-white" strokeWidth={2} />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[22px] text-[#1f2a37] mb-[2px]">
                  David Mugisha
                </h3>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#6b7280]">
                  Landlord
                </p>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex gap-[8px]">
              <button className="flex-1 h-[44px] bg-[#f3f4f6] hover:bg-[#e5e7eb] rounded-[8px] flex items-center justify-center gap-[8px] transition-colors">
                <Phone className="w-[18px] h-[18px] text-[#1f2a37]" />
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37]">
                  Call
                </span>
              </button>
              <button className="flex-1 h-[44px] bg-[#f3f4f6] hover:bg-[#e5e7eb] rounded-[8px] flex items-center justify-center gap-[8px] transition-colors">
                <MessageCircle className="w-[18px] h-[18px] text-[#1f2a37]" />
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37]">
                  Message
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Section 4: About this home */}
        <div className="px-[24px] pt-[32px]">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
            About this home
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#6b7280]">
            {activeListingData.description}
          </p>
        </div>

        {/* Section 5: Rent & Terms */}
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

        {/* Section 6: Neighborhood & Nearby */}
        <div className="px-[24px] pt-[32px]">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            Neighborhood & Nearby
          </h2>

          {/* Nearby places chips */}
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

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e7eb] px-[24px] py-[16px] shadow-[0px_-4px_12px_rgba(0,0,0,0.05)]">
        <button 
          onClick={onRentNow}
          className="w-full h-[52px] bg-[#fe456a] text-white rounded-[8px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-all font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px]"
        >
          Rent Now
        </button>
        <p className="text-center font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae] mt-[8px]">
          Send a rental request to the owner.
        </p>
      </div>
    </div>
  );
}
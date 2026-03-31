import { ArrowLeft, SlidersHorizontal, MapPin, Calendar, Users, Home } from "lucide-react";
import { useState } from "react";
import { FilterModal } from "./FilterModal";

interface CityListingsProps {
  cityName: string;
  onBack: () => void;
  onViewListing: (listingType: "shared" | "entire") => void;
}

export function CityListings({ cityName, onBack, onViewListing }: CityListingsProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  const handleApplyFilters = (count: number) => {
    setActiveFiltersCount(count);
    setIsFilterOpen(false);
  };

  // Mock listings data removed for production
  const listings: any[] = [];

  return (
    <>
      <div className="size-full flex flex-col bg-[#fafafa]">
        {/* Header */}
        <div className="bg-white px-[24px] pt-[60px] pb-[16px] border-b border-[#e5e7eb]">
          <div className="flex items-center justify-between mb-[8px]">
            <button
              onClick={onBack}
              className="p-[8px] -ml-[8px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
            >
              <ArrowLeft className="w-[20px] h-[20px] text-[#1f2a37]" />
            </button>
            <h1 className="flex-1 text-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37]">
              {cityName}
            </h1>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="relative p-[8px] -mr-[8px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
            >
              <SlidersHorizontal className="w-[20px] h-[20px] text-[#1f2a37]" />
              {activeFiltersCount > 0 && (
                <div className="absolute -top-[2px] -right-[2px] w-[18px] h-[18px] bg-[#fe456a] rounded-full flex items-center justify-center">
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[10px] leading-[12px] text-white">
                    {activeFiltersCount}
                  </span>
                </div>
              )}
            </button>
          </div>

          {/* Results Summary */}
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#6b7280] text-center">
            {listings.length} homes available in {cityName}
          </p>
        </div>

        {/* Listings Feed */}
        <div className="flex-1 overflow-auto pb-[24px]">
          <div className="px-[24px] py-[20px]">
            <div className="flex flex-col gap-[16px]">
              {listings.map((listing: any) => (
                <button
                  key={listing.id}
                  onClick={() => onViewListing(listing.badges.includes("Entire home") ? "entire" : "shared")}
                  className="bg-white rounded-[12px] overflow-hidden hover:shadow-lg transition-all border border-[#e5e7eb] text-left"
                >
                  {/* Cover Image */}
                  <div className="relative">
                    <img
                      src={listing.image}
                      alt={listing.setup}
                      className="w-full h-[200px] object-cover"
                    />
                    {/* Badges overlay */}
                    <div className="absolute top-[12px] left-[12px] flex gap-[8px]">
                      {listing.badges.map((badge: string, idx: number) => (
                        <div
                          key={idx}
                          className="px-[10px] py-[6px] bg-white/95 backdrop-blur-sm rounded-[8px] flex items-center gap-[6px]"
                        >
                          {badge === "Entire home" ? (
                            <Home className="w-[12px] h-[12px] text-[#fe456a]" />
                          ) : (
                            <Users className="w-[12px] h-[12px] text-[#fe456a]" />
                          )}
                          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] leading-[14px] text-[#1f2a37]">
                            {badge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Listing Info */}
                  <div className="p-[16px]">
                    {/* Living Setup */}
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[20px] text-[#1f2a37] mb-[8px]">
                      {listing.setup}
                    </p>

                    {/* Price */}
                    <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-[#fe456a] mb-[12px]">
                      ${listing.price}
                      <span className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#9da4ae]">
                        /month{listing.setup.includes("Shared") ? " per person" : ""}
                      </span>
                    </p>

                    {/* Neighborhood */}
                    <div className="flex items-center gap-[6px] mb-[8px]">
                      <MapPin className="w-[14px] h-[14px] text-[#9da4ae]" />
                      <span className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#6b7280]">
                        {listing.neighborhood}
                      </span>
                    </div>

                    {/* Availability */}
                    <div className="flex items-center gap-[6px]">
                      <Calendar className="w-[14px] h-[14px] text-[#059669]" />
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[18px] text-[#059669]">
                        {listing.availability}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      {isFilterOpen && (
        <FilterModal
          onClose={() => setIsFilterOpen(false)}
          onApply={handleApplyFilters}
        />
      )}
    </>
  );
}
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { FilterModal } from "./FilterModal";

interface ExploreProps {
  onSelectCity?: (cityName: string) => void;
}

export function Explore({ onSelectCity }: ExploreProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  const handleApplyFilters = (count: number) => {
    setActiveFiltersCount(count);
    setIsFilterOpen(false);
  };

  // Mock city data removed for production
  const popularCities: any[] = [];
  const studentCities: any[] = [];
  const nearbyCities: any[] = [];

  return (
    <>
      <div className="size-full flex flex-col bg-[#fafafa]">
        {/* Status Bar Spacer */}
        <div className="h-[44px] bg-white" />

        {/* Header */}
        <div className="bg-white px-[24px] py-[16px] border-b border-[#e5e7eb]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1f2a37]">
            Explore
          </h1>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white px-[24px] py-[12px] border-b border-[#e5e7eb]">
          <div className="flex gap-[12px] items-center">
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-[12px] px-[16px] py-[12px] bg-[#f9fafb] rounded-[12px] border border-[#e5e7eb]">
              <Search className="w-[20px] h-[20px] text-[#9da4ae]" />
              <input
                type="text"
                placeholder="Search by city, area, school, or workplace"
                className="flex-1 bg-transparent outline-none font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#1f2a37] placeholder:text-[#9da4ae]"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="relative flex items-center justify-center w-[48px] h-[48px] bg-[#fe456a] rounded-[12px] shadow-[0px_4px_8px_0px_rgba(254,69,106,0.2)] hover:bg-[#e63d5f] transition-colors"
            >
              <SlidersHorizontal className="w-[20px] h-[20px] text-white" />
              {activeFiltersCount > 0 && (
                <div className="absolute -top-[4px] -right-[4px] w-[20px] h-[20px] bg-[#1f2a37] rounded-full flex items-center justify-center">
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[10px] leading-[12px] text-white">
                    {activeFiltersCount}
                  </span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Content Area - City Discovery */}
        <div className="flex-1 overflow-auto pb-[80px]">
          {/* Popular Cities */}
          {popularCities.length > 0 && (
            <div className="px-[24px] py-[20px]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[24px] text-[#1f2a37] mb-[16px]">
                Popular cities
              </h2>
              <div className="flex flex-col gap-[16px]">
                {popularCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => onSelectCity?.(city.name)}
                    className="bg-white rounded-[12px] overflow-hidden hover:shadow-lg transition-all border border-[#e5e7eb]"
                  >
                    <div className="relative">
                      <img
                        src={city.image}
                        alt={city.name}
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-[16px] left-[16px] right-[16px]">
                        <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[22px] leading-[28px] text-white mb-[4px]">
                          {city.name}
                        </h3>
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-white/90">
                          {city.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Student Cities */}
          {studentCities.length > 0 && (
            <div className="px-[24px] py-[20px] bg-[#fafafa]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[24px] text-[#1f2a37] mb-[16px]">
                Student cities
              </h2>
              <div className="flex flex-col gap-[16px]">
                {studentCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => onSelectCity?.(city.name)}
                    className="bg-white rounded-[12px] overflow-hidden hover:shadow-lg transition-all border border-[#e5e7eb]"
                  >
                    <div className="relative">
                      <img
                        src={city.image}
                        alt={city.name}
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-[16px] left-[16px] right-[16px]">
                        <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[22px] leading-[28px] text-white mb-[4px]">
                          {city.name}
                        </h3>
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-white/90">
                          {city.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Nearby Cities */}
          {nearbyCities.length > 0 && (
            <div className="px-[24px] py-[20px]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[24px] text-[#1f2a37] mb-[16px]">
                Nearby cities
              </h2>
              <div className="flex flex-col gap-[16px]">
                {nearbyCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => onSelectCity?.(city.name)}
                    className="bg-white rounded-[12px] overflow-hidden hover:shadow-lg transition-all border border-[#e5e7eb]"
                  >
                    <div className="relative">
                      <img
                        src={city.image}
                        alt={city.name}
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-[16px] left-[16px] right-[16px]">
                        <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[22px] leading-[28px] text-white mb-[4px]">
                          {city.name}
                        </h3>
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-white/90">
                          {city.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
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
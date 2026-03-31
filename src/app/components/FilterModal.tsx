import { useState } from "react";
import { X, Hospital, ShoppingCart, Bus, GraduationCap, Dumbbell, Cross } from "lucide-react";

interface FilterModalProps {
  onClose: () => void;
  onApply: (count: number) => void;
}

interface FilterState {
  livingSetup: string[];
  priceRange: [number, number];
  moveInDate: string[];
  furnishing: string[];
  roommateLifestyle: string[];
  idealFor: string[];
  nearbyFacilities: string[];
}

const initialFilters: FilterState = {
  livingSetup: [],
  priceRange: [0, 5000],
  moveInDate: [],
  furnishing: [],
  roommateLifestyle: [],
  idealFor: [],
  nearbyFacilities: [],
};

const livingSetupOptions = [
  { id: "private-room-apartment", label: "Private Room (Shared Apartment)" },
  { id: "private-room-house", label: "Private Room (Shared House)" },
  { id: "entire-home-cotenant", label: "Entire Home (Split Rent)" },
  { id: "co-living", label: "Co-Living Space" },
  { id: "entire-apartment", label: "Entire Apartment" },
  { id: "entire-house", label: "Entire House" },
  { id: "premium-home", label: "Premium Home" },
];

const moveInDateOptions = [
  { id: "asap", label: "ASAP" },
  { id: "within-1-month", label: "Within 1 month" },
  { id: "flexible", label: "Flexible" },
];

const furnishingOptions = [
  { id: "furnished", label: "Furnished" },
  { id: "unfurnished", label: "Unfurnished" },
];

const roommateLifestyleOptions = [
  { id: "clean", label: "Clean" },
  { id: "quiet", label: "Quiet" },
  { id: "social", label: "Social" },
  { id: "wfh-friendly", label: "WFH-friendly" },
  { id: "non-smoker", label: "Non-smoker" },
];

const idealForOptions = [
  { id: "students", label: "Students" },
  { id: "working-professionals", label: "Working professionals" },
  { id: "couples", label: "Couples" },
];

const nearbyFacilitiesOptions = [
  { id: "supermarket", label: "Supermarket", icon: ShoppingCart },
  { id: "hospital", label: "Hospital / Clinic", icon: Hospital },
  { id: "transit", label: "Transit", icon: Bus },
  { id: "gym", label: "Gym", icon: Dumbbell },
  { id: "school", label: "School / University", icon: GraduationCap },
  { id: "worship", label: "Religious centers", icon: Cross },
];

export function FilterModal({ onClose, onApply }: FilterModalProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  // Check if shared living options are selected
  const hasSharedLiving = filters.livingSetup.some((setup) =>
    ["private-room-apartment", "private-room-house", "entire-home-cotenant", "co-living"].includes(setup)
  );

  const toggleArrayFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const currentArray = prev[key] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      return { ...prev, [key]: newArray };
    });
  };

  const countActiveFilters = (): number => {
    let count = 0;
    if (filters.livingSetup.length > 0) count++;
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 5000) count++;
    if (filters.moveInDate.length > 0) count++;
    if (filters.furnishing.length > 0) count++;
    if (filters.roommateLifestyle.length > 0) count++;
    if (filters.idealFor.length > 0) count++;
    if (filters.nearbyFacilities.length > 0) count++;
    return count;
  };

  const handleApply = () => {
    onApply(countActiveFilters());
  };

  const handleClearAll = () => {
    setFilters(initialFilters);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#fcfcfd]">
      {/* Status Bar Spacer */}
      <div className="h-[44px] bg-white" />

      {/* Header */}
      <div className="flex-none bg-white px-[24px] py-[16px] border-b border-[#e5e7eb] flex items-center justify-between">
        <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[28px] text-[#1f2a37]">
          Filters
        </h2>
        <button
          onClick={onClose}
          className="p-[4px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
        >
          <X className="w-[24px] h-[24px] text-[#1f2a37]" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto px-[24px] py-[24px]">
        {/* Living Setup */}
        <div className="mb-[32px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            Living Setup
          </h3>
          <div className="flex flex-wrap gap-[8px]">
            {livingSetupOptions.map((option) => {
              const isSelected = filters.livingSetup.includes(option.id);
              return (
                <button
                  key={option.id}
                  onClick={() => toggleArrayFilter("livingSetup", option.id)}
                  className={`px-[16px] py-[10px] rounded-[20px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] transition-all duration-200 ${
                    isSelected
                      ? "border-[#fe456a] bg-[#fe456a] text-white"
                      : "border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#fe456a]/30"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-[32px]">
          <div className="flex items-baseline justify-between mb-[12px]">
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
              Price Range
            </h3>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae]">
              per person
            </p>
          </div>
          <div className="mb-[16px]">
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={filters.priceRange[1]}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  priceRange: [prev.priceRange[0], parseInt(e.target.value)],
                }))
              }
              className="w-full h-[4px] bg-[#e5e7eb] rounded-[2px] appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:bg-[#fe456a] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-[20px] [&::-moz-range-thumb]:h-[20px] [&::-moz-range-thumb]:bg-[#fe456a] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37]">
              ${filters.priceRange[0]}
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37]">
              ${filters.priceRange[1]}
            </p>
          </div>
        </div>

        {/* Move-in Date */}
        <div className="mb-[32px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            Move-in Date
          </h3>
          <div className="flex flex-wrap gap-[8px]">
            {moveInDateOptions.map((option) => {
              const isSelected = filters.moveInDate.includes(option.id);
              return (
                <button
                  key={option.id}
                  onClick={() => toggleArrayFilter("moveInDate", option.id)}
                  className={`px-[16px] py-[10px] rounded-[20px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] transition-all duration-200 ${
                    isSelected
                      ? "border-[#fe456a] bg-[#fe456a] text-white"
                      : "border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#fe456a]/30"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Furnishing */}
        <div className="mb-[32px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            Furnishing
          </h3>
          <div className="flex flex-wrap gap-[8px]">
            {furnishingOptions.map((option) => {
              const isSelected = filters.furnishing.includes(option.id);
              return (
                <button
                  key={option.id}
                  onClick={() => toggleArrayFilter("furnishing", option.id)}
                  className={`px-[16px] py-[10px] rounded-[20px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] transition-all duration-200 ${
                    isSelected
                      ? "border-[#fe456a] bg-[#fe456a] text-white"
                      : "border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#fe456a]/30"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Roommate Lifestyle - Conditional */}
        {hasSharedLiving && (
          <div className="mb-[32px]">
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
              Roommate Lifestyle
            </h3>
            <div className="flex flex-wrap gap-[8px]">
              {roommateLifestyleOptions.map((option) => {
                const isSelected = filters.roommateLifestyle.includes(option.id);
                return (
                  <button
                    key={option.id}
                    onClick={() => toggleArrayFilter("roommateLifestyle", option.id)}
                    className={`px-[16px] py-[10px] rounded-[20px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] transition-all duration-200 ${
                      isSelected
                        ? "border-[#fe456a] bg-[#fe456a] text-white"
                        : "border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#fe456a]/30"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Ideal For */}
        <div className="mb-[32px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            Ideal For
          </h3>
          <div className="flex flex-wrap gap-[8px]">
            {idealForOptions.map((option) => {
              const isSelected = filters.idealFor.includes(option.id);
              return (
                <button
                  key={option.id}
                  onClick={() => toggleArrayFilter("idealFor", option.id)}
                  className={`px-[16px] py-[10px] rounded-[20px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] transition-all duration-200 ${
                    isSelected
                      ? "border-[#fe456a] bg-[#fe456a] text-white"
                      : "border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#fe456a]/30"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Nearby Facilities */}
        <div className="mb-[32px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            Nearby Facilities
          </h3>
          <div className="flex flex-wrap gap-[8px]">
            {nearbyFacilitiesOptions.map((option) => {
              const isSelected = filters.nearbyFacilities.includes(option.id);
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => toggleArrayFilter("nearbyFacilities", option.id)}
                  className={`px-[16px] py-[10px] rounded-[20px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] transition-all duration-200 flex items-center gap-[6px] ${
                    isSelected
                      ? "border-[#fe456a] bg-[#fe456a] text-white"
                      : "border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#fe456a]/30"
                  }`}
                >
                  <Icon className="w-[16px] h-[16px]" strokeWidth={2} />
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Actions */}
      <div className="flex-none bg-white px-[24px] py-[16px] border-t border-[#e5e7eb]">
        <div className="flex gap-[12px]">
          <button
            onClick={handleClearAll}
            className="flex-1 h-[52px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] bg-transparent text-[#6b7280] border-[2px] border-[#e5e7eb] hover:bg-[#f3f4f6] transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={handleApply}
            className="flex-1 h-[52px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] bg-[#fe456a] text-white shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

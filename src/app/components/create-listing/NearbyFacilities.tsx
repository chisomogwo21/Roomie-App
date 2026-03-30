import { useState } from "react";
import { Plus, Hospital, ShoppingCart, ShoppingBag, Fuel, Bus, GraduationCap, Dumbbell, Cross, Coffee } from "lucide-react";
import { useCreateListing, type NearbyFacility } from "../CreateListingContext";

interface NearbyFacilitiesProps {
  onNext: () => void;
}

const facilityOptions = [
  { id: "hospital", label: "Hospital / Clinic", icon: Hospital },
  { id: "supermarket", label: "Supermarket", icon: ShoppingCart },
  { id: "mall", label: "Mall", icon: ShoppingBag },
  { id: "gas-station", label: "Gas station", icon: Fuel },
  { id: "transit", label: "Bus stop / Transit", icon: Bus },
  { id: "school", label: "School / University", icon: GraduationCap },
  { id: "gym", label: "Gym / Fitness", icon: Dumbbell },
  { id: "pharmacy", label: "Pharmacy", icon: Plus },
  { id: "restaurant", label: "Restaurant / Café", icon: Coffee },
  { id: "worship", label: "Mosque / Church", icon: Cross },
];

const distanceOptions = [
  { value: "very-close", label: "Very close", subtitle: "≤ 5 min" },
  { value: "close", label: "Close", subtitle: "5–10 min" },
  { value: "nearby", label: "Nearby", subtitle: "10–20 min" },
];

export function NearbyFacilities({ onNext }: NearbyFacilitiesProps) {
  const { listingData, updateNearbyFacilities } = useCreateListing();
  const [facilities, setFacilities] = useState<NearbyFacility[]>(listingData.nearbyFacilities);
  const [expandedFacility, setExpandedFacility] = useState<string | null>(null);

  const isFacilitySelected = (id: string) => {
    return facilities.some((f) => f.id === id);
  };

  const toggleFacility = (id: string) => {
    if (isFacilitySelected(id)) {
      // Remove facility
      setFacilities((prev) => prev.filter((f) => f.id !== id));
      if (expandedFacility === id) {
        setExpandedFacility(null);
      }
    } else {
      // Add facility with null distance
      setFacilities((prev) => [...prev, { id, distance: null }]);
      setExpandedFacility(id);
    }
  };

  const updateDistance = (id: string, distance: "very-close" | "close" | "nearby") => {
    setFacilities((prev) =>
      prev.map((f) => (f.id === id ? { ...f, distance } : f))
    );
  };

  const handleContinue = () => {
    updateNearbyFacilities(facilities);
    onNext();
  };

  const handleSkip = () => {
    updateNearbyFacilities([]);
    onNext();
  };

  return (
    <div className="px-[24px] pt-[24px] pb-[100px]">
      {/* Header */}
      <div className="mb-[32px]">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1f2a37] mb-[8px]">
          Nearby Facilities
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280] mb-[12px]">
          What's close to this home? (Optional)
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#9da4ae]">
          Adding nearby places helps people understand the neighborhood better.
        </p>
      </div>

      {/* Facility Selection */}
      <div className="flex flex-col gap-[12px] mb-[24px]">
        {facilityOptions.map((facility) => {
          const isSelected = isFacilitySelected(facility.id);
          const isExpanded = expandedFacility === facility.id;
          const facilityData = facilities.find((f) => f.id === facility.id);
          const Icon = facility.icon;

          return (
            <div key={facility.id}>
              {/* Facility Chip */}
              <button
                onClick={() => toggleFacility(facility.id)}
                className={`w-full px-[16px] py-[12px] rounded-[12px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] transition-all duration-200 flex items-center gap-[10px] ${
                  isSelected
                    ? "border-[#fe456a] bg-[#fef0f3] text-[#fe456a]"
                    : "border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#fe456a]/30"
                }`}
              >
                <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                <span className="flex-1 text-left">{facility.label}</span>
                {isSelected && facilityData?.distance && (
                  <span className="text-[12px] text-[#fe456a]/70">
                    {distanceOptions.find((d) => d.value === facilityData.distance)?.label}
                  </span>
                )}
              </button>

              {/* Distance Selector (shows when selected) */}
              {isSelected && isExpanded && (
                <div className="mt-[8px] ml-[16px] flex flex-col gap-[8px] animate-in fade-in slide-in-from-top-2 duration-200">
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#6b7280] mb-[4px]">
                    How far is it?
                  </p>
                  <div className="flex gap-[8px]">
                    {distanceOptions.map((option) => {
                      const isDistanceSelected = facilityData?.distance === option.value;
                      return (
                        <button
                          key={option.value}
                          onClick={(e) => {
                            e.stopPropagation();
                            updateDistance(facility.id, option.value as "very-close" | "close" | "nearby");
                            setExpandedFacility(null);
                          }}
                          className={`flex-1 px-[12px] py-[8px] rounded-[8px] border transition-all duration-200 ${
                            isDistanceSelected
                              ? "border-[#fe456a] bg-[#fe456a] text-white"
                              : "border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#fe456a]/30"
                          }`}
                        >
                          <p className={`font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] ${isDistanceSelected ? "text-white" : "text-[#1f2a37]"}`}>
                            {option.label}
                          </p>
                          <p className={`font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[14px] ${isDistanceSelected ? "text-white/80" : "text-[#9da4ae]"}`}>
                            {option.subtitle}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-[12px]">
        <button
          onClick={handleContinue}
          disabled={facilities.length === 0}
          className={`w-full h-[52px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] transition-all duration-200 ${
            facilities.length > 0
              ? "bg-[#fe456a] text-white shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f]"
              : "bg-[#e5e7eb] text-[#9da4ae] cursor-not-allowed"
          }`}
        >
          Continue
        </button>

        <button
          onClick={handleSkip}
          className="w-full h-[52px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] transition-all duration-200 bg-transparent text-[#6b7280] hover:bg-[#f3f4f6]"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
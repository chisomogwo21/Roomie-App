import { useState } from "react";
import { useCreateListing } from "../CreateListingContext";

interface SpaceDetailsProps {
  onNext: () => void;
}

export function SpaceDetails({ onNext }: SpaceDetailsProps) {
  const { listingData, updateSpaceDetails } = useCreateListing();
  const [localDetails, setLocalDetails] = useState(listingData.spaceDetails);

  const handleChange = (field: string, value: string | boolean) => {
    setLocalDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    updateSpaceDetails(localDetails);
    onNext();
  };

  // Determine which fields to show based on living setup
  const showBedrooms = !listingData.livingSetup?.includes("private-room");
  const showPrivateBathroom = listingData.livingSetup?.includes("private-room");
  const showUtilities = true; // Show for all types

  const canProceed = localDetails.bedrooms !== "" && localDetails.bathrooms !== "";

  return (
    <div className="px-[24px] pt-[24px] pb-[100px]">
      {/* Header */}
      <div className="mb-[32px]">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1f2a37] mb-[8px]">
          Space Details
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
          Tell us about the space
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-[24px] mb-[32px]">
        {/* Bedrooms */}
        {showBedrooms && (
          <div>
            <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
              Bedrooms
            </label>
            <select
              value={localDetails.bedrooms}
              onChange={(e) => handleChange("bedrooms", e.target.value)}
              className="w-full h-[48px] px-[16px] bg-white border-[1.5px] border-[#d2d6db] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] transition-colors"
            >
              <option value="">Select bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5+">5+ Bedrooms</option>
            </select>
          </div>
        )}

        {/* Bathrooms */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
            Bathrooms
          </label>
          <select
            value={localDetails.bathrooms}
            onChange={(e) => handleChange("bathrooms", e.target.value)}
            className="w-full h-[48px] px-[16px] bg-white border-[1.5px] border-[#d2d6db] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] transition-colors"
          >
            <option value="">Select bathrooms</option>
            <option value="1">1 Bathroom</option>
            <option value="1.5">1.5 Bathrooms</option>
            <option value="2">2 Bathrooms</option>
            <option value="2.5">2.5 Bathrooms</option>
            <option value="3+">3+ Bathrooms</option>
          </select>
        </div>

        {/* Furnished */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[12px]">
            Furnished
          </label>
          <div className="flex gap-[12px]">
            <button
              onClick={() => handleChange("furnished", true)}
              className={`flex-1 h-[48px] rounded-[8px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-all duration-200 ${
                localDetails.furnished === true
                  ? "border-[#fe456a] bg-[#fff5f7] text-[#fe456a]"
                  : "border-[#e5e7eb] bg-white text-[#6b7280]"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => handleChange("furnished", false)}
              className={`flex-1 h-[48px] rounded-[8px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-all duration-200 ${
                localDetails.furnished === false
                  ? "border-[#fe456a] bg-[#fff5f7] text-[#fe456a]"
                  : "border-[#e5e7eb] bg-white text-[#6b7280]"
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* Private Bathroom (only for private rooms) */}
        {showPrivateBathroom && (
          <div>
            <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[12px]">
              Private Bathroom
            </label>
            <div className="flex gap-[12px]">
              <button
                onClick={() => handleChange("privateBathroom", true)}
                className={`flex-1 h-[48px] rounded-[8px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-all duration-200 ${
                  localDetails.privateBathroom === true
                    ? "border-[#fe456a] bg-[#fff5f7] text-[#fe456a]"
                    : "border-[#e5e7eb] bg-white text-[#6b7280]"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleChange("privateBathroom", false)}
                className={`flex-1 h-[48px] rounded-[8px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-all duration-200 ${
                  localDetails.privateBathroom === false
                    ? "border-[#fe456a] bg-[#fff5f7] text-[#fe456a]"
                    : "border-[#e5e7eb] bg-white text-[#6b7280]"
                }`}
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* Utilities Included */}
        {showUtilities && (
          <div>
            <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[12px]">
              Utilities Included
            </label>
            <div className="flex gap-[12px]">
              <button
                onClick={() => handleChange("utilitiesIncluded", true)}
                className={`flex-1 h-[48px] rounded-[8px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-all duration-200 ${
                  localDetails.utilitiesIncluded === true
                    ? "border-[#fe456a] bg-[#fff5f7] text-[#fe456a]"
                    : "border-[#e5e7eb] bg-white text-[#6b7280]"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleChange("utilitiesIncluded", false)}
                className={`flex-1 h-[48px] rounded-[8px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-all duration-200 ${
                  localDetails.utilitiesIncluded === false
                    ? "border-[#fe456a] bg-[#fff5f7] text-[#fe456a]"
                    : "border-[#e5e7eb] bg-white text-[#6b7280]"
                }`}
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!canProceed}
        className={`w-full h-[52px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] transition-all duration-200 ${
          canProceed
            ? "bg-[#fe456a] text-white shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f]"
            : "bg-[#e5e7eb] text-[#9da4ae] cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
}

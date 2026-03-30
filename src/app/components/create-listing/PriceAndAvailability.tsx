import { useState } from "react";
import { useCreateListing } from "../CreateListingContext";
import { Calendar, DollarSign } from "lucide-react";

interface PriceAndAvailabilityProps {
  onNext: () => void;
}

export function PriceAndAvailability({ onNext }: PriceAndAvailabilityProps) {
  const { listingData, updatePriceAndAvailability } = useCreateListing();
  const [localData, setLocalData] = useState({
    rent: listingData.rent,
    deposit: listingData.deposit,
    moveInDate: listingData.moveInDate,
    minimumStay: listingData.minimumStay,
  });

  const handleChange = (field: string, value: string) => {
    setLocalData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    updatePriceAndAvailability(localData);
    onNext();
  };

  const canProceed =
    localData.rent !== "" &&
    localData.deposit !== "" &&
    localData.moveInDate !== "" &&
    localData.minimumStay !== "";

  return (
    <div className="px-[24px] pt-[24px] pb-[100px]">
      {/* Header */}
      <div className="mb-[32px]">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1f2a37] mb-[8px]">
          Price & Availability
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
          Let people know when it's available and how much
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-[24px] mb-[32px]">
        {/* Rent */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
            Monthly Rent
          </label>
          <div className="relative">
            <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#6b7280]">
              <DollarSign size={20} />
            </div>
            <input
              type="number"
              value={localData.rent}
              onChange={(e) => handleChange("rent", e.target.value)}
              placeholder="1,200"
              className="w-full h-[48px] pl-[44px] pr-[16px] bg-white border-[1.5px] border-[#d2d6db] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] transition-colors"
            />
          </div>
        </div>

        {/* Deposit */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
            Security Deposit
          </label>
          <div className="relative">
            <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#6b7280]">
              <DollarSign size={20} />
            </div>
            <input
              type="number"
              value={localData.deposit}
              onChange={(e) => handleChange("deposit", e.target.value)}
              placeholder="1,200"
              className="w-full h-[48px] pl-[44px] pr-[16px] bg-white border-[1.5px] border-[#d2d6db] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] transition-colors"
            />
          </div>
        </div>

        {/* Move-in Date */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
            Available Move-in Date
          </label>
          <div className="relative">
            <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#6b7280] pointer-events-none">
              <Calendar size={20} />
            </div>
            <input
              type="date"
              value={localData.moveInDate}
              onChange={(e) => handleChange("moveInDate", e.target.value)}
              className="w-full h-[48px] pl-[44px] pr-[16px] bg-white border-[1.5px] border-[#d2d6db] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] transition-colors"
            />
          </div>
        </div>

        {/* Minimum Stay */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
            Minimum Stay
          </label>
          <select
            value={localData.minimumStay}
            onChange={(e) => handleChange("minimumStay", e.target.value)}
            className="w-full h-[48px] px-[16px] bg-white border-[1.5px] border-[#d2d6db] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] transition-colors"
          >
            <option value="">Select minimum stay</option>
            <option value="1-month">1 month</option>
            <option value="3-months">3 months</option>
            <option value="6-months">6 months</option>
            <option value="12-months">12 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
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

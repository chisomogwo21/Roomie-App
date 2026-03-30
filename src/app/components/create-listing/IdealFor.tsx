import { useState } from "react";
import { useCreateListing } from "../CreateListingContext";

interface IdealForProps {
  onNext: () => void;
}

const idealForOptions = [
  { id: "students", label: "Students" },
  { id: "working-professionals", label: "Working professionals" },
  { id: "couples", label: "Couples" },
  { id: "quiet-lifestyle", label: "Quiet lifestyle" },
  { id: "social-lifestyle", label: "Social lifestyle" },
];

export function IdealFor({ onNext }: IdealForProps) {
  const { listingData, updateIdealFor } = useCreateListing();
  const [selected, setSelected] = useState<string[]>(listingData.idealFor);

  const toggleOption = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    updateIdealFor(selected);
    onNext();
  };

  const canProceed = selected.length > 0;

  return (
    <div className="px-[24px] pt-[24px] pb-[100px]">
      {/* Header */}
      <div className="mb-[32px]">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1f2a37] mb-[8px]">
          Who would be a good fit for this home?
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
          Select all that apply
        </p>
      </div>

      {/* Multi-select Chips */}
      <div className="flex flex-wrap gap-[12px] mb-[32px]">
        {idealForOptions.map((option) => {
          const isSelected = selected.includes(option.id);
          return (
            <button
              key={option.id}
              onClick={() => toggleOption(option.id)}
              className={`px-[20px] py-[12px] rounded-[24px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] transition-all duration-200 ${
                isSelected
                  ? "border-[#fe456a] bg-[#fe456a] text-white shadow-[0px_4px_8px_0px_rgba(254,69,106,0.2)]"
                  : "border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#fe456a]/30"
              }`}
            >
              {option.label}
            </button>
          );
        })}
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
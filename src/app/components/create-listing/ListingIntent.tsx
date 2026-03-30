import { Users, Home } from "lucide-react";
import { useCreateListing } from "../CreateListingContext";
import { SelectableCard } from "../SelectableCard";

interface ListingIntentProps {
  onNext: () => void;
}

export function ListingIntent({ onNext }: ListingIntentProps) {
  const { listingData, updateIntent } = useCreateListing();

  const handleSelect = (intent: "roommate" | "rental") => {
    updateIntent(intent);
  };

  const canProceed = listingData.intent !== null;

  return (
    <div className="px-[24px] pt-[24px] pb-[100px]">
      {/* Header */}
      <div className="mb-[32px]">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1f2a37] mb-[8px]">
          What are you listing?
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
          This helps us show your listing to the right people.
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-[16px] mb-[32px]">
        <SelectableCard
          icon={<Users size={24} strokeWidth={2} />}
          title="Looking for a roommate"
          description="You have a space and want to find someone to share it with"
          isSelected={listingData.intent === "roommate"}
          onClick={() => handleSelect("roommate")}
        />
        <SelectableCard
          icon={<Home size={24} strokeWidth={2} />}
          title="Listing a place for rent"
          description="You're a landlord or property manager renting out a space"
          isSelected={listingData.intent === "rental"}
          onClick={() => handleSelect("rental")}
        />
      </div>

      {/* Continue Button */}
      <button
        onClick={onNext}
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

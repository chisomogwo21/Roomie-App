import { DoorOpen, Building2, Users, Home } from "lucide-react";
import { useCreateListing, LivingSetup as LivingSetupType } from "../CreateListingContext";
import { SelectableCard } from "../SelectableCard";

interface LivingSetupProps {
  onNext: () => void;
}

export function LivingSetup({ onNext }: LivingSetupProps) {
  const { listingData, updateLivingSetup } = useCreateListing();

  const handleSelect = (setup: LivingSetupType) => {
    updateLivingSetup(setup);
  };

  const canProceed = listingData.livingSetup !== null;

  // Define options based on listing intent
  const roommateOptions = [
    {
      id: "private-room-apartment" as LivingSetupType,
      icon: <DoorOpen size={24} strokeWidth={2} />,
      title: "Private Room (Shared Apartment)",
      description: "Your own room in a shared apartment with common areas",
    },
    {
      id: "private-room-house" as LivingSetupType,
      icon: <Home size={24} strokeWidth={2} />,
      title: "Private Room (Shared House)",
      description: "Your own room in a shared house with common areas",
    },
    {
      id: "entire-home-cotenant" as LivingSetupType,
      icon: <Users size={24} strokeWidth={2} />,
      title: "Entire Home (Looking for Co-Tenant)",
      description: "Full property where you'll share all spaces equally",
    },
    {
      id: "co-living" as LivingSetupType,
      icon: <Building2 size={24} strokeWidth={2} />,
      title: "Co-Living Space",
      description: "Managed co-living with shared amenities and community",
    },
  ];

  const rentalOptions = [
    {
      id: "entire-apartment" as LivingSetupType,
      icon: <Building2 size={24} strokeWidth={2} />,
      title: "Entire Apartment",
      description: "Complete apartment for tenant use",
    },
    {
      id: "entire-house" as LivingSetupType,
      icon: <Home size={24} strokeWidth={2} />,
      title: "Entire House",
      description: "Complete house for tenant use",
    },
    {
      id: "private-room" as LivingSetupType,
      icon: <DoorOpen size={24} strokeWidth={2} />,
      title: "Private Room",
      description: "Single room rental in a larger property",
    },
    {
      id: "premium-home" as LivingSetupType,
      icon: <Home size={24} strokeWidth={2} />,
      title: "Premium Home",
      description: "High-end property with luxury amenities",
    },
  ];

  const options = listingData.intent === "roommate" ? roommateOptions : rentalOptions;

  return (
    <div className="px-[24px] pt-[24px] pb-[100px]">
      {/* Header */}
      <div className="mb-[32px]">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1f2a37] mb-[8px]">
          Living Setup
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
          How is this space shared?
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-[16px] mb-[32px]">
        {options.map((option) => (
          <SelectableCard
            key={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
            isSelected={listingData.livingSetup === option.id}
            onClick={() => handleSelect(option.id)}
          />
        ))}
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

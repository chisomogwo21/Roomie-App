import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";

interface LifestylePreferencesEditorProps {
  onBack: () => void;
}

interface ChipOption {
  id: string;
  label: string;
}

const cleanlinessOptions: ChipOption[] = [
  { id: "very-clean", label: "Very clean" },
  { id: "moderately-clean", label: "Moderately clean" },
  { id: "flexible", label: "Flexible" },
];

const noiseOptions: ChipOption[] = [
  { id: "quiet", label: "Quiet" },
  { id: "balanced", label: "Balanced" },
  { id: "social", label: "Social" },
];

const workStyleOptions: ChipOption[] = [
  { id: "wfh", label: "Work from home" },
  { id: "hybrid", label: "Hybrid" },
  { id: "mostly-outside", label: "Mostly outside" },
];

const sleepScheduleOptions: ChipOption[] = [
  { id: "early-bird", label: "Early bird" },
  { id: "night-owl", label: "Night owl" },
  { id: "flexible", label: "Flexible" },
];

const guestsOptions: ChipOption[] = [
  { id: "rarely", label: "Rarely" },
  { id: "sometimes", label: "Sometimes" },
  { id: "often", label: "Often" },
];

const smokingOptions: ChipOption[] = [
  { id: "non-smoker", label: "Non-smoker" },
  { id: "smoker", label: "Smoker" },
  { id: "okay-with-smoking", label: "Okay with smoking" },
];

const petsOptions: ChipOption[] = [
  { id: "no-pets", label: "No pets" },
  { id: "has-pets", label: "Has pets" },
  { id: "okay-with-pets", label: "Okay with pets" },
];

export function LifestylePreferencesEditor({ onBack }: LifestylePreferencesEditorProps) {
  // Initialize with some default selections for demo
  const [cleanliness, setCleanliness] = useState<string>("moderately-clean");
  const [noiseStyle, setNoiseStyle] = useState<string>("quiet");
  const [workStyle, setWorkStyle] = useState<string>("wfh");
  const [sleepSchedule, setSleepSchedule] = useState<string>("flexible");
  const [guests, setGuests] = useState<string>("sometimes");
  const [smoking, setSmoking] = useState<string>("non-smoker");
  const [pets, setPets] = useState<string>("okay-with-pets");
  const [showSaved, setShowSaved] = useState(false);

  const handleSave = () => {
    // Save preferences logic here
    console.log("Preferences saved:", {
      cleanliness,
      noiseStyle,
      workStyle,
      sleepSchedule,
      guests,
      smoking,
      pets,
    });

    // Show confirmation toast
    setShowSaved(true);
    setTimeout(() => {
      setShowSaved(false);
      onBack();
    }, 1500);
  };

  const renderChipGroup = (
    options: ChipOption[],
    selected: string,
    onSelect: (id: string) => void
  ) => {
    return (
      <div className="flex flex-wrap gap-[8px]">
        {options.map((option) => {
          const isSelected = selected === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
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
    );
  };

  return (
    <div className="size-full flex flex-col bg-[#fafafa]">
      {/* Status Bar Spacer */}
      <div className="h-[44px] bg-white" />

      {/* Header */}
      <div className="bg-white px-[24px] py-[16px] border-b border-[#e5e7eb]">
        <div className="flex items-center gap-[16px] mb-[12px]">
          <button
            onClick={onBack}
            className="p-[4px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
          >
            <ArrowLeft className="w-[20px] h-[20px] text-[#1f2a37]" />
          </button>
          <div className="flex-1">
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[28px] text-[#1f2a37]">
              Lifestyle Preferences
            </h1>
          </div>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#9da4ae] pl-[36px]">
          Help us match you with the right people
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto px-[24px] py-[24px]">
        <div className="max-w-[600px] mx-auto space-y-[32px]">
          {/* Cleanliness */}
          <div>
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
              Cleanliness
            </h3>
            {renderChipGroup(cleanlinessOptions, cleanliness, setCleanliness)}
          </div>

          {/* Noise & Social Style */}
          <div>
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
              Noise & Social Style
            </h3>
            {renderChipGroup(noiseOptions, noiseStyle, setNoiseStyle)}
          </div>

          {/* Work / Study Style */}
          <div>
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
              Work / Study Style
            </h3>
            {renderChipGroup(workStyleOptions, workStyle, setWorkStyle)}
          </div>

          {/* Sleep Schedule */}
          <div>
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
              Sleep Schedule
            </h3>
            {renderChipGroup(sleepScheduleOptions, sleepSchedule, setSleepSchedule)}
          </div>

          {/* Guests */}
          <div>
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
              Guests
            </h3>
            {renderChipGroup(guestsOptions, guests, setGuests)}
          </div>

          {/* Smoking */}
          <div>
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
              Smoking
            </h3>
            {renderChipGroup(smokingOptions, smoking, setSmoking)}
          </div>

          {/* Pets */}
          <div>
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
              Pets
            </h3>
            {renderChipGroup(petsOptions, pets, setPets)}
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="flex-none bg-white px-[24px] py-[16px] border-t border-[#e5e7eb]">
        <button
          onClick={handleSave}
          className="w-full h-[52px] bg-[#fe456a] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-colors"
        >
          Save Preferences
        </button>
      </div>

      {/* Success Toast */}
      {showSaved && (
        <div className="fixed top-[60px] left-1/2 -translate-x-1/2 z-50 bg-[#1f2a37] text-white px-[24px] py-[12px] rounded-[12px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.2)] flex items-center gap-[8px] animate-[slideDown_0.3s_ease-out]">
          <div className="w-[20px] h-[20px] bg-[#00c853] rounded-full flex items-center justify-center">
            <Check className="w-[14px] h-[14px] text-white" strokeWidth={3} />
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px]">
            Preferences saved!
          </p>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Sparkles,
  Volume2,
  Moon,
  Briefcase,
  ArrowLeft,
} from "lucide-react";

interface ToggleProps {
  label: string;
  description?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

function Toggle({ label, description, value, onChange }: ToggleProps) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex-1">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#1f2a37] leading-[18px]">
          {label}
        </p>
        {description && (
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#9da4ae] leading-[16px] mt-0.5">
            {description}
          </p>
        )}
      </div>
      <button
        onClick={() => onChange(!value)}
        className={`relative w-[48px] h-[28px] rounded-full transition-colors ${
          value ? "bg-[#fe456a]" : "bg-[#d2d6db]"
        }`}
      >
        <div
          className={`absolute top-[2px] w-[24px] h-[24px] bg-white rounded-full shadow-sm transition-transform ${
            value ? "translate-x-[22px]" : "translate-x-[2px]"
          }`}
        />
      </button>
    </div>
  );
}

interface OptionCardProps {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}

function OptionCard({ icon, label, selected, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 rounded-[12px] border-2 transition-all min-w-[100px] ${
        selected
          ? "border-[#fe456a] bg-[#fef3f2]"
          : "border-[#e5e7eb] bg-white hover:border-[#d2d6db]"
      }`}
    >
      <div
        className={`mb-2 ${selected ? "text-[#fe456a]" : "text-[#9da4ae]"}`}
      >
        {icon}
      </div>
      <span
        className={`font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-center ${
          selected ? "text-[#fe456a]" : "text-[#1f2a37]"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

interface BadgeProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function Badge({ label, selected, onClick }: BadgeProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-[20px] font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[14px] transition-all ${
        selected
          ? "bg-[#fe456a] text-white"
          : "bg-[#f3f4f6] text-[#6b7280] hover:bg-[#e5e7eb]"
      }`}
    >
      {label}
    </button>
  );
}

export function LifestylePreferences({ onBack, onComplete }: { onBack?: () => void; onComplete?: () => void }) {
  // Living Habits
  const [cleanliness, setCleanliness] = useState<string | null>(null);
  const [noiseLevel, setNoiseLevel] = useState<string | null>(null);
  const [sleepRoutine, setSleepRoutine] = useState<string | null>(null);
  const [workStyle, setWorkStyle] = useState<string | null>(null);

  // Social & Home Rules
  const [comfortableWithVisitors, setComfortableWithVisitors] = useState(false);
  const [comfortableWithPets, setComfortableWithPets] = useState(false);
  const [smokingAllowed, setSmokingAllowed] = useState(false);
  const [shareGroceries, setShareGroceries] = useState(false);
  const [shareCooking, setShareCooking] = useState(false);

  // Personality & Vibe
  const [personalityTags, setPersonalityTags] = useState<string[]>([]);

  // Dealbreakers
  const [noSmoking, setNoSmoking] = useState(false);
  const [noPets, setNoPets] = useState(false);
  const [noFrequentVisitors, setNoFrequentVisitors] = useState(false);

  const togglePersonalityTag = (tag: string) => {
    if (personalityTags.includes(tag)) {
      setPersonalityTags(personalityTags.filter((t) => t !== tag));
    } else {
      setPersonalityTags([...personalityTags, tag]);
    }
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadExisting() {
      try {
        const { getProfile, getUser } = await import("../../lib/auth");
        const { data: userData } = await getUser();
        if (userData.user) {
          const { data: profile } = await getProfile(userData.user.id);
          if (profile && profile.lifestyle_tags) {
            setPersonalityTags(profile.lifestyle_tags);
          }
        }
      } catch (err) {
        console.error("Error loading existing preferences:", err);
      }
    }
    loadExisting();
  }, []);

  const handleContinue = async () => {
    setLoading(true);
    const loadingToast = toast.loading("Saving your preferences...");
    
    try {
      const { updateProfile } = await import("../../lib/auth");
      
      // Combine all habits and tags into one array for now
      const allTags = [
        ...personalityTags,
        cleanliness ? `Cleanliness: ${cleanliness}` : "",
        noiseLevel ? `Noise: ${noiseLevel}` : "",
        sleepRoutine ? `Sleep: ${sleepRoutine}` : "",
        workStyle ? `Work: ${workStyle}` : "",
        comfortableWithVisitors ? "Visitors OK" : "",
        comfortableWithPets ? "Pets OK" : "",
        smokingAllowed ? "Smoking OK" : "",
        shareGroceries ? "Shares Groceries" : "",
        shareCooking ? "Shares Cooking" : "",
      ].filter(Boolean);

      const { error } = await updateProfile({
        lifestyle_tags: allTags
      });

      if (error) throw error;

      toast.dismiss(loadingToast);
      toast.success("Preferences saved!");
      onComplete?.();
    } catch (err: any) {
      toast.dismiss(loadingToast);
      toast.error(err.message || "Failed to save preferences");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 border-b border-[#e5e7eb]">
        {onBack && (
          <button onClick={onBack} className="mb-4">
            <ArrowLeft className="w-[24px] h-[24px] text-[#1f2a37]" />
          </button>
        )}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 h-[4px] bg-[#fe456a] rounded-full" />
          <div className="flex-1 h-[4px] bg-[#fe456a] rounded-full" />
          <div className="flex-1 h-[4px] bg-[#e5e7eb] rounded-full" />
        </div>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-[#1f2a37] leading-[32px] mb-2">
          Your Lifestyle Preferences
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9da4ae] leading-[20px]">
          Tell us how you live so we can match you better.
        </p>
      </div>

      <div className="px-6 py-6 space-y-8 max-w-[600px] mx-auto">
        {/* Section 1: Living Habits */}
        <div>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#1f2a37] leading-[24px] mb-4">
            Living Habits
          </h2>

          {/* Cleanliness */}
          <div className="mb-4">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#6b7280] leading-[16px] mb-2">
              Cleanliness
            </p>
            <div className="grid grid-cols-3 gap-3">
              <OptionCard
                icon={<Sparkles className="w-[24px] h-[24px]" />}
                label="Very tidy"
                selected={cleanliness === "very_tidy"}
                onClick={() => setCleanliness("very_tidy")}
              />
              <OptionCard
                icon={<Sparkles className="w-[24px] h-[24px]" />}
                label="Moderate"
                selected={cleanliness === "moderate"}
                onClick={() => setCleanliness("moderate")}
              />
              <OptionCard
                icon={<Sparkles className="w-[24px] h-[24px]" />}
                label="Relaxed"
                selected={cleanliness === "relaxed"}
                onClick={() => setCleanliness("relaxed")}
              />
            </div>
          </div>

          {/* Noise Level */}
          <div className="mb-4">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#6b7280] leading-[16px] mb-2">
              Noise level
            </p>
            <div className="grid grid-cols-3 gap-3">
              <OptionCard
                icon={<Volume2 className="w-[24px] h-[24px]" />}
                label="Quiet"
                selected={noiseLevel === "quiet"}
                onClick={() => setNoiseLevel("quiet")}
              />
              <OptionCard
                icon={<Volume2 className="w-[24px] h-[24px]" />}
                label="Moderate"
                selected={noiseLevel === "moderate"}
                onClick={() => setNoiseLevel("moderate")}
              />
              <OptionCard
                icon={<Volume2 className="w-[24px] h-[24px]" />}
                label="Loud"
                selected={noiseLevel === "loud"}
                onClick={() => setNoiseLevel("loud")}
              />
            </div>
          </div>

          {/* Sleep Routine */}
          <div className="mb-4">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#6b7280] leading-[16px] mb-2">
              Sleep routine
            </p>
            <div className="grid grid-cols-3 gap-3">
              <OptionCard
                icon={<Moon className="w-[24px] h-[24px]" />}
                label="Early bird"
                selected={sleepRoutine === "early_bird"}
                onClick={() => setSleepRoutine("early_bird")}
              />
              <OptionCard
                icon={<Moon className="w-[24px] h-[24px]" />}
                label="Night owl"
                selected={sleepRoutine === "night_owl"}
                onClick={() => setSleepRoutine("night_owl")}
              />
              <OptionCard
                icon={<Moon className="w-[24px] h-[24px]" />}
                label="Flexible"
                selected={sleepRoutine === "flexible"}
                onClick={() => setSleepRoutine("flexible")}
              />
            </div>
          </div>

          {/* Work Style */}
          <div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#6b7280] leading-[16px] mb-2">
              Work style
            </p>
            <div className="grid grid-cols-3 gap-3">
              <OptionCard
                icon={<Briefcase className="w-[24px] h-[24px]" />}
                label="Work from home"
                selected={workStyle === "wfh"}
                onClick={() => setWorkStyle("wfh")}
              />
              <OptionCard
                icon={<Briefcase className="w-[24px] h-[24px]" />}
                label="Hybrid"
                selected={workStyle === "hybrid"}
                onClick={() => setWorkStyle("hybrid")}
              />
              <OptionCard
                icon={<Briefcase className="w-[24px] h-[24px]" />}
                label="Mostly out"
                selected={workStyle === "mostly_out"}
                onClick={() => setWorkStyle("mostly_out")}
              />
            </div>
          </div>
        </div>

        {/* Section 2: Social & Home Rules */}
        <div>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#1f2a37] leading-[24px] mb-4">
            Social & Home Rules
          </h2>
          <div className="bg-white rounded-[12px] p-4 border border-[#e5e7eb]">
            <Toggle
              label="Comfortable with visitors"
              description="Friends or family can visit"
              value={comfortableWithVisitors}
              onChange={setComfortableWithVisitors}
            />
            <Toggle
              label="Comfortable with pets"
              description="Open to living with pets"
              value={comfortableWithPets}
              onChange={setComfortableWithPets}
            />
            <Toggle
              label="Smoking allowed"
              description="Okay with smoking at home"
              value={smokingAllowed}
              onChange={setSmokingAllowed}
            />
            <Toggle
              label="Share groceries"
              description="Split and share groceries"
              value={shareGroceries}
              onChange={setShareGroceries}
            />
            <Toggle
              label="Share cooking"
              description="Cook and share meals together"
              value={shareCooking}
              onChange={setShareCooking}
            />
          </div>
        </div>

        {/* Section 3: Personality & Vibe */}
        <div>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#1f2a37] leading-[24px] mb-2">
            Personality & Vibe
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#9da4ae] leading-[16px] mb-4">
            Select all that apply
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Chill",
              "Organized",
              "Social",
              "Quiet",
              "Minimalist",
              "Student",
              "Working professional",
              "Creative",
            ].map((tag) => (
              <Badge
                key={tag}
                label={tag}
                selected={personalityTags.includes(tag)}
                onClick={() => togglePersonalityTag(tag)}
              />
            ))}
          </div>
        </div>

        {/* Section 4: Dealbreakers */}
        <div>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#1f2a37] leading-[24px] mb-2">
            Dealbreakers
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#9da4ae] leading-[16px] mb-4">
            Set your non-negotiables
          </p>
          <div className="bg-white rounded-[12px] p-4 border-2 border-[#fecdd3]">
            <Toggle
              label="No smoking"
              description="Absolutely no smoking"
              value={noSmoking}
              onChange={setNoSmoking}
            />
            <Toggle
              label="No pets"
              description="Prefer no pets in the space"
              value={noPets}
              onChange={setNoPets}
            />
            <Toggle
              label="No frequent visitors"
              description="Prefer limited guest visits"
              value={noFrequentVisitors}
              onChange={setNoFrequentVisitors}
            />
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e7eb] px-6 py-4">
        <button
          onClick={handleContinue}
          disabled={loading}
          className="w-full bg-[#fe456a] text-white rounded-[8px] py-3 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] hover:bg-[#e63d5f] transition-colors mb-2 disabled:bg-[#d2d6db]"
        >
          {loading ? "Saving..." : "Continue"}
        </button>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#9da4ae] leading-[16px] text-center">
          You can change this later.
        </p>
      </div>
    </div>
  );
}
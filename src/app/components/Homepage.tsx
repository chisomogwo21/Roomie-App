import { Users, Heart, Home, CheckCircle } from "lucide-react";

interface HomepageProps {
  onStartMatching: () => void;
  onBrowseHomes: () => void;
}

export function Homepage({ onStartMatching, onBrowseHomes }: HomepageProps) {
  return (
    <div className="size-full flex flex-col bg-[#fcfcfd] overflow-auto">
      {/* Status Bar Spacer */}
      <div className="h-[44px] bg-white" />

      {/* Header */}
      <div className="bg-white px-[24px] py-[16px] border-b border-[#e5e7eb]">
        <div className="flex items-center justify-between">
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-[#fe456a]">
            Roomie
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-[24px] py-[32px] bg-white">
        <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] leading-[36px] text-[#1f2a37] mb-[12px]">
          Find a home that matches your lifestyle — not just your budget
        </h2>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#6b7280] mb-[24px]">
          Match with roommates and homes based on lifestyle, preferences, and compatibility.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-[12px]">
          <button
            onClick={onStartMatching}
            className="w-full h-[52px] bg-[#fe456a] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[20px] text-white hover:bg-[#e93d5f] transition-colors"
          >
            Start Matching
          </button>
          <button
            onClick={onBrowseHomes}
            className="w-full h-[52px] bg-white border border-[#fe456a] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[20px] text-[#fe456a] hover:bg-[#fef0f3] transition-colors"
          >
            Browse Homes
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-[24px] py-[32px] bg-[#fafafa]">
        <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37] mb-[24px]">
          How Roomie works
        </h3>

        {/* Steps */}
        <div className="space-y-[20px]">
          {/* Step 1 */}
          <div className="flex gap-[16px] items-start">
            <div className="flex-none w-[48px] h-[48px] bg-[#fef0f3] rounded-[12px] flex items-center justify-center">
              <Users className="w-[24px] h-[24px] text-[#fe456a]" />
            </div>
            <div className="flex-1">
              <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[4px]">
                Create your profile
              </h4>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
                Add lifestyle preferences so we understand how you live.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-[16px] items-start">
            <div className="flex-none w-[48px] h-[48px] bg-[#fef0f3] rounded-[12px] flex items-center justify-center">
              <Heart className="w-[24px] h-[24px] text-[#fe456a]" />
            </div>
            <div className="flex-1">
              <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[4px]">
                Get matched
              </h4>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
                Discover compatible roommates and homes using compatibility scores.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-[16px] items-start">
            <div className="flex-none w-[48px] h-[48px] bg-[#fef0f3] rounded-[12px] flex items-center justify-center">
              <Home className="w-[24px] h-[24px] text-[#fe456a]" />
            </div>
            <div className="flex-1">
              <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[4px]">
                Move in confidently
              </h4>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
                Request to join a home or list your space.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Roomie is Different Section */}
      <div className="px-[24px] py-[32px] bg-white">
        <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37] mb-[24px]">
          Why Roomie is different
        </h3>

        {/* Features */}
        <div className="space-y-[16px]">
          {/* Feature 1 */}
          <div className="flex gap-[12px] items-start">
            <CheckCircle className="flex-none w-[20px] h-[20px] text-[#fe456a] mt-[2px]" />
            <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1f2a37]">Lifestyle-based roommate matching</span> — Find people who share your values and living style.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-[12px] items-start">
            <CheckCircle className="flex-none w-[20px] h-[20px] text-[#fe456a] mt-[2px]" />
            <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1f2a37]">Compatibility scores (no guesswork)</span> — See how well you match before you reach out.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-[12px] items-start">
            <CheckCircle className="flex-none w-[20px] h-[20px] text-[#fe456a] mt-[2px]" />
            <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1f2a37]">Designed for shared living, not hotels</span> — Built for people who care about who they live with.
            </p>
          </div>
        </div>
      </div>

      {/* Trust & Tone Section */}
      <div className="px-[24px] py-[32px] bg-[#fafafa]">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] leading-[24px] text-center text-[#6b7280]">
          Built for people who care about who they live with.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="px-[24px] py-[24px] bg-white border-t border-[#e5e7eb]">
        <button
          onClick={onStartMatching}
          className="w-full h-[52px] bg-[#fe456a] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[20px] text-white hover:bg-[#e93d5f] transition-colors"
        >
          Start Matching
        </button>
      </div>
    </div>
  );
}

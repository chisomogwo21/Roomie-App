import { MessageCircle, Sparkles } from "lucide-react";

interface RequestAcceptedProps {
  onStartChat: () => void;
  recipientName?: string;
  compatibilityScore?: number;
  propertyTitle?: string;
}

export function RequestAccepted({
  onStartChat,
  recipientName = "Roommate",
  compatibilityScore = 82,
  propertyTitle = "the home",
}: RequestAcceptedProps) {
  return (
    <div className="size-full flex flex-col bg-[#fafafa]">
      {/* Status Bar Spacer */}
      <div className="h-[44px] bg-white" />

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-[24px] py-[48px]">
        {/* Celebration Icon */}
        <div className="w-[120px] h-[120px] bg-gradient-to-br from-[#fe456a] to-[#ff758f] rounded-full flex items-center justify-center mb-[24px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)]">
          <MessageCircle className="w-[60px] h-[60px] text-white" />
        </div>

        {/* Title */}
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] leading-[36px] text-[#1f2a37] mb-[8px] text-center">
          Your request was accepted 🎉
        </h1>

        {/* Subtitle */}
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#6b7280] mb-[32px] text-center max-w-[360px]">
          {recipientName} would love to connect with you about {propertyTitle}
        </p>

        {/* Compatibility Card */}
        <div className="w-full max-w-[400px] bg-white rounded-[16px] border border-[#e5e7eb] p-[24px] mb-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-[12px] mb-[16px]">
            <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#fef3f5] to-[#fef3f5] rounded-full flex items-center justify-center">
              <Sparkles className="w-[20px] h-[20px] text-[#fe456a]" />
            </div>
            <div className="flex-1">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37] mb-[2px]">
                Lifestyle Compatibility
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae]">
                You share similar living habits
              </p>
            </div>
          </div>

          {/* Compatibility Bar */}
          <div className="relative">
            <div className="h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#fe456a] to-[#ff758f] rounded-full transition-all duration-500"
                style={{ width: `${compatibilityScore}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-[8px]">
              <span className="font-['Inter:Regular',sans-serif] font-normal text-[11px] leading-[14px] text-[#9da4ae]">
                Compatibility Score
              </span>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[20px] text-[#fe456a]">
                {compatibilityScore}%
              </span>
            </div>
          </div>

          {/* Match Highlights */}
          <div className="mt-[16px] pt-[16px] border-t border-[#e5e7eb]">
            <div className="flex flex-wrap gap-[8px]">
              {["Clean & Organized", "Quiet Hours", "No Pets"].map((trait) => (
                <div
                  key={trait}
                  className="px-[12px] py-[6px] bg-[#fef3f5] rounded-[6px] font-['Inter:Medium',sans-serif] font-medium text-[11px] leading-[14px] text-[#fe456a]"
                >
                  {trait}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStartChat}
          className="w-full max-w-[400px] h-[52px] bg-[#fe456a] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-colors flex items-center justify-center gap-[8px]"
        >
          <MessageCircle className="w-[20px] h-[20px]" />
          Start Chat
        </button>

        {/* Helper Text */}
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#9da4ae] mt-[16px] text-center">
          You can now message each other directly
        </p>
      </div>
    </div>
  );
}

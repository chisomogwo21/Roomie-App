import { ArrowLeft, CheckCircle, Shield, Info } from "lucide-react";
import { useState } from "react";

interface RequestHandlingSettingsProps {
  onBack: () => void;
}

type ApprovalMode = "manual" | "auto";

export function RequestHandlingSettings({ onBack }: RequestHandlingSettingsProps) {
  const [approvalMode, setApprovalMode] = useState<ApprovalMode>("manual");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    // In a real app, this would save to backend
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="size-full flex flex-col bg-[#fafafa]">
      {/* Status Bar Spacer */}
      <div className="h-[44px] bg-white" />

      {/* Header */}
      <div className="bg-white px-[24px] py-[16px] border-b border-[#e5e7eb]">
        <div className="flex items-center gap-[16px]">
          <button
            onClick={onBack}
            className="p-[4px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
          >
            <ArrowLeft className="w-[20px] h-[20px] text-[#1f2a37]" />
          </button>
          <h1 className="flex-1 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37]">
            Request Handling
          </h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto px-[24px] py-[24px]">
        <div className="max-w-[600px] mx-auto space-y-[24px]">
          {/* Section Header */}
          <div>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[8px]">
              How do you want to handle requests?
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
              Choose how requests from potential roommates are approved
            </p>
          </div>

          {/* Approval Options */}
          <div className="space-y-[12px]">
            {/* Manual Approval Option */}
            <button
              onClick={() => setApprovalMode("manual")}
              className={`w-full p-[20px] rounded-[12px] border-[2px] transition-all text-left ${
                approvalMode === "manual"
                  ? "border-[#fe456a] bg-[#fef3f5]"
                  : "border-[#e5e7eb] bg-white hover:border-[#fe456a]/30"
              }`}
            >
              <div className="flex items-start gap-[12px]">
                {/* Radio Button */}
                <div
                  className={`flex-none w-[20px] h-[20px] rounded-full border-[2px] mt-[2px] transition-all ${
                    approvalMode === "manual"
                      ? "border-[#fe456a] bg-[#fe456a]"
                      : "border-[#d1d5db] bg-white"
                  } flex items-center justify-center`}
                >
                  {approvalMode === "manual" && (
                    <div className="w-[8px] h-[8px] bg-white rounded-full" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] leading-[20px] text-[#1f2a37] mb-[4px]">
                    Manual approval{" "}
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#9da4ae]">
                      (Recommended)
                    </span>
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#6b7280]">
                    Review and approve each request individually. You'll receive a notification
                    for every new request.
                  </p>
                </div>
              </div>
            </button>

            {/* Auto-Accept Option */}
            <button
              onClick={() => setApprovalMode("auto")}
              className={`w-full p-[20px] rounded-[12px] border-[2px] transition-all text-left ${
                approvalMode === "auto"
                  ? "border-[#fe456a] bg-[#fef3f5]"
                  : "border-[#e5e7eb] bg-white hover:border-[#fe456a]/30"
              }`}
            >
              <div className="flex items-start gap-[12px]">
                {/* Radio Button */}
                <div
                  className={`flex-none w-[20px] h-[20px] rounded-full border-[2px] mt-[2px] transition-all ${
                    approvalMode === "auto"
                      ? "border-[#fe456a] bg-[#fe456a]"
                      : "border-[#d1d5db] bg-white"
                  } flex items-center justify-center`}
                >
                  {approvalMode === "auto" && (
                    <div className="w-[8px] h-[8px] bg-white rounded-full" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] leading-[20px] text-[#1f2a37] mb-[4px]">
                    Auto-accept highly compatible requests
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#6b7280]">
                    Automatically accept requests that meet your criteria. Save time while
                    staying in control.
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Auto-Accept Criteria (shown when auto is selected) */}
          {approvalMode === "auto" && (
            <div className="bg-white rounded-[12px] border border-[#e5e7eb] p-[20px] space-y-[16px]">
              <div className="flex items-start gap-[12px]">
                <div className="w-[32px] h-[32px] bg-[#fef3f5] rounded-[8px] flex items-center justify-center flex-none">
                  <CheckCircle className="w-[16px] h-[16px] text-[#fe456a]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
                    Auto-Accept Criteria
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#6b7280] mb-[12px]">
                    Requests will be automatically accepted only if they meet all of these
                    requirements:
                  </p>

                  {/* Criteria List */}
                  <div className="space-y-[8px]">
                    <div className="flex items-start gap-[8px]">
                      <div className="w-[4px] h-[4px] bg-[#fe456a] rounded-full mt-[7px] flex-none" />
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#1f2a37]">
                        <span className="font-medium">Compatibility ≥ 75%</span> based on
                        lifestyle preferences
                      </p>
                    </div>
                    <div className="flex items-start gap-[8px]">
                      <div className="w-[4px] h-[4px] bg-[#fe456a] rounded-full mt-[7px] flex-none" />
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#1f2a37]">
                        <span className="font-medium">Matching living setup</span> (e.g., both
                        seeking private room)
                      </p>
                    </div>
                    <div className="flex items-start gap-[8px]">
                      <div className="w-[4px] h-[4px] bg-[#fe456a] rounded-full mt-[7px] flex-none" />
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#1f2a37]">
                        <span className="font-medium">Matching budget range</span> within your
                        listed price
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Safety Notice */}
          <div className="bg-[#f3f4f6] rounded-[12px] border border-[#e5e7eb] p-[16px]">
            <div className="flex items-start gap-[12px]">
              <div className="w-[32px] h-[32px] bg-white rounded-[8px] flex items-center justify-center flex-none">
                <Shield className="w-[16px] h-[16px] text-[#6b7280]" />
              </div>
              <div className="flex-1">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37] mb-[6px]">
                  Safety & Control
                </h3>
                <div className="space-y-[6px]">
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#6b7280]">
                    • Accepted requests only unlock chat—no payments or commitments
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#6b7280]">
                    • You can block or report users at any time
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#6b7280]">
                    • You're always in control of who you chat with
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Note */}
          <div className="bg-[#fef3f5] rounded-[12px] border border-[#fce4e9] p-[16px]">
            <div className="flex items-start gap-[12px]">
              <Info className="w-[16px] h-[16px] text-[#fe456a] mt-[2px] flex-none" />
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#6b7280]">
                <span className="font-medium text-[#1f2a37]">You can change this anytime.</span>{" "}
                Update your preferences whenever you need to adjust how requests are handled.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="flex-none bg-white px-[24px] py-[16px] border-t border-[#e5e7eb]">
        <div className="max-w-[600px] mx-auto">
          <button
            onClick={handleSave}
            className="w-full h-[52px] bg-[#fe456a] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-colors flex items-center justify-center gap-[8px]"
          >
            {isSaved ? (
              <>
                <CheckCircle className="w-[20px] h-[20px]" />
                Saved!
              </>
            ) : (
              "Save Settings"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

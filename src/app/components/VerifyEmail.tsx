import { useState } from "react";
import { ArrowLeft } from "lucide-react";

interface VerifyEmailProps {
  onBack: () => void;
  onVerify: (code: string) => void;
}

export function VerifyEmail({ onBack, onVerify }: VerifyEmailProps) {
  const [code, setCode] = useState(["5", "4", "8", "4"]);

  const handleVerify = () => {
    onVerify(code.join(""));
  };

  return (
    <div className="bg-[#fcfcfd] relative size-full flex flex-col">
      {/* Status Bar */}
      <div className="h-[44px] bg-transparent" />

      {/* Back Button */}
      <div className="px-[24px] pt-[24px] pb-[24px]">
        <button 
          onClick={onBack}
          className="size-[24px] flex items-center justify-center"
        >
          <ArrowLeft className="w-[20px] h-[20px] text-[#1f2a37]" strokeWidth={1.5} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-[24px]">
        {/* Caption */}
        <div className="flex flex-col gap-[8px] mb-[32px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37]">
            Verify your Email
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#9da4ae]">
            Please enter 4 digit verification that have been sent to your email address
          </p>
        </div>

        {/* Code Input */}
        <div className="flex flex-col gap-[48px] items-center mb-[32px] pt-[80px]">
          {/* Input Boxes */}
          <div className="flex gap-[16px] justify-between w-full">
            {code.map((digit, index) => (
              <div
                key={index}
                className="bg-white size-[60px] rounded-[8px] border border-[#d2d6db] flex items-center justify-center"
              >
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-[#1f2a37]">
                  {digit}
                </p>
              </div>
            ))}
          </div>

          {/* Resend Code */}
          <div className="flex flex-col gap-[4px] items-center text-center">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37]">
              Didn't receive code ?
            </p>
            <button className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#f97066] hover:opacity-70 transition-opacity">
              Resend code
            </button>
          </div>
        </div>
      </div>

      {/* Verify Button */}
      <div className="px-[24px] pb-[40px]">
        <button
          onClick={handleVerify}
          className="bg-[#fe456a] w-full h-[52px] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[27px] text-white hover:bg-[#e63d5f] transition-colors"
        >
          Verify
        </button>
      </div>

      {/* Home Indicator */}
      <div className="h-[34px] flex items-center justify-center">
        <div className="w-[134px] h-[5px] bg-black/10 rounded-full" />
      </div>
    </div>
  );
}

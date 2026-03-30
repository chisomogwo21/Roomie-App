import svgPaths from "../../imports/svg-wg8aalra69";

interface SuccessResetProps {
  onContinue: () => void;
}

export function SuccessReset({ onContinue }: SuccessResetProps) {
  return (
    <div className="bg-[#fcfcfd] relative size-full flex flex-col">
      {/* Status Bar */}
      <div className="h-[44px] bg-transparent" />

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-[24px]">
        {/* Illustration */}
        <div className="relative size-[208px] mb-[48px]">
          {/* Outer Circle */}
          <div className="absolute inset-0 rounded-full bg-[#f4ebff]" />
          
          {/* Middle Circle */}
          <div className="absolute left-[17px] top-[17px] size-[174px] rounded-full bg-white" />
          
          {/* Shield Icon */}
          <div className="absolute left-[38px] top-[38px] size-[132px] flex items-center justify-center">
            <svg className="w-full h-full" fill="none" viewBox="0 0 132 132">
              <g>
                <path 
                  d={svgPaths.p37db380} 
                  fill="#FE456A" 
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Caption */}
        <div className="flex flex-col gap-[16px] items-center text-center mb-[48px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37]">
            Success!
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#9da4ae] max-w-[290px]">
            You password has been changed. Please log in again with a new password.
          </p>
        </div>
      </div>

      {/* Continue Button */}
      <div className="px-[24px] pb-[40px]">
        <button
          onClick={onContinue}
          className="bg-[#fe456a] w-full h-[52px] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[27px] text-white hover:bg-[#e63d5f] transition-colors"
        >
          Continue
        </button>
      </div>

      {/* Home Indicator */}
      <div className="h-[34px] flex items-center justify-center">
        <div className="w-[134px] h-[5px] bg-black/10 rounded-full" />
      </div>
    </div>
  );
}

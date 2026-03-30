import { ReactNode } from "react";

interface SelectableCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

export function SelectableCard({
  icon,
  title,
  description,
  isSelected,
  onClick,
}: SelectableCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-[20px] rounded-[12px] border-[2px] transition-all duration-200 text-left ${
        isSelected
          ? "border-[#fe456a] bg-[#fff5f7] shadow-[0px_4px_12px_0px_rgba(254,69,106,0.15)]"
          : "border-[#e5e7eb] bg-white hover:border-[#fe456a]/30"
      }`}
    >
      <div className="flex flex-col gap-[12px]">
        <div
          className={`w-[48px] h-[48px] rounded-[10px] flex items-center justify-center ${
            isSelected ? "bg-[#fe456a]" : "bg-[#f3f4f6]"
          }`}
        >
          <div className={isSelected ? "text-white" : "text-[#6b7280]"}>
            {icon}
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
            {title}
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center gap-[6px] justify-center">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index + 1 === currentStep;
        const isCompleted = index + 1 < currentStep;
        
        return (
          <div
            key={index}
            className={`h-[4px] rounded-full transition-all duration-300 ${
              isActive
                ? "w-[24px] bg-[#fe456a]"
                : isCompleted
                ? "w-[16px] bg-[#fe456a]"
                : "w-[16px] bg-[#d2d6db]"
            }`}
          />
        );
      })}
    </div>
  );
}

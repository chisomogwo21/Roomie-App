import { useState } from "react";
import { OnBoarding1Enhanced, OnBoarding2Enhanced, OnBoarding3Enhanced } from "./OnboardingEnhanced";

interface OnboardingFlowProps {
  onComplete: () => void;
  onSkip: () => void;
}

export function OnboardingFlow({ onComplete, onSkip }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  // Wrap the enhanced components to add interactive functionality
  const screens = [
    <OnBoarding1Wrapper key="onboard1" onNext={handleNext} onSkip={onSkip} />,
    <OnBoarding2Wrapper key="onboard2" onNext={handleNext} onSkip={onSkip} />,
    <OnBoarding3Wrapper key="onboard3" onNext={onComplete} onSkip={onSkip} />,
  ];

  return <>{screens[currentStep]}</>;
}

// Wrapper for OnBoarding1 to add click handlers
function OnBoarding1Wrapper({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="size-full relative">
      <div className="pointer-events-none">
        <OnBoarding1Enhanced />
      </div>
      {/* Clickable Skip button overlay */}
      <button
        onClick={onSkip}
        className="absolute right-[24px] top-[60px] w-[65px] h-[32px] z-50 rounded-[24px]"
        aria-label="Skip onboarding"
      />
      {/* Clickable Next button overlay */}
      <button
        onClick={onNext}
        className="absolute left-[24px] top-[678px] w-[327px] h-[52px] z-50 rounded-[8px]"
        aria-label="Next"
      />
    </div>
  );
}

// Wrapper for OnBoarding2 to add click handlers
function OnBoarding2Wrapper({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="size-full relative">
      <div className="pointer-events-none">
        <OnBoarding2Enhanced />
      </div>
      {/* Clickable Skip button overlay */}
      <button
        onClick={onSkip}
        className="absolute right-[24px] top-[60px] w-[65px] h-[32px] z-50 rounded-[24px]"
        aria-label="Skip onboarding"
      />
      {/* Clickable Next button overlay */}
      <button
        onClick={onNext}
        className="absolute left-[24px] top-[678px] w-[327px] h-[52px] z-50 rounded-[8px]"
        aria-label="Next"
      />
    </div>
  );
}

// Wrapper for OnBoarding3 to add click handlers
function OnBoarding3Wrapper({ onNext }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="size-full relative">
      <div className="pointer-events-none">
        <OnBoarding3Enhanced />
      </div>
      {/* Clickable Get Started button overlay */}
      <button
        onClick={onNext}
        className="absolute left-[24px] top-[678px] w-[327px] h-[52px] z-50 rounded-[8px]"
        aria-label="Get Started"
      />
    </div>
  );
}
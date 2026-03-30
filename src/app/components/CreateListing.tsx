import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { CreateListingProvider, useCreateListing } from "./CreateListingContext";
import { ProgressIndicator } from "./ProgressIndicator";
import { ListingIntent } from "./create-listing/ListingIntent";
import { LivingSetup } from "./create-listing/LivingSetup";
import { Location } from "./create-listing/Location";
import { ExistingRoommates } from "./create-listing/ExistingRoommates";
import { SpaceDetails } from "./create-listing/SpaceDetails";
import { IdealFor } from "./create-listing/IdealFor";
import { NearbyFacilities } from "./create-listing/NearbyFacilities";
import { PriceAndAvailability } from "./create-listing/PriceAndAvailability";
import { PhotosAndPublish } from "./create-listing/PhotosAndPublish";

interface CreateListingProps {
  onBack: () => void;
}

function CreateListingFlow({ onBack }: CreateListingProps) {
  const { shouldShowRoommateScreen } = useCreateListing();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const handlePublish = () => {
    // Handle listing publication
    console.log("Listing published!");
    onBack();
  };

  // Determine which screen to show based on current step
  const showRoommates = shouldShowRoommateScreen();
  const totalSteps = showRoommates ? 9 : 8;

  return (
    <div className="size-full flex flex-col bg-[#fcfcfd]">
      {/* Header */}
      <div className="flex-none">
        {/* Status Bar Spacer */}
        <div className="h-[44px]" />

        {/* Top Bar */}
        <div className="px-[24px] py-[16px] flex items-center justify-between">
          <button
            onClick={handleBack}
            className="p-[4px] -ml-[4px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
          >
            <ArrowLeft className="w-[24px] h-[24px] text-[#1f2a37]" />
          </button>
          <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
          <div className="w-[24px]" /> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {currentStep === 1 && <ListingIntent onNext={handleNext} />}
        {currentStep === 2 && <LivingSetup onNext={handleNext} />}
        {currentStep === 3 && <Location onNext={handleNext} />}
        {currentStep === 4 && showRoommates && <ExistingRoommates onNext={handleNext} />}
        {currentStep === 4 && !showRoommates && <SpaceDetails onNext={handleNext} />}
        {currentStep === 5 && showRoommates && <SpaceDetails onNext={handleNext} />}
        {currentStep === 5 && !showRoommates && <IdealFor onNext={handleNext} />}
        {currentStep === 6 && showRoommates && <IdealFor onNext={handleNext} />}
        {currentStep === 6 && !showRoommates && <NearbyFacilities onNext={handleNext} />}
        {currentStep === 7 && showRoommates && <NearbyFacilities onNext={handleNext} />}
        {currentStep === 7 && !showRoommates && <PriceAndAvailability onNext={handleNext} />}
        {currentStep === 8 && showRoommates && <PriceAndAvailability onNext={handleNext} />}
        {currentStep === 8 && !showRoommates && <PhotosAndPublish onPublish={handlePublish} />}
        {currentStep === 9 && showRoommates && <PhotosAndPublish onPublish={handlePublish} />}
      </div>
    </div>
  );
}

export function CreateListing({ onBack }: CreateListingProps) {
  return (
    <CreateListingProvider>
      <CreateListingFlow onBack={onBack} />
    </CreateListingProvider>
  );
}
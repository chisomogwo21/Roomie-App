import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { CreateListingProvider, useCreateListing, ListingData } from "./CreateListingContext";
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
  initialData?: any;
}

function CreateListingFlow({ onBack, initialData }: CreateListingProps) {
  const { shouldShowRoommateScreen, loadListingData, resetListing } = useCreateListing();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (initialData) {
      // Map DB fields to Context state format
      const mappedData: ListingData = {
        id: initialData.id,
        user_id: initialData.user_id,
        intent: initialData.intent,
        livingSetup: initialData.living_setup,
        existingRoommates: initialData.existing_roommates || [],
        spaceDetails: {
          bedrooms: initialData.bedrooms || "",
          bathrooms: initialData.bathrooms || "",
          furnished: initialData.furnished,
          privateBathroom: initialData.private_bathroom,
          utilitiesIncluded: initialData.utilities_included,
        },
        locationDetails: {
          country: initialData.country || "",
          city: initialData.city || "",
          area: initialData.area || "",
          address: initialData.address || "",
          hideAddress: initialData.hide_address || false,
        },
        idealFor: initialData.ideal_for || [],
        nearbyFacilities: initialData.nearby_facilities || [],
        rent: initialData.rent?.toString() || "",
        deposit: initialData.deposit?.toString() || "",
        moveInDate: initialData.move_in_date || "",
        minimumStay: initialData.minimum_stay || "",
        photos: initialData.images || (initialData.image_url ? [initialData.image_url] : []),
        description: initialData.description || "",
      };
      loadListingData(mappedData);
    } else {
      resetListing();
    }
  }, [initialData]);

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
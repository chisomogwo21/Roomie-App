import { createContext, useContext, useState, ReactNode } from "react";

export type ListingIntent = "roommate" | "rental" | null;
export type LivingSetup = 
  | "private-room-apartment"
  | "private-room-house"
  | "entire-home-cotenant"
  | "co-living"
  | "entire-apartment"
  | "entire-house"
  | "private-room"
  | "premium-home"
  | null;

export interface RoommateProfile {
  id: string;
  photoUrl: string | null;
  firstName: string;
  ageRange: string;
  occupation: string;
  lifestyleBadges: string[];
  bio: string;
}

export interface SpaceDetails {
  bedrooms: string;
  bathrooms: string;
  furnished: boolean | null;
  privateBathroom: boolean | null;
  utilitiesIncluded: boolean | null;
}

export interface LocationDetails {
  country: string;
  city: string;
  area: string;
  address: string;
  hideAddress: boolean;
}

export interface NearbyFacility {
  id: string;
  distance: "very-close" | "close" | "nearby" | null;
}

export interface ListingData {
  id?: string;
  user_id?: string;
  title?: string;
  location?: string;
  image_url?: string;
  images?: string[];
  intent: ListingIntent;
  livingSetup: LivingSetup;
  existingRoommates: RoommateProfile[];
  spaceDetails: SpaceDetails;
  locationDetails: LocationDetails;
  idealFor: string[];
  nearbyFacilities: NearbyFacility[];
  rent: string;
  deposit: string;
  moveInDate: string;
  minimumStay: string;
  photos: (File | string)[];
  description: string;
}

interface CreateListingContextType {
  listingData: ListingData;
  updateIntent: (intent: ListingIntent) => void;
  updateLivingSetup: (setup: LivingSetup) => void;
  updateExistingRoommates: (roommates: RoommateProfile[]) => void;
  updateSpaceDetails: (details: Partial<SpaceDetails>) => void;
  updateLocationDetails: (details: Partial<LocationDetails>) => void;
  updateIdealFor: (idealFor: string[]) => void;
  updateNearbyFacilities: (facilities: NearbyFacility[]) => void;
  updatePriceAndAvailability: (data: {
    rent: string;
    deposit: string;
    moveInDate: string;
    minimumStay: string;
  }) => void;
  updatePhotosAndDescription: (photos: File[], description: string) => void;
  resetListing: () => void;
  shouldShowRoommateScreen: () => boolean;
}

const CreateListingContext = createContext<CreateListingContextType | undefined>(undefined);

const initialListingData: ListingData = {
  intent: null,
  livingSetup: null,
  existingRoommates: [],
  spaceDetails: {
    bedrooms: "",
    bathrooms: "",
    furnished: null,
    privateBathroom: null,
    utilitiesIncluded: null,
  },
  locationDetails: {
    country: "",
    city: "",
    area: "",
    address: "",
    hideAddress: false,
  },
  idealFor: [],
  nearbyFacilities: [],
  rent: "",
  deposit: "",
  moveInDate: "",
  minimumStay: "",
  photos: [],
  description: "",
};

export function CreateListingProvider({ children }: { children: ReactNode }) {
  const [listingData, setListingData] = useState<ListingData>(initialListingData);

  const updateIntent = (intent: ListingIntent) => {
    setListingData((prev) => ({ ...prev, intent, livingSetup: null }));
  };

  const updateLivingSetup = (setup: LivingSetup) => {
    setListingData((prev) => ({ ...prev, livingSetup: setup }));
  };

  const updateExistingRoommates = (roommates: RoommateProfile[]) => {
    setListingData((prev) => ({ ...prev, existingRoommates: roommates }));
  };

  const updateSpaceDetails = (details: Partial<SpaceDetails>) => {
    setListingData((prev) => ({
      ...prev,
      spaceDetails: { ...prev.spaceDetails, ...details },
    }));
  };

  const updateLocationDetails = (details: Partial<LocationDetails>) => {
    setListingData((prev) => ({
      ...prev,
      locationDetails: { ...prev.locationDetails, ...details },
    }));
  };

  const updateIdealFor = (idealFor: string[]) => {
    setListingData((prev) => ({ ...prev, idealFor }));
  };

  const updateNearbyFacilities = (facilities: NearbyFacility[]) => {
    setListingData((prev) => ({ ...prev, nearbyFacilities: facilities }));
  };

  const updatePriceAndAvailability = (data: {
    rent: string;
    deposit: string;
    moveInDate: string;
    minimumStay: string;
  }) => {
    setListingData((prev) => ({ ...prev, ...data }));
  };

  const updatePhotosAndDescription = (photos: File[], description: string) => {
    setListingData((prev) => ({ ...prev, photos, description }));
  };

  const resetListing = () => {
    setListingData(initialListingData);
  };

  const shouldShowRoommateScreen = () => {
    return listingData.intent === "roommate" && listingData.livingSetup !== null;
  };

  return (
    <CreateListingContext.Provider
      value={{
        listingData,
        updateIntent,
        updateLivingSetup,
        updateExistingRoommates,
        updateSpaceDetails,
        updateLocationDetails,
        updateIdealFor,
        updateNearbyFacilities,
        updatePriceAndAvailability,
        updatePhotosAndDescription,
        resetListing,
        shouldShowRoommateScreen,
      }}
    >
      {children}
    </CreateListingContext.Provider>
  );
}

export function useCreateListing() {
  const context = useContext(CreateListingContext);
  if (!context) {
    throw new Error("useCreateListing must be used within CreateListingProvider");
  }
  return context;
}
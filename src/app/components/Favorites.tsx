import { ArrowLeft, Heart, MapPin, Bed, Bath } from "lucide-react";
import type { ListingData } from "./CreateListingContext";

interface FavoritesProps {
  onBack: () => void;
  favorites: ListingData[];
  onViewListing: (listing: ListingData) => void;
}

export function Favorites({ onBack, favorites, onViewListing }: FavoritesProps) {
  return (
    <div className="size-full flex flex-col bg-[#fafafa]">
      <div className="h-[44px] bg-white" />
      <div className="bg-white px-[16px] py-[12px] border-b border-[#e5e7eb] flex items-center gap-[12px]">
        <button onClick={onBack} className="p-[4px] hover:bg-[#f3f4f6] rounded-[8px]">
          <ArrowLeft className="w-[24px] h-[24px] text-[#1f2a37]" />
        </button>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#1f2a37]">
          Favorites
        </h1>
      </div>

      <div className="flex-1 overflow-auto p-[20px] pb-[100px]">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-[100px] text-center">
            <div className="w-[80px] h-[80px] rounded-full bg-white shadow-sm flex items-center justify-center mb-[20px]">
              <Heart className="w-[32px] h-[32px] text-[#d2d6db]" />
            </div>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#1f2a37] mb-[8px]">
              No favorites yet
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9da4ae] max-w-[240px]">
              Save properties you love by tapping the heart icon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-[20px]">
            {favorites.map((listing, idx) => (
              <button
                key={idx}
                onClick={() => onViewListing(listing)}
                className="bg-white rounded-[16px] overflow-hidden border border-[#e5e7eb] text-left hover:shadow-md transition-shadow active:scale-[0.98]"
              >
                <div className="relative h-[200px]">
                  <img
                    src={typeof listing.photos?.[0] === 'string' 
                      ? listing.photos[0] 
                      : (listing.photos?.[0] ? URL.createObjectURL(listing.photos[0]) : "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")}
                    alt={listing.description}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-[12px] right-[12px] w-[32px] h-[32px] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <Heart className="w-[18px] h-[18px] text-[#fe456a] fill-[#fe456a]" />
                  </div>
                </div>
                <div className="p-[16px]">
                  <div className="flex items-center gap-[8px] mb-[8px]">
                    <span className="px-[8px] py-[4px] bg-[#fe456a]/10 text-[#fe456a] rounded-[6px] font-['Inter:Medium',sans-serif] font-medium text-[10px] uppercase tracking-wider">
                      {listing.intent}
                    </span>
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#9da4ae]">
                      {listing.livingSetup}
                    </span>
                  </div>
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#1f2a37] mb-[4px] line-clamp-1">
                    {listing.description || "Beautiful Space"}
                  </h3>
                  <div className="flex items-center gap-[4px] mb-[12px]">
                    <MapPin className="w-[14px] h-[14px] text-[#9da4ae]" />
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#9da4ae]">
                      Kigali, Rwanda
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-[12px] pt-[12px] border-t border-[#f3f4f6]">
                    <div className="flex items-center gap-[4px]">
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#fe456a]">
                        ${listing.rent}
                      </span>
                      <span className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#9da4ae]">
                        /month
                      </span>
                    </div>
                    <div className="flex items-center gap-[12px]">
                      <div className="flex items-center gap-[4px]">
                        <Bed className="w-[14px] h-[14px] text-[#1f2a37]" />
                        <span className="text-[12px] text-[#1f2a37]">{listing.spaceDetails?.bedrooms || 1}</span>
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <Bath className="w-[14px] h-[14px] text-[#1f2a37]" />
                        <span className="text-[12px] text-[#1f2a37]">{listing.spaceDetails?.bathrooms || 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import { ArrowLeft, Clock, MapPin, Bed, Bath } from "lucide-react";
import type { ListingData } from "./CreateListingContext";

interface RecentViewedProps {
  onBack: () => void;
  recentListings: ListingData[];
  onViewListing: (listing: ListingData) => void;
}

export function RecentViewed({ onBack, recentListings, onViewListing }: RecentViewedProps) {
  return (
    <div className="size-full flex flex-col bg-[#fafafa]">
      <div className="h-[44px] bg-white" />
      <div className="bg-white px-[16px] py-[12px] border-b border-[#e5e7eb] flex items-center gap-[12px]">
        <button onClick={onBack} className="p-[4px] hover:bg-[#f3f4f6] rounded-[8px]">
          <ArrowLeft className="w-[24px] h-[24px] text-[#1f2a37]" />
        </button>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#1f2a37]">
          Recent Viewed
        </h1>
      </div>

      <div className="flex-1 overflow-auto p-[20px] pb-[100px]">
        {recentListings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-[100px] text-center">
            <div className="w-[80px] h-[80px] rounded-full bg-white shadow-sm flex items-center justify-center mb-[20px]">
              <Clock className="w-[32px] h-[32px] text-[#d2d6db]" />
            </div>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#1f2a37] mb-[8px]">
              No history yet
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9da4ae] max-w-[240px]">
              Properties you view will appear here for easy access.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-[20px]">
            {recentListings.map((listing, idx) => (
              <button
                key={idx}
                onClick={() => onViewListing(listing)}
                className="bg-white rounded-[16px] overflow-hidden border border-[#e5e7eb] text-left hover:shadow-md transition-shadow active:scale-[0.98] flex gap-[12px] p-[12px]"
              >
                <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden flex-shrink-0">
                  <img
                    src={typeof listing.photos?.[0] === 'string' 
                      ? listing.photos[0] 
                      : (listing.photos?.[0] ? URL.createObjectURL(listing.photos[0]) : "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")}
                    alt={listing.description}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between py-[2px]">
                  <div>
                    <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[#1f2a37] mb-[2px] line-clamp-1">
                      {listing.description || "Beautiful Space"}
                    </h3>
                    <div className="flex items-center gap-[4px] mb-[4px]">
                      <MapPin className="w-[12px] h-[12px] text-[#9da4ae]" />
                      <span className="font-['Inter:Regular',sans-serif] font-normal text-[11px] text-[#9da4ae]">
                        Kigali, Rwanda
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[2px]">
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[#fe456a]">
                        ${listing.rent}
                      </span>
                      <span className="font-['Inter:Regular',sans-serif] font-normal text-[10px] text-[#9da4ae]">
                        /mo
                      </span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="flex items-center gap-[2px]">
                        <Bed className="w-[12px] h-[12px] text-[#1f2a37]" />
                        <span className="text-[11px] text-[#1f2a37]">{listing.spaceDetails?.bedrooms || 1}</span>
                      </div>
                      <div className="flex items-center gap-[2px]">
                        <Bath className="w-[12px] h-[12px] text-[#1f2a37]" />
                        <span className="text-[11px] text-[#1f2a37]">{listing.spaceDetails?.bathrooms || 1}</span>
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

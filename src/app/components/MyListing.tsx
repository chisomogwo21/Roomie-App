import { Plus, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchMyProperties } from "../../lib/properties";
import { toast } from "sonner";

interface MyListingProps {
  onCreateListing: () => void;
}

export function MyListing({ onCreateListing }: MyListingProps) {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadListings() {
      setLoading(true);
      try {
        const { data, error } = await fetchMyProperties();
        if (!isMounted) return;
        
        if (error) {
          toast.error("Failed to load your listings.");
        } else {
          // Filter out any potential duplicates by ID just to be safe
          const uniqueProperties = (data || []).filter((prop, index, self) => 
            index === self.findIndex((p) => p.id === prop.id)
          );
          setProperties(uniqueProperties);
        }
      } catch (err: any) {
        if (!isMounted) return;
        toast.error(err.message || "Failed to load your listings.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadListings();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="size-full flex flex-col bg-[#fcfcfd]">
      {/* Status Bar Spacer */}
      <div className="h-[44px]" />

      {/* Header */}
      <div className="px-[24px] py-[16px] border-b border-[#e5e7eb] flex justify-between items-center bg-white sticky top-0 z-10">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mx-auto relative left-4">
          My Listing
        </h1>
        <button
          onClick={onCreateListing}
          className="p-2 bg-[#f3f4f6] rounded-full hover:bg-[#e5e7eb] transition-colors"
        >
          <Plus size={20} className="text-[#1f2a37]" />
        </button>
      </div>

      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-[32px] h-[32px] animate-spin text-[#fe456a]" />
        </div>
      ) : properties.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center px-[24px] pb-[100px]">
          <div className="w-[120px] h-[120px] rounded-full bg-[#f3f4f6] flex items-center justify-center mb-[24px]">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52.5 22.5L30 7.5L7.5 22.5V50C7.5 51.3261 8.02678 52.5979 8.96447 53.5355C9.90215 54.4732 11.1739 55 12.5 55H47.5C48.8261 55 50.0979 54.4732 51.0355 53.5355C51.9732 52.5979 52.5 51.3261 52.5 50V22.5Z"
                stroke="#9DA4AE"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.5 55V30H37.5V55"
                stroke="#9DA4AE"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[28px] text-[#1f2a37] mb-[8px]">
            No listings yet
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280] text-center max-w-[280px] mb-[32px]">
            Create your first listing to find your perfect roommate or tenant
          </p>

          <button
            onClick={onCreateListing}
            className="flex items-center gap-[8px] h-[52px] px-[24px] bg-[#fe456a] text-white rounded-[8px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-colors font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px]"
          >
            <Plus size={20} strokeWidth={2.5} />
            Create Listing
          </button>
        </div>
      ) : (
        <div className="flex-1 overflow-auto px-6 py-6 pb-[100px]">
          <div className="flex flex-col gap-4 max-w-[600px] mx-auto">
            {properties.map((property) => (
              <div
                key={property.id}
                className="w-full bg-white rounded-[16px] border border-[#e5e7eb] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-[200px] bg-gray-100">
                  <img
                    src={property.image_url || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-sm">
                    <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-sm text-[#1f2a37]">
                      Listed
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-lg text-[#1f2a37] leading-tight">
                      {property.title}
                    </h3>
                    <div className="text-right ml-4 flex-shrink-0">
                      <span className="font-['Inter:Bold',sans-serif] font-bold text-lg text-[#fe456a]">
                        ${property.price}
                      </span>
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-xs text-[#9da4ae]">
                        /mo
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#6b7280] mb-4">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-sm">
                      {property.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

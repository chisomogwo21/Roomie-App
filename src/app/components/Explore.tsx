import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, Loader2, MapPin, Bed, Bath, Home } from "lucide-react";
import { FilterModal } from "./FilterModal";
import { fetchProperties } from "../../lib/properties";

interface ExploreProps {
  onSelectCity?: (cityName: string) => void;
  onViewListing?: () => void;
  onViewProfile?: () => void;
}

export function Explore({ onViewListing }: ExploreProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProperties() {
      setLoading(true);
      try {
        const { data, error } = await fetchProperties();
        if (error) {
          setError("Failed to load properties");
        } else {
          setProperties(data || []);
        }
      } catch (err) {
        console.error("Error loading properties:", err);
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }
    loadProperties();
  }, []);

  const handleApplyFilters = (count: number) => {
    setActiveFiltersCount(count);
    setIsFilterOpen(false);
  };

  const filteredProperties = properties.filter((prop) => {
    const matchesSearch = 
      prop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (prop.description && prop.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  return (
    <>
      <div className="size-full flex flex-col bg-[#fafafa]">
        {/* Status Bar Spacer */}
        <div className="h-[44px] bg-white" />

        {/* Header */}
        <div className="bg-white px-[24px] py-[16px] border-b border-[#e5e7eb]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1f2a37]">
            Explore
          </h1>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white px-[24px] py-[12px] border-b border-[#e5e7eb]">
          <div className="flex gap-[12px] items-center">
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-[12px] px-[16px] py-[12px] bg-[#f9fafb] rounded-[12px] border border-[#e5e7eb]">
              <Search className="w-[20px] h-[20px] text-[#9da4ae]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by city, area, school, or workplace"
                className="flex-1 bg-transparent outline-none font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#1f2a37] placeholder:text-[#9da4ae]"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="relative flex items-center justify-center w-[48px] h-[48px] bg-[#fe456a] rounded-[12px] shadow-[0px_4px_8px_0px_rgba(254,69,106,0.2)] hover:bg-[#e63d5f] transition-colors"
            >
              <SlidersHorizontal className="w-[20px] h-[20px] text-white" />
              {activeFiltersCount > 0 && (
                <div className="absolute -top-[4px] -right-[4px] w-[20px] h-[20px] bg-[#1f2a37] rounded-full flex items-center justify-center">
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[10px] leading-[12px] text-white">
                    {activeFiltersCount}
                  </span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Content Area - Property Listings */}
        <div className="flex-1 overflow-auto pb-[80px]">
          <div className="px-[24px] py-[20px]">
            <div className="flex items-center justify-between mb-[20px]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[24px] text-[#1f2a37]">
                {searchTerm ? `Results for "${searchTerm}"` : "All Properties"}
              </h2>
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#9da4ae]">
                {filteredProperties.length} found
              </span>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-[60px] gap-4">
                <Loader2 className="w-[40px] h-[40px] animate-spin text-[#fe456a]" />
                <p className="text-[#9da4ae] text-sm">Searching for properties...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 p-4 rounded-xl text-red-600 text-center">
                {error}
              </div>
            ) : filteredProperties.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-[60px] text-center">
                <div className="w-[64px] h-[64px] bg-[#f3f4f6] rounded-full flex items-center justify-center mb-4">
                  <Home className="w-[32px] h-[32px] text-[#d2d6db]" />
                </div>
                <h3 className="font-semibold text-[#1f2a37] mb-1">No results found</h3>
                <p className="text-[#9da4ae] text-sm">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-[20px]">
                {filteredProperties.map((prop) => (
                  <button
                    key={prop.id}
                    onClick={() => onViewListing?.()}
                    className="flex flex-col bg-white rounded-[16px] overflow-hidden border border-[#e5e7eb] hover:shadow-md transition-all text-left"
                  >
                    {/* Image */}
                    <div className="relative h-[180px]">
                      <img
                        src={prop.image_url || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"}
                        alt={prop.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 font-semibold text-[14px] text-[#fe456a]">
                        ${prop.price}
                        <span className="text-[10px] text-[#9da4ae] font-normal">/mo</span>
                      </div>
                      {prop.intent === 'roommate' && (
                        <div className="absolute top-3 left-3 bg-[#fe456a] text-white px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                          Looking for Roomie
                        </div>
                      )}
                    </div>
                    
                    {/* Details */}
                    <div className="p-4">
                      <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#1f2a37] mb-2 truncate">
                        {prop.title}
                      </h3>
                      
                      <div className="flex items-center gap-1 text-[#9da4ae] mb-3">
                        <MapPin className="w-[14px] h-[14px]" />
                        <span className="text-[12px] truncate">{prop.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 pt-3 border-t border-[#f3f4f6]">
                        <div className="flex items-center gap-1.5 text-[#6b7280]">
                          <Bed className="w-[16px] h-[16px]" />
                          <span className="text-[12px]">{prop.bedrooms || 0} Bed</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#6b7280]">
                          <Bath className="w-[16px] h-[16px]" />
                          <span className="text-[12px]">{prop.bathrooms || 0} Bath</span>
                        </div>
                        <div className="ml-auto text-[10px] text-[#9da4ae] italic">
                          {new Date(prop.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      {isFilterOpen && (
        <FilterModal
          onClose={() => setIsFilterOpen(false)}
          onApply={handleApplyFilters}
        />
      )}
    </>
  );
}
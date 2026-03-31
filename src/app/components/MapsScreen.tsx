import { useState, useRef, useEffect } from "react";
import { ArrowLeft, MapPin, Search, Navigation } from "lucide-react";
import imgMap from "../../assets/placeholders/general.png";

interface MapsScreenProps {
  onBack: () => void;
  onChooseLocation: () => void;
}

// Mock location data removed for production
const MOCK_LOCATIONS: any[] = [];

export function MapsScreen({ onBack, onChooseLocation }: MapsScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Search or choose a location");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState(MOCK_LOCATIONS);
  const [mapPosition, setMapPosition] = useState({ x: -301, y: -8 });
  const [mapZoom, setMapZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter locations based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredLocations(MOCK_LOCATIONS);
      setShowSuggestions(false);
    } else {
      const filtered = MOCK_LOCATIONS.filter(location =>
        location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredLocations(filtered);
      setShowSuggestions(true);
    }
  }, [searchQuery]);

  const animateMapToLocation = (targetX: number, targetY: number) => {
    setIsAnimating(true);
    setMapPosition({ x: targetX, y: targetY });
    
    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const handleLocationSelect = (location: typeof MOCK_LOCATIONS[0]) => {
    setSelectedLocation(location.name);
    setSearchQuery("");
    setShowSuggestions(false);
    
    // Animate map to the selected location's coordinates
    animateMapToLocation(location.coords.x, location.coords.y);
  };

  const handleMapMouseDown = (e: React.MouseEvent) => {
    if (!isAnimating) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - mapPosition.x, y: e.clientY - mapPosition.y });
    }
  };

  const handleMapMouseMove = (e: React.MouseEvent) => {
    if (isDragging && !isAnimating) {
      setMapPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMapMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleUseCurrentLocation = () => {
    // Simulate getting current location
    if (MOCK_LOCATIONS.length === 0) {
      setSelectedLocation("Your current location");
      return;
    }
    const randomIndex = Math.floor(Math.random() * MOCK_LOCATIONS.length);
    const currentLoc = MOCK_LOCATIONS[randomIndex];
    setSelectedLocation(currentLoc.name);
    setSearchQuery("");
    setShowSuggestions(false);
    animateMapToLocation(currentLoc.coords.x, currentLoc.coords.y);
  };

  return (
    <div className="size-full bg-[#fcfcfd] flex flex-col relative overflow-hidden">
      {/* Map Background - Interactive */}
      <div
        className={`absolute inset-0 ${isAnimating ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'}`}
        onMouseDown={handleMapMouseDown}
        onMouseMove={handleMapMouseMove}
        onMouseUp={handleMapMouseUp}
        onMouseLeave={handleMapMouseUp}
      >
        <img 
          src={imgMap} 
          alt="Map" 
          className={`absolute object-cover opacity-70 pointer-events-none ${isAnimating ? 'transition-all duration-700 ease-in-out' : 'transition-transform duration-100'}`}
          style={{ 
            left: `${mapPosition.x}px`,
            top: `${mapPosition.y}px`,
            minWidth: '1655px', 
            minHeight: '822px',
            transform: `scale(${mapZoom})`,
            transformOrigin: 'center center'
          }}
          onError={(e) => {
            e.currentTarget.src = imgMap;
          }}
        />
      </div>

      {/* Status Bar */}
      <div className="h-[44px] relative z-10" />

      {/* Header with Back Button */}
      <div className="px-[24px] py-[16px] relative z-10 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center justify-center size-[24px] text-[#1f2a37] hover:opacity-70 transition-opacity"
          aria-label="Go back"
        >
          <ArrowLeft className="size-[20px]" strokeWidth={1.5} />
        </button>
        <button
          onClick={handleUseCurrentLocation}
          className="flex items-center justify-center size-[40px] bg-white rounded-full shadow-md hover:bg-[#f9fafb] transition-colors"
          aria-label="Use current location"
        >
          <Navigation className="size-[20px] text-[#fe456a]" strokeWidth={1.5} />
        </button>
      </div>

      {/* Search Bar with Autocomplete */}
      <div className="px-[24px] relative z-30 mb-[40px]">
        <div className="bg-white rounded-[12px] border border-[#d2d6db] px-[16px] py-[12px] h-[50px] flex items-center gap-[8px]">
          <Search className="size-[24px] text-[#fe456a] shrink-0" strokeWidth={1.5} />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              if (searchQuery.trim() !== "") setShowSuggestions(true);
            }}
            placeholder="Search Location"
            className="flex-1 font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37] placeholder:text-[#9da4ae] bg-transparent border-none outline-none"
          />
        </div>

        {/* Search Suggestions Dropdown */}
        {showSuggestions && filteredLocations.length > 0 && (
          <div className="absolute left-[24px] right-[24px] mt-[8px] bg-white rounded-[12px] border border-[#d2d6db] shadow-[0px_8px_24px_0px_rgba(31,42,55,0.12)] max-h-[300px] overflow-y-auto">
            {filteredLocations.map((location) => (
              <button
                key={location.id}
                onClick={() => handleLocationSelect(location)}
                className="w-full px-[16px] py-[12px] flex items-start gap-[12px] hover:bg-[#f9fafb] transition-colors border-b border-[#e5e7eb] last:border-b-0 first:rounded-t-[12px] last:rounded-b-[12px]"
              >
                <MapPin className="size-[20px] text-[#fe456a] shrink-0 mt-[2px]" strokeWidth={1.5} />
                <div className="flex-1 text-left">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[18px] text-[#1f2a37]">
                    {location.name}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae] mt-[2px]">
                    {location.city}, {location.country}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* No results */}
        {showSuggestions && searchQuery.trim() !== "" && filteredLocations.length === 0 && (
          <div className="absolute left-[24px] right-[24px] mt-[8px] bg-white rounded-[12px] border border-[#d2d6db] shadow-[0px_8px_24px_0px_rgba(31,42,55,0.12)] px-[16px] py-[24px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#9da4ae] text-center">
              No locations found for "{searchQuery}"
            </p>
          </div>
        )}
      </div>

      {/* Map Controls - Zoom */}
      <div className="absolute right-[24px] top-[180px] z-20 flex flex-col gap-[8px]">
        <button
          onClick={handleZoomIn}
          className="size-[40px] bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#f9fafb] transition-colors text-[#1f2a37] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px]"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="size-[40px] bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#f9fafb] transition-colors text-[#1f2a37] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px]"
          aria-label="Zoom out"
        >
          −
        </button>
      </div>

      {/* Map Pin Marker */}
      <div className="absolute left-1/2 top-[314px] -translate-x-1/2 z-20 pointer-events-none animate-bounce">
        <div className="relative size-[66px]">
          <svg className="block size-full drop-shadow-lg" viewBox="0 0 66 66" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.9999 0C15.2176 0 0.75 14.4674 0.75 32.25C0.75 39.7848 3.5439 46.6404 8.1471 51.8373C8.39862 52.1331 8.6589 52.4201 8.92792 52.6981L32.9999 65.25L57.072 52.6981C57.3411 52.4201 57.6014 52.1331 57.8529 51.8373C62.4561 46.6404 65.25 39.7848 65.25 32.25C65.25 14.4674 50.7822 0 32.9999 0ZM32.9999 44C26.9249 44 22 39.0751 22 33C22 26.9249 26.9249 22 32.9999 22C39.075 22 44 26.9249 44 33C44 39.0751 39.075 44 32.9999 44Z"
              fill="#FDB022"
            />
          </svg>
        </div>
      </div>

      {/* Spacer to push location details to bottom */}
      <div className="flex-1 relative z-10" />

      {/* Location Details Card */}
      <div className="px-[24px] relative z-10 mb-[24px]">
        <div className="bg-white rounded-[10px] border border-[#d2d6db] shadow-[0px_24px_48px_0px_rgba(31,42,55,0.18)] p-[16px] flex flex-col gap-[12px]">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37]">
            Location Details
          </h2>
          <div className="flex items-center gap-[12px]">
            <div className="bg-[#f4ebff] rounded-full p-[8px] size-[44px] flex items-center justify-center shrink-0">
              <MapPin className="size-[24px] text-[#fe456a]" strokeWidth={1.5} />
            </div>
            <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#9da4ae]">
              {selectedLocation}
            </p>
          </div>
        </div>
      </div>

      {/* Choose Location Button */}
      <div className="px-[24px] relative z-10 pb-[24px]">
        <button
          onClick={onChooseLocation}
          className="w-full h-[52px] bg-[#fe456a] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[27px] text-white hover:bg-[#ff5a7a] transition-colors active:bg-[#e63d5f]"
        >
          Choose location
        </button>
      </div>

      {/* Home Indicator */}
      <div className="h-[34px] relative z-10" />
    </div>
  );
}
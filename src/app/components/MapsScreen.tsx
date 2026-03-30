import { useState, useRef, useEffect } from "react";
import { ArrowLeft, MapPin, Search, Navigation } from "lucide-react";
import imgMap from "../../assets/placeholders/general.png";

interface MapsScreenProps {
  onBack: () => void;
  onChooseLocation: () => void;
}

// Mock location data - Worldwide cities and addresses with focus on East Africa & Rwanda
const MOCK_LOCATIONS = [
  // RWANDA - Our Startup Location (Priority Locations)
  { id: 1, name: "KG 5 Avenue, Kigali City Center", city: "Kigali", country: "Rwanda", coords: { x: -200, y: 80 } },
  { id: 2, name: "Kimihurura, Kigali", city: "Kigali", country: "Rwanda", coords: { x: -205, y: 85 } },
  { id: 3, name: "Nyarugenge, Kigali", city: "Kigali", country: "Rwanda", coords: { x: -195, y: 82 } },
  { id: 4, name: "Remera, Gasabo, Kigali", city: "Kigali", country: "Rwanda", coords: { x: -198, y: 78 } },
  { id: 5, name: "Kicukiro, Kigali", city: "Kigali", country: "Rwanda", coords: { x: -202, y: 88 } },
  { id: 6, name: "Gikondo Industrial Zone, Kigali", city: "Kigali", country: "Rwanda", coords: { x: -207, y: 90 } },
  { id: 7, name: "Kabeza, Kigali", city: "Kigali", country: "Rwanda", coords: { x: -197, y: 86 } },
  { id: 8, name: "Kimironko, Kigali", city: "Kigali", country: "Rwanda", coords: { x: -203, y: 79 } },
  { id: 9, name: "Kiyovu, Kigali", city: "Kigali", country: "Rwanda", coords: { x: -199, y: 83 } },
  { id: 10, name: "Musanze City Center", city: "Musanze", country: "Rwanda", coords: { x: -195, y: 75 } },
  { id: 11, name: "Rubavu, Gisenyi", city: "Rubavu", country: "Rwanda", coords: { x: -190, y: 78 } },
  { id: 12, name: "Huye, Butare", city: "Huye", country: "Rwanda", coords: { x: -205, y: 95 } },
  { id: 13, name: "Muhanga City", city: "Muhanga", country: "Rwanda", coords: { x: -201, y: 87 } },
  { id: 14, name: "Nyagatare Town", city: "Nyagatare", country: "Rwanda", coords: { x: -210, y: 76 } },
  { id: 15, name: "Rusizi, Cyangugu", city: "Rusizi", country: "Rwanda", coords: { x: -188, y: 92 } },
  
  // KENYA - Major East African Hub
  { id: 16, name: "Westlands, Nairobi", city: "Nairobi", country: "Kenya", coords: { x: -215, y: 85 } },
  { id: 17, name: "Kilimani, Nairobi", city: "Nairobi", country: "Kenya", coords: { x: -220, y: 88 } },
  { id: 18, name: "Karen, Nairobi", city: "Nairobi", country: "Kenya", coords: { x: -218, y: 90 } },
  { id: 19, name: "Upperhill, Nairobi", city: "Nairobi", country: "Kenya", coords: { x: -217, y: 86 } },
  { id: 20, name: "Mombasa Road, Nairobi", city: "Nairobi", country: "Kenya", coords: { x: -222, y: 89 } },
  { id: 21, name: "Nyali, Mombasa", city: "Mombasa", country: "Kenya", coords: { x: -225, y: 100 } },
  { id: 22, name: "Diani Beach, Mombasa", city: "Mombasa", country: "Kenya", coords: { x: -227, y: 102 } },
  { id: 23, name: "Kisumu Central", city: "Kisumu", country: "Kenya", coords: { x: -208, y: 82 } },
  { id: 24, name: "Nakuru Town", city: "Nakuru", country: "Kenya", coords: { x: -212, y: 84 } },
  { id: 25, name: "Eldoret City", city: "Eldoret", country: "Kenya", coords: { x: -210, y: 80 } },
  
  // UGANDA
  { id: 26, name: "Kololo, Kampala", city: "Kampala", country: "Uganda", coords: { x: -205, y: 82 } },
  { id: 27, name: "Nakasero, Kampala", city: "Kampala", country: "Uganda", coords: { x: -207, y: 84 } },
  { id: 28, name: "Bugolobi, Kampala", city: "Kampala", country: "Uganda", coords: { x: -203, y: 83 } },
  { id: 29, name: "Entebbe Road, Kampala", city: "Kampala", country: "Uganda", coords: { x: -209, y: 85 } },
  { id: 30, name: "Jinja Town", city: "Jinja", country: "Uganda", coords: { x: -211, y: 82 } },
  { id: 31, name: "Mbarara City", city: "Mbarara", country: "Uganda", coords: { x: -200, y: 88 } },
  
  // TANZANIA
  { id: 32, name: "Masaki, Dar es Salaam", city: "Dar es Salaam", country: "Tanzania", coords: { x: -218, y: 105 } },
  { id: 33, name: "Mikocheni, Dar es Salaam", city: "Dar es Salaam", country: "Tanzania", coords: { x: -220, y: 107 } },
  { id: 34, name: "Oyster Bay, Dar es Salaam", city: "Dar es Salaam", country: "Tanzania", coords: { x: -216, y: 106 } },
  { id: 35, name: "Arusha City Center", city: "Arusha", country: "Tanzania", coords: { x: -213, y: 95 } },
  { id: 36, name: "Mwanza City", city: "Mwanza", country: "Tanzania", coords: { x: -205, y: 92 } },
  { id: 37, name: "Dodoma Capital City", city: "Dodoma", country: "Tanzania", coords: { x: -214, y: 100 } },
  { id: 38, name: "Stone Town, Zanzibar", city: "Zanzibar", country: "Tanzania", coords: { x: -222, y: 108 } },
  
  // ETHIOPIA
  { id: 39, name: "Bole, Addis Ababa", city: "Addis Ababa", country: "Ethiopia", coords: { x: -220, y: 70 } },
  { id: 40, name: "Kazanchis, Addis Ababa", city: "Addis Ababa", country: "Ethiopia", coords: { x: -222, y: 72 } },
  { id: 41, name: "Piazza, Addis Ababa", city: "Addis Ababa", country: "Ethiopia", coords: { x: -218, y: 71 } },
  { id: 42, name: "Bahir Dar City", city: "Bahir Dar", country: "Ethiopia", coords: { x: -217, y: 65 } },
  { id: 43, name: "Hawassa City", city: "Hawassa", country: "Ethiopia", coords: { x: -221, y: 75 } },
  
  // BURUNDI
  { id: 44, name: "Rohero, Bujumbura", city: "Bujumbura", country: "Burundi", coords: { x: -197, y: 90 } },
  { id: 45, name: "Kiriri, Bujumbura", city: "Bujumbura", country: "Burundi", coords: { x: -199, y: 91 } },
  { id: 46, name: "Gitega City", city: "Gitega", country: "Burundi", coords: { x: -200, y: 92 } },
  
  // OTHER AFRICAN COUNTRIES
  { id: 47, name: "V&A Waterfront, Cape Town", city: "Cape Town", country: "South Africa", coords: { x: -185, y: 165 } },
  { id: 48, name: "Sandton City, Johannesburg", city: "Johannesburg", country: "South Africa", coords: { x: -195, y: 155 } },
  { id: 49, name: "Tahrir Square, Cairo", city: "Cairo", country: "Egypt", coords: { x: -205, y: 45 } },
  { id: 50, name: "Victoria Island, Lagos", city: "Lagos", country: "Nigeria", coords: { x: -140, y: 95 } },
  { id: 51, name: "Lekki, Lagos", city: "Lagos", country: "Nigeria", coords: { x: -142, y: 97 } },
  { id: 52, name: "Abuja Central Area", city: "Abuja", country: "Nigeria", coords: { x: -145, y: 90 } },
  { id: 53, name: "Accra Central", city: "Accra", country: "Ghana", coords: { x: -130, y: 98 } },
  { id: 54, name: "Casablanca Marina", city: "Casablanca", country: "Morocco", coords: { x: -150, y: 35 } },
  
  // Asia
  { id: 55, name: "Jl. Jend. Sudirman, Gowongan, Yogyakarta", city: "Yogyakarta", country: "Indonesia", coords: { x: -500, y: 115 } },
  { id: 56, name: "Shibuya Crossing, Tokyo", city: "Tokyo", country: "Japan", coords: { x: -650, y: 50 } },
  { id: 57, name: "Marina Bay Sands, Singapore", city: "Singapore", country: "Singapore", coords: { x: -480, y: 108 } },
  { id: 58, name: "Gangnam-gu, Seoul", city: "Seoul", country: "South Korea", coords: { x: -630, y: 48 } },
  { id: 59, name: "The Bund, Shanghai", city: "Shanghai", country: "China", coords: { x: -600, y: 45 } },
  { id: 60, name: "Connaught Place, New Delhi", city: "New Delhi", country: "India", coords: { x: -350, y: 55 } },
  { id: 61, name: "Sukhumvit Road, Bangkok", city: "Bangkok", country: "Thailand", coords: { x: -470, y: 100 } },
  { id: 62, name: "Bonifacio Global City, Manila", city: "Manila", country: "Philippines", coords: { x: -550, y: 105 } },
  { id: 63, name: "Seminyak Beach, Bali", city: "Bali", country: "Indonesia", coords: { x: -510, y: 120 } },
  { id: 64, name: "KLCC, Kuala Lumpur", city: "Kuala Lumpur", country: "Malaysia", coords: { x: -475, y: 105 } },
  { id: 65, name: "Hanoi Old Quarter", city: "Hanoi", country: "Vietnam", coords: { x: -520, y: 95 } },
  { id: 66, name: "Ho Chi Minh City District 1", city: "Ho Chi Minh", country: "Vietnam", coords: { x: -525, y: 110 } },
  
  // Europe
  { id: 67, name: "Champs-Élysées, Paris", city: "Paris", country: "France", coords: { x: -125, y: 25 } },
  { id: 68, name: "Oxford Street, London", city: "London", country: "United Kingdom", coords: { x: -110, y: 20 } },
  { id: 69, name: "Las Ramblas, Barcelona", city: "Barcelona", country: "Spain", coords: { x: -120, y: 38 } },
  { id: 70, name: "Piazza del Duomo, Milan", city: "Milan", country: "Italy", coords: { x: -140, y: 32 } },
  { id: 71, name: "Alexanderplatz, Berlin", city: "Berlin", country: "Germany", coords: { x: -145, y: 22 } },
  { id: 72, name: "Dam Square, Amsterdam", city: "Amsterdam", country: "Netherlands", coords: { x: -130, y: 18 } },
  { id: 73, name: "Red Square, Moscow", city: "Moscow", country: "Russia", coords: { x: -240, y: 15 } },
  { id: 74, name: "Sultanahmet Square, Istanbul", city: "Istanbul", country: "Turkey", coords: { x: -190, y: 38 } },
  
  // North America
  { id: 75, name: "Times Square, New York, NY", city: "New York", country: "United States", coords: { x: 150, y: 35 } },
  { id: 76, name: "Hollywood Boulevard, Los Angeles, CA", city: "Los Angeles", country: "United States", coords: { x: 80, y: 50 } },
  { id: 77, name: "Michigan Avenue, Chicago, IL", city: "Chicago", country: "United States", coords: { x: 130, y: 38 } },
  { id: 78, name: "Robson Street, Vancouver, BC", city: "Vancouver", country: "Canada", coords: { x: 60, y: 20 } },
  { id: 79, name: "Yonge Street, Toronto, ON", city: "Toronto", country: "Canada", coords: { x: 140, y: 30 } },
  { id: 80, name: "Reforma Avenue, Mexico City", city: "Mexico City", country: "Mexico", coords: { x: 100, y: 90 } },
  { id: 81, name: "South Beach, Miami, FL", city: "Miami", country: "United States", coords: { x: 160, y: 75 } },
  
  // South America
  { id: 82, name: "Avenida Paulista, São Paulo", city: "São Paulo", country: "Brazil", coords: { x: 220, y: 140 } },
  { id: 83, name: "Copacabana Beach, Rio de Janeiro", city: "Rio de Janeiro", country: "Brazil", coords: { x: 230, y: 135 } },
  { id: 84, name: "Plaza de Mayo, Buenos Aires", city: "Buenos Aires", country: "Argentina", coords: { x: 200, y: 160 } },
  { id: 85, name: "Miraflores, Lima", city: "Lima", country: "Peru", coords: { x: 150, y: 125 } },
  
  // Oceania
  { id: 86, name: "Sydney Opera House, Sydney", city: "Sydney", country: "Australia", coords: { x: -700, y: 165 } },
  { id: 87, name: "Queen Street, Auckland", city: "Auckland", country: "New Zealand", coords: { x: -750, y: 185 } },
  { id: 88, name: "Bourke Street, Melbourne", city: "Melbourne", country: "Australia", coords: { x: -710, y: 175 } },
  
  // Middle East
  { id: 89, name: "Burj Khalifa, Dubai", city: "Dubai", country: "UAE", coords: { x: -280, y: 60 } },
  { id: 90, name: "Corniche Road, Doha", city: "Doha", country: "Qatar", coords: { x: -285, y: 62 } },
  { id: 91, name: "King Fahd Road, Riyadh", city: "Riyadh", country: "Saudi Arabia", coords: { x: -270, y: 58 } },
  { id: 92, name: "Rothschild Boulevard, Tel Aviv", city: "Tel Aviv", country: "Israel", coords: { x: -210, y: 42 } },
];

export function MapsScreen({ onBack, onChooseLocation }: MapsScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(MOCK_LOCATIONS[0].name);
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
    // Simulate getting current location - use a random location
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
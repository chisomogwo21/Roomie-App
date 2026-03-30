import { useState, useMemo } from "react";
import { MapPin } from "lucide-react";
import { useCreateListing } from "../CreateListingContext";

interface LocationProps {
  onNext: () => void;
}

// Countries and their cities
const LOCATION_DATA: Record<string, string[]> = {
  Rwanda: ["Kigali", "Musanze", "Gisenyi", "Butare", "Rwamagana"],
  Kenya: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"],
  Uganda: ["Kampala", "Entebbe", "Jinja", "Mbarara", "Gulu"],
  Tanzania: ["Dar es Salaam", "Mwanza", "Arusha", "Dodoma", "Mbeya"],
  Nigeria: ["Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt"],
  "South Africa": ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"],
  Ghana: ["Accra", "Kumasi", "Tamale", "Takoradi", "Tema"],
  Ethiopia: ["Addis Ababa", "Dire Dawa", "Mekelle", "Gondar", "Hawassa"],
  "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
  "United Kingdom": ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool"],
  Canada: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  Australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  France: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
  Germany: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"],
  Spain: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza"],
  Italy: ["Rome", "Milan", "Naples", "Turin", "Palermo"],
  Netherlands: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"],
  Belgium: ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège"],
  Switzerland: ["Zurich", "Geneva", "Basel", "Lausanne", "Bern"],
  Sweden: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås"],
  Norway: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen"],
  Denmark: ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg"],
  Finland: ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu"],
  Poland: ["Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań"],
  Portugal: ["Lisbon", "Porto", "Braga", "Coimbra", "Funchal"],
  Ireland: ["Dublin", "Cork", "Galway", "Limerick", "Waterford"],
  Austria: ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck"],
  "Czech Republic": ["Prague", "Brno", "Ostrava", "Plzeň", "Liberec"],
  Greece: ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa"],
  Turkey: ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya"],
  UAE: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"],
  India: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"],
  China: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu"],
  Japan: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya"],
  Singapore: ["Singapore"],
  Malaysia: ["Kuala Lumpur", "George Town", "Ipoh", "Johor Bahru", "Malacca"],
  Thailand: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Krabi"],
  Indonesia: ["Jakarta", "Bali", "Bandung", "Surabaya", "Yogyakarta"],
  Philippines: ["Manila", "Quezon City", "Davao", "Cebu", "Makati"],
  "South Korea": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon"],
  Vietnam: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Nha Trang", "Hoi An"],
  Brazil: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza"],
  Argentina: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "La Plata"],
  Mexico: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Cancún"],
  Chile: ["Santiago", "Valparaíso", "Concepción", "La Serena", "Antofagasta"],
  Colombia: ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena"],
  Peru: ["Lima", "Cusco", "Arequipa", "Trujillo", "Chiclayo"],
  Egypt: ["Cairo", "Alexandria", "Giza", "Sharm El Sheikh", "Luxor"],
  Morocco: ["Casablanca", "Marrakech", "Fez", "Tangier", "Rabat"],
  Israel: ["Tel Aviv", "Jerusalem", "Haifa", "Rishon LeZion", "Petah Tikva"],
  "New Zealand": ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga"],
};

export function Location({ onNext }: LocationProps) {
  const { listingData, updateLocationDetails } = useCreateListing();
  const [localLocation, setLocalLocation] = useState(listingData.locationDetails);

  const countries = useMemo(() => Object.keys(LOCATION_DATA).sort(), []);
  const cities = useMemo(() => {
    return localLocation.country ? LOCATION_DATA[localLocation.country] || [] : [];
  }, [localLocation.country]);

  const handleChange = (field: keyof typeof localLocation, value: string | boolean) => {
    setLocalLocation((prev) => ({ ...prev, [field]: value }));
    
    // Reset city if country changes
    if (field === "country" && typeof value === "string") {
      setLocalLocation((prev) => ({ ...prev, country: value, city: "" }));
    }
  };

  const handleContinue = () => {
    updateLocationDetails(localLocation);
    onNext();
  };

  const canProceed = localLocation.country !== "" && localLocation.city !== "";

  // Location preview
  const locationPreview = localLocation.country && localLocation.city
    ? `${localLocation.city}, ${localLocation.country}${localLocation.area ? " • " + localLocation.area : ""}`
    : "";

  return (
    <div className="px-[24px] pt-[24px] pb-[100px]">
      {/* Header */}
      <div className="mb-[32px]">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1f2a37] mb-[8px]">
          Location
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
          Where is this home located? This helps people discover your listing in the right city.
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-[24px] mb-[32px]">
        {/* Country */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
            Country <span className="text-[#fe456a]">*</span>
          </label>
          <select
            value={localLocation.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className="w-full h-[48px] px-[16px] bg-white border-[1.5px] border-[#d2d6db] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-[44px]"
          >
            <option value="">Select country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
            City <span className="text-[#fe456a]">*</span>
          </label>
          <select
            value={localLocation.city}
            onChange={(e) => handleChange("city", e.target.value)}
            disabled={!localLocation.country}
            className="w-full h-[48px] px-[16px] bg-white border-[1.5px] border-[#d2d6db] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-[44px] disabled:bg-[#f3f4f6] disabled:text-[#9da4ae] disabled:cursor-not-allowed"
          >
            <option value="">Select city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {!localLocation.country && (
            <p className="mt-[6px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae]">
              Select a country first
            </p>
          )}
        </div>

        {/* Area / Neighborhood */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
            Area / Neighborhood <span className="text-[#9da4ae] font-['Inter:Regular',sans-serif] font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            value={localLocation.area}
            onChange={(e) => handleChange("area", e.target.value)}
            placeholder="e.g., Kicukiro, Downtown"
            className="w-full h-[48px] px-[16px] bg-white border-[1.5px] border-[#d2d6db] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] transition-colors"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
            Address <span className="text-[#9da4ae] font-['Inter:Regular',sans-serif] font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            value={localLocation.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Street address or building name"
            className="w-full h-[48px] px-[16px] bg-white border-[1.5px] border-[#d2d6db] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] transition-colors"
          />
        </div>

        {/* Hide Address Checkbox */}
        <div className="bg-[#f9fafb] border-[1.5px] border-[#e5e7eb] rounded-[12px] p-[16px]">
          <label className="flex items-start gap-[12px] cursor-pointer">
            <input
              type="checkbox"
              checked={localLocation.hideAddress}
              onChange={(e) => handleChange("hideAddress", e.target.checked)}
              className="mt-[2px] w-[20px] h-[20px] rounded-[4px] border-[1.5px] border-[#d2d6db] text-[#fe456a] focus:ring-2 focus:ring-[#fe456a] focus:ring-offset-0 cursor-pointer"
            />
            <div className="flex-1">
              <div className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[4px]">
                Hide exact address
              </div>
              <div className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px] text-[#6b7280]">
                Your exact address is only shared after your request is accepted.
              </div>
            </div>
          </label>
        </div>

        {/* Location Preview */}
        {locationPreview && (
          <div className="bg-[#fff5f7] border-[1.5px] border-[#fe456a] rounded-[12px] p-[16px]">
            <div className="flex items-center gap-[12px]">
              <div className="flex-shrink-0 w-[40px] h-[40px] rounded-full bg-[#fe456a] flex items-center justify-center">
                <MapPin className="w-[20px] h-[20px] text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <div className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#fe456a] mb-[4px]">
                  Location Preview
                </div>
                <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[22px] text-[#1f2a37]">
                  {locationPreview}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!canProceed}
        className={`w-full h-[52px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] transition-all duration-200 ${
          canProceed
            ? "bg-[#fe456a] text-white shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f]"
            : "bg-[#e5e7eb] text-[#9da4ae] cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
}

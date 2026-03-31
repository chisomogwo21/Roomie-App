import { useState, useEffect } from "react";
import { ArrowLeft, Camera, Loader2 } from "lucide-react";
import { toast } from "sonner";
import imgProfilePhoto from "../../assets/placeholders/avatar.png";

interface EditProfileProps {
  onBack: () => void;
  userAvatar?: string;
  onAvatarUpdate?: (url: string) => void;
}

// Countries list (reusing from Location component)
const COUNTRIES = [
  "Rwanda", "Kenya", "Uganda", "Tanzania", "Nigeria", "South Africa", "Ghana", 
  "Ethiopia", "United States", "United Kingdom", "Canada", "Australia", "France", 
  "Germany", "Spain", "Italy", "Netherlands", "Belgium", "Switzerland", "Sweden", 
  "Norway", "Denmark", "Finland", "Poland", "Portugal", "Ireland", "Austria", 
  "Czech Republic", "Greece", "Turkey", "UAE", "India", "China", "Japan", 
  "Singapore", "Malaysia", "Thailand", "Indonesia", "Philippines", "South Korea", 
  "Vietnam", "Brazil", "Argentina", "Mexico", "Chile", "Colombia", "Peru", 
  "Egypt", "Morocco", "Israel", "New Zealand"
].sort();

const COUNTRY_TO_CITIES: Record<string, string[]> = {
  Rwanda: ["Kigali", "Musanze", "Gisenyi", "Butare", "Rwamagana"],
  Kenya: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"],
  Uganda: ["Kampala", "Entebbe", "Jinja", "Mbarara", "Gulu"],
  Nigeria: ["Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt"],
  "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
  "United Kingdom": ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool"],
};

const NATIONALITIES = [
  "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Argentine", 
  "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", 
  "Bangladeshi", "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese", 
  "Bhutanese", "Bolivian", "Bosnian", "Brazilian", "British", "Bruneian", "Bulgarian", 
  "Burkinabe", "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", 
  "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comorian", 
  "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", 
  "Djiboutian", "Dominican", "Dutch", "East Timorese", "Ecuadorian", "Egyptian", 
  "Emirati", "English", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", 
  "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", 
  "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinean", "Guyanese", 
  "Haitian", "Honduran", "Hungarian", "Icelandic", "Indian", "Indonesian", "Iranian", 
  "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", 
  "Jordanian", "Kazakhstani", "Kenyan", "Korean", "Kuwaiti", "Kyrgyzstani", "Laotian", 
  "Latvian", "Lebanese", "Liberian", "Libyan", "Lithuanian", "Luxembourgish", 
  "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", 
  "Mauritanian", "Mauritian", "Mexican", "Moldovan", "Mongolian", "Montenegrin", 
  "Moroccan", "Mozambican", "Namibian", "Nepalese", "New Zealander", "Nicaraguan", 
  "Nigerian", "Norwegian", "Omani", "Pakistani", "Panamanian", "Paraguayan", "Peruvian", 
  "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Salvadoran", 
  "Saudi Arabian", "Scottish", "Senegalese", "Serbian", "Singaporean", "Slovak", 
  "Slovenian", "Somali", "South African", "Spanish", "Sri Lankan", "Sudanese", 
  "Surinamese", "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", 
  "Tanzanian", "Thai", "Togolese", "Trinidadian", "Tunisian", "Turkish", "Turkmen", 
  "Ugandan", "Ukrainian", "Uruguayan", "Venezuelan", "Vietnamese", "Welsh", "Yemeni", 
  "Zambian", "Zimbabwean"
].sort();

export function EditProfile({ 
  onBack,
  userAvatar,
  onAvatarUpdate
}: EditProfileProps) {
  const [hasChanges, setHasChanges] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    dateOfBirth: "",
    nationality: "",
    phoneNumber: "",
    country: "",
    city: "",
    occupation: "",
    bio: "",
    budgetMin: 0,
    budgetMax: 2000,
    lifestyleTags: [] as string[],
    preferredLocation: "",
  });

  useEffect(() => {
    async function loadProfile() {
      setIsFetching(true);
      try {
        const { getProfile, getUser } = await import("../../lib/auth");
        const { data: userData } = await getUser();
        if (userData.user) {
          const { data: profile } = await getProfile(userData.user.id);
          if (profile) {
            setFormData({
              fullName: profile.full_name || "",
              username: profile.username || "",
              email: profile.email || userData.user.email || "",
              dateOfBirth: profile.date_of_birth || "",
              nationality: profile.nationality || "",
              phoneNumber: profile.phone_number || "",
              country: profile.country || "",
              city: profile.city || "",
              occupation: profile.occupation || "",
              bio: profile.bio || "",
              budgetMin: profile.budget_min || 0,
              budgetMax: profile.budget_max || 2000,
              lifestyleTags: profile.lifestyle_tags || [],
              preferredLocation: profile.preferred_location || "",
            });
          }
        }
      } catch (err) {
        console.error("Error loading profile:", err);
      } finally {
        setIsFetching(false);
      }
    }
    loadProfile();
  }, []);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setHasChanges(true);

    // Reset city if country changes
    if (field === "country") {
      setFormData((prev) => ({ ...prev, city: "" }));
    }
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Full name is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    const loadingToast = toast.loading("Saving changes...");

    try {
      const { updateProfile } = await import("../../lib/auth");
      
      // 1. Sync with public.profiles table
      const { error } = await updateProfile({
        full_name: formData.fullName,
        username: formData.username,
        email: formData.email,
        date_of_birth: formData.dateOfBirth,
        nationality: formData.nationality,
        phone_number: formData.phoneNumber,
        country: formData.country,
        city: formData.city,
        occupation: formData.occupation,
        bio: formData.bio,
        avatar_url: userAvatar, // Ensure latest avatar is saved
        budget_min: formData.budgetMin,
        budget_max: formData.budgetMax,
        lifestyle_tags: formData.lifestyleTags,
        preferred_location: formData.preferredLocation
      });

      if (error) throw error;

      toast.dismiss(loadingToast);
      toast.success("Profile updated successfully");
      setHasChanges(false);
      
      // Wait a bit then navigate back
      setTimeout(() => {
        onBack();
      }, 500);
    } catch (error: any) {
      console.error("Save error:", error);
      toast.dismiss(loadingToast);
      toast.error(error.message || "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading("Uploading image...");

    try {
      const { supabase } = await import("../../lib/supabaseClient");
      const { getUser } = await import("../../lib/auth");
      
      const { data: userData } = await getUser();
      if (!userData.user) throw new Error("User not authenticated");

      const fileExt = file.name.split('.').pop();
      const fileName = `${userData.user.id}-${Math.random()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      // 1. Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('properties') // Using properties bucket as it's already configured
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('properties')
        .getPublicUrl(filePath);

      // 3. Update User Metadata
      const { error: updateError } = await supabase.auth.updateUser({
        data: { avatar_url: publicUrl }
      });

      if (updateError) throw updateError;

      // 4. Update local state
      if (onAvatarUpdate) {
        onAvatarUpdate(publicUrl);
      }

      toast.dismiss(loadingToast);
      toast.success("Profile photo updated!");
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.dismiss(loadingToast);
      toast.error(error.message || "Failed to upload image");
    } finally {
      setIsLoading(false);
    }
  };

  const cities = formData.country && COUNTRY_TO_CITIES[formData.country] 
    ? COUNTRY_TO_CITIES[formData.country] 
    : [];

  const bioCharCount = formData.bio.length;
  const bioMaxLength = 300;

  return (
    <div className="size-full flex flex-col bg-[#fcfcfd]">
      {/* Status Bar Spacer */}
      <div className="h-[44px] bg-white" />

      {/* Header */}
      <div className="bg-white px-[16px] py-[12px] border-b border-[#e5e7eb] flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-[8px] -ml-[8px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
        >
          <ArrowLeft className="w-[24px] h-[24px] text-[#1f2a37]" />
        </button>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
          Edit Profile
        </h1>
        <button
          onClick={handleSave}
          disabled={!hasChanges || isLoading}
          className={`px-[16px] py-[8px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] transition-all duration-200 ${
            hasChanges && !isLoading
              ? "bg-[#fe456a] text-white hover:bg-[#e63d5f]"
              : "bg-[#e5e7eb] text-[#9da4ae] cursor-not-allowed"
          }`}
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {isFetching ? (
          <div className="flex flex-col items-center justify-center py-[100px] gap-4">
            <Loader2 className="w-[40px] h-[40px] animate-spin text-[#fe456a]" />
            <p className="text-[#9da4ae] text-sm font-['Inter:Medium',sans-serif]">Loading profile...</p>
          </div>
        ) : (
          <>
            {/* Profile Photo Section */}
            <div className="bg-white px-[24px] pt-[32px] pb-[24px] mb-[8px]">
          <div className="flex flex-col items-center">
            <div className="relative mb-[12px]">
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleFileUpload}
                disabled={isLoading}
              />
              <img
                src={userAvatar || imgProfilePhoto}
                alt="Profile"
                className={`w-[100px] h-[100px] rounded-full object-cover border-2 border-[#fe456a]/10 ${isLoading ? 'opacity-50' : ''}`}
                onError={(e) => {
                  e.currentTarget.src = imgProfilePhoto;
                }}
              />
              <label 
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 w-[32px] h-[32px] bg-[#fe456a] rounded-full flex items-center justify-center shadow-[0px_2px_8px_0px_rgba(254,69,106,0.3)] hover:bg-[#e63d5f] transition-colors cursor-pointer"
              >
                <Camera className="w-[16px] h-[16px] text-white" strokeWidth={2.5} />
              </label>
            </div>
            <button 
              onClick={() => document.getElementById('avatar-upload')?.click()}
              disabled={isLoading}
              className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#fe456a] hover:opacity-70 transition-opacity disabled:opacity-50"
            >
              {isLoading ? "Uploading..." : "Change photo"}
            </button>
          </div>
        </div>

        {/* Form Sections */}
        <div className="space-y-[8px]">
          {/* Basic Info */}
          <div className="bg-white px-[24px] py-[24px]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37] mb-[20px]">
              Basic Info
            </h2>

            <div className="space-y-[20px]">
              {/* Full Name */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] text-[#6b7280] mb-[8px]">
                  Full Name <span className="text-[#fe456a]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full h-[48px] px-[16px] bg-[#f9fafb] border-[1.5px] border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] focus:bg-white transition-colors"
                />
              </div>

              {/* Username */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] text-[#6b7280] mb-[8px]">
                  Username
                </label>
                <div className="relative">
                  <span className="absolute left-[16px] top-1/2 -translate-y-1/2 font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#9da4ae]">
                    @
                  </span>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleChange("username", e.target.value)}
                    placeholder="username"
                    className="w-full h-[48px] pl-[32px] pr-[16px] bg-[#f9fafb] border-[1.5px] border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] focus:bg-white transition-colors"
                  />
                </div>
                <p className="mt-[6px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae]">
                  Your unique username for Roomie
                </p>
              </div>

              {/* Email */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] text-[#6b7280] mb-[8px]">
                  Email Address <span className="text-[#fe456a]">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className="w-full h-[48px] px-[16px] bg-[#f9fafb] border-[1.5px] border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] focus:bg-white transition-colors"
                />
                <p className="mt-[6px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae]">
                  You may need to verify your new email
                </p>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-white px-[24px] py-[24px]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37] mb-[20px]">
              Personal Info
            </h2>

            <div className="space-y-[20px]">
              {/* Date of Birth */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] text-[#6b7280] mb-[8px]">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                  className="w-full h-[48px] px-[16px] bg-[#f9fafb] border-[1.5px] border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] focus:bg-white transition-colors"
                />
              </div>

              {/* Nationality */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] text-[#6b7280] mb-[8px]">
                  Nationality
                </label>
                <select
                  value={formData.nationality}
                  onChange={(e) => handleChange("nationality", e.target.value)}
                  className="w-full h-[48px] px-[16px] bg-[#f9fafb] border-[1.5px] border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] focus:bg-white transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-[44px]"
                >
                  <option value="">Select nationality</option>
                  {NATIONALITIES.map((nationality) => (
                    <option key={nationality} value={nationality}>
                      {nationality}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white px-[24px] py-[24px]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37] mb-[20px]">
              Contact Info
            </h2>

            <div>
              <label className="block font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] text-[#6b7280] mb-[8px]">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="w-full h-[48px] px-[16px] bg-[#f9fafb] border-[1.5px] border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Location */}
          <div className="bg-white px-[24px] py-[24px]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37] mb-[20px]">
              Location
            </h2>

            <div className="space-y-[20px]">
              {/* Country */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] text-[#6b7280] mb-[8px]">
                  Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  className="w-full h-[48px] px-[16px] bg-[#f9fafb] border-[1.5px] border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] focus:bg-white transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-[44px]"
                >
                  <option value="">Select country</option>
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] text-[#6b7280] mb-[8px]">
                  City
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  disabled={!formData.country || cities.length === 0}
                  className="w-full h-[48px] px-[16px] bg-[#f9fafb] border-[1.5px] border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] focus:bg-white transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {cities.length > 0 ? "Select city" : "No cities available"}
                  </option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Work & Lifestyle */}
          <div className="bg-white px-[24px] py-[24px]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37] mb-[20px]">
              Work & Lifestyle
            </h2>

            <div>
              <label className="block font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] text-[#6b7280] mb-[8px]">
                Occupation
              </label>
              <input
                type="text"
                value={formData.occupation}
                onChange={(e) => handleChange("occupation", e.target.value)}
                placeholder="e.g., Software Engineer, Teacher, Student"
                className="w-full h-[48px] px-[16px] bg-[#f9fafb] border-[1.5px] border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* About You */}
          <div className="bg-white px-[24px] py-[24px]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1f2a37] mb-[20px]">
              About You
            </h2>

            <div>
              <label className="block font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] text-[#6b7280] mb-[8px]">
                Bio
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => {
                  if (e.target.value.length <= bioMaxLength) {
                    handleChange("bio", e.target.value);
                  }
                }}
                placeholder="Tell us about yourself, your interests, and what you're looking for in a roommate..."
                rows={5}
                className="w-full px-[16px] py-[12px] bg-[#f9fafb] border-[1.5px] border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[15px] leading-[22px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] focus:bg-white transition-colors resize-none"
              />
              <div className="mt-[8px] flex justify-between items-center">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae]">
                  Share your hobbies, lifestyle, and what makes you a great roommate
                </p>
                <p className={`font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] ${
                  bioCharCount > bioMaxLength * 0.9 ? "text-[#fe456a]" : "text-[#9da4ae]"
                }`}>
                  {bioCharCount}/{bioMaxLength}
                </p>
              </div>
            </div>
          </div>
        </div>

          </>
        )}
        {/* Bottom spacing */}
        <div className="h-[32px]" />
      </div>
    </div>
  );
}

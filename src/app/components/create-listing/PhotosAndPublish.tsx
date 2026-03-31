import { useState, useRef } from "react";
import { useCreateListing } from "../CreateListingContext";
import { Upload, X, Home, User, Loader2 } from "lucide-react";
import { createProperty } from "../../../lib/properties";
import { toast } from "sonner";

interface PhotosAndPublishProps {
  onPublish: () => void;
}

export function PhotosAndPublish({ onPublish }: PhotosAndPublishProps) {
  const { listingData, updatePhotosAndDescription, resetListing } = useCreateListing();
  const [description, setDescription] = useState(listingData.description);
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const maxDescriptionLength = 350;
  const remainingChars = maxDescriptionLength - description.length;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesInput = e.target.files;
    if (filesInput) {
      const fileArray = Array.from(filesInput);
      setPhotos((prev) => [...prev, ...fileArray]);
      
      // Create preview URLs
      const urls = fileArray.map((file) => URL.createObjectURL(file));
      setPhotoUrls((prev) => [...prev, ...urls]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
    setPhotoUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePublish = async () => {
    setLoading(true);
    try {
      // 1. Update context with description and latest photos
      updatePhotosAndDescription(photos, description);
      
      // 2. Call Supabase with the combined data
      const { data, error } = await createProperty({
        ...listingData,
        photos, // Ensure actual files are sent
        description
      });

      if (error) throw error;

      // 3. Success handling
      toast.success("Listing published successfully!");
      resetListing();
      onPublish();
    } catch (err: any) {
      toast.error(err.message || "Failed to publish listing.");
    } finally {
      setLoading(false);
    }
  };

  const canPublish = photoUrls.length > 0 && description.trim() !== "";

  // Generate preview card data
  const getListingTypeLabel = () => {
    if (listingData.intent === "roommate") return "Looking for Roommate";
    return "For Rent";
  };

  const getLivingSetupLabel = () => {
    const setupLabels: Record<string, string> = {
      "private-room-apartment": "Private Room (Apartment)",
      "private-room-house": "Private Room (House)",
      "entire-home-cotenant": "Entire Home",
      "co-living": "Co-Living",
      "entire-apartment": "Entire Apartment",
      "entire-house": "Entire House",
      "private-room": "Private Room",
      "premium-home": "Premium Home",
    };
    return setupLabels[listingData.livingSetup || ""] || "";
  };

  return (
    <div className="px-[24px] pt-[24px] pb-[100px]">
      {/* Header */}
      <div className="mb-[32px]">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1f2a37] mb-[8px]">
          Photos & Publish
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
          Add photos and a description to make your listing stand out
        </p>
      </div>

      {/* Photo Upload */}
      <div className="mb-[24px]">
        <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[12px]">
          Photos
        </label>

        {/* Upload Area */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full h-[139px] bg-white border-[1.5px] border-dashed border-[#d2d6db] rounded-[12px] flex flex-col items-center justify-center gap-[8px] hover:border-[#fe456a] transition-colors"
        >
          <div className="w-[60px] h-[60px] flex items-center justify-center">
            <Upload className="w-[40px] h-[40px] text-[#fe456a]" strokeWidth={2} />
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#9da4ae]">
            Click here to upload
          </p>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Photo Previews */}
        {photoUrls.length > 0 && (
          <div className="mt-[16px] grid grid-cols-3 gap-[12px]">
            {photoUrls.map((url, index) => (
              <div key={index} className="relative aspect-square rounded-[8px] overflow-hidden group">
                <img src={url} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                <button
                  onClick={() => removePhoto(index)}
                  className="absolute top-[4px] right-[4px] w-[24px] h-[24px] bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-[14px] h-[14px] text-white" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mb-[32px]">
        <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => {
            if (e.target.value.length <= maxDescriptionLength) {
              setDescription(e.target.value);
            }
          }}
          placeholder="Tell people about your space, what makes it special, and who would be a great fit..."
          className="w-full h-[135px] p-[12px] bg-white border-[1.5px] border-dashed border-[#d2d6db] rounded-[12px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#1f2a37] placeholder:text-[#9da4ae] resize-none focus:outline-none focus:border-[#fe456a] transition-colors"
        />
        <p className="mt-[8px] text-right font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#9da4ae]">
          {remainingChars} characters remaining
        </p>
      </div>

      {/* Preview Card */}
      <div className="mb-[32px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[12px]">
          Preview
        </p>
        <div className="bg-white rounded-[12px] overflow-hidden shadow-[0px_2px_8px_0px_rgba(31,42,55,0.08)]">
          {/* Image */}
          <div className="w-full aspect-[4/3] bg-[#f3f4f6] flex items-center justify-center">
            {photoUrls.length > 0 ? (
              <img src={photoUrls[0]} alt="Listing preview" className="w-full h-full object-cover" />
            ) : (
              <Home className="w-[48px] h-[48px] text-[#d2d6db]" />
            )}
          </div>

          {/* Content */}
          <div className="p-[16px]">
            <div className="flex items-center gap-[8px] mb-[8px]">
              <span className="px-[8px] py-[4px] bg-[#fff5f7] text-[#fe456a] rounded-[6px] font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px]">
                {getListingTypeLabel()}
              </span>
              <span className="text-[#9da4ae] font-['Inter:Regular',sans-serif] font-normal text-[12px]">
                •
              </span>
              <span className="text-[#6b7280] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px]">
                {getLivingSetupLabel()}
              </span>
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[4px]">
              ${listingData.rent || "—"}/month
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#6b7280] line-clamp-2 mb-[12px]">
              {description || "No description yet..."}
            </p>

            {/* Roommate Profiles Preview */}
            {listingData.existingRoommates.length > 0 && (
              <div className="pt-[12px] border-t border-[#e5e7eb]">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#6b7280] mb-[8px]">
                  You'll be living with:
                </p>
                <div className="flex gap-[8px] overflow-x-auto pb-[4px]">
                  {listingData.existingRoommates.map((roommate) => (
                    <div
                      key={roommate.id}
                      className="flex-none flex items-center gap-[8px] px-[10px] py-[6px] bg-[#f3f4f6] rounded-[8px]"
                    >
                      <div className="w-[24px] h-[24px] rounded-full bg-gradient-to-br from-[#fe456a] to-[#ff758f] flex items-center justify-center">
                        <User className="w-[12px] h-[12px] text-white" strokeWidth={2} />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-['Inter:Medium',sans-serif] font-medium text-[10px] leading-[14px] text-[#1f2a37]">
                          {roommate.firstName}
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[9px] leading-[12px] text-[#6b7280]">
                          {roommate.ageRange} • {roommate.occupation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Publish Button */}
      <button
        onClick={handlePublish}
        disabled={!canPublish || loading}
        className={`w-full h-[52px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] transition-all duration-200 flex items-center justify-center gap-[8px] ${
          canPublish && !loading
            ? "bg-[#fe456a] text-white shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f]"
            : "bg-[#e5e7eb] text-[#9da4ae] cursor-not-allowed"
        }`}
      >
        {loading ? <Loader2 className="w-[20px] h-[20px] animate-spin" /> : "Publish Listing"}
      </button>
    </div>
  );
}
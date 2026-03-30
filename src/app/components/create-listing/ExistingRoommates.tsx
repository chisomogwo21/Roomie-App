import { Plus, X, User } from "lucide-react";
import { useState } from "react";
import { useCreateListing, RoommateProfile } from "../CreateListingContext";

interface ExistingRoommatesProps {
  onNext: () => void;
}

const lifestyleBadgeOptions = [
  "Clean",
  "Quiet",
  "Social",
  "WFH",
  "Early riser",
  "Night owl",
  "Foodie",
  "Active",
  "Chill",
  "Organized",
];

const ageRangeOptions = [
  "18-24",
  "25-29",
  "30-34",
  "35-39",
  "40-49",
  "50+",
];

export function ExistingRoommates({ onNext }: ExistingRoommatesProps) {
  const { listingData, updateExistingRoommates } = useCreateListing();
  const [roommates, setRoommates] = useState<RoommateProfile[]>(
    listingData.existingRoommates
  );
  const [showAddForm, setShowAddForm] = useState(false);

  // Form state for new roommate
  const [firstName, setFirstName] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [occupation, setOccupation] = useState("");
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [bio, setBio] = useState("");

  const handleAddRoommate = () => {
    if (!firstName || !ageRange || !occupation) return;

    const newRoommate: RoommateProfile = {
      id: Date.now().toString(),
      photoUrl: null,
      firstName,
      ageRange,
      occupation,
      lifestyleBadges: selectedBadges,
      bio,
    };

    setRoommates([...roommates, newRoommate]);
    
    // Reset form
    setFirstName("");
    setAgeRange("");
    setOccupation("");
    setSelectedBadges([]);
    setBio("");
    setShowAddForm(false);
  };

  const handleRemoveRoommate = (id: string) => {
    setRoommates(roommates.filter((r) => r.id !== id));
  };

  const toggleBadge = (badge: string) => {
    if (selectedBadges.includes(badge)) {
      setSelectedBadges(selectedBadges.filter((b) => b !== badge));
    } else {
      setSelectedBadges([...selectedBadges, badge]);
    }
  };

  const handleContinue = () => {
    updateExistingRoommates(roommates);
    onNext();
  };

  const canAddRoommate = firstName && ageRange && occupation;

  return (
    <div className="px-[24px] pt-[24px] pb-[100px]">
      {/* Header */}
      <div className="mb-[32px]">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1f2a37] mb-[8px]">
          Who will the new roommate live with?
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
          Add profiles of people already living in this home (optional but recommended).
        </p>
      </div>

      {/* Existing Roommate Cards */}
      {roommates.length > 0 && (
        <div className="flex flex-col gap-[16px] mb-[16px]">
          {roommates.map((roommate) => (
            <div
              key={roommate.id}
              className="bg-white border border-[#e5e7eb] rounded-[12px] p-[16px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-start gap-[12px]">
                {/* Avatar */}
                <div className="flex-none w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#fe456a] to-[#ff758f] flex items-center justify-center">
                  <User className="w-[24px] h-[24px] text-white" strokeWidth={2} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-[4px]">
                    <div>
                      <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
                        {roommate.firstName}
                      </h3>
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
                        {roommate.ageRange} • {roommate.occupation}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveRoommate(roommate.id)}
                      className="flex-none w-[24px] h-[24px] flex items-center justify-center text-[#6b7280] hover:text-[#fe456a] transition-colors"
                    >
                      <X size={20} strokeWidth={2} />
                    </button>
                  </div>

                  {/* Lifestyle Badges */}
                  {roommate.lifestyleBadges.length > 0 && (
                    <div className="flex flex-wrap gap-[6px] mb-[8px]">
                      {roommate.lifestyleBadges.map((badge) => (
                        <span
                          key={badge}
                          className="px-[10px] py-[4px] bg-[#fef0f3] text-[#fe456a] rounded-[16px] font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bio */}
                  {roommate.bio && (
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280]">
                      {roommate.bio}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Roommate Form */}
      {showAddForm ? (
        <div className="bg-white border border-[#e5e7eb] rounded-[12px] p-[20px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] mb-[16px]">
          <div className="flex items-center justify-between mb-[20px]">
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
              Add Roommate
            </h3>
            <button
              onClick={() => setShowAddForm(false)}
              className="text-[#6b7280] hover:text-[#1f2a37] transition-colors"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </div>

          <div className="flex flex-col gap-[16px]">
            {/* First Name */}
            <div>
              <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[6px]">
                First name *
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="e.g., Alex"
                className="w-full h-[44px] px-[14px] border border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] focus:ring-1 focus:ring-[#fe456a]"
              />
            </div>

            {/* Age Range */}
            <div>
              <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[6px]">
                Age range *
              </label>
              <select
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
                className="w-full h-[44px] px-[14px] border border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] focus:ring-1 focus:ring-[#fe456a] bg-white"
              >
                <option value="">Select age range</option>
                {ageRangeOptions.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {/* Occupation */}
            <div>
              <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[6px]">
                Occupation or student status *
              </label>
              <input
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                placeholder="e.g., Software Engineer, Student"
                className="w-full h-[44px] px-[14px] border border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] focus:ring-1 focus:ring-[#fe456a]"
              />
            </div>

            {/* Lifestyle Badges */}
            <div>
              <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
                Lifestyle badges
              </label>
              <div className="flex flex-wrap gap-[8px]">
                {lifestyleBadgeOptions.map((badge) => (
                  <button
                    key={badge}
                    onClick={() => toggleBadge(badge)}
                    className={`px-[12px] py-[6px] rounded-[16px] font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] transition-all ${
                      selectedBadges.includes(badge)
                        ? "bg-[#fe456a] text-white"
                        : "bg-[#f3f4f6] text-[#6b7280] hover:bg-[#e5e7eb]"
                    }`}
                  >
                    {badge}
                  </button>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[6px]">
                Short bio (1-2 lines)
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="A few words about this person..."
                rows={2}
                className="w-full px-[14px] py-[10px] border border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:border-[#fe456a] focus:ring-1 focus:ring-[#fe456a] resize-none"
              />
            </div>

            {/* Add Button */}
            <button
              onClick={handleAddRoommate}
              disabled={!canAddRoommate}
              className={`w-full h-[44px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] transition-all ${
                canAddRoommate
                  ? "bg-[#fe456a] text-white hover:bg-[#e63d5f]"
                  : "bg-[#e5e7eb] text-[#9da4ae] cursor-not-allowed"
              }`}
            >
              Add Roommate
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowAddForm(true)}
          className="w-full h-[52px] border-2 border-dashed border-[#e5e7eb] rounded-[12px] flex items-center justify-center gap-[8px] text-[#6b7280] hover:border-[#fe456a] hover:text-[#fe456a] transition-all mb-[32px]"
        >
          <Plus size={20} strokeWidth={2} />
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px]">
            Add roommate
          </span>
        </button>
      )}

      {/* Continue / Skip Button */}
      <button
        onClick={handleContinue}
        className="w-full h-[52px] rounded-[8px] bg-[#fe456a] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-all"
      >
        {roommates.length > 0 ? "Continue" : "Skip for now"}
      </button>
    </div>
  );
}

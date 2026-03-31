import { ArrowLeft, MapPin, Home, Calendar, Users as UsersIcon, Sparkles, MessageCircle, Search } from "lucide-react";
import { useState } from "react";
import type { ListingData } from "./CreateListingContext";
import { RequestStatusBadge, type RequestStatus } from "./RequestStatusBadge";

interface RequestToJoinProps {
  onBack: () => void;
  listing?: ListingData;
  requestStatus?: RequestStatus; // Add status prop
  onStartChat?: () => void;
  onFindOtherHomes?: () => void;
}

export function RequestToJoin({ onBack, listing, requestStatus, onStartChat, onFindOtherHomes }: RequestToJoinProps) {
  const [moveInDate, setMoveInDate] = useState("");
  const [lengthOfStay, setLengthOfStay] = useState<string>("long-term");
  const [message, setMessage] = useState("");

  if (!listing) {
    return (
      <div className="size-full flex items-center justify-center bg-white">
        <p className="text-[16px] text-[#6b7280]">Loading listing details...</p>
      </div>
    );
  }

  const activeListingData = listing;

  // Helper functions
  const getLivingSetupLabel = () => {
    const setupLabels: Record<string, string> = {
      "private-room-apartment": "Private Room · Shared Apartment",
      "private-room-house": "Private Room · Shared House",
      "entire-home-cotenant": "Entire Home · Split Rent",
      "co-living": "Co-Living Space",
      "entire-apartment": "Entire Apartment",
      "entire-house": "Entire House",
      "private-room": "Private Room",
      "premium-home": "Premium Home",
    };
    return setupLabels[activeListingData.livingSetup || ""] || "";
  };

  const isSharedLiving = () => {
    const sharedTypes = [
      "private-room-apartment",
      "private-room-house",
      "entire-home-cotenant",
      "co-living",
      "private-room",
    ];
    return sharedTypes.includes(activeListingData.livingSetup || "");
  };

  const getPageTitle = () => {
    return activeListingData.intent === "roommate" ? "Request to Join" : "Contact Owner";
  };

  const getCTALabel = () => {
    return activeListingData.intent === "roommate" ? "Send Request" : "Contact Owner";
  };

  const getRentLabel = () => {
    if (isSharedLiving() && activeListingData.intent === "roommate") {
      return `$${activeListingData.rent}/month per person`;
    }
    return `$${activeListingData.rent}/month`;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Flexible";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const handleSubmit = () => {
    console.log("Request submitted:", {
      moveInDate,
      lengthOfStay,
      message,
    });
    // Handle submission logic
    onBack();
  };

  return (
    <div className="size-full flex flex-col bg-[#fafafa]">
      {/* Status Bar Spacer */}
      <div className="h-[44px] bg-white" />

      {/* Header */}
      <div className="bg-white px-[24px] py-[16px] border-b border-[#e5e7eb]">
        <div className="flex items-center gap-[16px] mb-[8px]">
          <button
            onClick={onBack}
            className="p-[4px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
          >
            <ArrowLeft className="w-[20px] h-[20px] text-[#1f2a37]" />
          </button>
          <div className="flex-1">
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
              {getPageTitle()}
            </h1>
          </div>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#9da4ae] pl-[36px]">
          Review details and send your request
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto px-[24px] py-[24px]">
        <div className="max-w-[600px] mx-auto space-y-[24px]">
          {/* Request Status Badge (if status exists) */}
          {requestStatus && (
            <div className="flex justify-center">
              <RequestStatusBadge status={requestStatus} size="large" />
            </div>
          )}

          {/* Listing Summary Card */}
          <div className="bg-white rounded-[12px] border border-[#e5e7eb] p-[12px] flex gap-[12px]">
            {/* Property Image Placeholder */}
            <div className="w-[88px] h-[75px] bg-[#e5e7eb] rounded-[8px] flex-shrink-0 overflow-hidden">
              {activeListingData.photos && activeListingData.photos.length > 0 ? (
                <img
                  src={typeof activeListingData.photos[0] === 'string' ? activeListingData.photos[0] : ""}
                  alt="Property"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Home className="w-[32px] h-[32px] text-[#9da4ae]" />
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37] mb-[4px]">
                  {getLivingSetupLabel()}
                </p>
                <div className="flex items-center gap-[4px] mb-[8px]">
                  <MapPin className="w-[12px] h-[12px] text-[#9da4ae]" />
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[14px] text-[#9da4ae]">
                    Downtown · 2.5 km away
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[10px] leading-[14px] text-[#1f2a37]">
                  {getRentLabel()}
                </p>
                <div className="flex items-center gap-[4px]">
                  <Calendar className="w-[12px] h-[12px] text-[#9da4ae]" />
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[14px] text-[#9da4ae]">
                    {formatDate(activeListingData.moveInDate || "")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Roommate Context (Conditional) */}
          {isSharedLiving() && activeListingData.existingRoommates.length > 0 && (
            <div>
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
                You'll be living with
              </h2>

              {/* Roommate Cards */}
              <div className="space-y-[12px] mb-[16px]">
                {activeListingData.existingRoommates.map((roommate) => (
                  <div
                    key={roommate.id}
                    className="bg-white rounded-[12px] border border-[#e5e7eb] p-[16px] flex gap-[12px]"
                  >
                    {/* Avatar */}
                    <div className="w-[48px] h-[48px] bg-[#f3f4f6] rounded-full flex items-center justify-center flex-shrink-0">
                      {roommate.photoUrl ? (
                        <img
                          src={roommate.photoUrl}
                          alt={roommate.firstName}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <UsersIcon className="w-[24px] h-[24px] text-[#9da4ae]" />
                      )}
                    </div>

                    {/* Roommate Info */}
                    <div className="flex-1">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37] mb-[2px]">
                        {roommate.firstName}, {roommate.ageRange}
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae] mb-[8px]">
                        {roommate.occupation}
                      </p>

                      {/* Lifestyle Badges */}
                      {roommate.lifestyleBadges && roommate.lifestyleBadges.length > 0 && (
                        <div className="flex flex-wrap gap-[6px]">
                          {roommate.lifestyleBadges.map((badge, index) => (
                            <span
                              key={index}
                              className="px-[10px] py-[4px] bg-[#fef3f5] text-[#fe456a] rounded-[12px] font-['Inter:Medium',sans-serif] font-medium text-[10px] leading-[14px]"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Compatibility Indicator */}
              <div className="bg-[#fef3f5] border border-[#fecdda] rounded-[12px] p-[16px]">
                <div className="flex items-center gap-[8px] mb-[4px]">
                  <Sparkles className="w-[20px] h-[20px] text-[#fe456a]" />
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#fe456a]">
                    You're 82% compatible with this home
                  </p>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae] pl-[28px]">
                  Based on lifestyle and preferences
                </p>
              </div>
            </div>
          )}

          {/* Stay Details */}
          <div>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
              Stay Details
            </h2>

            {/* Move-in Date */}
            <div className="mb-[16px]">
              <label className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#6b7280] mb-[8px] block">
                Intended move-in date
              </label>
              <input
                type="date"
                value={moveInDate}
                onChange={(e) => setMoveInDate(e.target.value)}
                disabled={!!requestStatus}
                className="w-full h-[48px] px-[16px] bg-white border border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] disabled:bg-[#f3f4f6] disabled:text-[#9da4ae] disabled:cursor-not-allowed"
                placeholder="Select date"
              />
            </div>

            {/* Length of Stay */}
            <div>
              <label className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#6b7280] mb-[8px] block">
                Length of stay
              </label>
              <div className="flex gap-[8px]">
                {["short-term", "long-term", "flexible"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setLengthOfStay(option)}
                    disabled={!!requestStatus}
                    className={`flex-1 h-[48px] rounded-[8px] border-[2px] font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] transition-all ${
                      lengthOfStay === option
                        ? "border-[#fe456a] bg-[#fef3f5] text-[#fe456a]"
                        : "border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#fe456a]/30"
                    } ${requestStatus ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {option === "short-term"
                      ? "Short-term"
                      : option === "long-term"
                      ? "Long-term"
                      : "Flexible"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Intro Message */}
          <div>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[8px]">
              Add a message{" "}
              <span className="font-['Inter:Regular',sans-serif] font-normal text-[#9da4ae]">
                (optional)
              </span>
            </h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={!!requestStatus}
              className="w-full h-[120px] px-[16px] py-[12px] bg-white border border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a] resize-none disabled:bg-[#f3f4f6] disabled:text-[#9da4ae] disabled:cursor-not-allowed"
              placeholder="Introduce yourself and explain why you'd be a good fit"
            />
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTAs */}
      <div className="flex-none bg-white px-[24px] py-[16px] border-t border-[#e5e7eb]">
        <div className="max-w-[600px] mx-auto space-y-[12px]">
          {/* Dynamic CTAs based on request status */}
          {!requestStatus && (
            <>
              {/* Default: Send Request / Contact Owner */}
              <button
                onClick={handleSubmit}
                className="w-full h-[52px] bg-[#fe456a] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-colors"
              >
                {getCTALabel()}
              </button>
              <button
                onClick={onBack}
                className="w-full h-[48px] bg-transparent text-[#6b7280] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] hover:bg-[#f3f4f6] transition-colors"
              >
                Cancel
              </button>
            </>
          )}

          {requestStatus === "pending" && (
            <>
              {/* Pending: View-only mode */}
              <button
                onClick={onBack}
                className="w-full h-[52px] bg-[#fe456a] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-colors"
              >
                Back to Explore
              </button>
            </>
          )}

          {requestStatus === "accepted" && (
            <>
              {/* Accepted: Start Chat */}
              <button
                onClick={onStartChat}
                className="w-full h-[52px] bg-[#fe456a] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-colors flex items-center justify-center gap-[8px]"
              >
                <MessageCircle className="w-[20px] h-[20px]" />
                Start Chat
              </button>
              <button
                onClick={onBack}
                className="w-full h-[48px] bg-transparent text-[#6b7280] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] hover:bg-[#f3f4f6] transition-colors"
              >
                Back
              </button>
            </>
          )}

          {requestStatus === "declined" && (
            <>
              {/* Declined: Find other homes */}
              <button
                onClick={onFindOtherHomes}
                className="w-full h-[52px] bg-[#fe456a] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-colors flex items-center justify-center gap-[8px]"
              >
                <Search className="w-[20px] h-[20px]" />
                Find Other Homes
              </button>
              <button
                onClick={onBack}
                className="w-full h-[48px] bg-transparent text-[#6b7280] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] hover:bg-[#f3f4f6] transition-colors"
              >
                Back
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
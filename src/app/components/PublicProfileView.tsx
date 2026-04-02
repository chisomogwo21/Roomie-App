import { ArrowLeft, MapPin, User, MessageCircle, UserPlus, Clock, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getProfile } from "../../lib/auth";

interface PublicProfileViewProps {
  onBack: () => void;
  userId?: string;
  connectionStatus?: "pending" | "matched" | "not-connected";
  onChat?: () => void;
  onSendRequest?: () => void;
}

export function PublicProfileView({ 
  onBack, 
  userId,
  connectionStatus = "not-connected",
  onChat,
  onSendRequest,
}: PublicProfileViewProps) {
  const [profileData, setProfileData] = useState<any>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      if (!userId) return;
      setLoadingProfile(true);
      try {
        const { data, error } = await getProfile(userId);
        if (error) throw error;
        setProfileData(data);
      } catch (err: any) {
        console.error("Error loading profile:", err);
        toast.error("Failed to load profile.");
      } finally {
        setLoadingProfile(false);
      }
    }
    loadProfile();
  }, [userId]);

  const getStatusBadge = () => {
    switch (connectionStatus) {
      case "pending":
        return {
          label: "Request Pending",
          bg: "bg-[#fef3c7]",
          text: "text-[#92400e]",
          border: "border-[#fde68a]",
        };
      case "matched":
        return {
          label: "Matched",
          bg: "bg-[#d1fae5]",
          text: "text-[#065f46]",
          border: "border-[#a7f3d0]",
        };
      case "not-connected":
        default:
        return {
          label: "Not Connected",
          bg: "bg-[#f3f4f6]",
          text: "text-[#6b7280]",
          border: "border-[#e5e7eb]",
        };
    }
  };

  const statusBadge = getStatusBadge();

  const handleSendRequest = async () => {
    if (!onSendRequest) return;
    setIsSending(true);
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      toast.success("Connection request sent!");
      onSendRequest();
    } catch (err) {
      toast.error("Failed to send request.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="size-full flex flex-col bg-white overflow-auto">
      {/* Status Bar Spacer */}
      <div className="h-[44px]" />

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-[#e5e7eb]">
        <div className="px-[24px] py-[16px] flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-[4px] -ml-[4px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
          >
            <ArrowLeft className="w-[24px] h-[24px] text-[#1f2a37]" />
          </button>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
            Profile
          </p>
          <div className="w-[32px]" /> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-[120px]">
        {/* Profile Header */}
        {loadingProfile ? (
          <div className="flex justify-center py-[100px]">
            <Loader2 className="w-[40px] h-[40px] animate-spin text-[#fe456a]" />
          </div>
        ) : !profileData ? (
          <div className="px-[24px] py-[40px] text-center text-[#6b7280]">
            User profile not found.
          </div>
        ) : (
          <>
            <div className="px-[24px] pt-[24px]">
              {/* Avatar */}
              <div className="flex justify-center mb-[16px]">
                {profileData.avatar_url ? (
                  <div className="w-[120px] h-[120px] rounded-full border-[4px] border-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] overflow-hidden">
                    <img src={profileData.avatar_url} alt={profileData.full_name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#fe456a] to-[#ff758f] flex items-center justify-center">
                    <User className="w-[60px] h-[60px] text-white" strokeWidth={2} />
                  </div>
                )}
              </div>

              {/* Name & Basic Info */}
              <div className="text-center mb-[16px]">
                <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[30px] text-[#1f2a37] mb-[4px]">
                  {profileData.full_name || "Roomie User"}
                </h1>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#6b7280] mb-[2px]">
                  {profileData.occupation || "Member"}
                </p>
                <div className="flex items-center justify-center gap-[4px] text-[#9da4ae]">
                  <MapPin className="w-[14px] h-[14px]" />
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[18px]">
                    {profileData.preferred_location || "Kigali"}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex justify-center mb-[24px]">
                <div className={`inline-flex items-center gap-[6px] px-[16px] py-[8px] ${statusBadge.bg} border ${statusBadge.border} rounded-[20px]`}>
                  <span className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[18px] ${statusBadge.text}`}>
                    {statusBadge.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Lifestyle Tags */}
            {profileData.lifestyle_tags && profileData.lifestyle_tags.length > 0 && (
              <div className="px-[24px] pt-[8px]">
                <div className="flex flex-wrap gap-[8px] justify-center">
                  {profileData.lifestyle_tags.map((tag: string) => (
                    <div
                      key={tag}
                      className="px-[12px] py-[6px] bg-[#fef0f3] rounded-[16px]"
                    >
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#fe456a]">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bio */}
            {profileData.bio && (
              <div className="px-[24px] pt-[32px]">
                <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
                  About
                </h2>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#6b7280]">
                  {profileData.bio}
                </p>
              </div>
            )}

            {/* Looking For */}
            {profileData.looking_for && (
              <div className="px-[24px] pt-[32px]">
                <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
                  Looking for
                </h2>
                <div className="inline-flex items-center gap-[8px] px-[16px] py-[10px] bg-[#f3f4f6] border border-[#e5e7eb] rounded-[12px]">
                  <User className="w-[16px] h-[16px] text-[#6b7280]" />
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37]">
                    {profileData.looking_for}
                  </span>
                </div>
              </div>
            )}

            {/* Preferred Move-in */}
            {profileData.preferred_move_in && (
              <div className="px-[24px] pt-[24px]">
                <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
                  Preferred move-in
                </h2>
                <div className="inline-flex items-center gap-[8px] px-[16px] py-[10px] bg-[#f3f4f6] border border-[#e5e7eb] rounded-[12px]">
                  <Clock className="w-[16px] h-[16px] text-[#6b7280]" />
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37]">
                    {profileData.preferred_move_in}
                  </span>
                </div>
              </div>
            )}
          </>
        )}

        {/* Privacy Notice */}
        <div className="px-[24px] pt-[32px]">
          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[12px] p-[16px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#6b7280] text-center">
              Contact information is protected. Connect through Roomie to start chatting.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed CTA */}
      {connectionStatus === "matched" && onChat && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e7eb] px-[24px] py-[16px] shadow-[0px_-4px_12px_rgba(0,0,0,0.05)]">
          <button 
            onClick={onChat}
            className="w-full h-[52px] bg-[#fe456a] text-white rounded-[8px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-all font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] flex items-center justify-center gap-[8px]"
          >
            <MessageCircle className="w-[20px] h-[20px]" />
            Chat
          </button>
        </div>
      )}

      {connectionStatus === "not-connected" && onSendRequest && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e7eb] px-[24px] py-[16px] shadow-[0px_-4px_12px_rgba(0,0,0,0.05)]">
          <button 
            onClick={handleSendRequest}
            disabled={loadingProfile || isSending || !profileData}
            className="w-full h-[52px] bg-[#fe456a] text-white rounded-[8px] shadow-[0px_8px_8px_-4px_rgba(254,69,106,0.1),0px_20px_24px_-4px_rgba(254,69,106,0.15)] hover:bg-[#e63d5f] transition-all font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] flex items-center justify-center gap-[8px] disabled:bg-[#e5e7eb] disabled:text-[#9da4ae] disabled:cursor-not-allowed"
          >
            {(loadingProfile || isSending) ? <Loader2 className="w-[20px] h-[20px] animate-spin" /> : <><UserPlus className="w-[20px] h-[20px]" /> Send Request</>}
          </button>
          <p className="text-center font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae] mt-[8px]">
            Send a connection request to start chatting
          </p>
        </div>
      )}

      {connectionStatus === "pending" && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e7eb] px-[24px] py-[16px] shadow-[0px_-4px_12px_rgba(0,0,0,0.05)]">
          <div className="w-full h-[52px] bg-[#f3f4f6] border border-[#e5e7eb] rounded-[8px] flex items-center justify-center gap-[8px]">
            <Clock className="w-[20px] h-[20px] text-[#9da4ae]" />
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#6b7280]">
              Request Pending
            </span>
          </div>
          <p className="text-center font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae] mt-[8px]">
            Waiting for them to accept your request
          </p>
        </div>
      )}
    </div>
  );
}

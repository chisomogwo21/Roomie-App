import { useState, useEffect } from "react";
import { ArrowLeft, MapPin, Home, Calendar, Clock, Check, X, MessageCircle, Loader2 } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { fetchRequestById } from "../../lib/requests";

type RequestStatus = "pending" | "accepted" | "declined";

interface RequestDetailProps {
  onBack: () => void;
  requestType: "received" | "sent";
  requestId: string;
  onAccept?: () => void;
  onDecline?: () => void;
  onStartChat?: () => void;
}

export function RequestDetail({
  onBack,
  requestType,
  requestId,
  onAccept,
  onDecline,
  onStartChat,
}: RequestDetailProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRequest() {
      setLoading(true);
      try {
        const { data: reqData, error } = await fetchRequestById(requestId);
        if (error) throw error;
        setData(reqData);
      } catch (err) {
        console.error("Error loading request:", err);
      } finally {
        setLoading(false);
      }
    }
    loadRequest();
  }, [requestId]);

  const isReceived = requestType === "received";

  if (loading) {
    return (
      <div className="size-full flex items-center justify-center bg-white">
        <Loader2 className="w-[40px] h-[40px] animate-spin text-[#fe456a]" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="size-full flex flex-col items-center justify-center p-[40px] bg-white">
        <p className="text-[16px] text-[#6b7280] text-center mb-[20px]">Request not found</p>
        <button onClick={onBack} className="text-[#fe456a] font-semibold">Go Back</button>
      </div>
    );
  }

  const profile = isReceived ? data.sender : data.recipient;
  const property = data.properties;

  const getStatusBadge = (status: RequestStatus) => {
    const styles = {
      pending: "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]",
      accepted: "bg-[#D1FAE5] text-[#065F46] border-[#A7F3D0]",
      declined: "bg-[#FEE2E2] text-[#991B1B] border-[#FECACA]",
    };

    const labels = {
      pending: "Pending",
      accepted: "Accepted",
      declined: "Declined",
    };

    return (
      <span className={`px-[12px] py-[6px] rounded-full text-[13px] font-medium border ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="size-full flex flex-col bg-[#fafafa] overflow-auto">
      {/* Status Bar Spacer */}
      <div className="h-[44px] bg-white" />

      {/* Header */}
      <div className="bg-white px-[20px] py-[16px] border-b border-[#e5e7eb] flex items-center gap-[16px]">
        <button onClick={onBack} className="flex items-center justify-center">
          <ArrowLeft size={24} className="text-[#1f2a37]" />
        </button>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#1f2a37]">
          Request Details
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 pb-[100px]">
        {/* Status Banner */}
        <div className="mx-[20px] mt-[20px] flex items-center justify-between">
          {getStatusBadge(data.status)}
          <div className="flex items-center gap-[4px] text-[13px] text-[#9da4ae]">
            <Clock size={14} />
            <span>{new Date(data.created_at).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Listing Summary Card */}
        <div className="mx-[20px] mt-[16px] bg-white rounded-[16px] border border-[#e5e7eb] overflow-hidden">
          {/* Cover Image */}
          <div className="w-full h-[180px] bg-gray-200 relative">
            {property?.images?.[0] ? (
              <ImageWithFallback
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FE456A]/10 to-[#FE456A]/20">
                <Home size={48} className="text-[#FE456A]/40" />
              </div>
            )}
          </div>

          {/* Listing Info */}
          <div className="p-[16px]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[17px] leading-[22px] text-[#1f2a37] mb-[8px]">
              {property?.title || "Property"}
            </h2>
            
            <div className="flex items-center gap-[8px] text-[14px] text-[#6b7280] mb-[8px]">
              <Home size={16} />
              <span>{property?.living_setup || "Shared Apartment"}</span>
            </div>

            <div className="flex items-center gap-[8px] text-[14px] text-[#6b7280] mb-[12px]">
              <MapPin size={16} />
              <span>{property?.neighborhood || property?.city || "Location"}</span>
            </div>

            <div className="pt-[12px] border-t border-[#e5e7eb]">
              <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[24px] text-[#1f2a37]">
                ${property?.price || "0"}
              </div>
              <div className="text-[12px] text-[#6b7280]">/month per person</div>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="mx-[20px] mt-[16px] bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            {isReceived ? "Requester Profile" : "Host Profile"}
          </h3>

          <div className="flex items-start gap-[12px] mb-[16px]">
            {/* Profile Photo */}
            <div className="w-[64px] h-[64px] rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
              {profile?.avatar_url ? (
                <ImageWithFallback
                  src={profile.avatar_url}
                  alt={profile.full_name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-gray-600">
                  {(profile?.full_name || "Roomie").charAt(0)}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[17px] leading-[22px] text-[#1f2a37] mb-[4px]">
                {profile?.full_name || "Roomie"}
              </h4>
              <p className="text-[14px] text-[#6b7280] mb-[4px]">
                {profile?.occupation || "Professional"}
              </p>
            </div>
          </div>

          {/* Lifestyle Tags */}
          {profile?.lifestyle_tags && (
            <div className="flex flex-wrap gap-[8px] mb-[16px]">
              {profile.lifestyle_tags.map((tag: any) => (
                <span
                  key={tag}
                  className="px-[12px] py-[6px] bg-[#f3f4f6] text-[#4b5563] text-[13px] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Bio */}
          {profile?.bio && (
            <p className="text-[14px] text-[#6b7280] leading-[20px] mb-[16px]">
              {profile.bio}
            </p>
          )}

          {/* Compatibility Score */}
          <div className="hidden">
            {/* Kept hidden until matching algorithm supports precise scores for request views */}
          </div>

          {/* Compatibility Score */}
          {data.compatibilityScore && (
            <div>
              <div className="flex items-center justify-between mb-[8px]">
                <span className="text-[13px] text-[#6b7280]">Compatibility</span>
                <span className="text-[14px] font-medium text-[#FE456A]">
                  {data.compatibilityScore}% match
                </span>
              </div>
              <div className="w-full h-[8px] bg-[#f3f4f6] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FE456A] rounded-full"
                  style={{ width: `${data.compatibilityScore}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Request Details */}
        <div className="mx-[20px] mt-[16px] bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            Request Information
          </h3>

          <div className="space-y-[16px]">
            {/* Move-in Date */}
            <div className="flex items-start gap-[12px]">
              <Calendar size={20} className="text-[#FE456A] mt-[2px]" />
              <div className="flex-1">
                <div className="text-[13px] text-[#9da4ae] mb-[2px]">Preferred Move-in Date</div>
                <div className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-[#1f2a37]">
                  {data.moveInDate}
                </div>
              </div>
            </div>

            {/* Length of Stay */}
            <div className="flex items-start gap-[12px]">
              <Clock size={20} className="text-[#FE456A] mt-[2px]" />
              <div className="flex-1">
                <div className="text-[13px] text-[#9da4ae] mb-[2px]">Length of Stay</div>
                <div className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-[#1f2a37]">
                  {data.lengthOfStay}
                </div>
              </div>
            </div>

            {/* Budget Confirmed - only for received */}
            {isReceived && data.budget_confirmed && (
              <div className="flex items-center gap-[8px] px-[12px] py-[8px] bg-[#D1FAE5]/50 border border-[#A7F3D0] rounded-[8px]">
                <Check size={16} className="text-[#065F46]" />
                <span className="text-[13px] text-[#065F46]">Budget confirmed</span>
              </div>
            )}
          </div>
        </div>

        {/* Intro Message - only for received */}
        {isReceived && data.intro_message && (
          <div className="mx-[20px] mt-[16px] bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
              Message from {profile?.full_name || "Roomie"}
            </h3>
            <p className="text-[14px] text-[#6b7280] leading-[22px]">
              "{data.intro_message}"
            </p>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e7eb] px-[20px] py-[16px]">
        {isReceived && data.status === "pending" && (
          <div className="flex gap-[12px]">
            <button
              onClick={onDecline}
              className="flex-1 h-[52px] bg-white border-2 border-[#e5e7eb] text-[#6b7280] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] hover:bg-[#f9fafb] transition-colors flex items-center justify-center gap-[8px]"
            >
              <X size={20} />
              Decline
            </button>
            <button
              onClick={onAccept}
              className="flex-1 h-[52px] bg-[#FE456A] text-white rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] hover:bg-[#e93d5f] transition-colors flex items-center justify-center gap-[8px]"
            >
              <Check size={20} />
              Accept Request
            </button>
          </div>
        )}

        {data.status === "accepted" && (
          <button
            onClick={onStartChat}
            className="w-full h-[52px] bg-[#FE456A] text-white rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] hover:bg-[#e93d5f] transition-colors flex items-center justify-center gap-[8px]"
          >
            <MessageCircle size={20} />
            Start Chat
          </button>
        )}

        {data.status === "declined" && (
          <div className="bg-[#FEE2E2] border border-[#FECACA] rounded-[12px] px-[16px] py-[12px]">
            <p className="text-[14px] text-[#991B1B] text-center">
              This request has been declined
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

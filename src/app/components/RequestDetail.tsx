import { ArrowLeft, MapPin, Home, Calendar, Clock, Check, X, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

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
  // Demo data - in real app, this would be fetched based on requestId
  const receivedRequestData = {
    id: requestId,
    status: "pending" as RequestStatus,
    requesterPhoto: undefined,
    requesterName: "Sarah Mitchell",
    requesterAge: "27",
    requesterOccupation: "Software Engineer",
    requesterBio: "Clean, organized, and respectful of shared spaces. I work from home and enjoy cooking, reading, and yoga. Non-smoker, no pets.",
    lifestyleTags: ["Clean", "Quiet", "WFH", "Early Bird"],
    compatibilityScore: 92,
    listingTitle: "2BR Apartment in Back Bay",
    listingImage: undefined,
    livingSetup: "Private Room · Shared Apartment",
    city: "Boston",
    neighborhood: "Back Bay",
    price: "$1,200",
    moveInDate: "March 1, 2026",
    lengthOfStay: "6-12 months",
    budgetConfirmed: true,
    introMessage: "Hi! I'm a software engineer moving to Boston for work. I love cooking and exploring new cafes. I'm clean, quiet, and work from home most days. I'm looking for roommates who value a peaceful home environment but also enjoy occasional hangouts. I'd love to chat more about the space and get to know you better!",
    timestamp: "2 hours ago",
  };

  const sentRequestData = {
    id: requestId,
    status: "accepted" as RequestStatus,
    listingTitle: "Cozy 3BR in Cambridge",
    listingImage: undefined,
    livingSetup: "Private Room · Shared House",
    city: "Cambridge",
    neighborhood: "Central Square",
    price: "$1,350",
    hostName: "Michael Torres",
    hostPhoto: undefined,
    hostAge: "29",
    hostOccupation: "Product Designer",
    compatibilityScore: 88,
    moveInDate: "February 15, 2026",
    lengthOfStay: "1 year or more",
    dateSent: "January 17, 2026",
  };

  const data = requestType === "received" ? receivedRequestData : sentRequestData;
  const isReceived = requestType === "received";

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
            <span>{isReceived ? receivedRequestData.timestamp : `Sent ${sentRequestData.dateSent}`}</span>
          </div>
        </div>

        {/* Listing Summary Card */}
        <div className="mx-[20px] mt-[16px] bg-white rounded-[16px] border border-[#e5e7eb] overflow-hidden">
          {/* Cover Image */}
          <div className="w-full h-[180px] bg-gray-200 relative">
            {data.listingImage ? (
              <ImageWithFallback
                src={data.listingImage}
                alt={data.listingTitle}
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
              {data.listingTitle}
            </h2>
            
            <div className="flex items-center gap-[8px] text-[14px] text-[#6b7280] mb-[8px]">
              <Home size={16} />
              <span>{data.livingSetup}</span>
            </div>

            <div className="flex items-center gap-[8px] text-[14px] text-[#6b7280] mb-[12px]">
              <MapPin size={16} />
              <span>{isReceived ? receivedRequestData.neighborhood : sentRequestData.neighborhood}, {data.city}</span>
            </div>

            <div className="pt-[12px] border-t border-[#e5e7eb]">
              <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[24px] text-[#1f2a37]">
                {data.price}
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
              {(isReceived ? receivedRequestData.requesterPhoto : sentRequestData.hostPhoto) ? (
                <ImageWithFallback
                  src={(isReceived ? receivedRequestData.requesterPhoto : sentRequestData.hostPhoto)!}
                  alt={isReceived ? receivedRequestData.requesterName : sentRequestData.hostName}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-gray-600">
                  {(isReceived ? receivedRequestData.requesterName : sentRequestData.hostName).charAt(0)}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[17px] leading-[22px] text-[#1f2a37] mb-[4px]">
                {isReceived ? receivedRequestData.requesterName : sentRequestData.hostName}
              </h4>
              <p className="text-[14px] text-[#6b7280] mb-[4px]">
                {isReceived ? receivedRequestData.requesterAge : sentRequestData.hostAge} · {isReceived ? receivedRequestData.requesterOccupation : sentRequestData.hostOccupation}
              </p>
            </div>
          </div>

          {/* Lifestyle Tags - only for received requests */}
          {isReceived && receivedRequestData.lifestyleTags && (
            <div className="flex flex-wrap gap-[8px] mb-[16px]">
              {receivedRequestData.lifestyleTags.map((tag) => (
                <span
                  key={tag}
                  className="px-[12px] py-[6px] bg-[#f3f4f6] text-[#4b5563] text-[13px] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Bio - only for received requests */}
          {isReceived && receivedRequestData.requesterBio && (
            <p className="text-[14px] text-[#6b7280] leading-[20px] mb-[16px]">
              {receivedRequestData.requesterBio}
            </p>
          )}

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
            {isReceived && receivedRequestData.budgetConfirmed && (
              <div className="flex items-center gap-[8px] px-[12px] py-[8px] bg-[#D1FAE5]/50 border border-[#A7F3D0] rounded-[8px]">
                <Check size={16} className="text-[#065F46]" />
                <span className="text-[13px] text-[#065F46]">Budget confirmed</span>
              </div>
            )}
          </div>
        </div>

        {/* Intro Message - only for received */}
        {isReceived && receivedRequestData.introMessage && (
          <div className="mx-[20px] mt-[16px] bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
              Message from {receivedRequestData.requesterName}
            </h3>
            <p className="text-[14px] text-[#6b7280] leading-[22px]">
              "{receivedRequestData.introMessage}"
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

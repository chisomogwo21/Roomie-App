import { useState, useEffect } from "react";
import { ArrowLeft, Clock, Check, X, Loader2 } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { fetchReceivedRequests, fetchSentRequests, updateRequestStatus } from "../../lib/requests";
import { toast } from "sonner";

type RequestStatus = "pending" | "accepted" | "declined";

interface ReceivedRequest {
  id: string;
  requesterPhoto?: string;
  requesterName: string;
  listingName: string;
  livingSetup: string;
  compatibilityScore?: number;
  status: RequestStatus;
  messagePreview?: string;
  timestamp: string;
  moveInDate: string;
  lengthOfStay: string;
  fullMessage?: string;
}

interface SentRequest {
  id: string;
  listingImage?: string;
  listingTitle: string;
  city: string;
  livingSetup: string;
  status: RequestStatus;
  dateSent: string;
  moveInDate: string;
  lengthOfStay: string;
  hostName?: string;
}

interface RequestsInboxProps {
  onBack: () => void;
  onOpenRequestDetail: (requestId: string, type: "received" | "sent") => void;
  onStartChat?: (requestId: string) => void;
  onAcceptRequest?: (requestId: string) => void;
  onDeclineRequest?: (requestId: string) => void;
}

export function RequestsInbox({
  onBack,
  onOpenRequestDetail,
  onStartChat,
  onAcceptRequest,
  onDeclineRequest,
}: RequestsInboxProps) {
  const [activeTab, setActiveTab] = useState<"received" | "sent">("received");
  const [receivedRequests, setReceivedRequests] = useState<ReceivedRequest[]>([]);
  const [sentRequests, setSentRequests] = useState<SentRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRequests() {
      setLoading(true);
      try {
        const { data: recData } = await fetchReceivedRequests();
        const { data: sentData } = await fetchSentRequests();

        if (recData) {
          setReceivedRequests(recData.map((r: any) => ({
            id: r.id,
            requesterName: r.profiles?.full_name || "Roomie",
            requesterPhoto: r.profiles?.avatar_url,
            listingName: r.properties?.title || "Property",
            livingSetup: r.properties?.living_setup || "Shared Space",
            compatibilityScore: 85, // Fallback for demo
            status: r.status,
            messagePreview: r.intro_message,
            timestamp: new Date(r.created_at).toLocaleDateString(),
            moveInDate: r.move_in_date,
            lengthOfStay: r.length_of_stay,
            fullMessage: r.intro_message
          })));
        }

        if (sentData) {
          setSentRequests(sentData.map((r: any) => ({
            id: r.id,
            listingTitle: r.properties?.title || "Property",
            listingImage: r.properties?.image_url,
            city: r.properties?.city || "Kigali",
            livingSetup: r.properties?.living_setup || "Shared Space",
            status: r.status,
            dateSent: new Date(r.created_at).toLocaleDateString(),
            moveInDate: r.move_in_date,
            lengthOfStay: r.length_of_stay,
          })));
        }
      } catch (err) {
        console.error("Error loading requests:", err);
      } finally {
        setLoading(false);
      }
    }
    loadRequests();
  }, [activeTab]);

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
      <span className={`px-[10px] py-[4px] rounded-full text-[12px] font-medium border ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const handleAccept = async (e: React.MouseEvent, requestId: string) => {
    e.stopPropagation();
    try {
      const { error } = await updateRequestStatus(requestId, "accepted");
      if (error) throw error;
      toast.success("Request accepted!");
      onAcceptRequest?.(requestId);
    } catch (err: any) {
      toast.error(err.message || "Failed to accept request");
    }
  };

  const handleDecline = async (e: React.MouseEvent, requestId: string) => {
    e.stopPropagation();
    try {
      const { error } = await updateRequestStatus(requestId, "declined");
      if (error) throw error;
      toast.success("Request declined");
      onDeclineRequest?.(requestId);
    } catch (err: any) {
      toast.error(err.message || "Failed to decline request");
    }
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
          Booking Requests
        </h1>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-[#e5e7eb]">
        <div className="flex px-[20px]">
          <button
            onClick={() => setActiveTab("received")}
            className={`
              flex-1 py-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] leading-[20px] relative
              ${activeTab === "received" ? "text-[#FE456A]" : "text-[#6b7280]"}
            `}
          >
            Received
            {activeTab === "received" && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FE456A]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("sent")}
            className={`
              flex-1 py-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] leading-[20px] relative
              ${activeTab === "sent" ? "text-[#FE456A]" : "text-[#6b7280]"}
            `}
          >
            Sent
            {activeTab === "sent" && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FE456A]" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-[24px]">
        {loading ? (
          <div className="flex justify-center py-[100px]">
            <Loader2 className="animate-spin text-[#FE456A] w-[40px] h-[40px]" />
          </div>
        ) : activeTab === "received" ? (
          receivedRequests.length > 0 ? (
            <div className="px-[20px] pt-[20px] space-y-[12px]">
              {receivedRequests.map((request) => (
                <div
                  key={request.id}
                  onClick={() => onOpenRequestDetail(request.id, "received")}
                  className="bg-white rounded-[16px] border border-[#e5e7eb] p-[16px] cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-[12px]">
                    {/* Profile Photo */}
                    <div className="w-[56px] h-[56px] rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      {request.requesterPhoto ? (
                        <ImageWithFallback
                          src={request.requesterPhoto}
                          alt={request.requesterName}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-gray-600">
                          {request.requesterName.charAt(0)}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Name and Status */}
                      <div className="flex items-start justify-between gap-[8px] mb-[4px]">
                        <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[20px] text-[#1f2a37]">
                          {request.requesterName}
                        </h3>
                        {getStatusBadge(request.status)}
                      </div>

                      {/* Listing Info */}
                      <p className="text-[14px] text-[#6b7280] mb-[4px]">{request.listingName}</p>
                      <p className="text-[13px] text-[#9da4ae] mb-[8px]">{request.livingSetup}</p>

                      {/* Compatibility Score */}
                      {request.compatibilityScore && (
                        <div className="flex items-center gap-[8px] mb-[8px]">
                          <div className="flex-1 max-w-[120px] h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#FE456A] rounded-full"
                              style={{ width: `${request.compatibilityScore}%` }}
                            />
                          </div>
                          <span className="text-[12px] font-medium text-[#FE456A]">
                            {request.compatibilityScore}% match
                          </span>
                        </div>
                      )}

                      {/* Message Preview */}
                      {request.messagePreview && (
                        <p className="text-[13px] text-[#6b7280] line-clamp-2 mb-[8px]">
                          "{request.messagePreview}"
                        </p>
                      )}

                      {/* Timestamp */}
                      <div className="flex items-center gap-[4px] text-[12px] text-[#9da4ae]">
                        <Clock size={14} />
                        <span>{request.timestamp}</span>
                      </div>

                      {/* Quick Actions for Pending */}
                      {request.status === "pending" && (
                        <div className="flex gap-[8px] mt-[12px]">
                          <button
                            onClick={(e) => handleAccept(e, request.id)}
                            className="flex-1 h-[36px] bg-[#FE456A] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] hover:bg-[#e93d5f] transition-colors flex items-center justify-center gap-[6px]"
                          >
                            <Check size={16} />
                            Accept
                          </button>
                          <button
                            onClick={(e) => handleDecline(e, request.id)}
                            className="flex-1 h-[36px] bg-white border border-[#e5e7eb] text-[#6b7280] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] hover:bg-[#f9fafb] transition-colors flex items-center justify-center gap-[6px]"
                          >
                            <X size={16} />
                            Decline
                          </button>
                        </div>
                      )}

                      {/* Start Chat for Accepted */}
                      {request.status === "accepted" && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onStartChat?.(request.id);
                          }}
                          className="w-full h-[36px] bg-[#FE456A] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] hover:bg-[#e93d5f] transition-colors mt-[12px]"
                        >
                          Start Chat
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State - Received */
            <div className="flex flex-col items-center justify-center h-[400px] px-[40px]">
              <div className="w-[80px] h-[80px] rounded-full bg-[#FE456A]/10 flex items-center justify-center mb-[16px]">
                <Clock size={40} className="text-[#FE456A]" />
              </div>
              <p className="text-[16px] text-[#6b7280] text-center leading-[24px]">
                No requests yet. When someone is interested in your space, it will appear here.
              </p>
            </div>
          )
        ) : (
          /* Sent Tab */
          sentRequests.length > 0 ? (
            <div className="px-[20px] pt-[20px] space-y-[12px]">
              {sentRequests.map((request) => (
                <div
                  key={request.id}
                  onClick={() => onOpenRequestDetail(request.id, "sent")}
                  className="bg-white rounded-[16px] border border-[#e5e7eb] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                >
                  {/* Listing Image */}
                  <div className="w-full h-[160px] bg-gray-200 relative">
                    {request.listingImage ? (
                      <ImageWithFallback
                        src={request.listingImage}
                        alt={request.listingTitle}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FE456A]/10 to-[#FE456A]/20">
                        <span className="text-[48px]">🏠</span>
                      </div>
                    )}
                    {/* Status Badge Overlay */}
                    <div className="absolute top-[12px] right-[12px]">
                      {getStatusBadge(request.status)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-[16px]">
                    <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[20px] text-[#1f2a37] mb-[4px]">
                      {request.listingTitle}
                    </h3>
                    <p className="text-[14px] text-[#6b7280] mb-[4px]">{request.city}</p>
                    <p className="text-[13px] text-[#9da4ae] mb-[12px]">{request.livingSetup}</p>

                    {/* Date Sent */}
                    <div className="flex items-center gap-[4px] text-[12px] text-[#9da4ae] mb-[12px]">
                      <Clock size={14} />
                      <span>Sent {request.dateSent}</span>
                    </div>

                    {/* Start Chat for Accepted */}
                    {request.status === "accepted" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onStartChat?.(request.id);
                        }}
                        className="w-full h-[40px] bg-[#FE456A] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] hover:bg-[#e93d5f] transition-colors"
                      >
                        Start Chat
                      </button>
                    )}

                    {/* Pending Status Message */}
                    {request.status === "pending" && (
                      <div className="bg-[#FEF3C7]/50 border border-[#FDE68A] rounded-[8px] px-[12px] py-[8px]">
                        <p className="text-[12px] text-[#92400E]">
                          Waiting for host to respond...
                        </p>
                      </div>
                    )}

                    {/* Declined Status Message */}
                    {request.status === "declined" && (
                      <div className="bg-[#FEE2E2]/50 border border-[#FECACA] rounded-[8px] px-[12px] py-[8px]">
                        <p className="text-[12px] text-[#991B1B]">
                          This request was declined
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State - Sent */
            <div className="flex flex-col items-center justify-center h-[400px] px-[40px]">
              <div className="w-[80px] h-[80px] rounded-full bg-[#FE456A]/10 flex items-center justify-center mb-[16px]">
                <Clock size={40} className="text-[#FE456A]" />
              </div>
              <p className="text-[16px] text-[#6b7280] text-center leading-[24px]">
                You haven't sent any requests yet.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

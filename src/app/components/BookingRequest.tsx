import { useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { sendBookingRequest, checkExistingRequest } from "../../lib/requests";
import { supabase } from "../../lib/supabaseClient";
import { toast } from "sonner";

interface Roommate {
  id: string;
  name: string;
  age: string;
  occupation: string;
  lifestyleTags: string[];
  compatibilityScore: number;
}

interface BookingRequestProps {
  onBack: () => void;
  listingType: "shared" | "entire";
  listingId: string;
  recipientId: string;
  listingData?: {
    title: string;
    coverImage?: string;
    livingSetup: string;
    city: string;
    neighborhood: string;
    price: string;
    rent?: string;
    priceUnit: string;
    moveInDate: string;
    roommates?: Roommate[];
  };
  onSendRequest?: (requestData: {
    moveInDate: string;
    lengthOfStay: string;
    budgetConfirmed: boolean;
    introMessage: string;
  }) => void;
}

export function BookingRequest({ 
  onBack, 
  listingType, 
  listingId,
  recipientId,
  listingData,
  onSendRequest 
}: BookingRequestProps) {
  // Form state
  const [moveInDate, setMoveInDate] = useState("");
  const [lengthOfStay, setLengthOfStay] = useState("");
  const [budgetConfirmed, setBudgetConfirmed] = useState(false);
  const [introMessage, setIntroMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isShared = listingType === "shared";
  const listing = listingData;

  // Check if form is valid
  const isFormValid = moveInDate && lengthOfStay && budgetConfirmed;

  const handleSubmit = async () => {
    if (!isFormValid || loading) return;

    setLoading(true);
    try {
      // 1. Get current user session to verify self-request
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error("You must be logged in to send a request.");
      }

      // Security check: cannot send request to yourself
      if (user.id === recipientId) {
        throw new Error("You cannot send a booking request to your own property.");
      }

      // 2. Check for existing request first
      const { data: existing, error: checkError } = await checkExistingRequest(listingId);
      if (checkError) {
        console.error("Error checking existing request:", checkError);
      }
      
      if (existing) {
        toast.error("You have already sent a request for this listing.");
        onBack(); // Move back to prevent further attempts
        return;
      }

      // 3. Send the request
      const { error } = await sendBookingRequest({
        listingId,
        recipientId,
        moveInDate,
        lengthOfStay,
        budgetConfirmed,
        introMessage
      });
      
      if (error) throw error;

      toast.success("Request sent successfully!");
      if (onSendRequest) {
        onSendRequest({
          moveInDate,
          lengthOfStay,
          budgetConfirmed,
          introMessage
        });
      }
      onBack();
    } catch (err: any) {
      console.error("Submission error:", err);
      toast.error(err.message || "Failed to send request. Please try again.");
    } finally {
      setLoading(false);
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
          {isShared ? "Request to Join" : "Rental Request"}
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 pb-[24px]">
        {/* Request Details Form */}
        <div className="mx-[20px] mt-[16px] bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[20px]">
            Request Details
          </h3>

          <div className="space-y-[20px]">
            {/* Move-in Date */}
            <div>
              <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
                Preferred Move-in Date <span className="text-[#FE456A]">*</span>
              </label>
              <input
                type="date"
                value={moveInDate}
                onChange={(e) => setMoveInDate(e.target.value)}
                className="w-full px-[16px] py-[12px] border border-[#e5e7eb] rounded-[12px] font-['Inter:Regular',sans-serif] text-[15px] text-[#1f2a37] focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
              />
            </div>

            {/* Length of Stay */}
            <div>
              <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
                Length of Stay <span className="text-[#FE456A]">*</span>
              </label>
              <select
                value={lengthOfStay}
                onChange={(e) => setLengthOfStay(e.target.value)}
                className="w-full px-[16px] py-[12px] border border-[#e5e7eb] rounded-[12px] font-['Inter:Regular',sans-serif] text-[15px] text-[#1f2a37] focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
              >
                <option value="">Select duration</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-12-months">6-12 months</option>
                <option value="1-year-plus">1 year or more</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            {/* Budget Confirmation */}
            <div>
              <label className="flex items-start gap-[12px] cursor-pointer">
                <input
                  type="checkbox"
                  checked={budgetConfirmed}
                  onChange={(e) => setBudgetConfirmed(e.target.checked)}
                  className="mt-[2px] w-[20px] h-[20px] rounded border-[#e5e7eb] text-[#FE456A] focus:ring-[#FE456A]/20"
                />
                <div className="flex-1">
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37]">
                    I confirm my budget is {listing?.price || listing?.rent || "$0"}{listing?.priceUnit || "/month"} <span className="text-[#FE456A]">*</span>
                  </span>
                  <p className="text-[13px] text-[#6b7280] mt-[4px]">
                    This helps ensure we're aligned on pricing expectations
                  </p>
                </div>
              </label>
            </div>

            {/* Intro Message */}
            <div>
              <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#1f2a37] mb-[8px]">
                Introduce Yourself (Optional)
              </label>
              <textarea
                value={introMessage}
                onChange={(e) => setIntroMessage(e.target.value)}
                placeholder={isShared 
                  ? "Tell your future roommates about yourself, your interests, and why you'd be a great fit..." 
                  : "Tell the landlord about yourself and why you're interested in this property..."
                }
                rows={5}
                className="w-full px-[16px] py-[12px] border border-[#e5e7eb] rounded-[12px] font-['Inter:Regular',sans-serif] text-[15px] text-[#1f2a37] focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A] resize-none"
              />
              <p className="text-[12px] text-[#9da4ae] mt-[8px]">
                Adding a personal message increases your chances of getting accepted
              </p>
            </div>
          </div>
        </div>

        {/* Trust Microcopy */}
        <div className="mx-[20px] mt-[16px] px-[16px] py-[12px] bg-[#eff6ff] border border-[#bfdbfe] rounded-[12px]">
          <p className="text-[13px] text-[#1e40af] leading-[18px]">
            💡 This sends a request to {isShared ? "the roommates" : "the landlord"}. No payment is required at this stage.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="sticky bottom-0 bg-white border-t border-[#e5e7eb] px-[20px] py-[16px]">
        <button
          onClick={handleSubmit}
          disabled={!isFormValid || loading}
          className={`
            w-full h-[52px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[20px] transition-all flex items-center justify-center gap-[8px]
            ${(isFormValid && !loading) 
              ? "bg-[#FE456A] text-white hover:bg-[#e93d5f]" 
              : "bg-[#e5e7eb] text-[#9da4ae] cursor-not-allowed"
            }
          `}
        >
          {loading ? <Loader2 className="w-[20px] h-[20px] animate-spin" /> : "Send Request"}
        </button>
        <p className="text-center text-[12px] text-[#6b7280] mt-[12px]">
          {isShared 
            ? "Your request will be reviewed by the current roommates" 
            : "The landlord will review your request and get back to you"
          }
        </p>
      </div>
    </div>
  );
}

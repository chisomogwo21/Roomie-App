import { useState } from "react";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";

interface ContactSupportProps {
  onBack: () => void;
}

export function ContactSupport({ onBack }: ContactSupportProps) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subjects = [
    { value: "", label: "Select a topic" },
    { value: "account", label: "Account" },
    { value: "listings", label: "Listings" },
    { value: "matches", label: "Matches" },
    { value: "payments", label: "Payments" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subject && message) {
      console.log("Support request submitted:", { subject, message });
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setSubject("");
        setMessage("");
      }, 3000);
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
          Contact Support
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 pb-[120px]">
        {/* Intro */}
        <div className="px-[24px] pt-[32px] pb-[24px]">
          <p className="text-[15px] leading-[24px] text-[#6b7280] text-center">
            Need help? We're here for you. Send us a message and we'll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Success State */}
        {isSubmitted && (
          <div className="mx-[24px] mb-[24px] bg-[#D1FAE5] border border-[#A7F3D0] rounded-[16px] p-[20px]">
            <div className="flex items-center gap-[12px]">
              <CheckCircle size={24} className="text-[#065F46]" />
              <div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[#065F46] mb-[4px]">
                  Message sent!
                </h3>
                <p className="text-[14px] text-[#065F46]">
                  We'll respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-[24px] space-y-[20px]">
          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#1f2a37] mb-[8px]"
            >
              Subject
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full h-[48px] px-[16px] bg-white border border-[#e5e7eb] rounded-[12px] text-[15px] text-[#1f2a37] focus:outline-none focus:ring-2 focus:ring-[#FE456A] focus:border-transparent"
              required
            >
              {subjects.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#1f2a37] mb-[8px]"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              placeholder="Tell us what's going on..."
              className="w-full px-[16px] py-[12px] bg-white border border-[#e5e7eb] rounded-[12px] text-[15px] text-[#1f2a37] placeholder:text-[#9da4ae] focus:outline-none focus:ring-2 focus:ring-[#FE456A] focus:border-transparent resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[52px] bg-[#FE456A] text-white rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] hover:bg-[#e93d5f] transition-colors flex items-center justify-center gap-[8px] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!subject || !message}
          >
            <Send size={20} />
            Send Message
          </button>
        </form>

        {/* Email Alternative */}
        <div className="px-[24px] pt-[32px]">
          <div className="bg-white rounded-[16px] border border-[#e5e7eb] p-[20px] text-center">
            <p className="text-[14px] text-[#6b7280] mb-[8px]">Or email us at</p>
            <a
              href="mailto:support@roomie.app"
              className="text-[15px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#FE456A] hover:underline"
            >
              support@roomie.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowLeft, Shield } from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  const sections = [
    {
      title: "Introduction",
      content: `Roomie is committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy outlines how we collect, use, and protect your personal information.

We believe in transparency and your right to understand how your data is handled. By using Roomie, you agree to the collection and use of information in accordance with this policy.`,
    },
    {
      title: "Information We Collect",
      content: `We collect information that you provide directly to us, including:

• Profile information (name, age, occupation, lifestyle preferences)
• Account credentials (email, password)
• Listing information (photos, descriptions, location)
• Communication data (messages, requests, reviews)
• Payment information (processed securely through third-party providers)

We also automatically collect certain information when you use our platform, including device information, usage patterns, and location data (with your permission).`,
    },
    {
      title: "How We Use Your Data",
      content: `We use the information we collect to:

• Create and manage your account
• Match you with compatible roommates and homes
• Facilitate communication between users
• Process booking requests and payments
• Improve our services and user experience
• Send you updates, notifications, and support messages
• Ensure platform safety and prevent fraud
• Comply with legal obligations

We never sell your personal information to third parties.`,
    },
    {
      title: "Sharing & Safety",
      content: `Your safety is our priority. We share your information only in the following circumstances:

• With other users as necessary for matching and communication
• With service providers who help us operate the platform
• When required by law or to protect our legal rights
• With your explicit consent

We use industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.`,
    },
    {
      title: "Your Rights",
      content: `You have the right to:

• Access, update, or delete your personal information
• Export your data in a portable format
• Opt-out of marketing communications
• Request that we stop processing your data
• Lodge a complaint with a supervisory authority

To exercise any of these rights, please contact us at privacy@roomie.app. We will respond to your request within 30 days.

For more information or questions about this Privacy Policy, please reach out to our support team.`,
    },
  ];

  return (
    <div className="size-full flex flex-col bg-[#fafafa] overflow-auto">
      {/* Status Bar Spacer */}
      <div className="h-[44px] bg-white" />

      {/* Header */}
      <div className="bg-white px-[20px] py-[16px] border-b border-[#e5e7eb] flex items-center gap-[16px] sticky top-[44px] z-10">
        <button onClick={onBack} className="flex items-center justify-center">
          <ArrowLeft size={24} className="text-[#1f2a37]" />
        </button>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#1f2a37]">
          Privacy Policy
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 pb-[40px]">
        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-[8px] pt-[24px] pb-[20px] px-[24px]">
          <Shield size={16} className="text-[#FE456A]" />
          <p className="text-[13px] text-[#6b7280] text-center">
            Your privacy matters to us. Here's how we protect your data.
          </p>
        </div>

        {/* Last Updated */}
        <div className="px-[24px] pb-[24px]">
          <p className="text-[12px] text-[#9da4ae] text-center">
            Last updated: January 20, 2026
          </p>
        </div>

        {/* Sections */}
        <div className="px-[24px] space-y-[24px]">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
                {section.title}
              </h2>
              <div className="text-[14px] leading-[22px] text-[#6b7280] whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Footer */}
        <div className="px-[24px] pt-[32px]">
          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[12px] p-[16px] text-center">
            <p className="text-[13px] text-[#6b7280] mb-[4px]">
              Questions about our privacy practices?
            </p>
            <a
              href="mailto:privacy@roomie.app"
              className="text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#FE456A] hover:underline"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

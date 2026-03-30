import { ArrowLeft, FileText } from "lucide-react";

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
  const sections = [
    {
      title: "Introduction",
      content: `Welcome to Roomie. These Terms of Service ("Terms") govern your use of the Roomie platform and services. By creating an account or using our services, you agree to be bound by these Terms.

Please read these Terms carefully before using Roomie. If you do not agree with any part of these Terms, you may not use our services.

Roomie reserves the right to modify these Terms at any time. We will notify you of any changes by posting the updated Terms on our platform.`,
    },
    {
      title: "User Responsibilities",
      content: `As a Roomie user, you agree to:

• Provide accurate and truthful information in your profile and listings
• Keep your account credentials secure and confidential
• Use the platform respectfully and professionally
• Comply with all applicable laws and regulations
• Not misrepresent yourself, your living situation, or your intentions
• Not use the platform for fraudulent, illegal, or harmful purposes
• Respect the privacy and safety of other users

You are responsible for all activity that occurs under your account. If you believe your account has been compromised, contact us immediately.`,
    },
    {
      title: "Listings & Requests",
      content: `When creating a listing, you represent that:

• You have the legal right to list the property
• All information and photos are accurate and current
• The property meets all applicable safety and legal requirements
• You will honor booking requests made in good faith

When sending a request to join a listing:

• You commit to providing truthful information about yourself
• You understand that acceptance is at the discretion of the listing owner
• You agree to communicate clearly and respectfully
• You will honor any agreements made with the host

Roomie is a platform that facilitates connections but is not party to any agreements between users.`,
    },
    {
      title: "Safety & Conduct",
      content: `We are committed to maintaining a safe and respectful community. The following behaviors are strictly prohibited:

• Harassment, discrimination, or hate speech of any kind
• Sharing inappropriate or offensive content
• Requesting or sharing contact information before a booking is confirmed
• Using the platform to solicit or advertise unrelated services
• Creating fake accounts or impersonating others
• Attempting to bypass our safety features or payment systems

Violations of these conduct policies may result in account suspension or permanent removal from the platform. We reserve the right to investigate and take appropriate action against any user who violates these Terms.`,
    },
    {
      title: "Limitation of Liability",
      content: `Roomie provides a platform to connect users but does not:

• Guarantee the accuracy of user-provided information
• Conduct background checks or verify user identities (unless explicitly stated)
• Assume responsibility for disputes between users
• Guarantee the availability or quality of listings
• Provide insurance coverage for property or personal belongings

You use Roomie at your own risk. To the maximum extent permitted by law, Roomie and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.

We strongly encourage all users to meet in safe, public locations and to trust their instincts when connecting with others.`,
    },
    {
      title: "Termination",
      content: `You may terminate your account at any time through your profile settings. Upon termination:

• Your profile and listings will be removed from the platform
• Active conversations and requests may be archived
• You will no longer have access to platform features

Roomie reserves the right to suspend or terminate your account if:

• You violate these Terms or our community guidelines
• We suspect fraudulent or illegal activity
• Your account has been inactive for an extended period
• We discontinue our services (with reasonable notice)

Termination does not affect any obligations or liabilities that arose before termination.

For questions about these Terms of Service, please contact legal@roomie.app.`,
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
          Terms of Service
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 pb-[40px]">
        {/* Agreement Badge */}
        <div className="flex items-center justify-center gap-[8px] pt-[24px] pb-[20px] px-[24px]">
          <FileText size={16} className="text-[#FE456A]" />
          <p className="text-[13px] text-[#6b7280] text-center">
            By using Roomie, you agree to these terms.
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
              Questions about our terms?
            </p>
            <a
              href="mailto:legal@roomie.app"
              className="text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#FE456A] hover:underline"
            >
              Contact our legal team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

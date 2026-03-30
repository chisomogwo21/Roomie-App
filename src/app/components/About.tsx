import { ArrowLeft, Heart, Users, Search, MessageCircle, Shield, ChevronRight } from "lucide-react";

interface AboutProps {
  onBack: () => void;
  onContactSupport?: () => void;
  onPrivacyPolicy?: () => void;
  onTermsOfService?: () => void;
}

export function About({
  onBack,
  onContactSupport,
  onPrivacyPolicy,
  onTermsOfService,
}: AboutProps) {
  const appVersion = "1.0.0";

  const howItWorksSteps = [
    {
      icon: Users,
      number: "1",
      title: "Set your lifestyle",
      description: "Tell us how you live so we can match you better.",
    },
    {
      icon: Search,
      number: "2",
      title: "Discover & match",
      description: "Explore homes and people that fit your lifestyle.",
    },
    {
      icon: MessageCircle,
      number: "3",
      title: "Request & connect",
      description: "Send a request, get accepted, and start chatting.",
    },
  ];

  const whyRoomieBullets = [
    "Built for shared living",
    "Match by lifestyle, not just rent",
    "Safer and more intentional",
    "Designed for students and professionals",
  ];

  const supportItems = [
    {
      label: "Contact Support",
      onClick: onContactSupport || (() => console.log("Contact Support")),
    },
    {
      label: "Privacy Policy",
      onClick: onPrivacyPolicy || (() => console.log("Privacy Policy")),
    },
    {
      label: "Terms of Service",
      onClick: onTermsOfService || (() => console.log("Terms of Service")),
    },
  ];

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
          About Roomie
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 pb-[40px]">
        {/* Logo/Icon Section */}
        <div className="flex flex-col items-center pt-[40px] pb-[32px] px-[24px]">
          <div className="w-[80px] h-[80px] rounded-[20px] bg-[#FE456A] flex items-center justify-center mb-[16px]">
            <Heart size={40} className="text-white fill-white" />
          </div>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[28px] text-[#1f2a37] mb-[4px]">
            Roomie
          </h2>
          <p className="text-[14px] text-[#9da4ae]">Version {appVersion}</p>
        </div>

        {/* Section 1: What is Roomie? */}
        <div className="px-[24px] pb-[32px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
            What is Roomie?
          </h3>
          <p className="text-[15px] leading-[24px] text-[#6b7280]">
            Roomie is a people-first platform that helps you find roommates and homes based on
            lifestyle, preferences, and compatibility — not just budget.
          </p>
        </div>

        {/* Section 2: How Roomie Works */}
        <div className="px-[24px] pb-[32px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[20px]">
            How Roomie Works
          </h3>
          <div className="space-y-[20px]">
            {howItWorksSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="flex gap-[16px]">
                  {/* Icon Circle */}
                  <div className="w-[48px] h-[48px] rounded-full bg-[#FE456A]/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent size={24} className="text-[#FE456A]" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-[2px]">
                    <div className="flex items-baseline gap-[8px] mb-[4px]">
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[#FE456A]">
                        {step.number}.
                      </span>
                      <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] leading-[20px] text-[#1f2a37]">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-[14px] leading-[20px] text-[#6b7280]">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Why Roomie? */}
        <div className="px-[24px] pb-[32px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[16px]">
            Why Roomie?
          </h3>
          <div className="bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
            <div className="space-y-[12px]">
              {whyRoomieBullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-[12px]">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#FE456A] mt-[8px] flex-shrink-0" />
                  <p className="text-[14px] leading-[20px] text-[#6b7280] flex-1">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Support & Info */}
        <div className="px-[24px] pb-[32px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37] mb-[12px]">
            Support & Info
          </h3>
          <div className="bg-white rounded-[16px] border border-[#e5e7eb] overflow-hidden">
            {supportItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className={`
                  w-full flex items-center justify-between px-[20px] py-[16px]
                  hover:bg-[#f9fafb] transition-colors
                  ${index !== supportItems.length - 1 ? "border-b border-[#e5e7eb]" : ""}
                `}
              >
                <span className="text-[15px] text-[#1f2a37]">{item.label}</span>
                <ChevronRight size={20} className="text-[#9da4ae]" />
              </button>
            ))}
            
            {/* App Version Row (non-tappable) */}
            <div className="flex items-center justify-between px-[20px] py-[16px] border-t border-[#e5e7eb]">
              <span className="text-[15px] text-[#1f2a37]">App Version</span>
              <span className="text-[15px] text-[#9da4ae]">{appVersion}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-[24px] pt-[8px] pb-[24px]">
          <div className="flex items-center justify-center gap-[6px]">
            <Heart size={14} className="text-[#FE456A] fill-[#FE456A]" />
            <p className="text-[13px] text-[#9da4ae] text-center">
              Made to help people live better together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
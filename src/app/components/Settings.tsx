import { ArrowLeft, User, Lock, Bell, Shield, Info, ChevronRight, CheckSquare } from "lucide-react";

interface SettingsProps {
  onBack: () => void;
  onEditProfile: () => void;
  onChangePassword: () => void;
  onRequestHandling: () => void;
  onLifestylePreferences: () => void;
  onAbout: () => void;
}

export function Settings({ 
  onBack, 
  onEditProfile, 
  onChangePassword, 
  onRequestHandling,
  onLifestylePreferences,
  onAbout
}: SettingsProps) {
  const sections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Edit Profile", onClick: onEditProfile },
        { icon: Lock, label: "Change Password", onClick: onChangePassword },
      ]
    },
    {
      title: "Preferences",
      items: [
        { icon: CheckSquare, label: "Request Handling", onClick: onRequestHandling },
        { icon: Shield, label: "Lifestyle Preferences", onClick: onLifestylePreferences },
        { icon: Bell, label: "Notifications", onClick: () => {}, summary: "Push, Email" },
      ]
    },
    {
      title: "Support",
      items: [
        { icon: Info, label: "About Roomie", onClick: onAbout },
        { icon: Shield, label: "Privacy Policy", onClick: () => {} },
      ]
    }
  ];

  return (
    <div className="size-full flex flex-col bg-[#fafafa]">
      <div className="h-[44px] bg-white" />
      <div className="bg-white px-[16px] py-[12px] border-b border-[#e5e7eb] flex items-center gap-[12px]">
        <button onClick={onBack} className="p-[4px] hover:bg-[#f3f4f6] rounded-[8px]">
          <ArrowLeft className="w-[24px] h-[24px] text-[#1f2a37]" />
        </button>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#1f2a37]">
          Settings
        </h1>
      </div>

      <div className="flex-1 overflow-auto py-[20px]">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-[32px]">
            <h2 className="px-[24px] mb-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[#9da4ae] uppercase tracking-wider">
              {section.title}
            </h2>
            <div className="bg-white border-y border-[#e5e7eb]">
              {section.items.map((item, itemIdx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIdx}
                    onClick={item.onClick}
                    className={`w-full px-[24px] py-[16px] flex items-center justify-between hover:bg-[#f9fafb] transition-colors ${
                      itemIdx !== section.items.length - 1 ? "border-b border-[#f3f4f6]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-[16px]">
                      <div className="w-[36px] h-[36px] rounded-[10px] bg-[#fe456a]/10 flex items-center justify-center">
                        <Icon className="w-[20px] h-[20px] text-[#fe456a]" />
                      </div>
                      <div className="text-left">
                        <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-[#1f2a37]">
                          {item.label}
                        </p>
                        {item.summary && (
                          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#9da4ae]">
                            {item.summary}
                          </p>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-[20px] h-[20px] text-[#d2d6db]" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="px-[24px] mt-[8px]">
          <p className="text-center font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#9da4ae]">
            Roomie v1.0.0
          </p>
        </div>
      </div>
    </div>
  );
}

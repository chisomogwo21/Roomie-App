import { Home, Compass, FileText, User, Users } from "lucide-react";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({
  activeTab,
  onTabChange,
}: BottomNavigationProps) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "explore", label: "Explore", icon: Compass },
    { id: "community", label: "Community", icon: Users },
    { id: "my-listing", label: "My Listing", icon: FileText },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e7eb] px-4 py-2 z-40">
      <div className="flex items-center justify-around max-w-[600px] mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-1 py-2 px-3 min-w-[60px]"
            >
              <Icon
                className={`w-[24px] h-[24px] ${
                  isActive ? "text-[#fe456a]" : "text-[#9da4ae]"
                }`}
              />
              <span
                className={`font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[12px] ${
                  isActive ? "text-[#fe456a]" : "text-[#9da4ae]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
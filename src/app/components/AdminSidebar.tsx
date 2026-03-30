import { LayoutDashboard, Home, Users, MapPin, Flag, Heart, Settings } from "lucide-react";
import type { AdminView } from "./AdminDashboard";

interface AdminSidebarProps {
  activeView: AdminView;
  onViewChange: (view: AdminView) => void;
}

const menuItems = [
  { id: "dashboard" as AdminView, label: "Dashboard", icon: LayoutDashboard },
  { id: "listings" as AdminView, label: "Listings", icon: Home },
  { id: "users" as AdminView, label: "Users", icon: Users },
  { id: "cities" as AdminView, label: "Cities", icon: MapPin },
  { id: "reports" as AdminView, label: "Reports", icon: Flag },
  { id: "matches" as AdminView, label: "Matches & Requests", icon: Heart },
  { id: "settings" as AdminView, label: "Settings", icon: Settings },
];

export function AdminSidebar({ activeView, onViewChange }: AdminSidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#FE456A] flex items-center justify-center">
            <span className="text-white font-semibold">R</span>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Roomie</div>
            <div className="text-xs text-gray-500">Admin Portal</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors
                ${isActive 
                  ? "bg-[#FE456A]/10 text-[#FE456A]" 
                  : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

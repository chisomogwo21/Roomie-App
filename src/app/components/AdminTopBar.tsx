import { Bell, LogOut, User, ArrowLeft } from "lucide-react";

interface AdminTopBarProps {
  onExit?: () => void;
}

export function AdminTopBar({ onExit }: AdminTopBarProps) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        {onExit && (
          <button
            onClick={onExit}
            className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to App</span>
          </button>
        )}
        <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#FE456A] rounded-full"></span>
        </button>

        {/* Admin Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">Admin User</div>
            <div className="text-xs text-gray-500">admin@roomie.com</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={20} className="text-gray-600" />
          </div>
        </div>

        {/* Logout */}
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
}
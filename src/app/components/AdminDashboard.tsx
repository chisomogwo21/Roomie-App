import { useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopBar } from "./AdminTopBar";
import { AdminOverview } from "./AdminOverview";
import { AdminListings } from "./AdminListings";
import { AdminUsers } from "./AdminUsers";
import { AdminCities } from "./AdminCities";
import { AdminReports } from "./AdminReports";
import { AdminMatches } from "./AdminMatches";
import { AdminSettings } from "./AdminSettings";

export type AdminView = "dashboard" | "listings" | "users" | "cities" | "reports" | "matches" | "settings";

interface AdminDashboardProps {
  onExit?: () => void;
}

export function AdminDashboard({ onExit }: AdminDashboardProps) {
  const [activeView, setActiveView] = useState<AdminView>("dashboard");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar activeView={activeView} onViewChange={setActiveView} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminTopBar onExit={onExit} />
        
        <main className="flex-1 overflow-y-auto">
          {activeView === "dashboard" && <AdminOverview />}
          {activeView === "listings" && <AdminListings />}
          {activeView === "users" && <AdminUsers />}
          {activeView === "cities" && <AdminCities />}
          {activeView === "reports" && <AdminReports />}
          {activeView === "matches" && <AdminMatches />}
          {activeView === "settings" && <AdminSettings />}
        </main>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Bell, Shield, Database, Mail, Globe } from "lucide-react";

export function AdminSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [autoApproveListings, setAutoApproveListings] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="p-6 space-y-6">
      {/* Notification Settings */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
          <Bell size={20} className="text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Notification Settings</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Email Notifications</div>
              <div className="text-sm text-gray-500">Receive email alerts for important events</div>
            </div>
            <button
              onClick={() => setEmailNotifications(!emailNotifications)}
              className={`
                relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                ${emailNotifications ? "bg-[#FE456A]" : "bg-gray-300"}
              `}
            >
              <span
                className={`
                  inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                  ${emailNotifications ? "translate-x-6" : "translate-x-1"}
                `}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Moderation Settings */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
          <Shield size={20} className="text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Moderation Settings</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Auto-Approve Listings</div>
              <div className="text-sm text-gray-500">Automatically approve new listings without manual review</div>
            </div>
            <button
              onClick={() => setAutoApproveListings(!autoApproveListings)}
              className={`
                relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                ${autoApproveListings ? "bg-[#FE456A]" : "bg-gray-300"}
              `}
            >
              <span
                className={`
                  inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                  ${autoApproveListings ? "translate-x-6" : "translate-x-1"}
                `}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Platform Settings */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
          <Globe size={20} className="text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Platform Settings</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Maintenance Mode</div>
              <div className="text-sm text-gray-500">Temporarily disable the platform for users</div>
            </div>
            <button
              onClick={() => setMaintenanceMode(!maintenanceMode)}
              className={`
                relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                ${maintenanceMode ? "bg-[#FE456A]" : "bg-gray-300"}
              `}
            >
              <span
                className={`
                  inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                  ${maintenanceMode ? "translate-x-6" : "translate-x-1"}
                `}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Email Templates */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
          <Mail size={20} className="text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Email Templates</h3>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {[
              "Welcome Email",
              "Listing Approved",
              "Request Received",
              "Match Notification",
              "Weekly Digest"
            ].map((template) => (
              <div key={template} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">{template}</div>
                <button className="text-sm text-[#FE456A] hover:underline font-medium">
                  Edit Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Database Actions */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
          <Database size={20} className="text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Database & Backup</h3>
        </div>
        <div className="p-6">
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              Export Data
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              Create Backup
            </button>
            <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium">
              Clear Cache
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

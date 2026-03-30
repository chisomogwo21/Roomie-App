import { Users, Home, MapPin, Send } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data
const userGrowthData = [
  { date: "Jan 14", users: 120 },
  { date: "Jan 15", users: 145 },
  { date: "Jan 16", users: 168 },
  { date: "Jan 17", users: 192 },
  { date: "Jan 18", users: 215 },
  { date: "Jan 19", users: 243 },
  { date: "Jan 20", users: 278 },
];

const listingsData = [
  { date: "Jan 14", listings: 45 },
  { date: "Jan 15", listings: 52 },
  { date: "Jan 16", listings: 58 },
  { date: "Jan 17", listings: 61 },
  { date: "Jan 18", listings: 67 },
  { date: "Jan 19", listings: 74 },
  { date: "Jan 20", listings: 82 },
];

const stats = [
  {
    label: "Total Users",
    value: "278",
    change: "+15.3%",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    label: "Active Listings",
    value: "82",
    change: "+8.2%",
    icon: Home,
    color: "bg-green-500",
  },
  {
    label: "Cities Live",
    value: "12",
    change: "+2",
    icon: MapPin,
    color: "bg-purple-500",
  },
  {
    label: "Requests Today",
    value: "34",
    change: "+12.1%",
    icon: Send,
    color: "bg-[#FE456A]",
  },
];

export function AdminOverview() {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <Icon size={24} className="text-white" />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <div className="text-3xl font-semibold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#999" />
              <YAxis tick={{ fontSize: 12 }} stroke="#999" />
              <Tooltip />
              <Area type="monotone" dataKey="users" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Listings Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Listings Created (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={listingsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#999" />
              <YAxis tick={{ fontSize: 12 }} stroke="#999" />
              <Tooltip />
              <Line type="monotone" dataKey="listings" stroke="#10b981" strokeWidth={2} dot={{ fill: "#10b981", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            { user: "Emma Wilson", action: "created a new listing", time: "2 minutes ago", type: "listing" },
            { user: "James Chen", action: "signed up", time: "15 minutes ago", type: "user" },
            { user: "Sarah Davis", action: "sent a roommate request", time: "1 hour ago", type: "request" },
            { user: "Admin", action: "approved listing in Boston", time: "2 hours ago", type: "admin" },
            { user: "Mike Johnson", action: "updated their profile", time: "3 hours ago", type: "user" },
          ].map((activity, idx) => (
            <div key={idx} className="px-6 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-gray-600">{activity.user.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </div>
                <div className="text-xs text-gray-500">{activity.time}</div>
              </div>
              <div className={`
                px-2 py-1 rounded text-xs font-medium
                ${activity.type === "listing" ? "bg-green-100 text-green-700" : ""}
                ${activity.type === "user" ? "bg-blue-100 text-blue-700" : ""}
                ${activity.type === "request" ? "bg-purple-100 text-purple-700" : ""}
                ${activity.type === "admin" ? "bg-gray-100 text-gray-700" : ""}
              `}>
                {activity.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

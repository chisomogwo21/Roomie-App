import { useState, useEffect } from "react";
import { Users, Home, MapPin, Send, Loader2 } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { supabase } from "../../lib/supabaseClient";

export function AdminOverview() {
  const [stats, setStats] = useState([
    { label: "Total Users", value: "...", change: "Live", icon: Users, color: "bg-blue-500" },
    { label: "Active Listings", value: "...", change: "Live", icon: Home, color: "bg-green-500" },
    { label: "Cities Live", value: "...", change: "Live", icon: MapPin, color: "bg-purple-500" },
    { label: "Total Requests", value: "...", change: "Live", icon: Send, color: "bg-[#FE456A]" },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [
          { count: userCount },
          { count: listingCount },
          { data: citiesData },
          { count: requestCount }
        ] = await Promise.all([
          supabase.from('profiles').select('*', { count: 'exact', head: true }),
          supabase.from('properties').select('*', { count: 'exact', head: true }),
          supabase.from('properties').select('city'),
          supabase.from('requests').select('*', { count: 'exact', head: true })
        ]);

        const uniqueCities = new Set(citiesData?.map(c => c.city).filter(Boolean)).size;

        setStats([
          { label: "Total Users", value: String(userCount || 0), change: "Total", icon: Users, color: "bg-blue-500" },
          { label: "Active Listings", value: String(listingCount || 0), change: "Active", icon: Home, color: "bg-green-500" },
          { label: "Cities Live", value: String(uniqueCities || 0), change: "Locations", icon: MapPin, color: "bg-purple-500" },
          { label: "Total Requests", value: String(requestCount || 0), change: "All", icon: Send, color: "bg-[#FE456A]" },
        ]);
      } catch (err) {
        console.error("Failed to fetch admin stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12">
        <Loader2 className="w-8 h-8 animate-spin text-[#fe456a] mb-2" />
        <p className="text-gray-500 text-sm">Loading analytics...</p>
      </div>
    );
  }

  // Fallback for charts if no historical data is fetched yet
  const userGrowthData: any[] = [];
  const listingsData: any[] = [];

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

      {/* Charts (Wait for real historical data implementation if needed) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
          {userGrowthData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#999" />
                <YAxis tick={{ fontSize: 12 }} stroke="#999" />
                <Tooltip />
                <Area type="monotone" dataKey="users" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center border border-dashed border-gray-200 rounded-lg text-gray-400 text-sm">
              Insufficient data for growth metrics
            </div>
          )}
        </div>

        {/* Listings Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Listings Activity</h3>
          {listingsData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={listingsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#999" />
                <YAxis tick={{ fontSize: 12 }} stroke="#999" />
                <Tooltip />
                <Line type="monotone" dataKey="listings" stroke="#10b981" strokeWidth={2} dot={{ fill: "#10b981", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center border border-dashed border-gray-200 rounded-lg text-gray-400 text-sm">
              Insufficient data for listing metrics
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-white rounded-lg border border-gray-200 px-6 py-12 text-center">
        <Send className="w-12 h-12 text-gray-200 mx-auto mb-4" />
        <p className="text-gray-500">Live activity feed coming soon.</p>
      </div>
    </div>
  );
}

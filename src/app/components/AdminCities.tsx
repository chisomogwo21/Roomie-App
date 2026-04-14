import { useState, useEffect } from "react";
import { Plus, ToggleLeft, ToggleRight, MapPin, Loader2 } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";

export function AdminCities() {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newCity, setNewCity] = useState({ name: "", state: "", category: "Other" as City["category"] });

  useEffect(() => {
    async function fetchCities() {
      try {
        const { data: props, error } = await supabase
          .from('properties')
          .select('city, country');
        
        if (error) throw error;

        // Group by city and count
        const cityMap = new Map();
        props?.forEach(p => {
          if (!p.city) return;
          const key = p.city;
          if (cityMap.has(key)) {
            cityMap.get(key).listingsCount++;
          } else {
            cityMap.set(key, {
              id: key,
              name: p.city,
              state: "Active",
              country: p.country || "Rwanda",
              listingsCount: 1,
              usersCount: 0,
              enabled: true,
              category: "Other"
            });
          }
        });

        setCities(Array.from(cityMap.values()));
      } catch (err) {
        console.error("Failed to fetch cities:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCities();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12">
        <Loader2 className="w-8 h-8 animate-spin text-[#fe456a] mb-2" />
        <p className="text-gray-500 text-sm">Loading locations...</p>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Popular":
        return "bg-[#FE456A]/10 text-[#FE456A]";
      case "Student":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Cities Management</h2>
              <p className="text-sm text-gray-500 mt-1">{cities.length} cities total • {cities.filter(c => c.enabled).length} enabled</p>
            </div>
            <button
              onClick={() => setShowAddDialog(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#FE456A] text-white rounded-lg hover:bg-[#FE456A]/90 transition-colors"
            >
              <Plus size={20} />
              Add City
            </button>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <div
                key={city.id}
                className={`
                  border rounded-lg p-4 transition-all
                  ${city.enabled ? "border-gray-200 bg-white" : "border-gray-200 bg-gray-50 opacity-60"}
                `}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      <MapPin size={20} className="text-gray-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{city.name}</div>
                      <div className="text-xs text-gray-500">{city.state}, {city.country}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCityStatus(city.id)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                    title={city.enabled ? "Disable city" : "Enable city"}
                  >
                    {city.enabled ? (
                      <ToggleRight size={24} className="text-green-600" />
                    ) : (
                      <ToggleLeft size={24} className="text-gray-400" />
                    )}
                  </button>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Listings</span>
                    <span className="font-medium text-gray-900">{city.listingsCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Users</span>
                    <span className="font-medium text-gray-900">{city.usersCount}</span>
                  </div>
                </div>

                <div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(city.category)}`}>
                    {city.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add City Dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Add New City</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City Name</label>
                <input
                  type="text"
                  value={newCity.name}
                  onChange={(e) => setNewCity({ ...newCity, name: e.target.value })}
                  placeholder="e.g., Boulder"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  value={newCity.state}
                  onChange={(e) => setNewCity({ ...newCity, state: e.target.value })}
                  placeholder="e.g., CO"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={newCity.category}
                  onChange={(e) => setNewCity({ ...newCity, category: e.target.value as City["category"] })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
                >
                  <option value="Other">Other</option>
                  <option value="Popular">Popular</option>
                  <option value="Student">Student</option>
                </select>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowAddDialog(false);
                  setNewCity({ name: "", state: "", category: "Other" });
                }}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCity}
                disabled={!newCity.name || !newCity.state}
                className="px-4 py-2 bg-[#FE456A] text-white rounded-lg hover:bg-[#FE456A]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add City
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { Eye, Check, X, Trash2, Search, Filter, Home } from "lucide-react";

interface Listing {
  id: string;
  title: string;
  city: string;
  livingSetup: string;
  listingType: "Shared" | "Entire Home";
  status: "Active" | "Pending" | "Removed";
  dateCreated: string;
  owner: string;
}

const mockListings: Listing[] = [];

export function AdminListings() {
  const [listings] = useState<Listing[]>(mockListings);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.owner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || listing.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Removed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Listings Management</h2>
            <div className="text-sm text-gray-500">{filteredListings.length} listings</div>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title, city, or owner..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="removed">Removed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Listing
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Living Setup
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredListings.map((listing) => (
                <tr key={listing.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{listing.title}</div>
                    <div className="text-xs text-gray-500">by {listing.owner}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{listing.city}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{listing.livingSetup}</td>
                  <td className="px-6 py-4">
                    <span className={`
                      px-2 py-1 rounded text-xs font-medium
                      ${listing.listingType === "Shared" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}
                    `}>
                      {listing.listingType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(listing.status)}`}>
                      {listing.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(listing.dateCreated).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                        title="View"
                      >
                        <Eye size={16} />
                      </button>
                      {listing.status === "Pending" && (
                        <button
                          className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors"
                          title="Approve"
                        >
                          <Check size={16} />
                        </button>
                      )}
                      {listing.status === "Active" && (
                        <button
                          className="p-1.5 text-yellow-600 hover:bg-yellow-50 rounded transition-colors"
                          title="Unpublish"
                        >
                          <X size={16} />
                        </button>
                      )}
                      <button
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredListings.length === 0 && (
          <div className="px-6 py-12 text-center">
            <div className="text-gray-400 mb-2">
              <Home size={48} className="mx-auto" />
            </div>
            <p className="text-gray-500">No listings found</p>
          </div>
        )}
      </div>
    </div>
  );
}

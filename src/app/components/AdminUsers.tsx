import { useState } from "react";
import { Eye, Ban, CheckCircle, Search, Filter } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "Roommate" | "Landlord" | "Both";
  city: string;
  listingsCount: number;
  status: "Active" | "Suspended";
  joinedDate: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Emma Wilson",
    email: "emma.w@email.com",
    role: "Roommate",
    city: "Boston",
    listingsCount: 1,
    status: "Active",
    joinedDate: "2026-01-10"
  },
  {
    id: "2",
    name: "James Chen",
    email: "james.c@email.com",
    role: "Landlord",
    city: "Cambridge",
    listingsCount: 3,
    status: "Active",
    joinedDate: "2026-01-12"
  },
  {
    id: "3",
    name: "Sarah Davis",
    email: "sarah.d@email.com",
    role: "Both",
    city: "San Francisco",
    listingsCount: 2,
    status: "Active",
    joinedDate: "2026-01-15"
  },
  {
    id: "4",
    name: "Mike Johnson",
    email: "mike.j@email.com",
    role: "Roommate",
    city: "New York",
    listingsCount: 0,
    status: "Active",
    joinedDate: "2026-01-08"
  },
  {
    id: "5",
    name: "Lisa Anderson",
    email: "lisa.a@email.com",
    role: "Landlord",
    city: "Los Angeles",
    listingsCount: 5,
    status: "Suspended",
    joinedDate: "2025-12-20"
  },
  {
    id: "6",
    name: "David Park",
    email: "david.p@email.com",
    role: "Both",
    city: "Austin",
    listingsCount: 1,
    status: "Active",
    joinedDate: "2026-01-18"
  },
  {
    id: "7",
    name: "Rachel Kim",
    email: "rachel.k@email.com",
    role: "Roommate",
    city: "Seattle",
    listingsCount: 0,
    status: "Active",
    joinedDate: "2026-01-19"
  },
  {
    id: "8",
    name: "Tom Rodriguez",
    email: "tom.r@email.com",
    role: "Landlord",
    city: "Denver",
    listingsCount: 2,
    status: "Active",
    joinedDate: "2026-01-14"
  },
];

export function AdminUsers() {
  const [users] = useState<User[]>(mockUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role.toLowerCase() === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Roommate":
        return "bg-blue-100 text-blue-700";
      case "Landlord":
        return "bg-purple-100 text-purple-700";
      case "Both":
        return "bg-green-100 text-green-700";
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
            <h2 className="text-xl font-semibold text-gray-900">Users Management</h2>
            <div className="text-sm text-gray-500">{filteredUsers.length} users</div>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-400" />
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
              >
                <option value="all">All Roles</option>
                <option value="roommate">Roommate</option>
                <option value="landlord">Landlord</option>
                <option value="both">Both</option>
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
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
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Listings
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium text-gray-600">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{user.city}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {user.listingsCount === 0 ? (
                      <span className="text-gray-400">None</span>
                    ) : (
                      <span className="font-medium">{user.listingsCount}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`
                      px-2 py-1 rounded text-xs font-medium
                      ${user.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
                    `}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(user.joinedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                        title="View Profile"
                      >
                        <Eye size={16} />
                      </button>
                      {user.status === "Active" ? (
                        <button
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Suspend"
                        >
                          <Ban size={16} />
                        </button>
                      ) : (
                        <button
                          className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors"
                          title="Reactivate"
                        >
                          <CheckCircle size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <div className="px-6 py-12 text-center">
            <div className="text-gray-400 mb-2">
              <Search size={48} className="mx-auto" />
            </div>
            <p className="text-gray-500">No users found</p>
          </div>
        )}
      </div>
    </div>
  );
}

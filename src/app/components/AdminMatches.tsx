import { useState } from "react";
import { Heart, Send, Filter } from "lucide-react";

interface Match {
  id: string;
  user1: string;
  user2: string;
  compatibilityScore: number;
  date: string;
  status: "Active" | "Inactive";
}

interface Request {
  id: string;
  from: string;
  to: string;
  listingTitle: string;
  status: "Pending" | "Accepted" | "Declined";
  date: string;
}

const mockMatches: Match[] = [];

const mockRequests: Request[] = [];

export function AdminMatches() {
  const [activeTab, setActiveTab] = useState<"matches" | "requests">("matches");
  const [matches] = useState<Match[]>(mockMatches);
  const [requests] = useState<Request[]>(mockRequests);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredMatches = matches.filter(match => 
    statusFilter === "all" || match.status.toLowerCase() === statusFilter
  );

  const filteredRequests = requests.filter(request => 
    statusFilter === "all" || request.status.toLowerCase() === statusFilter
  );

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Matches & Requests</h2>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab("matches")}
              className={`
                flex items-center gap-2 px-6 py-3 border-b-2 transition-colors
                ${activeTab === "matches" 
                  ? "border-[#FE456A] text-[#FE456A]" 
                  : "border-transparent text-gray-600 hover:text-gray-900"
                }
              `}
            >
              <Heart size={18} />
              <span className="font-medium">Matches</span>
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                {matches.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("requests")}
              className={`
                flex items-center gap-2 px-6 py-3 border-b-2 transition-colors
                ${activeTab === "requests" 
                  ? "border-[#FE456A] text-[#FE456A]" 
                  : "border-transparent text-gray-600 hover:text-gray-900"
                }
              `}
            >
              <Send size={18} />
              <span className="font-medium">Requests</span>
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                {requests.length}
              </span>
            </button>
          </div>
        </div>

        {/* Filter */}
        <div className="px-6 py-3 border-b border-gray-200 flex items-center gap-3">
          <Filter size={18} className="text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
          >
            <option value="all">All Status</option>
            {activeTab === "matches" ? (
              <>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </>
            ) : (
              <>
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="declined">Declined</option>
              </>
            )}
          </select>
        </div>

        {/* Matches Table */}
        {activeTab === "matches" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User 1
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User 2
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Compatibility
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Matched
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMatches.map((match) => (
                  <tr key={match.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">{match.user1.charAt(0)}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{match.user1}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">{match.user2.charAt(0)}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{match.user2}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-[100px]">
                          <div 
                            className="h-full bg-[#FE456A]"
                            style={{ width: `${match.compatibilityScore}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{match.compatibilityScore}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`
                        px-2 py-1 rounded text-xs font-medium
                        ${match.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}
                      `}>
                        {match.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {new Date(match.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Requests Table */}
        {activeTab === "requests" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    From
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    To
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Listing
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">{request.from.charAt(0)}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{request.from}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">{request.to.charAt(0)}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{request.to}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{request.listingTitle}</td>
                    <td className="px-6 py-4">
                      <span className={`
                        px-2 py-1 rounded text-xs font-medium
                        ${request.status === "Pending" ? "bg-yellow-100 text-yellow-700" : ""}
                        ${request.status === "Accepted" ? "bg-green-100 text-green-700" : ""}
                        ${request.status === "Declined" ? "bg-red-100 text-red-700" : ""}
                      `}>
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {new Date(request.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {((activeTab === "matches" && filteredMatches.length === 0) || 
          (activeTab === "requests" && filteredRequests.length === 0)) && (
          <div className="px-6 py-12 text-center">
            <div className="text-gray-400 mb-2">
              {activeTab === "matches" ? <Heart size={48} className="mx-auto" /> : <Send size={48} className="mx-auto" />}
            </div>
            <p className="text-gray-500">No {activeTab} found</p>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import { Eye, Check, X, AlertTriangle } from "lucide-react";

interface Report {
  id: string;
  type: "User" | "Listing";
  targetName: string;
  targetId: string;
  reportedBy: string;
  reason: string;
  description: string;
  date: string;
  status: "Pending" | "Resolved" | "Dismissed";
  severity: "Low" | "Medium" | "High";
}

const mockReports: Report[] = [];

export function AdminReports() {
  const [reports, setReports] = useState<Report[]>(mockReports);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const filteredReports = reports.filter((report) => {
    const matchesStatus = statusFilter === "all" || report.status.toLowerCase() === statusFilter;
    const matchesType = typeFilter === "all" || report.type.toLowerCase() === typeFilter;
    return matchesStatus && matchesType;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Resolved":
        return "bg-green-100 text-green-700";
      case "Dismissed":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleResolve = (reportId: string) => {
    setReports(reports.map(r => r.id === reportId ? { ...r, status: "Resolved" as const } : r));
    setSelectedReport(null);
  };

  const handleDismiss = (reportId: string) => {
    setReports(reports.map(r => r.id === reportId ? { ...r, status: "Dismissed" as const } : r));
    setSelectedReport(null);
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Reports & Moderation</h2>
              <p className="text-sm text-gray-500 mt-1">
                {filteredReports.filter(r => r.status === "Pending").length} pending reports
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="resolved">Resolved</option>
              <option value="dismissed">Dismissed</option>
            </select>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE456A]/20 focus:border-[#FE456A]"
            >
              <option value="all">All Types</option>
              <option value="user">User Reports</option>
              <option value="listing">Listing Reports</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{report.targetName}</div>
                    <div className="text-xs text-gray-500">by {report.reportedBy}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`
                      px-2 py-1 rounded text-xs font-medium
                      ${report.type === "User" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}
                    `}>
                      {report.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{report.reason}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(report.severity)}`}>
                      {report.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(report.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedReport(report)}
                        className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                        title="Review"
                      >
                        <Eye size={16} />
                      </button>
                      {report.status === "Pending" && (
                        <>
                          <button
                            onClick={() => handleResolve(report.id)}
                            className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors"
                            title="Resolve"
                          >
                            <Check size={16} />
                          </button>
                          <button
                            onClick={() => handleDismiss(report.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Dismiss"
                          >
                            <X size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredReports.length === 0 && (
          <div className="px-6 py-12 text-center">
            <div className="text-gray-400 mb-2">
              <AlertTriangle size={48} className="mx-auto" />
            </div>
            <p className="text-gray-500">No reports found</p>
          </div>
        )}
      </div>

      {/* Report Detail Dialog */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">Report Details</h3>
              <button
                onClick={() => setSelectedReport(null)}
                className="p-1 text-gray-500 hover:bg-gray-100 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={24} className="text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(selectedReport.severity)}`}>
                      {selectedReport.severity} Severity
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(selectedReport.status)}`}>
                      {selectedReport.status}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{selectedReport.targetName}</h4>
                  <p className="text-sm text-gray-600">ID: {selectedReport.targetId}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-1">Type</div>
                  <div className="text-sm text-gray-900">{selectedReport.type}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-1">Reported By</div>
                  <div className="text-sm text-gray-900">{selectedReport.reportedBy}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-1">Reason</div>
                  <div className="text-sm text-gray-900">{selectedReport.reason}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-1">Date</div>
                  <div className="text-sm text-gray-900">{new Date(selectedReport.date).toLocaleDateString()}</div>
                </div>
              </div>

              <div>
                <div className="text-xs font-medium text-gray-500 mb-1">Description</div>
                <div className="text-sm text-gray-900 bg-gray-50 rounded-lg p-4">
                  {selectedReport.description}
                </div>
              </div>

              {selectedReport.status === "Pending" && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="text-sm font-medium text-yellow-900 mb-2">Moderation Actions</div>
                  <div className="text-xs text-yellow-700 mb-3">
                    Choose an action to take on this report. You can resolve it by taking appropriate action, or dismiss it if it's not valid.
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleResolve(selectedReport.id)}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      Resolve & Take Action
                    </button>
                    <button
                      onClick={() => handleDismiss(selectedReport.id)}
                      className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      Dismiss Report
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

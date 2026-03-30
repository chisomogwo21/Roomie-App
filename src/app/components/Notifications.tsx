import { ArrowLeft, Bell, Home, UserCheck, MessageCircle, XCircle, UserPlus } from "lucide-react";
import { RequestStatusChip, type RequestStatus } from "./RequestStatusBadge";

interface Notification {
  id: string;
  type: "new_request" | "request_accepted" | "request_declined" | "new_message" | "new_match" | "system";
  userName?: string;
  userInitial?: string;
  message: string;
  timestamp: string;
  read: boolean;
  requestStatus?: RequestStatus;
  propertyTitle?: string;
}

interface NotificationsProps {
  onBack: () => void;
  onNotificationClick?: (notification: Notification) => void;
}

export function Notifications({ onBack, onNotificationClick }: NotificationsProps) {
  // Demo notifications data
  const notifications: Notification[] = [
    {
      id: "1",
      type: "new_request",
      userName: "Maria L.",
      userInitial: "M",
      message: "sent you a request to join your listing",
      timestamp: "2 minutes ago",
      read: false,
      propertyTitle: "Sunny 2BR in Kigali Heights",
    },
    {
      id: "2",
      type: "request_accepted",
      userName: "Sarah K.",
      userInitial: "S",
      message: "accepted your request",
      timestamp: "5 minutes ago",
      read: false,
      requestStatus: "accepted",
      propertyTitle: "Sunny 2BR in Kigali Heights",
    },
    {
      id: "3",
      type: "new_message",
      userName: "Alex M.",
      userInitial: "A",
      message: "sent you a message",
      timestamp: "1 hour ago",
      read: false,
    },
    {
      id: "4",
      type: "request_declined",
      userName: "Jordan P.",
      userInitial: "J",
      message: "declined your request",
      timestamp: "3 hours ago",
      read: true,
      requestStatus: "declined",
      propertyTitle: "Modern Studio near City Center",
    },
    {
      id: "5",
      type: "new_match",
      userName: "Emma R.",
      userInitial: "E",
      message: "is a 92% match with you",
      timestamp: "Yesterday",
      read: true,
    },
    {
      id: "6",
      type: "system",
      message: "Complete your profile to get better roommate matches",
      timestamp: "2 days ago",
      read: true,
    },
  ];

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "new_request":
        return { Icon: UserPlus, bgColor: "bg-[#ecfdf5]", iconColor: "text-[#10b981]" };
      case "request_accepted":
        return { Icon: UserCheck, bgColor: "bg-[#ecfdf5]", iconColor: "text-[#10b981]" };
      case "request_declined":
        return { Icon: XCircle, bgColor: "bg-[#f9fafb]", iconColor: "text-[#9da4ae]" };
      case "new_message":
        return { Icon: MessageCircle, bgColor: "bg-[#fef0f3]", iconColor: "text-[#fe456a]" };
      case "new_match":
        return { Icon: Home, bgColor: "bg-[#fef0f3]", iconColor: "text-[#fe456a]" };
      case "system":
        return { Icon: Bell, bgColor: "bg-[#f3f4f6]", iconColor: "text-[#6b7280]" };
    }
  };

  return (
    <div className="size-full flex flex-col bg-[#fafafa]">
      {/* Status Bar Spacer */}
      <div className="h-[44px] bg-white" />

      {/* Header */}
      <div className="bg-white px-[24px] py-[16px] border-b border-[#e5e7eb]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[16px]">
            <button
              onClick={onBack}
              className="p-[4px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
            >
              <ArrowLeft className="w-[20px] h-[20px] text-[#1f2a37]" />
            </button>
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37]">
              Notifications
            </h1>
          </div>
          <button className="font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[18px] text-[#fe456a] hover:text-[#e63d5f] transition-colors">
            Mark all read
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-auto">
        {notifications.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center h-full px-[24px] py-[48px]">
            <div className="w-[80px] h-[80px] bg-[#f3f4f6] rounded-full flex items-center justify-center mb-[16px]">
              <Bell className="w-[40px] h-[40px] text-[#9da4ae]" />
            </div>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[24px] text-[#1f2a37] mb-[8px]">
              No notifications
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#9da4ae] text-center">
              We'll notify you about important updates, messages, and matches.
            </p>
          </div>
        ) : (
          // Notifications List
          <div className="divide-y divide-[#e5e7eb]">
            {notifications.map((notification) => {
              const { Icon, bgColor, iconColor } = getNotificationIcon(notification.type);

              return (
                <button
                  key={notification.id}
                  onClick={() => onNotificationClick?.(notification)}
                  className={`w-full px-[24px] py-[16px] flex gap-[12px] hover:bg-[#fafafa] transition-colors text-left ${
                    !notification.read ? "bg-[#fef3f5]" : "bg-white"
                  }`}
                >
                  {/* Profile Image or Icon */}
                  {notification.userName && notification.userInitial ? (
                    // Profile Avatar for user-generated notifications
                    <div className="flex-none w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#fe456a] to-[#ff758f] flex items-center justify-center">
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[20px] text-white">
                        {notification.userInitial}
                      </span>
                    </div>
                  ) : (
                    // Icon for system notifications
                    <div className={`flex-none w-[40px] h-[40px] rounded-full ${bgColor} flex items-center justify-center`}>
                      <Icon className={`w-[20px] h-[20px] ${iconColor}`} />
                    </div>
                  )}

                  {/* Notification Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-[8px] mb-[4px]">
                      {/* Message with username */}
                      <p
                        className={`flex-1 font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] ${
                          !notification.read ? "font-normal text-[#1f2a37]" : "text-[#6b7280]"
                        }`}
                      >
                        {notification.userName && (
                          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">
                            {notification.userName}{" "}
                          </span>
                        )}
                        {notification.message}
                      </p>
                      {/* Timestamp */}
                      <span className="flex-none font-['Inter:Regular',sans-serif] font-normal text-[11px] leading-[14px] text-[#9da4ae]">
                        {notification.timestamp}
                      </span>
                    </div>

                    {/* Property Title (if applicable) */}
                    {notification.propertyTitle && (
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#9da4ae] mb-[8px]">
                        {notification.propertyTitle}
                      </p>
                    )}

                    {/* Request Status Badge */}
                    {notification.requestStatus && (
                      <div>
                        <RequestStatusChip status={notification.requestStatus} />
                      </div>
                    )}
                  </div>

                  {/* Unread Indicator */}
                  {!notification.read && (
                    <div className="flex-none w-[8px] h-[8px] bg-[#fe456a] rounded-full mt-[6px]" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
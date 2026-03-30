import { Clock, CheckCircle, XCircle } from "lucide-react";

export type RequestStatus = "pending" | "accepted" | "declined";

interface RequestStatusBadgeProps {
  status: RequestStatus;
  size?: "small" | "medium" | "large";
}

export function RequestStatusBadge({ status, size = "medium" }: RequestStatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case "pending":
        return {
          label: "Request sent",
          helperText: "Waiting for response",
          icon: Clock,
          bgColor: "bg-[#f3f4f6]",
          textColor: "text-[#6b7280]",
          borderColor: "border-[#e5e7eb]",
          iconColor: "text-[#9da4ae]",
        };
      case "accepted":
        return {
          label: "Request accepted",
          helperText: "You can now chat with them",
          icon: CheckCircle,
          bgColor: "bg-[#ecfdf5]",
          textColor: "text-[#059669]",
          borderColor: "border-[#a7f3d0]",
          iconColor: "text-[#10b981]",
        };
      case "declined":
        return {
          label: "Request declined",
          helperText: "This request was not accepted",
          icon: XCircle,
          bgColor: "bg-[#f9fafb]",
          textColor: "text-[#6b7280]",
          borderColor: "border-[#e5e7eb]",
          iconColor: "text-[#9da4ae]",
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  // Size variations
  const sizeClasses = {
    small: {
      container: "px-[8px] py-[4px]",
      icon: "w-[14px] h-[14px]",
      label: "text-[10px] leading-[14px]",
      helper: "text-[9px] leading-[12px]",
    },
    medium: {
      container: "px-[12px] py-[6px]",
      icon: "w-[16px] h-[16px]",
      label: "text-[12px] leading-[16px]",
      helper: "text-[10px] leading-[14px]",
    },
    large: {
      container: "px-[16px] py-[10px]",
      icon: "w-[20px] h-[20px]",
      label: "text-[14px] leading-[20px]",
      helper: "text-[12px] leading-[16px]",
    },
  };

  const sizeConfig = sizeClasses[size];

  return (
    <div
      className={`inline-flex items-center gap-[8px] ${config.bgColor} ${config.borderColor} border rounded-[8px] ${sizeConfig.container}`}
    >
      <Icon className={`${sizeConfig.icon} ${config.iconColor}`} />
      <div className="flex flex-col">
        <span
          className={`font-['Inter:Semi_Bold',sans-serif] font-semibold ${config.textColor} ${sizeConfig.label}`}
        >
          {config.label}
        </span>
        {size !== "small" && (
          <span
            className={`font-['Inter:Regular',sans-serif] font-normal text-[#9da4ae] ${sizeConfig.helper}`}
          >
            {config.helperText}
          </span>
        )}
      </div>
    </div>
  );
}

// Compact badge variant for lists
export function RequestStatusChip({ status }: { status: RequestStatus }) {
  const getStatusConfig = () => {
    switch (status) {
      case "pending":
        return {
          label: "Pending",
          bgColor: "bg-[#f3f4f6]",
          textColor: "text-[#6b7280]",
        };
      case "accepted":
        return {
          label: "Accepted",
          bgColor: "bg-[#ecfdf5]",
          textColor: "text-[#059669]",
        };
      case "declined":
        return {
          label: "Declined",
          bgColor: "bg-[#f9fafb]",
          textColor: "text-[#6b7280]",
        };
    }
  };

  const config = getStatusConfig();

  return (
    <span
      className={`inline-flex px-[8px] py-[4px] ${config.bgColor} ${config.textColor} rounded-[6px] font-['Inter:Medium',sans-serif] font-medium text-[10px] leading-[14px]`}
    >
      {config.label}
    </span>
  );
}

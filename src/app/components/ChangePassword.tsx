import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react";
import { updatePassword } from "../../lib/auth";

interface ChangePasswordProps {
  onBack: () => void;
  onChangePassword: () => void;
}

export function ChangePassword({ onBack, onChangePassword }: ChangePasswordProps) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const { error: updateError } = await updatePassword(newPassword);
      if (updateError) {
        setError(updateError.message);
      } else {
        onChangePassword();
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fcfcfd] relative size-full flex flex-col">
      {/* Status Bar */}
      <div className="h-[44px] bg-transparent" />

      {/* Back Button */}
      <div className="px-[24px] pt-[24px] pb-[24px]">
        <button 
          onClick={onBack}
          className="size-[24px] flex items-center justify-center"
        >
          <ArrowLeft className="w-[20px] h-[20px] text-[#1f2a37]" strokeWidth={1.5} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-[24px]">
        {/* Caption */}
        <div className="flex flex-col gap-[8px] mb-[32px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37]">
            Create New Password
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#9da4ae]">
            Please enter a new password to change
          </p>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col gap-[16px] mb-[32px]">
          {/* New Password */}
          <div className="flex flex-col gap-[4px]">
            <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37]">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-white w-full h-[52px] px-[16px] py-[8px] pr-[48px] rounded-[12px] border border-[#d2d6db] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37] focus:outline-none focus:border-[#6941c6]"
                placeholder="••••••••••"
              />
              <button
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-[16px] top-1/2 -translate-y-1/2"
              >
                {showNewPassword ? (
                  <Eye className="w-[24px] h-[24px] text-[#9da4ae]" />
                ) : (
                  <EyeOff className="w-[24px] h-[24px] text-[#9da4ae]" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-[4px]">
            <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37]">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-white w-full h-[52px] px-[16px] py-[8px] pr-[48px] rounded-[12px] border border-[#d2d6db] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37] focus:outline-none focus:border-[#6941c6]"
                placeholder="••••••••••"
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-[16px] top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <Eye className="w-[24px] h-[24px] text-[#9da4ae]" />
                ) : (
                  <EyeOff className="w-[24px] h-[24px] text-[#9da4ae]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {error && (
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#fe456a] mb-[16px]">
            {error}
          </p>
        )}

        {/* Change Password Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-[#fe456a] w-full h-[52px] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[27px] text-white hover:bg-[#e63d5f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-[8px] mb-[40px]"
        >
          {loading ? <Loader2 className="w-[20px] h-[20px] animate-spin" /> : "Change password"}
        </button>
      </div>

      {/* Home Indicator */}
      <div className="h-[34px] flex items-center justify-center border-t border-gray-100">
        <div className="w-[134px] h-[5px] bg-black/10 rounded-full" />
      </div>
    </div>
  );
}

import { useState } from "react";
import { ArrowLeft, Loader2, Mail } from "lucide-react";
import { resetPasswordForEmail } from "../../lib/auth";

interface ForgotPasswordProps {
  onBack: () => void;
  onContinue: (email: string) => void;
}

export function ForgotPassword({ onBack, onContinue }: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { error: resetError } = await resetPasswordForEmail(email);
      if (resetError) {
        setError(resetError.message);
      } else {
        setIsSent(true);
        onContinue(email);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (isSent) {
    return (
      <div className="bg-[#fcfcfd] relative size-full flex flex-col items-center justify-center px-[24px] text-center">
        <div className="bg-[#f4ebff] size-[80px] rounded-full flex items-center justify-center mb-[24px]">
          <Mail className="w-[40px] h-[40px] text-[#fe456a]" />
        </div>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-[#1f2a37] mb-[8px]">
          Check your email
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#9da4ae] mb-[32px]">
          We've sent a password reset link to <span className="text-[#1f2a37] font-medium">{email}</span>.
        </p>
        <button
          onClick={onBack}
          className="bg-[#fe456a] w-full h-[52px] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[18px] text-white shadow-lg"
        >
          Back to Login
        </button>
      </div>
    );
  }

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
      <form onSubmit={handleSubmit} className="flex-1 overflow-auto px-[24px]">
        {/* Caption */}
        <div className="flex flex-col gap-[8px] mb-[32px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37]">
            Forgot Password
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#9da4ae]">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Form Input */}
        <div className="flex flex-col gap-[16px] mb-[32px]">
          <div className="flex flex-col gap-[4px]">
            <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37]">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white h-[52px] px-[16px] py-[8px] rounded-[12px] border border-[#d2d6db] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37] focus:outline-none focus:border-[#6941c6]"
              placeholder="e.g. john.doe@mail.com"
              required
            />
          </div>

          {error && (
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#fe456a]">
              {error}
            </p>
          )}
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#fe456a] w-full h-[52px] rounded-[8px] shadow-[10px_10px_10px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[27px] text-white hover:bg-[#e63d5f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-[8px]"
        >
          {loading ? <Loader2 className="w-[20px] h-[20px] animate-spin" /> : "Send Link"}
        </button>
      </form>

      {/* Home Indicator */}
      <div className="h-[34px] flex items-center justify-center">
        <div className="w-[134px] h-[5px] bg-black/10 rounded-full" />
      </div>
    </div>
  );
}

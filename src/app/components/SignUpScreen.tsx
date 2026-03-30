import { useState } from "react";
import { Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";
import { signUp, signInWithGoogle, signInWithFacebook } from "../../lib/auth";

interface SignUpScreenProps {
  onBack: () => void;
  onSignUp: () => void;
  onSignIn: () => void;
}

export function SignUpScreen({ onBack, onSignUp, onSignIn }: SignUpScreenProps) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    username?: string;
    password?: string;
    terms?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Username validation
    if (!username) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Terms validation
    if (!agreeTerms) {
      newErrors.terms = "You must agree to terms and privacy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (validateForm()) {
      setLoading(true);
      setGeneralError(null);
      try {
        const { error: signUpError } = await signUp({
          email,
          password,
          options: {
            data: {
              username: username,
            },
          },
        });

        if (signUpError) {
          setGeneralError(signUpError.message);
        } else {
          // If session is null, email confirmation is required
          if (!data.session) {
            setShowConfirmationMessage(true);
          } else {
            onSignUp();
          }
        }
      } catch (err) {
        setGeneralError("An unexpected error occurred. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="size-full bg-[#fcfcfd] flex flex-col">
      {/* Status Bar */}
      <div className="h-[44px] bg-[#fcfcfd]" />

      {/* Header with Back Button */}
      <div className="px-[24px] py-[24px]">
        <button
          onClick={onBack}
          className="flex items-center justify-center size-[24px] text-[#1f2a37]"
          aria-label="Go back"
        >
          <ArrowLeft className="size-[20px]" strokeWidth={1.5} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-[24px] overflow-auto">
        {/* Caption */}
        <div className="mb-[32px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37] text-center mb-[8px]">
            Register Account
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#9da4ae] text-center">
            Sign in with your email and password<br />or social media to continue
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-[16px] mb-[32px]">
          {/* Email Input */}
          <div className="flex flex-col gap-[4px]">
            <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37]">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                placeholder="Enter your email"
                className={`w-full h-[52px] bg-white rounded-[12px] px-[16px] py-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37] placeholder:text-[#9da4ae] border ${
                  errors.email ? "border-[#fe456a]" : email ? "border-[#6941c6]" : "border-[#d2d6db]"
                } focus:outline-none focus:border-[#6941c6]`}
              />
            </div>
            {errors.email && (
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#fe456a]">
                {errors.email}
              </p>
            )}
          </div>

          {/* Username Input */}
          <div className="flex flex-col gap-[4px]">
            <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37]">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (errors.username) setErrors({ ...errors, username: undefined });
                }}
                placeholder="Enter your username"
                className={`w-full h-[52px] bg-white rounded-[12px] px-[16px] py-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37] placeholder:text-[#9da4ae] border ${
                  errors.username ? "border-[#fe456a]" : username ? "border-[#6941c6]" : "border-[#d2d6db]"
                } focus:outline-none focus:border-[#6941c6]`}
              />
            </div>
            {errors.username && (
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#fe456a]">
                {errors.username}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-[4px]">
            <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: undefined });
                }}
                placeholder="Enter your password"
                className={`w-full h-[52px] bg-white rounded-[12px] px-[16px] py-[8px] pr-[48px] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37] placeholder:text-[#9da4ae] border ${
                  errors.password ? "border-[#fe456a]" : password ? "border-[#6941c6]" : "border-[#d2d6db]"
                } focus:outline-none focus:border-[#6941c6]`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#9da4ae] hover:text-[#1f2a37]"
              >
                {showPassword ? (
                  <Eye className="size-[20px]" strokeWidth={1.5} />
                ) : (
                  <EyeOff className="size-[20px]" strokeWidth={1.5} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#fe456a]">
                {errors.password}
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-center gap-[8px]">
              <button
                type="button"
                onClick={() => {
                  setAgreeTerms(!agreeTerms);
                  if (errors.terms) setErrors({ ...errors, terms: undefined });
                }}
                className={`flex items-center justify-center shrink-0 size-[16px] rounded-[2px] border ${
                  errors.terms ? "border-[#fe456a]" : "border-[#6941c6]"
                } ${agreeTerms ? "bg-[#6941c6]" : "bg-white"}`}
              >
                {agreeTerms && (
                  <svg
                    className="size-[10px]"
                    fill="white"
                    viewBox="0 0 10 8"
                  >
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                )}
              </button>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37]">
                Agree with{" "}
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">terms</span>
                {" "}and
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold"> privacy</span>
              </p>
            </div>
            {errors.terms && (
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#fe456a]">
                {errors.terms}
              </p>
            )}
          </div>
        </div>

        {/* General Error */}
        {generalError && (
          <div className="bg-[#feedf1] border border-[#fe456a] rounded-[8px] p-[12px] mb-[16px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#fe456a]">
              {generalError}
            </p>
          </div>
        )}

        {/* Sign Up Button */}
        <button
          onClick={handleSignUp}
          disabled={loading}
          className="w-full h-[52px] bg-[#fe456a] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[27px] text-white mb-[24px] hover:bg-[#ff5a7a] transition-colors active:bg-[#e63d5f] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-[8px]"
        >
          {loading ? <Loader2 className="w-[20px] h-[20px] animate-spin" /> : "Sign up"}
        </button>

        {/* Or divider */}
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37] text-center mb-[24px]">
          Or
        </p>

        {/* Social Media */}
        <div className="flex items-center justify-center gap-[16px] mb-[24px]">
          <button
            onClick={() => signInWithFacebook()}
            className="size-[46px] rounded-full bg-[#e5e7eb] flex items-center justify-center hover:bg-[#d2d6db] transition-colors"
            aria-label="Sign up with Facebook"
          >
            <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
              <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1976D2"/>
            </svg>
          </button>
          <button
            onClick={() => signInWithGoogle()}
            className="size-[46px] rounded-full bg-[#e5e7eb] flex items-center justify-center hover:bg-[#d2d6db] transition-colors"
            aria-label="Sign up with Google"
          >
            <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
              <path d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.28h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.59z" fill="#4285F4"/>
              <path d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z" fill="#34A853"/>
              <path d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z" fill="#FBBC05"/>
              <path d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" fill="#EA4335"/>
            </svg>
          </button>
        </div>

        {/* Sign In Link */}
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37] text-center pb-[40px]">
          Already have an account?{" "}
          <button
            onClick={onSignIn}
            className="font-['Inter:Medium',sans-serif] font-medium text-[#fe456a] hover:underline"
          >
            Sign in
          </button>
        </p>

        {/* Confirmation Message Modal/Overlay */}
        {showConfirmationMessage && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center px-[24px] text-center">
            <div className="bg-[#f4ebff] size-[80px] rounded-full flex items-center justify-center mb-[24px]">
              <svg className="w-[40px] h-[40px] text-[#fe456a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1f2a37] mb-[8px]">
              Check your email
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#9da4ae] mb-[32px]">
              We've sent a verification link to <span className="text-[#1f2a37] font-medium">{email}</span>. Please click the link to confirm your account.
            </p>
            <button
              onClick={onSignIn}
              className="bg-[#fe456a] w-full h-[52px] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[18px] text-white shadow-lg"
            >
              Back to Sign In
            </button>
          </div>
        )}
      </div>

      {/* Home Indicator */}
      <div className="h-[34px]" />
    </div>
  );
}
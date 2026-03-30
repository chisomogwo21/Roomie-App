import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react";
import svgPaths from "../../imports/svg-aqhopws0b9";
import { signIn, signInWithGoogle, signInWithFacebook } from "../../lib/auth";

interface LoginProps {
  onBack?: () => void;
  onSignIn: () => void;
  onSignUp: () => void;
  onForgotPassword?: () => void;
}

export function Login({ onBack, onSignIn, onSignUp, onForgotPassword }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error: signInError } = await signIn({ email, password });
      if (signInError) {
        if (signInError.message.includes("Invalid login credentials")) {
          setError("Invalid email or password. Please try again.");
        } else {
          setError(signInError.message);
        }
      } else {
        onSignIn();
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
            Welcome Back !
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#9da4ae]">
            Sign in with your email and password or social media to continue
          </p>
        </div>

        {/* Form Input */}
        <div className="flex flex-col gap-[16px] mb-[32px]">
          {/* Email Input */}
          <div className="flex flex-col gap-[4px]">
            <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white h-[52px] px-[16px] py-[8px] rounded-[12px] border border-[#6941c6] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37] focus:outline-none focus:border-[#6941c6]"
              placeholder="e.g. john.doe@mail.com"
            />
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
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white w-full h-[52px] px-[16px] py-[8px] pr-[48px] rounded-[12px] border border-[#d2d6db] font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37] focus:outline-none focus:border-[#6941c6]"
                placeholder="Enter password"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[16px] top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <Eye className="w-[24px] h-[24px] text-[#9da4ae]" />
                ) : (
                  <EyeOff className="w-[24px] h-[24px] text-[#9da4ae]" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setRememberMe(!rememberMe)}
              className="flex items-center gap-[8px]"
            >
              <div className={`size-[16px] rounded-[3px] flex items-center justify-center ${rememberMe ? 'bg-[#6941c6]' : 'border border-[#d2d6db] bg-white'}`}>
                {rememberMe && (
                  <svg className="w-[10px] h-[10px]" fill="none" viewBox="0 0 13.3333 13.3333">
                    <path 
                      clipRule="evenodd" 
                      d={svgPaths.p2a48e080} 
                      fill="white" 
                      fillRule="evenodd" 
                    />
                  </svg>
                )}
              </div>
              <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37]">
                Remember me
              </span>
            </button>
            <button 
              onClick={onForgotPassword}
              className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#fe456a] hover:opacity-70 transition-opacity"
            >
              Forgot password ?
            </button>
          </div>
        </div>

        {/* Sign In Button */}
        <div className="flex flex-col gap-[24px] items-center mb-[32px]">
          {error && (
            <div className="w-full bg-[#feedf1] border border-[#fe456a] rounded-[8px] p-[12px] mb-[8px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#fe456a]">
                {error}
              </p>
            </div>
          )}
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="bg-[#fe456a] w-full h-[52px] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[27px] text-white hover:bg-[#e63d5f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-[8px]"
          >
            {loading ? <Loader2 className="w-[20px] h-[20px] animate-spin" /> : "Sign in"}
          </button>

          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37]">
            Or
          </p>

          {/* Social Media Buttons */}
          <div className="flex gap-[16px]">
            {/* Facebook */}
            <button 
              onClick={() => signInWithFacebook()}
              className="size-[46px] rounded-full bg-[#f9fafb] border border-[#e5e7eb] shadow-sm flex items-center justify-center hover:bg-[#f3f4f6] transition-colors"
            >
              <svg className="w-[22px] h-[22px] text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>

            {/* Google */}
            <button 
              onClick={() => signInWithGoogle()}
              className="size-[46px] rounded-full bg-[#f9fafb] border border-[#e5e7eb] shadow-sm flex items-center justify-center hover:bg-[#f3f4f6] transition-colors"
            >
              <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center pb-[40px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#1f2a37]">
            Don't have account ?{" "}
            <button 
              onClick={onSignUp}
              className="font-['Inter:Medium',sans-serif] font-medium text-[#fe456a] hover:opacity-70 transition-opacity"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="h-[34px] flex items-center justify-center">
        <div className="w-[134px] h-[5px] bg-black/10 rounded-full" />
      </div>
    </div>
  );
}

// Enhanced onboarding screens with real images
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function OnBoarding1Enhanced() {
  return (
    <div className="bg-[#fcfcfd] relative size-full">
      {/* Skip Button */}
      <div className="absolute content-stretch flex gap-[4px] h-[32px] items-center justify-center left-[calc(75%+12.75px)] px-[16px] py-[8px] rounded-[24px] top-[60px]">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4d5761] text-[12px]">Skip</p>
      </div>

      {/* Images */}
      <div className="absolute left-[72px] top-[116px]">
        {/* Front Image */}
        <div className="absolute h-[230.509px] left-0 rounded-[85px] shadow-[0px_24px_48px_-12px_rgba(105,65,198,0.3)] top-0 w-[149.676px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1594318223885-20dc4b889f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjkzODA1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Happy roommate"
            className="absolute h-full w-full object-cover"
          />
        </div>
        {/* Back Image with overlay */}
        <div className="absolute h-[230.509px] left-[137px] rounded-[85px] top-[67.49px] w-[149.676px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1543132220-e7fef0b974e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0JTIwY2FzdWFsfGVufDF8fHx8MTc2OTM3MTEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Roommate"
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute bg-[#7f56d9] inset-0 opacity-45 rounded-[85px]" />
        </div>
      </div>

      {/* Captions */}
      <div className="absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-[58px] top-[466px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-center w-[259px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#1f2a37] text-[24px] w-full">
            Find the <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">perfect roommate match</span>
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9da4ae] text-[12px] w-full">
            connect with trusted roommates who fit your lifestyle
          </p>
        </div>
        {/* Dots */}
        <div className="h-[10px] relative shrink-0 w-[64px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 10">
            <rect fill="#FE456A" height="10" rx="5" width="28" />
            <circle cx="41" cy="5" fill="#D2D6DB" r="5" />
            <circle cx="59" cy="5" fill="#D2D6DB" r="5" />
          </svg>
        </div>
      </div>

      {/* Next Button */}
      <div className="absolute bg-[#fe456a] content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[24px] px-[24px] py-[8px] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] top-[678px] w-[327px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-white">Next</p>
      </div>
    </div>
  );
}

export function OnBoarding2Enhanced() {
  return (
    <div className="bg-[#fcfcfd] relative size-full">
      {/* Skip Button */}
      <div className="absolute content-stretch flex gap-[4px] h-[32px] items-center justify-center left-[calc(75%+12.75px)] px-[16px] py-[8px] rounded-[24px] top-[60px]">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4d5761] text-[12px]">Skip</p>
      </div>

      {/* Images */}
      <div className="absolute left-[72px] top-[116px]">
        {/* Back Image with overlay */}
        <div className="absolute h-[230.509px] left-0 rounded-[85px] top-[67.49px] w-[149.781px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769184618473-58c1f0e294f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHJvb21tYXRlJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3Njk0NjAzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living room"
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute bg-[#7f56d9] inset-0 opacity-45 rounded-[85px]" />
        </div>
        {/* Front Image */}
        <div className="absolute h-[230.509px] left-[137px] rounded-[85px] shadow-[0px_24px_48px_-12px_rgba(105,65,198,0.3)] top-0 w-[149.781px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758525864630-0ae453e0e44c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGFwYXJ0bWVudCUyMGZyaWVuZHN8ZW58MXx8fHwxNzY5NDYwMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Friends in apartment"
            className="absolute h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Captions */}
      <div className="absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-[58px] top-[466px]">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start not-italic relative shrink-0 text-center w-[259px]">
          <p className="leading-[32px] relative shrink-0 text-[#1f2a37] text-[24px] w-full">
            Find the perfect match in just <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">one click</span>
          </p>
          <p className="leading-[18px] relative shrink-0 text-[#9da4ae] text-[12px] w-full">
            save time and connect with verified roommates near you
          </p>
        </div>
        {/* Dots */}
        <div className="h-[10px] relative shrink-0 w-[64px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 10">
            <circle cx="5" cy="5" fill="#D2D6DB" r="5" />
            <rect fill="#FE456A" height="10" rx="5" width="28" x="18" />
            <circle cx="59" cy="5" fill="#D2D6DB" r="5" />
          </svg>
        </div>
      </div>

      {/* Next Button */}
      <div className="absolute bg-[#fe456a] content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[24px] px-[24px] py-[8px] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] top-[678px] w-[327px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-white">Next</p>
      </div>
    </div>
  );
}

export function OnBoarding3Enhanced() {
  return (
    <div className="bg-[#fcfcfd] relative size-full">
      {/* Captions */}
      <div className="absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-[58px] top-[466px]">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start not-italic relative shrink-0 text-center w-[259px]">
          <p className="leading-[32px] relative shrink-0 text-[#1f2a37] text-[24px] w-full">
            Discover the <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">perfect home</span> with us
          </p>
          <p className="leading-[18px] relative shrink-0 text-[#9da4ae] text-[12px] w-full">
            browse safe, verified spaces and choose what feels like home
          </p>
        </div>
        {/* Dots */}
        <div className="h-[10px] relative shrink-0 w-[64px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 10">
            <circle cx="5" cy="5" fill="#D2D6DB" r="5" />
            <circle cx="23" cy="5" fill="#D2D6DB" r="5" />
            <rect fill="#FE456A" height="10" rx="5" width="28" x="36" />
          </svg>
        </div>
      </div>

      {/* Images */}
      <div className="absolute left-[85px] top-[116px]">
        {/* Front Image */}
        <div className="absolute h-[230.509px] left-0 rounded-[85px] shadow-[0px_24px_48px_-12px_rgba(105,65,198,0.3)] top-0 w-[149.676px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njk0MjY5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern apartment"
            className="absolute h-full w-full object-cover"
          />
        </div>
        {/* Back Image with overlay */}
        <div className="absolute h-[230.509px] left-[137.57px] rounded-[85px] top-[67.49px] w-[149.676px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1557308970-df80a9ccee84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBob21lJTIwY296eXxlbnwxfHx8fDE3Njk0NjAzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cozy home"
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute bg-[#7f56d9] inset-0 opacity-45 rounded-[85px]" />
        </div>
      </div>

      {/* Get Started Button */}
      <div className="absolute bg-[#fe456a] content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[24px] px-[24px] py-[8px] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] top-[678px] w-[327px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-white">Get Started</p>
      </div>
    </div>
  );
}

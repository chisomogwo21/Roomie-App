import svgPaths from "./svg-aqhopws0b9";

function StatusIcons() {
  return (
    <div className="absolute h-[12px] right-[12.5px] top-[16px] w-[66.5px]" data-name="Status Icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.5 12">
        <g id="Status Icons">
          <g id="Network Signal">
            <path d={svgPaths.p2b90f980} fill="var(--fill-0, black)" id="NetworkSignal-path" />
            <path d={svgPaths.p9778000} fill="var(--fill-0, black)" id="NetworkSignal-path_2" />
            <path d={svgPaths.p2cb61900} fill="var(--fill-0, black)" id="NetworkSignal-path_3" />
            <path d={svgPaths.p26488880} fill="var(--fill-0, black)" fillOpacity="0.2" id="NetworkSignal-path_4" />
          </g>
          <path d={svgPaths.pfe2ae80} fill="var(--fill-0, black)" id="Wi-Fi" />
          <g id="Battery">
            <rect height="11" id="Border" rx="2.16667" stroke="var(--stroke-0, black)" strokeOpacity="0.6" width="21.6077" x="42" y="0.5" />
            <path d={svgPaths.p572c0e0} fill="var(--fill-0, black)" fillOpacity="0.6" id="Cap" />
            <rect fill="var(--fill-0, black)" height="7.76471" id="Capacity" rx="1.33333" width="18.4972" x="43.5553" y="2.11768" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[10px] top-[13px] w-[75px]" data-name="Time">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.17px] whitespace-nowrap">
        <p className="leading-[normal]">09:41</p>
      </div>
    </div>
  );
}

function Caption() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[327px]" data-name="Caption">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1f2a37] text-[20px] text-center whitespace-nowrap">Welcome Back !</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-full relative shrink-0 text-[#9da4ae] text-[14px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`Sign in with your email and password `}</p>
        <p>or social media to continue</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[52px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[327px]" data-name="Form">
      <div aria-hidden="true" className="absolute border border-[#6941c6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#1f2a37] text-[14px]">dammy@gmail.com</p>
    </div>
  );
}

function Hide() {
  return (
    <div className="absolute inset-[17.71%_11.46%_16.57%_11.46%]" data-name="Hide">
      <div className="absolute inset-[-4.75%_-4.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.274">
          <g id="Hide">
            <path d={svgPaths.p12ecdb00} id="Stroke 1" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3206cf80} id="Stroke 3" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2f1cb780} id="Stroke 5" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p5169940} id="Stroke 7" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M17.8874 0.75L2.1134 16.524" id="Stroke 9" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Form1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[52px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[327px]" data-name="Form">
      <div aria-hidden="true" className="absolute border border-[#d2d6db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#1f2a37] text-[14px]">••••••••</p>
      <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Hide">
        <Hide />
      </div>
    </div>
  );
}

function TickSquare() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Tick Square">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Tick Square">
          <path clipRule="evenodd" d={svgPaths.p2a48e080} fill="var(--fill-0, #6941C6)" fillRule="evenodd" id="Tick Square_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[123px]">
      <div className="relative shrink-0 size-[16px]" data-name="Checkbox">
        <TickSquare />
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#1f2a37] text-[14px]">Remember me</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px relative">
      <Frame />
    </div>
  );
}

function ForgetPassword() {
  return (
    <div className="content-stretch flex gap-[88px] items-start relative shrink-0 w-full" data-name="Forget Password">
      <Frame1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] not-italic relative shrink-0 text-[#fe456a] text-[14px] w-[124px]">Forgot password ?</p>
    </div>
  );
}

function FormInput() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Form Input">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Input Form">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#1f2a37] text-[14px] w-[327px]">Email</p>
        <Form />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Input Form">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#1f2a37] text-[14px] w-[327px]">Password</p>
        <Form1 />
      </div>
      <ForgetPassword />
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="Facebook">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Facebook">
          <circle cx="23" cy="23" fill="var(--fill-0, #E5E7EB)" id="Ellipse 5" r="23" />
          <g id="facebook 1">
            <path clipRule="evenodd" d={svgPaths.p3f1d6180} fill="var(--fill-0, #1976D2)" fillRule="evenodd" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Google() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="Google">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Google">
          <circle cx="23" cy="23" fill="var(--fill-0, #E5E7EB)" id="Ellipse 6" r="23" />
          <g clipPath="url(#clip0_111_692)" id="google (1) 1">
            <path d={svgPaths.p1db44100} fill="var(--fill-0, #FBBB00)" id="Vector" />
            <path d={svgPaths.p34479700} fill="var(--fill-0, #518EF8)" id="Vector_2" />
            <path d={svgPaths.p19764b00} fill="var(--fill-0, #28B446)" id="Vector_3" />
            <path d={svgPaths.p23bd0880} fill="var(--fill-0, #F14336)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_111_692">
            <rect fill="white" height="24" transform="translate(11 11)" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Social Media">
      <Facebook />
      <Google />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="Button">
      <div className="bg-[#fe456a] content-stretch flex gap-[12px] h-[52px] items-center justify-center px-[24px] py-[8px] relative rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] shrink-0 w-[327px]" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Sign in</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#1f2a37] text-[14px] whitespace-nowrap">{`Or `}</p>
      <SocialMedia />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-[24px] top-[116px]" data-name="Content">
      <Caption />
      <FormInput />
      <Button />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1f2a37] text-[0px] text-[14px] whitespace-nowrap">
        <span className="leading-[18px]">{`Don’t have account ? `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[#fe456a]">Sign up</span>
      </p>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative size-full" data-name="Arrow - Left">
      <div className="absolute inset-[-5%_-6.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.549 16.5002">
          <g id="Arrow - Left">
            <path d="M6.7746 15.75V0.75" id="Stroke 1" stroke="var(--stroke-0, #1F2A37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p35039300} id="Stroke 3" stroke="var(--stroke-0, #1F2A37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-[#fcfcfd] relative size-full" data-name="Login">
      <div className="absolute h-[34px] left-0 top-[778px] w-[375px]" data-name="IOS iPhone / Home Indicator">
        <div className="absolute inset-[58.82%_32%_26.47%_32.27%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 5">
            <path clipRule="evenodd" d={svgPaths.p1b107900} fill="var(--fill-0, black)" fillOpacity="0.1" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[375px]" data-name="IOS iPhone / Status Bar — with phone notch">
        <StatusIcons />
        <Time />
      </div>
      <Content />
      <div className="absolute left-[24px] size-[24px] top-[68px]" data-name="Iconly/Light/Arrow - Left">
        <div className="absolute flex inset-[26.04%_19.79%_23.76%_17.71%] items-center justify-center">
          <div className="flex-none h-[15px] rotate-90 w-[12.049px]">
            <ArrowLeft />
          </div>
        </div>
      </div>
    </div>
  );
}
import svgPaths from "./svg-j9pexgrbi8";

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

function Caption() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[327px]" data-name="Caption">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1f2a37] text-[20px] text-center whitespace-nowrap">Forgot Password</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-full relative shrink-0 text-[#9da4ae] text-[14px] w-[min-content]">
        <p className="mb-0">Select which contact details should we use</p>
        <p>to reset your password</p>
      </div>
    </div>
  );
}

function Call() {
  return (
    <div className="absolute inset-[10.42%]" data-name="Call">
      <div className="absolute inset-[-3.95%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5001 20.5001">
          <g id="Call">
            <path clipRule="evenodd" d={svgPaths.p90a5500} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f4ebff] content-stretch flex items-center justify-center p-[8px] relative rounded-[31px] shrink-0 size-[44px]">
      <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Call">
        <Call />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center leading-[18px] not-italic relative shrink-0 w-[243px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#d2d6db] text-[12px] w-full">Via phone</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1f2a37] text-[14px] w-full">+250 791 5** 488</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[76px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Option 1">
      <div aria-hidden="true" className="absolute border border-[#d2d6db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame />
      <Frame1 />
    </div>
  );
}

function Message() {
  return (
    <div className="absolute inset-[12.5%_8.33%]" data-name="Message">
      <div className="absolute inset-[-4.17%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 19.5">
          <g id="Message">
            <path d={svgPaths.p201f2b00} id="Stroke 1" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p240ea620} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f4ebff] content-stretch flex items-center justify-center p-[8px] relative rounded-[31px] shrink-0 size-[44px]">
      <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Message">
        <Message />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center leading-[18px] not-italic relative shrink-0 w-[243px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9da4ae] text-[12px] w-full">Via email</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1f2a37] text-[14px] w-full">da***@gmail.com</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[76px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Option 2">
      <div aria-hidden="true" className="absolute border border-[#fe456a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Option() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Option">
      <Option1 />
      <Option2 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[24px] top-[116px]" data-name="Content">
      <Caption />
      <Option />
    </div>
  );
}

export default function ForgotPassword() {
  return (
    <div className="bg-[#fcfcfd] relative size-full" data-name="Forgot Password">
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
      <div className="absolute bg-[#fe456a] content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[24px] px-[24px] py-[8px] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] top-[678px] w-[327px]" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Continue</p>
      </div>
      <div className="absolute left-[24px] size-[24px] top-[68px]" data-name="Iconly/Light/Arrow - Left">
        <div className="absolute flex inset-[26.04%_19.79%_23.76%_17.71%] items-center justify-center">
          <div className="flex-none h-[15px] rotate-90 w-[12.049px]">
            <ArrowLeft />
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
}
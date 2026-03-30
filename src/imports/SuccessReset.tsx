import svgPaths from "./svg-wg8aalra69";

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

function ShieldDone() {
  return (
    <div className="absolute inset-[8.33%_14.58%]" data-name="Shield Done">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93.5001 110">
        <g id="Shield Done">
          <path d={svgPaths.p37db380} fill="var(--fill-0, #FE456A)" id="Shield Done_2" />
        </g>
      </svg>
    </div>
  );
}

function Illustration() {
  return (
    <div className="relative shrink-0 size-[208px]" data-name="Illustration">
      <div className="absolute left-0 size-[208px] top-0">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 208">
          <circle cx="104" cy="104" fill="var(--fill-0, #F4EBFF)" id="Ellipse 8" r="104" />
        </svg>
      </div>
      <div className="absolute left-[17px] size-[174px] top-[17px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174 174">
          <circle cx="87" cy="87" fill="var(--fill-0, white)" id="Ellipse 7" r="87" />
        </svg>
      </div>
      <div className="absolute left-[38px] shadow-[0px_24px_48px_0px_rgba(31,42,55,0.3)] size-[132px] top-[38px]" data-name="Iconly/Bold/Shield Done">
        <ShieldDone />
      </div>
    </div>
  );
}

function Caption() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center not-italic relative shrink-0 text-center w-[290px]" data-name="Caption">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1f2a37] text-[20px] whitespace-nowrap">Success!</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-full relative shrink-0 text-[#9da4ae] text-[14px] w-[min-content]">You password has been changed. Please log in again with a new password.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center left-[43px] top-[236px]" data-name="Content">
      <Illustration />
      <Caption />
    </div>
  );
}

export default function SuccessReset() {
  return (
    <div className="bg-[#fcfcfd] relative size-full" data-name="Success reset">
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
      <Content />
    </div>
  );
}
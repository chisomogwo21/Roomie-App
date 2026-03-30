import svgPaths from "./svg-yyqv87fr0z";
import imgImage1 from "../assets/placeholders/general.png";

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

function Location() {
  return (
    <div className="absolute inset-[12.5%_18.75%]" data-name="Location">
      <div className="absolute inset-[-4.17%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 19.5">
          <g id="Location">
            <path clipRule="evenodd" d={svgPaths.p2a35dcc0} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p15f68b00} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f4ebff] content-stretch flex items-center justify-center p-[8px] relative rounded-[31px] shrink-0 size-[44px]">
      <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Location">
        <Location />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#9da4ae] text-[14px]">Jl. Jend. Sudirman, Gowongan, Kec. Jetis, Kota Yogyakarta</p>
    </div>
  );
}

function CaptionGreeting() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[149px] items-start left-[24px] p-[16px] rounded-[10px] top-[505px] w-[327px]" data-name="Caption Greeting">
      <div aria-hidden="true" className="absolute border border-[#d2d6db] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_24px_48px_0px_rgba(31,42,55,0.18)]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] not-italic relative shrink-0 text-[#1f2a37] text-[20px] w-full">Location Details</p>
      <Frame1 />
    </div>
  );
}

function Location1() {
  return (
    <div className="absolute inset-[8.33%_14.58%]" data-name="Location">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.75 55">
        <g id="Location">
          <path clipRule="evenodd" d={svgPaths.p2a7ea480} fill="var(--fill-0, #FDB022)" fillRule="evenodd" id="Location_2" />
        </g>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="absolute inset-[11.58%_10.24%_8.33%_11.58%]" data-name="Search">
      <div className="absolute inset-[-3.9%_-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2643 20.722">
          <g id="Search">
            <circle cx="9.73856" cy="9.73856" id="Ellipse_739" r="8.98856" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p323d1bd8} id="Line_181" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Search">
        <Search1 />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9da4ae] text-[14px] whitespace-nowrap">Search Location</p>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[6px] h-[50px] items-center left-[24px] px-[16px] py-[12px] rounded-[12px] top-[116px] w-[327px]" data-name="Search">
      <div aria-hidden="true" className="absolute border border-[#d2d6db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame2 />
    </div>
  );
}

export default function Maps() {
  return (
    <div className="bg-[#fcfcfd] relative size-full" data-name="Maps">
      <div className="absolute h-[822px] left-[-301px] top-[-8px] w-[1655px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-70 pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute h-[34px] left-0 top-[778px] w-[375px]" data-name="IOS iPhone / Home Indicator">
        <div className="absolute inset-[58.82%_32%_26.47%_32.27%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 5">
            <path clipRule="evenodd" d={svgPaths.p1b107900} fill="var(--fill-0, black)" fillOpacity="0.6" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[375px]" data-name="IOS iPhone / Status Bar — with phone notch">
        <StatusIcons />
        <Time />
      </div>
      <div className="absolute left-[24px] size-[24px] top-[60px]" data-name="Iconly/Light/Arrow - Left">
        <div className="absolute flex inset-[26.04%_19.79%_23.76%_17.71%] items-center justify-center">
          <div className="flex-none h-[15px] rotate-90 w-[12.049px]">
            <ArrowLeft />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#fe456a] content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[24px] px-[24px] py-[8px] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] top-[678px] w-[327px]" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Choose location</p>
      </div>
      <CaptionGreeting />
      <div className="absolute left-[calc(50%+10.5px)] size-[66px] top-[314px]" data-name="Iconly/Bold/Location">
        <Location1 />
      </div>
      <Search />
    </div>
  );
}
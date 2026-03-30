import svgPaths from "./svg-fhhr4x7rxr";
import imgImg from "../assets/placeholders/general.png";
import imgImg1 from "../assets/placeholders/general.png";

function IosIPhoneHomeIndicator() {
  return (
    <div className="absolute h-[34px] left-0 top-[778px] w-[375px]" data-name="IOS iPhone / Home Indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 34">
        <g id="IOS iPhone / Home Indicator">
          <path clipRule="evenodd" d={svgPaths.p1430500} fill="var(--fill-0, black)" fillOpacity="0.1" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="absolute h-[12px] right-[12.5px] top-[16px] w-[66.5px]" data-name="Status Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.5 12">
        <g id="Status Icons">
          <g id="Network Signal">
            <path d={svgPaths.p2b90f980} fill="var(--fill-0, black)" id="NetworkSignal-path" />
            <path d={svgPaths.p9778000} fill="var(--fill-0, black)" id="NetworkSignal-path_2" />
            <path d={svgPaths.p2cb61900} fill="var(--fill-0, black)" id="NetworkSignal-path_3" />
            <path d={svgPaths.p26488880} fill="var(--fill-0, black)" fillOpacity="0.2" id="NetworkSignal-path_4" />
          </g>
          <path d={svgPaths.p1ead8500} fill="var(--fill-0, black)" id="Wi-Fi" />
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
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.17px]">
        <p className="css-ew64yg leading-[normal]">09:41</p>
      </div>
    </div>
  );
}

function IosIPhoneStatusBarWithPhoneNotch() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[375px]" data-name="IOS iPhone / Status Bar — with phone notch">
      <StatusIcons />
      <Time />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[32px] items-center justify-center left-[calc(75%+12.75px)] px-[16px] py-[8px] rounded-[24px] top-[60px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4d5761] text-[12px]">Skip</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(25%+59.57px)] top-[183.49px]">
      <div className="absolute h-[230.509px] left-[calc(25%+59.57px)] rounded-[85px] top-[183.49px] w-[149.676px]" data-name="Img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[85px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[85px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[85px]">
            <img alt="" className="absolute h-[102.17%] left-[-5.56%] max-w-none top-0 w-[157.35%]" src={imgImg} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#7f56d9] h-[230.509px] left-[calc(25%+59.57px)] opacity-45 rounded-[85px] top-[183.49px] w-[149.676px]" data-name="bg" />
    </div>
  );
}

function Img() {
  return (
    <div className="absolute contents left-[72px] top-[116px]" data-name="Img">
      <Group />
      <div className="absolute h-[230.509px] left-[72px] rounded-[85px] shadow-[0px_24px_48px_-12px_rgba(105,65,198,0.3)] top-[116px] w-[149.676px]" data-name="Img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[85px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[85px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[85px]">
            <img alt="" className="absolute h-[117.49%] left-[-37.2%] max-w-none top-[0.38%] w-[138.46%]" src={imgImg1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-center w-[259px]">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#1f2a37] text-[0px] text-[24px] w-full">
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[32px]">{`Find the `}</span>
        <span className="leading-[32px]">{`perfect roommate match `}</span>
      </p>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9da4ae] text-[12px] w-full">connect with trusted roommates who fit your lifestyle</p>
    </div>
  );
}

function Dots() {
  return (
    <div className="h-[10px] relative shrink-0 w-[64px]" data-name="Dots">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 10">
        <g id="Dots">
          <rect fill="var(--fill-0, #FE456A)" height="10" id="Rectangle 2" rx="5" width="28" />
          <circle cx="41" cy="5" fill="var(--fill-0, #D2D6DB)" id="Ellipse 3" r="5" />
          <circle cx="59" cy="5" fill="var(--fill-0, #D2D6DB)" id="Ellipse 4" r="5" />
        </g>
      </svg>
    </div>
  );
}

function Captions() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-[58px] top-[466px]" data-name="Captions">
      <Frame />
      <Dots />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#fe456a] content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[24px] px-[24px] py-[8px] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] top-[678px] w-[327px]" data-name="Button">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-white">Next</p>
    </div>
  );
}

export default function OnBoarding() {
  return (
    <div className="bg-[#fcfcfd] relative size-full" data-name="On Boarding 1">
      <IosIPhoneHomeIndicator />
      <IosIPhoneStatusBarWithPhoneNotch />
      <Button />
      <Img />
      <Captions />
      <Button1 />
    </div>
  );
}
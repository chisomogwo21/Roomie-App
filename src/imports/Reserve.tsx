import svgPaths from "./svg-b2tdzkfnfn";
import imgRectangle11 from "../assets/placeholders/property.png";

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
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center text-nowrap tracking-[-0.17px]">
        <p className="leading-[normal]">09:41</p>
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

function ArrowLeft() {
  return (
    <div className="relative size-full" data-name="Arrow - Left">
      <div className="absolute inset-[-5%_-6.22%_-4.99%_-6.22%]">
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

function IconlyLightArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Arrow - Left">
      <div className="absolute flex inset-[26.04%_19.79%_23.76%_17.7%] items-center justify-center">
        <div className="flex-none h-[15.001px] rotate-[90deg] w-[12.049px]">
          <ArrowLeft />
        </div>
      </div>
    </div>
  );
}

function TittleBar() {
  return (
    <div className="absolute content-stretch flex gap-[84px] items-start left-[24px] top-[60px] w-[327px]" data-name="Tittle Bar">
      <IconlyLightArrowLeft />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1f2a37] text-[16px] text-center w-[111px]">Booking</p>
    </div>
  );
}

function Location() {
  return (
    <div className="absolute inset-[12.5%_18.75%]" data-name="Location">
      <div className="absolute inset-[-4.17%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
          <g id="Location">
            <path clipRule="evenodd" d={svgPaths.p18591000} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" />
            <path clipRule="evenodd" d={svgPaths.p940ea00} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightLocation() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Location">
      <Location />
    </div>
  );
}

function Loc() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Loc">
      <IconlyLightLocation />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[14px] leading-[14px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9da4ae] text-[10px] text-nowrap">Nyarutaram, Kigali</p>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[18px] leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f2a37] text-[14px] text-nowrap w-full">Rose Garden</p>
      <Loc />
    </div>
  );
}

function Star() {
  return (
    <div className="absolute inset-[10.42%_8.33%_10.41%_8.33%]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0015 9.50068">
        <g id="Star">
          <path d={svgPaths.p14c26280} fill="var(--fill-0, #FDB022)" id="Star_2" />
        </g>
      </svg>
    </div>
  );
}

function IconlyBoldStar() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Iconly/Bold/Star">
      <Star />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <IconlyBoldStar />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#1f2a37] text-[10px] text-nowrap">4.8</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex gap-[33px] items-start relative shrink-0 w-full" data-name="Price">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[14px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f2a37] text-[10px]">$340/month</p>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-[215px]">
      <Name />
      <Price />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-start left-[24px] pl-[8px] pr-[12px] py-[12px] rounded-[12px] top-[100px] w-[327px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="h-[75px] relative rounded-[8px] shrink-0 w-[88px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgRectangle11} />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Calendar">
      <div className="absolute inset-[-3.75%_-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 21.5">
          <g id="Calendar">
            <path d="M0.84264 8.15426H18.6666" id="Line_200" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M14.1921 12.0597H14.2013" id="Line_201" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M9.75461 12.0597H9.76388" id="Line_202" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M5.30789 12.0597H5.31716" id="Line_203" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M14.1921 15.9462H14.2013" id="Line_204" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M9.75461 15.9462H9.76388" id="Line_205" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M5.30789 15.9462H5.31716" id="Line_206" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M13.7937 0.75V4.04078" id="Line_207" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M5.71551 0.75V4.04078" id="Line_208" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p34a6cac0} fillRule="evenodd" id="Path" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightCalendar() {
  return (
    <div className="[grid-area:1_/_1] ml-[6px] mt-[6px] relative size-[24px]" data-name="Iconly/Light/Calendar">
      <Calendar />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[36px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" fill="var(--fill-0, #F9F5FF)" id="Ellipse 17" r="18" />
        </svg>
      </div>
      <IconlyLightCalendar />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[18px] not-italic relative shrink-0 text-nowrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9da4ae] text-[12px]">Date</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1f2a37] text-[14px]">{`12 Aug - 12 Sep `}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Group />
      <Frame3 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative size-full" data-name="Arrow - Right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 8.5">
        <g id="Arrow - Right 2">
          <path d={svgPaths.p1c1b2800} fill="var(--fill-0, #D2D6DB)" id="Stroke 1" />
        </g>
      </svg>
    </div>
  );
}

function IconlyLightOutlineArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light-Outline/Arrow - Right 2">
      <div className="absolute flex inset-[17.71%_32.29%] items-center justify-center">
        <div className="flex-none h-[8.5px] rotate-[270deg] w-[15.5px]">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[154px] items-center relative shrink-0">
      <Frame4 />
      <IconlyLightOutlineArrowRight />
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Date">
      <Frame5 />
      <div className="h-0 relative shrink-0 w-[327px]">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327 0.5">
            <path d="M0 0.25H327" id="Vector 3" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9da4ae] text-[12px] w-[319px]">
        <p className="mb-0">Make sure to check your date before making any</p>
        <p>sort of payments</p>
      </div>
    </div>
  );
}

function Period() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Period">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1f2a37] text-[16px] w-[327px]">Period</p>
      <Date />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[37px] items-center justify-center leading-[18px] relative shrink-0 text-[12px] w-[327px]" data-name="Item">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow min-h-px min-w-px relative shrink-0 text-[#9da4ae]">Period time</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#1f2a37] text-nowrap">1 Month</p>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[37px] items-center justify-center leading-[18px] relative shrink-0 text-[12px] w-[327px]" data-name="Item">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow min-h-px min-w-px relative shrink-0 text-[#9da4ae]">Monthly payment</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#1f2a37] text-nowrap">$320.00</p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[37px] items-center justify-center leading-[18px] relative shrink-0 text-[12px] w-[327px]" data-name="Item">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow min-h-px min-w-px relative shrink-0 text-[#9da4ae]">Tax</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#1f2a37] text-nowrap">$10.00</p>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[37px] items-center justify-center relative shrink-0 w-[327px]" data-name="Item">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px relative shrink-0 text-[#1f2a37] text-[12px]">Total</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#fe456a] text-[16px] text-nowrap">$330.00</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function PriceDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0" data-name="Price details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#1f2a37] text-[16px] w-[327px]">Price Details</p>
      <Frame6 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] top-[223px]" data-name="Content">
      <Period />
      <PriceDetails />
    </div>
  );
}

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

function Button() {
  return (
    <div className="absolute bg-[#fe456a] content-stretch flex gap-[12px] h-[52px] items-center justify-center left-1/2 px-[24px] py-[8px] rounded-[8px] shadow-[0px_8px_8px_-4px_rgba(127,86,217,0.03),0px_20px_24px_-4px_rgba(127,86,217,0.08)] top-[715px] translate-x-[-50%] w-[327px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-nowrap text-white">Book Now</p>
    </div>
  );
}

export default function Reserve() {
  return (
    <div className="bg-[#fcfcfd] relative size-full" data-name="Reserve">
      <IosIPhoneStatusBarWithPhoneNotch />
      <TittleBar />
      <Frame2 />
      <Content />
      <IosIPhoneHomeIndicator />
      <Button />
    </div>
  );
}
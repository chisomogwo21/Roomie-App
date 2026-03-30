import svgPaths from "./svg-t7iwy2crtn";
import imgEllipse25 from "../assets/placeholders/avatar.png";
import imgEllipse26 from "../assets/placeholders/avatar.png";
import imgEllipse27 from "../assets/placeholders/avatar.png";
import imgEllipse28 from "../assets/placeholders/avatar.png";
import imgEllipse29 from "../assets/placeholders/avatar.png";
import imgEllipse17 from "../assets/placeholders/avatar.png";
import imgEllipse18 from "../assets/placeholders/avatar.png";
import imgEllipse19 from "../assets/placeholders/avatar.png";
import imgEllipse20 from "../assets/placeholders/avatar.png";
import imgEllipse21 from "../assets/placeholders/avatar.png";
import imgEllipse22 from "../assets/placeholders/avatar.png";

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

function Search() {
  return (
    <div className="absolute inset-[11.58%_10.24%_8.33%_11.58%]" data-name="Search">
      <div className="absolute inset-[-3.9%_-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2643 20.722">
          <g id="Search">
            <circle cx="9.73856" cy="9.73856" id="Ellipse_739" r="8.98856" stroke="var(--stroke-0, #1F2A37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p323d1bd8} id="Line_181" stroke="var(--stroke-0, #1F2A37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TittleBar() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[24px] top-[60px] w-[327px]" data-name="Tittle bar">
      <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Arrow - Left">
        <div className="absolute flex inset-[26.04%_19.79%_23.76%_17.71%] items-center justify-center">
          <div className="flex-none h-[15px] rotate-90 w-[12.049px]">
            <ArrowLeft />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1f2a37] text-[16px] text-center w-[111px]">Message</p>
      <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Search">
        <Search />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#fe456a] content-stretch flex items-center justify-center p-[8px] relative rounded-[52px] shrink-0 size-[52px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Iconly/Curved/plus">
        <div className="absolute inset-[16.67%]" data-name="Vector">
          <div className="absolute inset-[-4.69%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
              <path d={svgPaths.p7d0e700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActiveChat() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center left-[24px] top-[108px] w-[380px]" data-name="Active Chat">
      <Frame1 />
      <div className="h-[43.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 43.5">
            <path d="M0.75 0V43.5" id="Vector 5" stroke="var(--stroke-0, #9DA4AE)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[52px]">
        <div className="absolute inset-[-3.85%]">
          <img alt="" className="block max-w-none size-full" height="56" src={imgEllipse25} width="56" />
        </div>
      </div>
      <div className="relative shrink-0 size-[52px]">
        <div className="absolute inset-[-3.85%]">
          <img alt="" className="block max-w-none size-full" height="56" src={imgEllipse26} width="56" />
        </div>
      </div>
      <div className="relative shrink-0 size-[52px]">
        <div className="absolute inset-[-3.85%]">
          <img alt="" className="block max-w-none size-full" height="56" src={imgEllipse27} width="56" />
        </div>
      </div>
      <div className="relative shrink-0 size-[52px]">
        <div className="absolute inset-[-3.85%]">
          <img alt="" className="block max-w-none size-full" height="56" src={imgEllipse28} width="56" />
        </div>
      </div>
      <div className="relative shrink-0 size-[52px]">
        <div className="absolute inset-[-3.85%]">
          <img alt="" className="block max-w-none size-full" height="56" src={imgEllipse29} width="56" />
        </div>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icons">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[44px]">
        <img alt="" className="absolute block max-w-none size-full" height="44" src={imgEllipse17} width="44" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#1f2a37] text-[14px]">
        <p className="leading-[18px]">Anggela</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#9da4ae] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">1:22 AM</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0">
      <Frame3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9da4ae] text-[12px] w-[269px]">
        <p className="leading-[18px]">Thank you for information</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="text">
      <Frame2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 0.5">
            <path d="M0 0.25H271" id="Vector 4" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProfileChat() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[327px]" data-name="profile chat">
      <Icons />
      <Text />
    </div>
  );
}

function Icons1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icons">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[44px]">
        <img alt="" className="absolute block max-w-none size-full" height="44" src={imgEllipse18} width="44" />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#1f2a37] text-[14px]">
        <p className="leading-[18px]">Theresa Webb</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#9da4ae] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">8:22 PM</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0">
      <Frame5 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9da4ae] text-[12px] w-[269px]">
        <p className="leading-[18px]">Hi there, the price is negotiable</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="text">
      <Frame4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 0.5">
            <path d="M0 0.25H271" id="Vector 4" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProfileChat1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[327px]" data-name="profile chat">
      <Icons1 />
      <Text1 />
    </div>
  );
}

function Icons2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icons">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[44px]">
        <img alt="" className="absolute block max-w-none size-full" height="44" src={imgEllipse19} width="44" />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#1f2a37] text-[14px]">
        <p className="leading-[18px]">Guy Hawkins</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#9da4ae] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">8:22 PM</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0">
      <Frame7 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9da4ae] text-[12px] w-[269px]">
        <p className="leading-[18px]">Have a plan for discuss this ?</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="text">
      <Frame6 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 0.5">
            <path d="M0 0.25H271" id="Vector 4" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProfileChat2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[327px]" data-name="profile chat">
      <Icons2 />
      <Text2 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icons">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[44px]">
        <img alt="" className="absolute block max-w-none size-full" height="44" src={imgEllipse20} width="44" />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#1f2a37] text-[14px]">
        <p className="leading-[18px]">Savannah Nguyen</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#9da4ae] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">8:22 PM</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0">
      <Frame9 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9da4ae] text-[12px] w-[269px]">
        <p className="leading-[18px]">Have a plan for discuss this ?</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="text">
      <Frame8 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 0.5">
            <path d="M0 0.25H271" id="Vector 4" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProfileChat3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[327px]" data-name="profile chat">
      <Icons3 />
      <Text3 />
    </div>
  );
}

function Icons4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icons">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[44px]">
        <img alt="" className="absolute block max-w-none size-full" height="44" src={imgEllipse21} width="44" />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#1f2a37] text-[14px]">
        <p className="leading-[18px]">Arlene McCoy</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#9da4ae] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">8:22 PM</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0">
      <Frame11 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9da4ae] text-[12px] w-[269px]">
        <p className="leading-[18px]">Have a plan for discuss this ?</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="text">
      <Frame10 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 0.5">
            <path d="M0 0.25H271" id="Vector 4" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProfileChat4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[327px]" data-name="profile chat">
      <Icons4 />
      <Text4 />
    </div>
  );
}

function Icons5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icons">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[44px]">
        <img alt="" className="absolute block max-w-none size-full" height="44" src={imgEllipse22} width="44" />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#1f2a37] text-[14px]">
        <p className="leading-[18px]">Leslie Alexander</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#9da4ae] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">8:22 PM</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0">
      <Frame13 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9da4ae] text-[12px] w-[269px]">
        <p className="leading-[18px]">Have a plan for discuss this ?</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="text">
      <Frame12 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 0.5">
            <path d="M0 0.25H271" id="Vector 4" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProfileChat5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[327px]" data-name="profile chat">
      <Icons5 />
      <Text5 />
    </div>
  );
}

function ListMessage() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] top-[236px]" data-name="List Message">
      <ProfileChat />
      <ProfileChat1 />
      <ProfileChat2 />
      <ProfileChat3 />
      <ProfileChat4 />
      <ProfileChat5 />
    </div>
  );
}

function Delete1() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Delete">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 55">
        <g id="Delete">
          <path d={svgPaths.p1fce6800} fill="var(--fill-0, #FE456A)" id="Delete_2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[120px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <circle cx="60" cy="60" fill="var(--fill-0, #F4EBFF)" id="Ellipse 8" r="60" />
        </svg>
      </div>
      <div className="col-1 ml-[9.81px] mt-[9.81px] relative row-1 size-[100.385px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.385 100.385">
          <circle cx="50.1923" cy="50.1923" fill="var(--fill-0, white)" id="Ellipse 7" r="50.1923" />
        </svg>
      </div>
      <div className="col-1 ml-[27px] mt-[27px] relative row-1 size-[66px]" data-name="Iconly/Bold/Delete">
        <Delete1 />
      </div>
    </div>
  );
}

function Caption() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center not-italic relative shrink-0 text-center w-[290px]" data-name="Caption">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1f2a37] text-[20px] w-full">Are you sure you want to delete this message ?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9da4ae] text-[14px] w-full">the message will be deleted from this device</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="Frame">
      <Group />
      <Caption />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Button">
      <div className="bg-[#fe456a] content-stretch flex gap-[12px] h-[52px] items-center justify-center px-[24px] py-[8px] relative rounded-[8px] shrink-0 w-[132px]" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Cancel</p>
      </div>
      <div className="bg-[#d2d6db] content-stretch flex gap-[12px] h-[52px] items-center justify-center px-[24px] py-[8px] relative rounded-[8px] shrink-0 w-[128px]" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Delete</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[46px] inset-[18.25%_11.2%_13.1%_11.2%] items-center" data-name="Content">
      <Frame />
      <Button />
    </div>
  );
}

export default function Delete() {
  return (
    <div className="bg-[#fcfcfd] relative size-full" data-name="Delete">
      <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[375px]" data-name="IOS iPhone / Status Bar — with phone notch">
        <StatusIcons />
        <Time />
      </div>
      <TittleBar />
      <ActiveChat />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[24px] not-italic text-[#1f2a37] text-[16px] top-[188px] whitespace-nowrap">All Message</p>
      <ListMessage />
      <div className="absolute bg-black h-[812px] left-0 opacity-8 top-0 w-[375px]" data-name="Bg" />
      <div className="absolute h-[504px] left-0 top-[308px] w-[375px]" data-name="Pop up">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 504">
          <g id="Bg">
            <path d={svgPaths.p3c141900} fill="var(--fill-0, white)" id="Rectangle 30" />
            <path clipRule="evenodd" d={svgPaths.p393ce600} fill="var(--fill-0, black)" fillOpacity="0.1" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
        <Content />
      </div>
      <div className="absolute h-[34px] left-0 overflow-clip top-[778px] w-[375px]" data-name="IOS iPhone / Home Indicator">
        <div className="absolute inset-[58.82%_32%_26.47%_32.27%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 5">
            <path clipRule="evenodd" d={svgPaths.p1b107900} fill="var(--fill-0, black)" fillOpacity="0.05" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
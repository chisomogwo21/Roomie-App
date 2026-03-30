import svgPaths from "./svg-qtjime6bqr";
import imgRectangle11 from "../assets/placeholders/property.png";
import imgRectangle12 from "../assets/placeholders/property.png";
import imgRectangle13 from "../assets/placeholders/property.png";
import imgRectangle14 from "../assets/placeholders/property.png";
import imgUnsplashRfdp780V5A from "../assets/placeholders/property.png";
import imgRectangle3 from "../assets/placeholders/property.png";
import imgRectangle4 from "../assets/placeholders/property.png";
import { imgEllipse11 } from "./svg-efp7u";

function Tittle() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-nowrap w-[327px]" data-name="Tittle">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#1f2a37] text-[16px]">Roommates</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#fe456a] text-[12px]">See all</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f2a37] text-[14px] text-nowrap">2 Bedroom Shared Space</p>
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
    <div className="relative shrink-0 w-full" data-name="Loc">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-0 pr-[16px] py-0 relative w-full">
          <IconlyLightLocation />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[14px] leading-[14px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9da4ae] text-[10px] text-nowrap">kk 234 Nyarutarama, Gasabo</p>
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Name">
      <Frame21 />
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

function Frame6() {
  return (
    <div className="bg-[#fffaeb] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[8px] shrink-0">
      <IconlyBoldStar />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#1f2a37] text-[10px] text-nowrap">4.5</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex gap-[33px] items-center relative shrink-0 w-full" data-name="Price">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[14px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f2a37] text-[10px]">$120/month</p>
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Name />
      <Price />
    </div>
  );
}

function Desc() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Desc">
      <div className="h-[62px] relative rounded-[6px] shrink-0 w-[80px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgRectangle11} />
      </div>
      <Frame7 />
    </div>
  );
}

function CardList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card/list">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[8px] py-0 relative w-full">
          <Desc />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[74px] items-start justify-center relative rounded-[8px] shrink-0 w-[240px]" data-name="card">
      <CardList />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 0.5">
            <path d="M0 0.25H240" id="Vector 3" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f2a37] text-[14px] text-nowrap">1 Bedroom Shared Space</p>
    </div>
  );
}

function Location1() {
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

function IconlyLightLocation1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Location">
      <Location1 />
    </div>
  );
}

function Loc1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Loc">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-0 pr-[16px] py-0 relative w-full">
          <IconlyLightLocation1 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[14px] leading-[14px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9da4ae] text-[10px] text-nowrap">Gikondo, Kicukiro</p>
        </div>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Name">
      <Frame22 />
      <Loc1 />
    </div>
  );
}

function Star1() {
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

function IconlyBoldStar1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Iconly/Bold/Star">
      <Star1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#fffaeb] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[8px] shrink-0">
      <IconlyBoldStar1 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#1f2a37] text-[10px] text-nowrap">4.5</p>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex gap-[33px] items-center relative shrink-0 w-full" data-name="Price">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[14px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f2a37] text-[10px]">$50/month</p>
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Name1 />
      <Price1 />
    </div>
  );
}

function Desc1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Desc">
      <div className="h-[62px] relative rounded-[6px] shrink-0 w-[80px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[6px] size-full" src={imgRectangle12} />
        </div>
      </div>
      <Frame15 />
    </div>
  );
}

function CardList1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card/list">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[8px] py-0 relative w-full">
          <Desc1 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[74px] items-start justify-center relative rounded-[8px] shrink-0 w-[240px]" data-name="card">
      <CardList1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 0.5">
            <path d="M0 0.25H240" id="Vector 3" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="List">
      <Card />
      <Card1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f2a37] text-[14px] text-nowrap">1 Bedroom Shared Space</p>
    </div>
  );
}

function Location2() {
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

function IconlyLightLocation2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Location">
      <Location2 />
    </div>
  );
}

function Loc2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Loc">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-0 pr-[16px] py-0 relative w-full">
          <IconlyLightLocation2 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[14px] leading-[14px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9da4ae] text-[10px] text-nowrap">Gikondo, Kicukiro</p>
        </div>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Name">
      <Frame23 />
      <Loc2 />
    </div>
  );
}

function Star2() {
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

function IconlyBoldStar2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Iconly/Bold/Star">
      <Star2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#fffaeb] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[8px] shrink-0">
      <IconlyBoldStar2 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#1f2a37] text-[10px] text-nowrap">4.7</p>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex gap-[33px] items-center relative shrink-0 w-full" data-name="Price">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[14px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f2a37] text-[10px]">$320/month</p>
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Name2 />
      <Price2 />
    </div>
  );
}

function Desc2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Desc">
      <div className="h-[62px] relative rounded-[6px] shrink-0 w-[80px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[6px] size-full" src={imgRectangle13} />
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function CardList2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card/list">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[8px] py-0 relative w-full">
          <Desc2 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[74px] items-start justify-center relative rounded-[8px] shrink-0 w-[240px]" data-name="card">
      <CardList2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 0.5">
            <path d="M0 0.25H240" id="Vector 3" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f2a37] text-[14px] text-nowrap">3 Bedroom Shared Space</p>
    </div>
  );
}

function Location3() {
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

function IconlyLightLocation3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Location">
      <Location3 />
    </div>
  );
}

function Loc3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Loc">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-0 pr-[16px] py-0 relative w-full">
          <IconlyLightLocation3 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[14px] leading-[14px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9da4ae] text-[10px] text-nowrap">Nyamirambo, Nyarugenge</p>
        </div>
      </div>
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Name">
      <Frame24 />
      <Loc3 />
    </div>
  );
}

function Star3() {
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

function IconlyBoldStar3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Iconly/Bold/Star">
      <Star3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#fffaeb] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[8px] shrink-0">
      <IconlyBoldStar3 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#1f2a37] text-[10px] text-nowrap">4.7</p>
    </div>
  );
}

function Price3() {
  return (
    <div className="content-stretch flex gap-[33px] items-center relative shrink-0 w-full" data-name="Price">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[14px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f2a37] text-[10px]">$30/2 weeks</p>
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Name3 />
      <Price3 />
    </div>
  );
}

function Desc3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Desc">
      <div className="h-[62px] relative rounded-[6px] shrink-0 w-[80px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[6px] size-full" src={imgRectangle14} />
        </div>
      </div>
      <Frame19 />
    </div>
  );
}

function CardList3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card/list">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[8px] py-0 relative w-full">
          <Desc3 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[74px] items-start justify-center relative rounded-[8px] shrink-0 w-[240px]" data-name="card">
      <CardList3 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 0.5">
            <path d="M0 0.25H240" id="Vector 3" stroke="var(--stroke-0, #E5E7EB)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="List">
      <Card2 />
      <Card3 />
    </div>
  );
}

function NearbyList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Nearby List">
      <List />
      <List1 />
    </div>
  );
}

function NearbyList1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start justify-center left-[24px] top-[572px]" data-name="Nearby List">
      <Tittle />
      <NearbyList />
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="absolute inset-[35.42%_20.83%_35.42%_20.84%]" data-name="Arrow - Down 2">
      <div className="absolute inset-[-16.07%_-8.03%_-16.07%_-8.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 6.16667">
          <g id="Arrow - Down 2">
            <path d={svgPaths.p1e651a00} id="Stroke 1" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightArrowDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Arrow - Down 2">
      <ArrowDown />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9da4ae] text-[12px] text-nowrap">
        <p className="leading-[14px]">Location</p>
      </div>
      <IconlyLightArrowDown />
    </div>
  );
}

function Location4() {
  return (
    <div className="absolute inset-[8.33%_14.58%]" data-name="Location">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
        <g id="Location">
          <path clipRule="evenodd" d={svgPaths.p1f23500} fill="var(--fill-0, #FE456A)" fillRule="evenodd" id="Location_2" />
        </g>
      </svg>
    </div>
  );
}

function IconlyBoldLocation() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Bold/Location">
      <Location4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <IconlyBoldLocation />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1f2a37] text-[16px] text-center text-nowrap">
        <p className="leading-[20px]">Kicukiro, kigali</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[156px]">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Notification() {
  return (
    <div className="absolute inset-[8.33%_14.58%]" data-name="Notification">
      <div className="absolute inset-[-3.75%_-4.41%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 21.5">
          <g id="Notification">
            <path clipRule="evenodd" d={svgPaths.p18b1b00} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, #1F2A37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p25a71b00} id="Stroke 3" stroke="var(--stroke-0, #1F2A37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightNotification() {
  return (
    <div className="[grid-area:1_/_1] ml-[10px] mt-[10px] relative size-[24px]" data-name="Iconly/Light/Notification">
      <Notification />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[#d2d6db] border-solid ml-0 mt-0 rounded-[33px] size-[44px]" />
      <IconlyLightNotification />
      <div className="[grid-area:1_/_1] ml-[27px] mt-[6px] relative size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #F04438)" id="Ellipse 9" r="3" />
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative rounded-[63px] shrink-0">
      <Group2 />
    </div>
  );
}

function Chat() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Chat">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4999 21.4999">
          <g id="Chat">
            <path clipRule="evenodd" d={svgPaths.p162efb00} fillRule="evenodd" id="Stroke 4" stroke="var(--stroke-0, #1F2A37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M14.6893 11.163H14.6983" id="Stroke 11" stroke="var(--stroke-0, #1F2A37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M10.6803 11.163H10.6893" id="Stroke 13" stroke="var(--stroke-0, #1F2A37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M6.67126 11.163H6.68026" id="Stroke 15" stroke="var(--stroke-0, #1F2A37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightChat() {
  return (
    <div className="[grid-area:1_/_1] ml-[10px] mt-[10px] relative size-[24px]" data-name="Iconly/Light/Chat">
      <Chat />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[#d2d6db] border-solid ml-0 mt-0 rounded-[33px] size-[44px]" />
      <IconlyLightChat />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[63px] shrink-0">
      <Group3 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[24px] top-[60px] w-[327px]" data-name="Header">
      <Frame2 />
      <Frame20 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[147px] left-[187px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-187px_40px] mask-size-[327px_110px] top-[-40px] w-[148px]" style={{ maskImage: `url('${imgEllipse11}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 147">
          <ellipse cx="74" cy="73.5" fill="var(--fill-0, #FDB022)" id="Ellipse 11" rx="74" ry="73.5" />
        </svg>
      </div>
      <div className="absolute h-[163px] left-[218px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-218px_36px] mask-size-[327px_110px] top-[-36px] w-[116px]" data-name="unsplash:RFDP7_80v5A" style={{ maskImage: `url('${imgEllipse11}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUnsplashRfdp780V5A} />
      </div>
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Bg">
      <div className="absolute bg-[#42307d] h-[110px] left-0 rounded-[16px] top-0 w-[327px]" />
      <MaskGroup />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[16px] not-italic top-[16px] w-[177px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-white w-full">GET YOUR 20% CASHBACK</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#e5e7eb] text-[12px] w-full">*Expired 25 Aug 2022</p>
    </div>
  );
}

function Promo() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Promo">
      <Bg />
      <Frame5 />
    </div>
  );
}

function Promo1() {
  return (
    <div className="absolute h-[110px] left-[24px] top-[210px] w-[327px]" data-name="Promo">
      <Promo />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute inset-[8.33%_10.42%]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
        <g id="Home">
          <path d={svgPaths.p17654b00} fill="var(--fill-0, #FE456A)" id="Home_2" />
        </g>
      </svg>
    </div>
  );
}

function IconlyBoldHome() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Bold/Home">
      <Home />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <IconlyBoldHome />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#fe456a] text-[10px] text-nowrap">Home</p>
    </div>
  );
}

function Discovery() {
  return (
    <div className="absolute inset-[8.33%_11.58%_11.58%_8.33%]" data-name="Discovery">
      <div className="absolute inset-[-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.722 20.722">
          <g id="Discovery">
            <path clipRule="evenodd" d={svgPaths.p103c2b80} fillRule="evenodd" id="Path_33947" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <circle cx="10.361" cy="10.361" id="Ellipse_738" r="9.61098" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightDiscovery() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Discovery">
      <Discovery />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <IconlyLightDiscovery />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#9da4ae] text-[10px] text-nowrap">Explore</p>
    </div>
  );
}

function Heart() {
  return (
    <div className="absolute inset-[12.5%_10.43%_12.51%_10.42%]" data-name="Heart">
      <div className="absolute inset-[-4.17%_-3.93%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4903 19.4983">
          <g id="Heart">
            <path clipRule="evenodd" d={svgPaths.p216b8180} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p397f9660} id="Stroke 3" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightHeart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Heart">
      <Heart />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <IconlyLightHeart />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#9da4ae] text-[10px] text-nowrap">Favorite</p>
    </div>
  );
}

function Document() {
  return (
    <div className="absolute inset-[11.46%_14.93%_11.83%_15.63%]" data-name="Document">
      <div className="absolute inset-[-4.07%_-4.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.165 19.91">
          <g id="Document">
            <path d="M12.7156 14.2236H5.4956" id="Stroke 1" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M12.7156 10.0371H5.4956" id="Stroke 2" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M8.2507 5.8603H5.4957" id="Stroke 3" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p13ba500} fillRule="evenodd" id="Stroke 4" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightDocument() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Document">
      <Document />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <IconlyLightDocument />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#9da4ae] text-[10px] text-nowrap">My Listing</p>
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute inset-[11.73%_20.19%_11.58%_20.06%]" data-name="Profile">
      <div className="absolute inset-[-3.88%_-5.23%_-4.07%_-5.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.84 19.8703">
          <g id="Profile">
            <path clipRule="evenodd" d={svgPaths.p15655000} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p215bce80} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42857" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightProfile() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Profile">
      <Profile />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <IconlyLightProfile />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#9da4ae] text-[10px] text-nowrap">Profile</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-px px-[40px] py-0 top-[20px] w-[375px]">
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute h-[86px] left-0 top-[726px] w-[375px]" data-name="nav">
      <div className="absolute bg-white inset-[0_-0.27%_0_0] shadow-[0px_-1px_3px_0px_rgba(31,42,55,0.1),0px_-1px_2px_0px_rgba(31,42,55,0.06)]" />
      <div className="absolute bg-[#fe456a] inset-[0_81.33%_96.51%_11.2%]" />
      <Frame13 />
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

function IosIPhoneHomeIndicator() {
  return (
    <div className="absolute h-[34px] left-0 top-[778px] w-[375px]" data-name="IOS iPhone / Home Indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 34">
        <g id="IOS iPhone / Home Indicator">
          <path clipRule="evenodd" d={svgPaths.p1430500} fill="var(--fill-0, black)" fillOpacity="0.05" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tittle1() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-nowrap w-[327px]" data-name="Tittle">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#1f2a37] text-[16px]">Apartment for Rent</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#fe456a] text-[12px]">See all</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[164px] left-0 rounded-[16px] top-0 w-[224px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle3} />
      </div>
      <div className="absolute bg-gradient-to-b from-[42.988%] from-[rgba(0,0,0,0)] h-[164px] left-0 rounded-[16px] to-[rgba(0,0,0,0.7)] top-0 w-[224px]" />
    </div>
  );
}

function Price4() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[128px] px-[8px] py-[6px] rounded-[8px] top-[16px]" data-name="Price">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1f2a37] text-[0px] text-nowrap">
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#fe456a] text-[12px]">$100</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal text-[#9da4ae] text-[10px]">/month</span>
      </p>
    </div>
  );
}

function Location5() {
  return (
    <div className="absolute inset-[12.5%_18.75%]" data-name="Location">
      <div className="absolute inset-[-4.17%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
          <g id="Location">
            <path clipRule="evenodd" d={svgPaths.p18591000} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, #D2D6DB)" strokeLinecap="round" strokeLinejoin="round" />
            <path clipRule="evenodd" d={svgPaths.p940ea00} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, #D2D6DB)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightLocation4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Location">
      <Location5 />
    </div>
  );
}

function Loc4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Loc">
      <IconlyLightLocation4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#d2d6db] text-[12px] text-nowrap">Kibagabaga, Gasabo</p>
    </div>
  );
}

function NameProperty() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[168px]" data-name="Name property">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-full">Green Palm Stay</p>
      <Loc4 />
    </div>
  );
}

function Heart1() {
  return (
    <div className="absolute inset-[10.42%_8.33%_10.41%_8.33%]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 12.6668">
        <g id="Heart">
          <path clipRule="evenodd" d={svgPaths.p2825de00} fill="var(--fill-0, #F04438)" fillRule="evenodd" id="Heart_2" />
        </g>
      </svg>
    </div>
  );
}

function IconlyBoldHeart() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Bold/Heart">
      <Heart1 />
    </div>
  );
}

function Icons() {
  return (
    <div className="bg-white content-stretch flex items-start p-[4px] relative rounded-[27px] shrink-0" data-name="Icons">
      <IconlyBoldHeart />
    </div>
  );
}

function Desc4() {
  return (
    <div className="absolute content-stretch flex items-center left-[16px] top-[100px] w-[192px]" data-name="Desc">
      <NameProperty />
      <Icons />
    </div>
  );
}

function Card4() {
  return (
    <div className="h-[164px] relative shrink-0 w-[224px]" data-name="card">
      <Group />
      <Price4 />
      <Desc4 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[164px] left-0 rounded-[16px] top-0 w-[224px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute h-[117.07%] left-[-14.29%] max-w-none top-[-8.54%] w-[128.57%]" src={imgRectangle4} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[42.988%] from-[rgba(0,0,0,0)] h-[164px] left-0 rounded-[16px] to-[rgba(0,0,0,0.7)] top-0 w-[224px]" />
    </div>
  );
}

function Price5() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[128px] px-[8px] py-[6px] rounded-[8px] top-[16px]" data-name="Price">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1f2a37] text-[0px] text-nowrap">
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#fe456a] text-[12px]">$310</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal text-[#9da4ae] text-[10px]">/month</span>
      </p>
    </div>
  );
}

function Location6() {
  return (
    <div className="absolute inset-[12.5%_18.75%]" data-name="Location">
      <div className="absolute inset-[-4.17%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
          <g id="Location">
            <path clipRule="evenodd" d={svgPaths.p18591000} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, #D2D6DB)" strokeLinecap="round" strokeLinejoin="round" />
            <path clipRule="evenodd" d={svgPaths.p940ea00} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, #D2D6DB)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightLocation5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Location">
      <Location6 />
    </div>
  );
}

function Loc5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Loc">
      <IconlyLightLocation5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#d2d6db] text-[12px] text-nowrap">Kicukiro, Center</p>
    </div>
  );
}

function NameProperty1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[168px]" data-name="Name property">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-full">Kigali Comfort Rooms</p>
      <Loc5 />
    </div>
  );
}

function Heart2() {
  return (
    <div className="absolute inset-[10.42%_8.33%_10.41%_8.33%]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 12.6668">
        <g id="Heart">
          <path clipRule="evenodd" d={svgPaths.p2825de00} fill="var(--fill-0, #F04438)" fillRule="evenodd" id="Heart_2" />
        </g>
      </svg>
    </div>
  );
}

function IconlyBoldHeart1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Bold/Heart">
      <Heart2 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="bg-white content-stretch flex items-start p-[4px] relative rounded-[27px] shrink-0" data-name="Icons">
      <IconlyBoldHeart1 />
    </div>
  );
}

function Desc5() {
  return (
    <div className="absolute content-stretch flex items-center left-[16px] top-[100px] w-[192px]" data-name="Desc">
      <NameProperty1 />
      <Icons1 />
    </div>
  );
}

function Card5() {
  return (
    <div className="h-[164px] relative shrink-0 w-[224px]" data-name="card">
      <Group1 />
      <Price5 />
      <Desc5 />
    </div>
  );
}

function Card6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Card">
      <Card4 />
      <Card5 />
    </div>
  );
}

function Recomended() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] top-[344px]" data-name="Recomended">
      <Tittle1 />
      <Card6 />
    </div>
  );
}

function Search() {
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

function IconlyLightHide() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Hide">
      <Search />
    </div>
  );
}

function Filter() {
  return (
    <div className="absolute inset-[18.75%_16.67%_21.25%_16.67%]" data-name="Filter">
      <div className="absolute inset-[-5.21%_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 15.9">
          <g id="Filter">
            <path d="M7.08016 12.8429H0.779439" id="Stroke 1" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M9.89048 3.15038H16.1912" id="Stroke 3" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.peab2c80} fillRule="evenodd" id="Stroke 5" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p1e184fc0} fillRule="evenodd" id="Stroke 7" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightFilter() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Filter">
      <Filter />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[52px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[327px]" data-name="Form">
      <div aria-hidden="true" className="absolute border border-[#d2d6db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconlyLightHide />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#9da4ae] text-[14px]">Search Property</p>
      <IconlyLightFilter />
    </div>
  );
}

function InputForm() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Input Form">
      <Form />
    </div>
  );
}

function Search1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[136px]" data-name="Search">
      <InputForm />
    </div>
  );
}

export default function Home1() {
  return (
    <div className="bg-[#fcfcfd] relative size-full" data-name="Home">
      <div className="absolute bg-white h-[248px] left-0 shadow-[0px_-1px_2px_0px_rgba(16,24,40,0.03)] top-[564px] w-[375px]" />
      <NearbyList1 />
      <Header />
      <Promo1 />
      <Nav />
      <IosIPhoneStatusBarWithPhoneNotch />
      <IosIPhoneHomeIndicator />
      <Recomended />
      <Search1 />
    </div>
  );
}
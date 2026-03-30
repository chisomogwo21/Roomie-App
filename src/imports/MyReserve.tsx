import svgPaths from "./svg-uzpvwnma9e";

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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1f2a37] text-[16px] text-center w-[111px]">My Listing</p>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute inset-[8.33%_10.42%]" data-name="Home">
      <div className="absolute inset-[-3.75%_-3.95%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5001 21.5">
          <g id="Home">
            <path d={svgPaths.pc36e900} id="Home_2" stroke="var(--stroke-0, #9DA4AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightHome() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Home">
      <Home />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <IconlyLightHome />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#9da4ae] text-[10px] text-nowrap">Home</p>
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

function Frame1() {
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <IconlyLightHeart />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#9da4ae] text-[10px] text-nowrap">Favorite</p>
    </div>
  );
}

function Document() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Document">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Document">
          <path clipRule="evenodd" d={svgPaths.p61547c0} fill="var(--fill-0, #FE456A)" fillRule="evenodd" id="Document_2" />
        </g>
      </svg>
    </div>
  );
}

function IconlyBoldDocument() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Bold/Document">
      <Document />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <IconlyBoldDocument />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#fe456a] text-[10px] text-nowrap">My Listing</p>
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <IconlyLightProfile />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#9da4ae] text-[10px] text-nowrap">Profile</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-px px-[40px] py-0 top-[20px] w-[375px]">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute h-[86px] left-0 top-[726px] w-[375px]" data-name="nav">
      <div className="absolute bg-[#f9fafb] inset-[0_-0.27%_0_0] shadow-[0px_-1px_3px_0px_rgba(31,42,55,0.1),0px_-1px_2px_0px_rgba(31,42,55,0.06)]" />
      <div className="absolute bg-[#fe456a] inset-[0_28.53%_96.51%_64%]" />
      <Frame5 />
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

function Group() {
  return (
    <div className="absolute inset-[20.63%_6.25%_12.5%_9.56%]" data-name="Group">
      <div className="absolute inset-[-3.74%_-2.97%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.5114 43.125">
          <g id="Group">
            <path d={svgPaths.p2c14e400} id="Vector" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p346edc80} id="Vector_2" stroke="var(--stroke-0, #FE456A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TablerCloudUpload() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="tabler:cloud-upload">
      <Group />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[19.42%_32.72%_18.71%_32.42%] items-center">
      <TablerCloudUpload />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9da4ae] text-[12px] text-nowrap">Click here to upload</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[139px] relative shrink-0 w-[327px]" data-name="Text Area">
      <div className="absolute bg-white inset-0 rounded-[12px]">
        <div aria-hidden="true" className="absolute border-[#d2d6db] border-[1.5px] border-dashed inset-[-1.5px] pointer-events-none rounded-[13.5px]" />
      </div>
      <Frame6 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1f2a37] text-[16px] w-[327px]">Add Photo or Video</p>
      <TextArea />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex h-[135px] items-start p-[12px] relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#d2d6db] border-[1.5px] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9da4ae] text-[12px] w-[303px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  `}</p>
    </div>
  );
}

function TextArea1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0" data-name="Text Area">
      <Frame7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9da4ae] text-[12px] text-nowrap">350 characters remaining</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1f2a37] text-[16px] w-[327px]">Add Description</p>
      <TextArea1 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] top-[110px]" data-name="Content">
      <Text />
      <Text1 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#fe456a] content-stretch flex gap-[12px] h-[52px] items-center justify-center left-1/2 px-[24px] py-[8px] rounded-[8px] shadow-[0px_8px_8px_-4px_rgba(127,86,217,0.03),0px_20px_24px_-4px_rgba(127,86,217,0.08)] top-[594px] translate-x-[-50%] w-[327px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-nowrap text-white">Add listing</p>
    </div>
  );
}

export default function MyReserve() {
  return (
    <div className="bg-[#fcfcfd] relative size-full" data-name="My reserve">
      <IosIPhoneStatusBarWithPhoneNotch />
      <TittleBar />
      <Nav />
      <IosIPhoneHomeIndicator />
      <Content />
      <Button />
    </div>
  );
}
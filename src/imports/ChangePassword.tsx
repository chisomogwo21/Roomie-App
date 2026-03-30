import svgPaths from "./svg-ss8v75sv1k";

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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1f2a37] text-[20px] text-center whitespace-nowrap">Create New Password</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-full relative shrink-0 text-[#9da4ae] text-[14px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`Please enter a new password `}</p>
        <p>to change</p>
      </div>
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

function Form() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[52px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[327px]" data-name="Form">
      <div aria-hidden="true" className="absolute border border-[#d2d6db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#1f2a37] text-[14px]">••••••••••</p>
      <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Hide">
        <Hide />
      </div>
    </div>
  );
}

function Hide1() {
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#1f2a37] text-[14px]">••••••••••</p>
      <div className="relative shrink-0 size-[24px]" data-name="Iconly/Light/Hide">
        <Hide1 />
      </div>
    </div>
  );
}

function FormInput() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Form Input">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Input Form">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#1f2a37] text-[14px] w-[327px]">New Password</p>
        <Form />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Input Form">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#1f2a37] text-[14px] w-[327px]">Confim Password</p>
        <Form1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[24px] top-[116px]" data-name="Content">
      <Caption />
      <FormInput />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute inset-[88.32%_0_0_0]" data-name="Home Indicator">
      <div className="-translate-x-1/2 absolute bg-[#0e0f0f] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Return() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+140.5px)] top-[170px] w-[88px]" data-name="Return">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 42">
        <path clipRule="evenodd" d={svgPaths.p181faf00} fill="var(--fill-0, #2489F4)" fillRule="evenodd" id="Rectangle" />
      </svg>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[26.19%_0_23.81%_0] leading-[21px] not-italic text-[16px] text-center text-white tracking-[-0.32px]">Go</p>
    </div>
  );
}

function Space() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-0.5px)] top-[170px] w-[182px]" data-name="Space">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 182 42">
        <path clipRule="evenodd" d={svgPaths.p3a2242f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Rectangle" />
      </svg>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[26.19%_0_23.81%_0] leading-[21px] not-italic text-[#0e0f0f] text-[16px] text-center tracking-[-0.32px]">space</p>
    </div>
  );
}

function Component() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-141px)] top-[170px] w-[87px]" data-name="123">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87 42">
        <path clipRule="evenodd" d={svgPaths.p15ab3d00} fill="var(--fill-0, #CDCFD0)" fillRule="evenodd" id="Rectangle" />
      </svg>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[26.19%_0_23.81%_0] leading-[21px] not-italic text-[#0e0f0f] text-[16px] text-center tracking-[-0.32px]">123</p>
    </div>
  );
}

function KeyLight() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+163.5px)] size-[42px] top-[116px]" data-name="Key Light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <path clipRule="evenodd" d={svgPaths.p1e57ee00} fill="var(--fill-0, #CDCFD0)" fillRule="evenodd" id="Rectangle" />
      </svg>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[26.19%_0_23.81%_0] leading-[21px] not-italic text-[16px] text-black text-center tracking-[-0.32px]">{` `}</p>
    </div>
  );
}

function Delete() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+163.5px)] top-[116px]" data-name="Delete">
      <KeyLight />
      <div className="-translate-x-1/2 absolute h-[16.994px] left-[calc(50%+163.49px)] top-[128.66px] w-[22.66px]" data-name="Delete Button">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6601 16.9941">
          <path d={svgPaths.p220f1530} fill="var(--fill-0, #0E0F0F)" id="Delete Button" />
        </svg>
      </div>
    </div>
  );
}

function KeyLight1() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-163.5px)] size-[42px] top-[116px]" data-name="Key Light">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[48.07%] not-italic right-[51.93%] text-[22.5px] text-black text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">{` `}</p>
    </div>
  );
}

function Shift() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-163.5px)] top-[116px]" data-name="Shift">
      <KeyLight1 />
      <div className="-translate-x-1/2 absolute h-[16.456px] left-[calc(50%-163.4px)] top-[128.2px] w-[18.88px]" data-name="Shift">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.88 16.4563">
          <path d={svgPaths.p1a2ed980} fill="var(--fill-0, #0E0F0F)" id="Shift" />
        </svg>
      </div>
    </div>
  );
}

function M() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+113.5px)] top-[116px] w-[32px]" data-name="M">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[18.75%] not-italic right-[15.63%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">M</p>
    </div>
  );
}

function N() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+75.5px)] top-[116px] w-[32px]" data-name="N">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/4 not-italic right-[21.88%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">N</p>
    </div>
  );
}

function B() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+37.5px)] top-[116px] w-[32px]" data-name="B">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[28.13%] not-italic right-1/4 text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">B</p>
    </div>
  );
}

function V() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+0.5px)] top-[116px] w-[32px]" data-name="V">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/4 not-italic right-1/4 text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">V</p>
    </div>
  );
}

function C() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-37.5px)] top-[116px] w-[32px]" data-name="C">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/4 not-italic right-[21.88%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">C</p>
    </div>
  );
}

function X() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-74.5px)] top-[116px] w-[32px]" data-name="X">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[28.13%] not-italic right-1/4 text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">X</p>
    </div>
  );
}

function Z() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-112.5px)] top-[116px] w-[32px]" data-name="Z">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[28.13%] not-italic right-1/4 text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">Z</p>
    </div>
  );
}

function L() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+150.5px)] top-[62px] w-[32px]" data-name="L">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[31.25%] not-italic right-[28.13%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">L</p>
    </div>
  );
}

function K() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+112.5px)] top-[62px] w-[32px]" data-name="K">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[28.13%] not-italic right-1/4 text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">K</p>
    </div>
  );
}

function J() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+75.5px)] top-[62px] w-[32px]" data-name="J">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[31.25%] not-italic right-[28.13%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">J</p>
    </div>
  );
}

function H() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+37.5px)] top-[62px] w-[32px]" data-name="H">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/4 not-italic right-[21.88%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">H</p>
    </div>
  );
}

function G() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+0.5px)] top-[62px] w-[32px]" data-name="G">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/4 not-italic right-[21.88%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">G</p>
    </div>
  );
}

function F() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-37.5px)] top-[62px] w-[32px]" data-name="F">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[28.13%] not-italic right-[28.13%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">F</p>
    </div>
  );
}

function D() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-74.5px)] top-[62px] w-[32px]" data-name="D">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/4 not-italic right-[21.88%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">D</p>
    </div>
  );
}

function S() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-112.5px)] top-[62px] w-[32px]" data-name="S">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[28.13%] not-italic right-1/4 text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">S</p>
    </div>
  );
}

function A() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-149.5px)] top-[62px] w-[32px]" data-name="A">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/4 not-italic right-1/4 text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">A</p>
    </div>
  );
}

function P() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+168.5px)] top-[8px] w-[32px]" data-name="P">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[28.13%] not-italic right-1/4 text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">P</p>
    </div>
  );
}

function O() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+131.5px)] top-[8px] w-[32px]" data-name="O">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[21.88%] not-italic right-[21.88%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">O</p>
    </div>
  );
}

function I() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+93.5px)] top-[8px] w-[32px]" data-name="I">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.63%] not-italic right-[40.63%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">I</p>
    </div>
  );
}

function U() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+56.5px)] top-[8px] w-[32px]" data-name="U">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/4 not-italic right-[21.88%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">U</p>
    </div>
  );
}

function Y() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+18.5px)] top-[8px] w-[32px]" data-name="Y">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[28.13%] not-italic right-1/4 text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">Y</p>
    </div>
  );
}

function T() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-18.5px)] top-[8px] w-[32px]" data-name="T">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[28.13%] not-italic right-1/4 text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">T</p>
    </div>
  );
}

function R() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-56.5px)] top-[8px] w-[32px]" data-name="R">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[28.13%] not-italic right-1/4 text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">R</p>
    </div>
  );
}

function E() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-93.5px)] top-[8px] w-[32px]" data-name="E">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[28.13%] not-italic right-[28.13%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">E</p>
    </div>
  );
}

function W() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-131.5px)] top-[8px] w-[32px]" data-name="W">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[15.63%] not-italic right-[15.63%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">W</p>
    </div>
  );
}

function Q() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-168.5px)] top-[8px] w-[32px]" data-name="Q">
      <div className="absolute bg-white inset-0 rounded-[4.6px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[21.88%] not-italic right-[21.88%] text-[#0e0f0f] text-[22.5px] text-center top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-nowrap">Q</p>
    </div>
  );
}

function Keys() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[8px]" data-name="Keys">
      <div className="-translate-x-1/2 absolute h-[25px] left-[calc(50%+150px)] top-[241px] w-[15px]" data-name="Dictation">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 24.9998">
          <path clipRule="evenodd" d={svgPaths.ped9b800} fill="var(--fill-0, #464A4D)" fillRule="evenodd" id="Dictation" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-149px)] size-[27px] top-[240px]" data-name="Emoji">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <path clipRule="evenodd" d={svgPaths.p2cb5cac0} fill="var(--fill-0, #50555C)" fillRule="evenodd" id="Emoji" />
        </svg>
      </div>
      <Return />
      <Space />
      <Component />
      <Delete />
      <Shift />
      <M />
      <N />
      <B />
      <V />
      <C />
      <X />
      <Z />
      <L />
      <K />
      <J />
      <H />
      <G />
      <F />
      <D />
      <S />
      <A />
      <P />
      <O />
      <I />
      <U />
      <Y />
      <T />
      <R />
      <E />
      <W />
      <Q />
    </div>
  );
}

export default function ChangePassword() {
  return (
    <div className="bg-[#fcfcfd] relative size-full" data-name="Change Password">
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
      <div className="absolute left-[24px] size-[24px] top-[68px]" data-name="Iconly/Light/Arrow - Left">
        <div className="absolute flex inset-[26.04%_19.79%_23.76%_17.71%] items-center justify-center">
          <div className="flex-none h-[15px] rotate-90 w-[12.049px]">
            <ArrowLeft />
          </div>
        </div>
      </div>
      <Content />
      <div className="absolute bg-[#fe456a] content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[24px] px-[24px] py-[8px] rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] top-[428px] w-[327px]" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Change password</p>
      </div>
      <div className="absolute h-[291px] left-0 top-[521px] w-[375px]" data-name="IOS iPhone / Keyboard">
        <div className="absolute backdrop-blur-[40.774px] bg-[#e3e5e5] inset-0" data-name="Background" />
        <HomeIndicator />
        <Keys />
      </div>
    </div>
  );
}
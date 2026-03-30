import svgPaths from "./svg-v5hbf6ew3i";

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

function Button2() {
  return (
    <div className="bg-[#fe456a] content-stretch flex gap-[12px] h-[52px] items-center justify-center px-[24px] py-[8px] relative rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)] shrink-0 w-[327px]" data-name="Button">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[18px] text-white">Use current location</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[52px] items-center justify-center px-[24px] py-[8px] relative rounded-[8px] shrink-0 w-[327px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#fe456a] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_8px_8px_0px_rgba(127,86,217,0.03),0px_20px_24px_0px_rgba(127,86,217,0.08)]" />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[#fe456a] text-[18px]">Select it manually</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] top-[610px]" data-name="Button">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 h-[145.971px] ml-[35.21%] mt-[32%] relative row-1 w-[192.786px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192.786 145.971">
        <g id="Group">
          <path d={svgPaths.p3e1bee00} fill="var(--fill-0, #EAEBF2)" id="Vector" opacity="0.55" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 h-[46.526px] ml-[23.39%] mt-0 relative row-1 w-[12.854px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8537 46.5259">
        <g id="Group">
          <path d={svgPaths.p39a8a3c0} fill="var(--fill-0, #D6BBFB)" id="Vector" />
          <path d={svgPaths.p16535c80} fill="var(--fill-0, #FE456A)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 h-[32.109px] ml-[53.51%] mt-[28.99%] relative row-1 w-[16.672px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6717 32.1094">
        <g id="Group">
          <path d={svgPaths.p1b315af0} fill="var(--fill-0, #D6BBFB)" id="Vector" />
          <path d={svgPaths.p356d0a80} fill="var(--fill-0, #FE456A)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 h-[35.299px] ml-0 mt-[22.58%] relative row-1 w-[17.142px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 35.2995">
        <g id="Group">
          <path d={svgPaths.p352e4700} fill="var(--fill-0, #D6BBFB)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p12b7a680} fill="var(--fill-0, #FE456A)" id="Vector_2" />
            <path d={svgPaths.p36e795c0} fill="var(--fill-0, #FE456A)" id="Vector_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 h-[15.721px] ml-[59.8%] mt-[63.5%] relative row-1 w-[15.473px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4729 15.7206">
        <g id="Group">
          <path d={svgPaths.p144afa00} fill="var(--fill-0, #D6BBFB)" id="Vector" />
          <path d={svgPaths.p3ac62400} fill="var(--fill-0, #FE456A)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1" data-name="Group">
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[76.78%] mt-[71.04%] relative row-1" data-name="Group">
      <Group3 />
      <div className="col-1 h-[18.924px] ml-[9.9px] mt-[42.9px] relative row-1 w-[22.389px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3891 18.924">
          <path d={svgPaths.p2e203940} fill="var(--fill-0, #FEC84B)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[2.769px] ml-[9.9px] mt-[42.9px] relative row-1 w-[22.389px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3891 2.76935">
          <path d={svgPaths.p1ef1af00} fill="var(--fill-0, #FDB022)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[18.924px] ml-[21.62px] mt-[42.9px] relative row-1 w-[10.657px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6572 18.924">
          <path d={svgPaths.p3a4c0200} fill="var(--fill-0, #FDB022)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 h-[103.066px] ml-[1.89%] mt-0 relative row-1 w-[276.297px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276.298 103.066">
        <g id="Group">
          <path d={svgPaths.p1ba82680} fill="var(--fill-0, #E9D7FE)" id="Vector" />
          <path d={svgPaths.p1e3bcb10} fill="var(--fill-0, #E9D7FE)" id="Vector_2" />
          <path d={svgPaths.p17edd600} fill="var(--fill-0, #E9D7FE)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 h-[164.705px] ml-0 mt-0 relative row-1 w-[157.332px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157.332 164.705">
        <g id="Group">
          <path d={svgPaths.p248a4100} fill="var(--fill-0, #D6D6D6)" id="Vector" />
          <path d={svgPaths.p1e8ef900} fill="var(--fill-0, #D6D6D6)" id="Vector_2" />
          <path d={svgPaths.p2af4eb00} fill="var(--fill-0, #D6D6D6)" id="Vector_3" />
          <path d={svgPaths.p3167d80} fill="var(--fill-0, #D6D6D6)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="col-1 h-[156.854px] ml-[2.39%] mt-[2.38%] relative row-1 w-[149.823px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149.823 156.854">
        <g id="Group">
          <path d={svgPaths.p3c1f26c0} fill="var(--fill-0, #DCDBDB)" id="Vector" />
          <path d={svgPaths.p1a27e4c0} fill="var(--fill-0, #DCDBDB)" id="Vector_2" />
          <path d={svgPaths.p3c4be200} fill="var(--fill-0, #EBEBEB)" id="Vector_3" />
          <path d={svgPaths.p2cff1d80} fill="var(--fill-0, #EBEBEB)" id="Vector_4" />
          <g id="Group_2">
            <path d={svgPaths.p17458900} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p11a00800} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p3a17bb20} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p1cbe2f00} fill="var(--fill-0, white)" id="Vector_8" />
            <path d={svgPaths.p32fba400} fill="var(--fill-0, white)" id="Vector_9" />
            <path d={svgPaths.p3f489800} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p13abf200} fill="var(--fill-0, white)" id="Vector_11" />
            <path d={svgPaths.p22800100} fill="var(--fill-0, white)" id="Vector_12" />
            <path d={svgPaths.p2db530c0} fill="var(--fill-0, white)" id="Vector_13" />
            <path d={svgPaths.pb554580} fill="var(--fill-0, white)" id="Vector_14" />
            <path d={svgPaths.pcd12a00} fill="var(--fill-0, white)" id="Vector_15" />
            <path d={svgPaths.p25ed2780} fill="var(--fill-0, white)" id="Vector_16" />
            <path d={svgPaths.pe876080} fill="var(--fill-0, white)" id="Vector_17" />
            <path d={svgPaths.p2fe58b80} fill="var(--fill-0, white)" id="Vector_18" />
            <path d={svgPaths.pc0dd800} fill="var(--fill-0, white)" id="Vector_19" />
            <path d={svgPaths.p4f57980} fill="var(--fill-0, white)" id="Vector_20" />
            <path d={svgPaths.p2b283f00} fill="var(--fill-0, white)" id="Vector_21" />
            <g id="Group_3">
              <path d={svgPaths.p24825c00} fill="var(--fill-0, white)" id="Vector_22" />
              <path d={svgPaths.p14218d80} fill="var(--fill-0, white)" id="Vector_23" />
              <path d={svgPaths.p9893300} fill="var(--fill-0, white)" id="Vector_24" />
              <path d={svgPaths.pd72aa40} fill="var(--fill-0, white)" id="Vector_25" />
              <path d={svgPaths.p16f75f00} fill="var(--fill-0, white)" id="Vector_26" />
            </g>
            <path d={svgPaths.p3720cf00} fill="var(--fill-0, white)" id="Vector_27" />
            <path d={svgPaths.p11d7e3f0} fill="var(--fill-0, #EBEBEB)" id="Vector_28" />
            <path d={svgPaths.p341f7980} fill="var(--fill-0, #EBEBEB)" id="Vector_29" />
            <path d={svgPaths.p293fbf0} fill="var(--fill-0, #EBEBEB)" id="Vector_30" />
            <path d={svgPaths.p1437ec00} fill="var(--fill-0, #EBEBEB)" id="Vector_31" />
            <path d={svgPaths.p382ab780} fill="var(--fill-0, #DCDBDB)" id="Vector_32" />
            <path d={svgPaths.p2929b1f0} fill="var(--fill-0, #DCDBDB)" id="Vector_33" />
            <path d={svgPaths.p3874c070} fill="var(--fill-0, #DCDBDB)" id="Vector_34" />
            <path d={svgPaths.p23888a00} fill="var(--fill-0, #DCDBDB)" id="Vector_35" />
            <path d={svgPaths.p33bdd380} fill="var(--fill-0, #DCDBDB)" id="Vector_36" />
            <path d={svgPaths.p38dfb00} fill="var(--fill-0, #EBEBEB)" id="Vector_37" />
            <path d={svgPaths.p14703700} fill="var(--fill-0, #DCDBDB)" id="Vector_38" />
            <path d={svgPaths.p294b17d0} fill="var(--fill-0, #EBEBEB)" id="Vector_39" />
            <path d={svgPaths.p1899cb80} fill="var(--fill-0, #DCDBDB)" id="Vector_40" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[19.8%] mt-[23.56%] relative row-1" data-name="Group">
      <Group10 />
      <Group11 />
    </div>
  );
}

function Group13() {
  return (
    <div className="col-1 h-[19.66px] ml-[20.58%] mt-0 relative row-1 w-[61.03px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.0296 19.6599">
        <g id="Group">
          <path d={svgPaths.p305cfd00} fill="var(--fill-0, #FE456A)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p19cc2f00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
          <path d={svgPaths.p13e6ad80} fill="var(--fill-0, #FDB022)" id="Vector_3" />
          <path d={svgPaths.p17bb7280} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2b9c3980} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3fe20400} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p21129a00} fill="var(--fill-0, white)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="col-1 h-[19.66px] ml-0 mt-[46.8%] relative row-1 w-[61.03px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.0296 19.6599">
        <g id="Group">
          <path d={svgPaths.p4d1c00} fill="var(--fill-0, white)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p1b67b880} fill="var(--fill-0, #FDB022)" id="Vector_2" />
          </g>
          <path d={svgPaths.p2a6fc700} fill="var(--fill-0, #FDB022)" id="Vector_3" opacity="0.69" />
          <path d={svgPaths.p1cf97c00} fill="var(--fill-0, #FDB022)" id="Vector_4" opacity="0.69" />
          <path d={svgPaths.p2a46fefa} fill="var(--fill-0, #FDB022)" id="Vector_5" opacity="0.69" />
          <path d={svgPaths.p37d18f00} fill="var(--fill-0, #FDB022)" id="Vector_6" opacity="0.69" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[6.54%] mt-[58.51%] relative row-1" data-name="Group">
      <Group13 />
      <Group14 />
    </div>
  );
}

function Group16() {
  return (
    <div className="col-1 h-[84.699px] ml-0 mt-0 relative row-1 w-[89.051px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.0501 84.6985">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.pc975f00} fill="var(--fill-0, white)" id="Vector" opacity="0.33" />
            <g id="Vector_2" opacity="0.58" />
            <g id="Group_3">
              <path d={svgPaths.p42dbe00} fill="var(--fill-0, #FE456A)" id="Vector_3" />
            </g>
            <g id="Group_4">
              <path d={svgPaths.pfb19000} fill="var(--fill-0, white)" id="Vector_4" />
              <g id="Group_5">
                <path d={svgPaths.p39de3c00} fill="var(--fill-0, #FE456A)" id="Vector_5" />
              </g>
            </g>
          </g>
          <path d={svgPaths.p2f53f600} fill="var(--fill-0, #FE456A)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute inset-[8.33%_10.42%_8.33%_10.41%]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7747 23.9733">
        <g id="Home">
          <path d={svgPaths.pd4633f2} fill="var(--fill-0, #FE456A)" id="Home_2" />
        </g>
      </svg>
    </div>
  );
}

function IconlyBoldHome() {
  return (
    <div className="col-1 ml-[39.77px] mt-[20.31px] relative row-1 size-[28.768px]" data-name="Iconly/Bold/Home">
      <Home />
    </div>
  );
}

function Group15() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[29.01%] mt-[50.26%] relative row-1">
      <Group16 />
      <IconlyBoldHome />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[145.971px] ml-0 mt-[68.97px] relative row-1 w-[297.545px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 297.545 145.971">
          <path d={svgPaths.p25a7b300} fill="var(--fill-0, #DDDDEC)" id="Vector" />
        </svg>
      </div>
      <Group />
      <Group1 />
      <Group8 />
      <Group9 />
      <Group12 />
      <div className="col-1 h-[22.997px] ml-[156.53px] mt-[69.38px] relative row-1 w-[14.854px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8543 22.9972">
          <path d={svgPaths.p2359f680} fill="var(--fill-0, #FE456A)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[22.997px] ml-[183.37px] mt-[134.76px] relative row-1 w-[14.864px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8642 22.9972">
          <path d={svgPaths.p39401680} fill="var(--fill-0, #FE456A)" id="Vector" />
        </svg>
      </div>
      <Group15 />
    </div>
  );
}

function Caption() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center not-italic relative shrink-0 text-center w-[289px]" data-name="Caption">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1f2a37] text-[20px]">Hi, Nice to meet you !</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-full relative shrink-0 text-[#9da4ae] text-[14px] w-[min-content]">
        <p className="css-4hzbpn mb-0">Choose your location to find property</p>
        <p className="css-4hzbpn">around you</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[46px] items-center left-[39.06px] top-[166.53px]" data-name="Content">
      <Group2 />
      <Caption />
    </div>
  );
}

export default function SelectLocation() {
  return (
    <div className="bg-[#fcfcfd] relative size-full" data-name="Select location">
      <IosIPhoneHomeIndicator />
      <IosIPhoneStatusBarWithPhoneNotch />
      <Button />
      <Button1 />
      <Content />
    </div>
  );
}
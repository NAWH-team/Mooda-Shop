
import { useState } from "react";

const Navbar  = () => {
  const [searchBarValue, setSearchBarValue] = useState();
  return (
    <div className=" w-[100%] flex flex-row items-center justify-between py-[26px] px-8 box-border text-left text-[36px] text-red font-roboto md:w-[100%] md:items-center md:justify-between md:gap-[1px] sm:w-[100%] ">
      <div className="w-[100%] shrink-0 flex flex-row items-center justify-between py-0 pr-6 pl-14 box-border lg:w-[100%] lg:pl-10 lg:box-border md:w-[100%] sm:w-[100%] sm:items-center sm:justify-between sm:gap-[0px] sm:pl-0 sm:pr-0 sm:box-border">
        <b className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Logo
        </b>
        <div className="relative bg-[transparent] rounded-[184px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border shrink-0 flex flex-row items-center justify-start border-[1px] border-solid sm:hidden border-white mr-2.5 ml-2.5 ">
          <input
            className="[outline:none] font-sf-pro-display text-[14px] items-center px-10 text-white [border:none] w-full h-full [background:transparent] [&_(34:526)]:active:flex-1 lg:flex-1 lg:items-center lg:justify-start lg:pl-10 lg:box-border md:w-[100%] md:flex-row md:items-center md:justify-start md:pl-[34px] md:pr-1.5 md:box-border sm:hidden "
            placeholder="Search Items, Fashion, Collection and Users"
            type="text"
            value={searchBarValue}
            onChange={(event) => setSearchBarValue(event.target.value)}
          />
          <img
            className="absolute w-[22px] h-[21px] object-cover z-[2] left-[10px] top-[7px] sm:hidden"
            alt=""
            src="./src/public/Vector.png"
          />
        </div>
        <div className="w-[510px] h-[19px] flex flex-row items-center justify-between lg:pl-[3px] lg:pr-[3px] lg:box-border md:hidden">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-sf-pro-display text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay active:text-lightgray">
            Home
          </button>
          <div className="relative w-[66.5px] h-[19px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base font-semibold font-sf-pro-display text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
              Explore
            </button>
            <img
              className="absolute h-[26.32%] w-[13.53%] top-[42.11%] right-[0%] bottom-[31.58%] left-[86.47%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="./src/public/Vector (1).png"
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-sf-pro-display text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
            Personal Collection
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-sf-pro-display text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
            Drops
          </button>
          <div className="relative w-[51px] h-[19px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base font-semibold font-sf-pro-display text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
              More
            </button>
            <img
              className="absolute h-[26.32%] w-[17.65%] top-[47.37%] right-[0%] bottom-[26.32%] left-[82.35%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="./src/public/Vector (1).png"
            />
          </div>
        </div>
        <div className="relative w-[197px] h-11">
          <div className="absolute top-[0px] left-[0px] w-[197px] h-11">
            <button className="cursor-pointer p-2.5 bg-[transparent] absolute top-[3px] left-[0px] rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[108px] h-[38px] flex flex-row items-center justify-center m-[2PX] border-[0.5px] border-solid border-white active:box-border active:border-[0.5px] active:border-solid active:border-gainsboro-200 lg:pl-0 lg:pr-0 lg:box-border sm:hidden">
              <div className="relative text-base tracking-[0.02em] font-semibold font-sf-pro-display text-white text-left hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-gainsboro-100">
                Wallet
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent]  hidden flex-col items-center justify-between  sm:flex hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))]">
          <img
            className="absolute top-[13px] left-[90px] w-[22px] h-[22px] object-cover  "
            alt=""
            src="./src/public/Vector.png"
          />
          </button>
            <img
              className="absolute top-[0px] left-[128px] w-[69px] h-11 object-cover"
              alt=""
              src="./src/public/group-427319083@2x.png"
            />
          </div>
          
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[12px] left-[208px] h-5 hidden flex-col items-center justify-between md:flex sm:flex hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] ">
            <img
              className="relative w-7 h-5 object-cover"
              alt=""
              src="./src/public/vector@2x.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar ;

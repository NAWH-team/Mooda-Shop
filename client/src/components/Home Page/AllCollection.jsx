import React from "react";



const AllCollection = ()=>{


    return (

        <div className="relative  w-full h-[605px] overflow-hidden text-center text-21xl text-white font-poppins lg:w-[1200px]">
      <div className="absolute top-[52px] left-[0px] w-[1463px] h-[390px] flex flex-col items-center justify-start py-[67px] px-[180px] box-border gap-[60px] lg:w-[1200px] lg:pl-[100px] lg:pr-[100px] lg:box-border md:w-[960px] sm:w-[400px] sm:h-[600px] sm:gap-[30px] sm:pl-[100px] sm:pr-[100px] sm:box-border">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[10px]">
          <b className="self-stretch flex-1 relative sm:text-11xl">
            All Collection
          </b>
          <div className="self-stretch flex-1 relative text-xl tracking-[0.02em] leading-[38px] font-medium font-sf-pro-display text-half-white sm:text-mini sm:max-w-[275px] sm:max-h-[70px]">
            Worlds First Layer 2 Fashion Marketplace
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-between text-xl font-sf-pro-display">
          <div className="flex-1 h-[157px] flex flex-col items-center justify-start gap-[15px] min-w-[84px] max-w-[140px] min-h-[125px] max-h-[175px]">
            <img
              className="relative w-[75px] h-[75px] object-cover"
              alt=""
              src="./src/public/Mask Group.svg"
            />
            <div className="self-stretch flex-1 relative tracking-[0.02em] leading-[38px] font-semibold">
              No Gas Fees
            </div>
          </div>
          <div className="flex-1 h-[157px] flex flex-col items-center justify-start gap-[18px] min-w-[121px] max-w-[200px] min-h-[125px] max-h-[175px]">
            <img
              className="relative w-[83px] h-[83px] object-cover"
              alt=""
              src="./src/public/Mask Group (1).svg"
            />
            <div className="self-stretch flex-1 relative tracking-[0.02em] font-semibold">
              Carbon Netural NFTs
            </div>
          </div>
          <div className="flex-1 h-[157px] flex flex-col items-center justify-start gap-[11px] min-w-[123px] max-w-[244px] min-h-[125px] max-h-[178px]">
            <img
              className="relative w-[84px] h-[84px] object-cover"
              alt=""
              src="./src/public/mask-group@2x.png"
            />
            <div className="self-stretch flex-1 relative leading-[27px] font-semibold">
              Fast And Easy Transactions
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AllCollection
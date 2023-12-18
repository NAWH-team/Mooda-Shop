import React from "react";



const MainColl = ()=>{


    return (
        <div className="relative w-full h-[175px]">
      <div className="absolute top-[0px] left-[0px]  w-full h-[175px] overflow-hidden flex flex-col items-start justify-between lg:w-[1200px] md:w-[960px] sm:w-[420px] sm:h-[275px]">
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-center justify-center lg:max-w-[1200px] md:max-w-[900px] sm:max-w-[400px]">
          <div className="flex-1 h-[55px] flex flex-row flex-wrap items-center justify-center relative gap-[138.56px] sm:gap-[20px] sm:pl-2.5 sm:pr-2.5 sm:pb-[30px] sm:box-border">
            <div className="h-full my-0 mx-[!important] absolute top-[1px] left-[1px] w-[1430px] flex flex-row items-center justify-center pt-7 px-0 pb-[27px] box-border gap-[10px] max-w-[1430px] max-h-[1px] z-[0] lg:w-full lg:h-full lg:max-w-[1200px] lg:max-h-[1px] md:w-full md:h-full md:max-w-[900px] md:max-h-[1px] sm:hidden sm:w-full sm:h-full sm:max-w-[420px] sm:max-h-[1px]">
              <img
                className="relative max-h-[1px] w-[992px] object-cover max-w-[992px] z-[0]"
                alt=""
                src="/line-368@2x.png"
              />
              <div className="absolute my-0 mx-[!important] top-[calc(50%_+_0.3px)] left-[calc(50%_-_162.5px)] box-border w-[325.5px] h-[0.5px] max-w-[325px] max-h-[1px] z-[1] border-t-[0.5px] border-solid border-dimgray-100" />
            </div>
            <button className="cursor-pointer [border:none] p-[13.414634704589844px] bg-orangered-200 flex-1 rounded-[206.71px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center box-border min-w-[182px] max-w-[200px] max-h-[55px] z-[1] hover:bg-orangered-600 active:bg-firebrick-100">
              <div className="relative text-lg-8 font-medium font-poppins text-white text-left inline-block w-[147.6px] h-[28.2px] shrink-0">
                Main Collection
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-[13.414634704589844px] bg-dimgray-200 flex-1 rounded-[206.71px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center box-border min-w-[182px] max-w-[200px] max-h-[55px] z-[2] active:bg-gray-200">
              <div className="relative text-lg-8 font-medium font-poppins text-white text-left inline-block w-[159px] h-[29px] shrink-0">
                Creators Market
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default MainColl
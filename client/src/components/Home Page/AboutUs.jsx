import React from "react";



const AboutUs  =()=>{



    return (
<div className="relative  w-full h-[900px] overflow-hidden text-center text-21xl text-white font-roboto py-100 ">
      <div className="absolute top-[0px] left-[0px] w-[1443px] h-[740px] flex flex-col items-center justify-start py-0 px-[100px] box-border gap-[50px] lg:w-[1200px] lg:h-[1050px] md:h-[1550px] md:w-[930px] sm:w-[400px] sm:pl-2.5 sm:pr-2.5 sm:box-border">
        <div className="w-[1327px] h-[117px] flex flex-col items-center justify-start gap-[10px]">
          <b className="self-stretch flex-1 relative sm:text-16xl">About Us</b>
          <div className="self-stretch relative text-xl font-medium font-poppins text-gray-100 sm:text-mini">
            <p className="m-0">Lorem ipsum dolor sit amet, consectetur</p>
            <p className="m-0"> adipiscing elit.</p>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-center justify-end gap-[90px] min-h-[570px] max-h-[1440px] text-left text-17xl font-sf-pro-display md:items-start md:justify-start sm:items-start sm:justify-center">
          <div className="flex-1 rounded-3xs h-[564px] flex flex-row items-center justify-center max-w-[460px] sm:items-start sm:justify-center sm:max-w-[200px]">
            <img
              className="relative rounded-3xs w-[458px] h-[560px] object-cover sm:w-[350px] sm:h-[530px]"
              alt=""
              src="./src/public/rectangle-31@2x.png"
            />
          </div>
          <div className="flex-1 h-[547px] flex flex-col items-start justify-center pt-5 px-0 pb-[70px] box-border gap-[50px] min-w-[310px] max-h-[760px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[20px]">
              <b className="self-stretch relative">Fashion That Speaks</b>
              <div className="self-stretch relative text-xl leading-[200%] text-gray-600">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. `}</div>
            </div>
            <div className="w-[727px] flex flex-col items-start justify-center">
              <button className="cursor-pointer [border:none] py-2.5 px-5 bg-[transparent] rounded-md [background:linear-gradient(232.11deg,_#ff5b29,_rgba(255,_242,_245,_0.64)_13.54%,_rgba(255,_61,_0,_0.74)_41.15%,_rgba(144,_12,_63,_0.82)_74.48%,_#900c3f_98.96%)] shadow-[0px_4px_4px_#900c3f] w-[161px] h-[54px] flex flex-row items-center justify-center box-border">
                <div className="relative text-xl font-semibold font-sf-pro-display text-white text-left">
                  Show more
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default AboutUs
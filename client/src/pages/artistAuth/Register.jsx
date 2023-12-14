import { useState } from "react";
import DatePicker from "react-datepicker";
import ReactDatePicker from "react-datepicker";

const ArtistRegister =()=>{

 return (
    <div class="w-[1132px] h-[650px] relative">
    <div class="w-[531px] h-[950px] left-[601px] top-0 relative bg-white bg-opacity-20 rounded-[10px]"></div>
    
   <div className="relative bottom-[1000px]">
    <div class="w-[426px] left-0 top-[534px] relative text-center text-white text-[28px] font-bold font-['SF Pro Display'] leading-[38px] tracking-tight">Begin your meta fashion journey here</div>

    <div class="left-[632px] top-[82px] relative"><span class="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Already a Member?</span><span class="text-indigo-500 text-lg font-normal font-['SF Pro Display'] tracking-tight"> </span><span class="text-indigo-500 text-lg font-medium font-['SF Pro Display'] tracking-tight">Sign In</span></div>
    <div class="w-[459px] h-[33px] left-[631px] top-[153px] relative">
        <div class="left-[1px] top-0 relative text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Email Address</div>
        <div class="w-[459px] h-[0px] left-0 top-[33px] relative border border-white border-opacity-50"></div>
    </div>
    <div class="w-[459px] h-[33px] left-[631px] top-[399px] relative">
        <div class="left-[1px] top-0 relative text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Password</div>
        <div class="w-[459px] h-[0px] left-0 top-[33px] relative border border-white border-opacity-50"></div>
    </div>
    <div class="w-[458px] h-[33px] left-[632px] top-[246px] relative">
        <div class="w-[229px] h-[33px] left-0 top-0 relative">
            <div class="left-[1px] top-0 relative text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Full Name</div>
            <div class="w-[229px] h-[0px] left-0 top-[33px] relative border border-white border-opacity-50"></div>
        </div>
        <div class="w-[204px] h-[33px] left-[254px] bottom- relative">
            <div class="left-[1px] top-0 relative text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Last Name</div>
            <div class="w-[204px] h-[0px] left-0 top-[33px] relative border border-white border-opacity-50"></div>
        </div>
    </div>
    <div class="w-[459px] h-[81px] left-[631px] top-[432px] relative">
        <div class="left-[1px] top-0 relative text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Date Of Birth</div>
        <div class="w-[135px] h-[0px] left-0 top-[81px] relative border border-white border-opacity-50">
            <input className="bg-white bg-opacity-0 w-[135px] h-8 relative bottom-8     "/>
            <DatePicker/>
        </div>
    
    </div>
    <div class="w-[175px] h-[47px] px-5 py-2.5 left-[915px] top-[563px] relative bg-gradient-to-bl from-purple-500 to-violet-700 rounded-[121px] justify-center items-center gap-2.5 inline-flex">
        <div class="text-white text-[17px] font-medium font-['Poppins']">Create Account</div>
   </div>
    </div>
</div>
 )
}
export default ArtistRegister
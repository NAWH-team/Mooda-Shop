import React from "react";




const Footer= () => {


    return (
        <div>
            <footer className="w-[100%] h-[100%] flex flex-row flex-wrap items-start justify-between py-16 px-[100px] box-border text-left text-mini text-gray-300 font-poppins   [&_.youtube-icon]:hover:gap-[0px] [&_.youtube-icon]:hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] [&_.contact-parent]:hover:gap-[20px] [&_.contact-parent]:hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] [&_.youtube-parent]:hover:gap-[40px] [&_.youtube-parent]:hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] [&_.company-parent]:hover:gap-[20px] [&_.company-parent]:hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] [&_.about-parent]:hover:gap-[20px] [&_.about-parent]:hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] [&_.logo-parent]:hover:gap-[20px] [&_.logo-parent]:hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] lg:pl-[150px] lg:pr-[150px] lg:box-border md:pl-[250px] md:pr-[250px] md:box-border sm:h-[100%] sm:pt-[30px] sm:px-[40px] sm:pb-2.5 sm:box-border">
        <div className="logo-parent h-[150px] flex flex-col items-start justify-start gap-[20px] text-center text-xl text-red">
          <b className="relative">MooDa</b>
          <div className="relative text-mini leading-[25px] font-medium text-gray-300 text-left inline-block w-72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            donec non pellentesque ut.
          </div>
        </div>
        <div className="about-parent h-[202px] flex flex-col items-start justify-center gap-[20px]">
          <b className="relative text-xl text-white text-center">About</b>
          <div className="relative font-medium">Product</div>
          <div className="relative font-medium">Resource</div>
          <div className="relative font-medium">{`Term & Condition`}</div>
          <div className="relative font-medium">FAQ</div>
        </div>
        <div className="company-parent h-[202px] flex flex-col items-start justify-end gap-[20px]">
          <b className="relative text-xl text-white text-center">Company</b>
          <div className="relative font-medium">Our Team</div>
          <div className="relative font-medium">Partner With Us</div>
          <div className="relative font-medium">{`Privacy & Policy`}</div>
          <div className="relative font-medium">Features</div>
        </div>
        <div className="contact-parent h-[161px] flex flex-col items-start justify-start gap-[20px]">
          <b className="relative text-xl text-white text-center">Contact</b>
          <div className="relative font-medium">+012 3456789</div>
          <div className="relative font-medium">
            Mooda@gmail.com
          </div>
          <div className="youtube-parent shrink-0 flex flex-row items-center justify-center gap-[40px]">
            <img
              className="youtube-icon relative w-[25px] h-[25px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="./src/public/youtube@2x.png"
            />
            <img
              className="youtube-icon relative w-[25px] h-[25px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="./src/public/discord@2x.png"
            />
            <img
              className="youtube-icon relative w-[25px] h-[25px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="./src/public/instagram@2x.png"
            />
          </div>
        </div>
      </footer>
        </div>
    )
}
export default Footer;
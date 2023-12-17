import React from "react";




const ButtonAddProduct = ({data,fetch})=>{




    return (
        <>
        <div className="self-stretch flex flex-row items-center  justify-between py-0 pr-[50px] pl-0">
            <div className="flex-1 relative">{data.length} items </div>
            <div className="flex-1 shrink-0 flex flex-row items-start justify-start gap-[14px]">
              <button 
              className="cursor-pointer p-2.5 bg-[transparent] flex-1 rounded-8xs box-border h-[42px] flex flex-row items-center justify-center border-[0.5px] border-solid border-white hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:bg-gray-500"
              onClick={()=>{fetch()}}
              >
                <div className="relative text-base font-poppins text-white text-left">
                  All Items
                </div>
              </button>
              <button className="cursor-pointer p-2.5 bg-[transparent] flex-1 rounded-8xs box-border h-[42px] flex flex-row items-center justify-center gap-[10px] border-[0.5px] border-solid border-white hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:bg-gray-500">
                <img
                  className="relative w-[11px] h-[11px] object-cover"
                  alt=""
                  src="/group-427319091@2x.png"
                />
                <div className="relative text-base font-poppins text-white text-left">
                  Add Product
                </div>
              </button>
            </div>
          </div>
        </>
    )
}

export default ButtonAddProduct
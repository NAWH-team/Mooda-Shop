

import React, { useContext, useState } from "react";

import { MyContext } from "../../myContext";








const NewTrandy = () => {
    const { products, setProducts } = useContext(MyContext)
    const [like, setLike] = useState("./src/public/Vector (5).png")



    return (
        <div className="relative  w-full h-[851px] flex flex-col items-center justify-start gap-[30px] text-center text-21xl text-white font-poppins">
            <div className="w-full h-[130px] flex flex-col items-center justify-start gap-[10px]">
                <b className="self-stretch relative sm:text-16xl">{`New & Trending`}</b>
                <div className="self-stretch relative text-xl font-medium text-half-white sm:text-mini">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center gap-[80px] text-left text-xl text-half-white">
                <div className="rounded-3xs bg-gray-700 w-[390px] h-[595px] flex flex-col items-center justify-between min-w-[320px] sm:w-[360px] sm:h-[565px]">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-between pt-[25px] px-[25px] pb-[5px] sm:flex-col sm:items-center sm:justify-between sm:gap-[0px] sm:pr-[25px] sm:box-border">
                        <img
                            className="relative rounded-3xs w-[337px] h-[380px] object-cover"
                            alt=""
                            src={products[3].img}
                        />
                    </div>
                    <div className="self-stretch h-[184px] flex flex-row flex-wrap items-end justify-start pt-5 px-[23px] pb-10 box-border gap-[30px] sm:gap-[10px] sm:pt-[5px] sm:box-border">
                        <div className=" px-8 flex-1 h-[70px] flex flex-row items-start justify-between md:px-10 lg:px-10  sm:px-10">
                            <div className="flex flex-col items-start justify-start gap-[10px]">
                                <div className="relative font-medium">{products[3].collection}</div>
                                <b className="relative text-white">{products[3].name}</b>
                            </div>
                            <div className="flex flex-col items-end justify-start text-mini">
                                <div className="relative font-medium">{products[3].quantity}</div>
                                <b className="relative text-xl text-white">{products[3].price} $</b>
                            </div>
                        </div>
                        <div className="flex-1 h-[50px] flex flex-row items-end justify-start gap-[10px] min-w-[175px]">
                            <div className="flex flex-col items-start justify-start p-2.5">
                                <button
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] shrink-0 flex flex-col items-center justify-start"
                                    onClick={() => { setLike("./src/public/heard.png") }}
                                >
                                    <img
                                        className="relative w-[20px] h-[18px] object-cover"
                                        alt=""
                                        src={like}
                                    />
                                </button>
                            </div>
                            <button className="cursor-pointer [border:none] py-2.5 px-5 bg-[transparent] flex-1 rounded-3xs [background:linear-gradient(232.11deg,_#ff5b29,_rgba(255,_242,_245,_0.64)_13.54%,_rgba(255,_61,_0,_0.74)_41.15%,_rgba(144,_12,_63,_0.82)_74.48%,_#900c3f_98.96%)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center hover:bg-orangered-400 active:bg-orangered-900">
                                <div className="relative text-xl font-semibold font-poppins text-white text-left">
                                    Buy Now
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="rounded-3xs bg-gray-700 w-[390px] h-[595px] flex flex-col items-center justify-between min-w-[320px] sm:w-[360px] sm:h-[565px]">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-between pt-[25px] px-[25px] pb-[5px] box-border max-h-[410px]">
                        <img
                            className="relative w-[337px] h-[380px] object-cover"
                            alt=""
                            src={products[1].img}
                        />
                    </div>
                    <div className="self-stretch h-[184px] flex flex-row flex-wrap items-end justify-start pt-5 px-[23px] pb-10 box-border gap-[30px] lg:pb-[30px] lg:box-border sm:gap-[10px] sm:pt-[5px] sm:pb-[30px] sm:box-border sm:[&_.buy-now-wrapper19]:hover:bg-orangered-400 sm:[&_.lorem-ipsum21]:hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))]">
                        <div className=" px-8 flex-1 h-[70px] flex flex-row items-start justify-between md:px-10 lg:px-10  sm:px-10">
                            <div className="shrink-0 flex flex-col items-start justify-start gap-[10px]">
                                <div className="relative font-medium">{products[3].collection}</div>
                                <b className="lorem-ipsum21 relative text-white">{products[3].name}</b>
                            </div>
                            <div className="shrink-0 flex flex-col items-end justify-start text-mini">
                                <div className="relative font-medium">{products[3].quantity}</div>
                                <b className="relative text-xl text-white">{products[3].price} $</b>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-row items-end justify-start gap-[10px] min-w-[175px]">
                            <div className="shrink-0 flex flex-col items-start justify-start p-2.5">
                                <button
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] shrink-0 flex flex-col items-center justify-start"
                                    onClick={() => { setLike("./src/public/heard.png") }}
                                >
                                    <img
                                        className="relative w-[20px] h-[18px] object-cover"
                                        alt=""
                                        src={like}
                                    />
                                </button>
                            </div>
                            <button className="buy-now-wrapper19 cursor-pointer [border:none] py-2.5 px-5 bg-[transparent] flex-1 rounded-3xs [background:linear-gradient(232.11deg,_#ff5b29,_rgba(255,_242,_245,_0.64)_13.54%,_rgba(255,_61,_0,_0.74)_41.15%,_rgba(144,_12,_63,_0.82)_74.48%,_#900c3f_98.96%)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] shrink-0 flex flex-row items-center justify-center hover:bg-orangered-400 active:bg-darkred">
                                <div className="relative text-xl font-semibold font-poppins text-white text-left">
                                    Buy Now
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="rounded-3xs bg-darkslategray-100 w-[390px] h-[595px] flex flex-col items-center justify-between min-w-[320px] sm:bg-darkslategray-100 sm:w-[360px] sm:h-[565px] sm:hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))]">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-between pt-[25px] px-[25px] pb-[5px]">
                        <img
                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover lg:rounded-3xs sm:rounded-3xs"
                            alt=""
                            src={products[2].img}
                        />
                    </div>
                    <div className="self-stretch h-[184px] flex flex-row flex-wrap items-end justify-start pt-5 px-[23px] pb-10 box-border gap-[30px]">
                        <div className=" px-8 flex-1 h-[70px] flex flex-row items-start justify-between md:px-10 lg:px-10  sm:px-10">
                            <div className="shrink-0 flex flex-col items-start justify-start gap-[10px]">
                                <div className="relative font-medium">{products[2].collection}</div>
                                <b className="relative text-white">{products[2].name}</b>
                            </div>
                            <div className="shrink-0 flex flex-col items-end justify-start text-mini">
                                <div className="relative font-medium">{products[2].quantity}</div>
                                <b className="relative text-xl text-white">{products[2].price} $</b>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-row items-end justify-start gap-[10px] min-w-[175px]">
                            <div className="shrink-0 flex flex-col items-start justify-start p-2.5">
                            <button
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] shrink-0 flex flex-col items-center justify-start"
                                    onClick={() => { setLike("./src/public/heard.png") }}
                                >
                                    <img
                                        className="relative w-[20px] h-[18px] object-cover"
                                        alt=""
                                        src={like}
                                    />
                                </button>
                            </div>
                            <button className="cursor-pointer [border:none] py-2.5 px-5 bg-[transparent] flex-1 rounded-3xs [background:linear-gradient(232.11deg,_#ff5b29,_rgba(255,_242,_245,_0.64)_13.54%,_rgba(255,_61,_0,_0.74)_41.15%,_rgba(144,_12,_63,_0.82)_74.48%,_#900c3f_98.96%)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] shrink-0 flex flex-row items-center justify-center hover:bg-orangered-400 active:bg-orangered-1300">
                                <div className="relative text-xl font-semibold font-poppins text-white text-left">
                                    Buy Now
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTrandy;

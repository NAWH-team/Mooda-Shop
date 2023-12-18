import React ,{useState} from "react";



const ProductHome = ({ product }) => {
    const [like,setLike] = useState("./src/public/Vector (5).png")

    return (


        <div className="rounded-3xs bg-gray-700 w-[390px] h-[595px] flex flex-col items-center justify-between min-w-[320px] sm:w-[360px] sm:h-[565px]">
            <div className="self-stretch flex-1 flex flex-row items-center justify-between pt-[25px] px-[25px] pb-[5px] sm:flex-col sm:items-center sm:justify-between sm:gap-[0px] sm:pr-[25px] sm:box-border">
                <img
                    className="relative rounded-3xs w-[337px] h-[380px] object-cover"
                    alt=""
                    src={product.img}
                />
            </div>
            <div className="self-stretch h-[184px] flex flex-row flex-wrap items-end justify-start pt-5 px-[23px] pb-10 box-border gap-[30px] sm:gap-[10px] sm:pt-[5px] sm:box-border">
                <div className="  px-8 flex-1 h-[70px] flex flex-row items-start justify-between md:px-10 lg:px-10  sm:px-10 ">
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                        <div className="relative font-medium">{product.collection}</div>
                        <b className="relative text-white">{product.name}</b>
                    </div>
                    <div className="flex flex-col items-end justify-start text-mini">
                        <div className="relative font-medium">{product.quantity}</div>
                        <b className="relative text-xl text-white">{product.price} $</b>
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
    )
}

export default ProductHome
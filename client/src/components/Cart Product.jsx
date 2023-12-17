import axios from "axios";
import React ,{useState} from "react";



const CartProduct = ({product}) => {

    const [like,setLike] = useState("./src/public/Vector (5).png")
    const {id} = JSON.parse(window.localStorage.getItem('User'))
    const likeProd = ()=>{
        axios.post('http://localhost:8080/favorites/add',{userId:id , prodId:product.id}).then((res)=>{
            console.log(res);
        })
    }
    const buy = (product)=>{
        console.log(product.id);
        axios.post('http://localhost:8080/wallet/addwallet',{prod:product.id , userId:id}).then((res)=>{
        console.log(res);
        })
    }


    return (
        <>
            <div className="rounded-lg bg-gray-500 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start pt-5 px-3.5 pb-4 text-half-white">
                <div className="relative w-[258px] h-[398.5px]">
                    <img
                        className="absolute top-[0px] left-[5.9px] rounded-5xs-3 w-[246.1px] h-[277.5px] object-cover"
                        alt=""
                        src={product.img}
                    />
                    <div className="absolute top-[291.5px] left-[0px] w-[258px] flex flex-col items-start justify-start gap-[13px]">
                        <div className="self-stretch flex flex-row items-start justify-between py-0 pr-1 pl-0">
                            <div className="relative font-medium inline-block w-[197px] shrink-0">
                            {product.collection} 
                            </div>
                            <div className="relative text-2xs font-medium"> {product.quantity} </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[3px] pl-0 text-white">
                            <b className="relative inline-block w-[174px] shrink-0">
                            {product.name}
                            </b>
                            <b className="relative">{product.price} $</b>
                        </div>
                        <div className="self-stretch relative h-[37px]">
                            <div className="absolute top-[0px] left-[0px] w-[258px] flex flex-row items-center justify-start py-0 pr-2.5 pl-1.5 box-border gap-[18px]">
                                <button 
                                className="cursor-pointer [border:none] p-0 bg-[transparent] shrink-0 flex flex-col items-center justify-start"
                                onClick={()=>{
                                    likeProd()
                                    
                                    setLike("./src/public/heard.png")}}
                                >
                                    <img
                                        className="relative w-[20px] h-[18px] object-cover"
                                        alt=""
                                        src={like}
                                    />
                                </button>
                                <button 
                                onClick={()=>buy(product)}
                                 className="cursor-pointer [border:none] py-[7.303840637207031px] px-[14.607681274414062px] bg-[transparent] flex-1 rounded-5xs-3 [background:linear-gradient(232.11deg,_#ff5b29,_rgba(255,_242,_245,_0.64)_13.54%,_rgba(255,_61,_0,_0.74)_41.15%,_rgba(144,_12,_63,_0.82)_74.48%,_#900c3f_98.96%)] h-[37px] flex flex-row items-center justify-center box-border hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:bg-orangered">
                                    <div className="relative text-mini-6 font-semibold font-poppins text-white text-left inline-block w-[64.3px] h-[21.9px] shrink-0">
                                        Buy Now
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProduct
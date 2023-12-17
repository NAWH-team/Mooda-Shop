import { useEffect, useState } from "react";
import bg from "../assets/images/women-bg.png";
import { GoHeartFill } from "react-icons/go";
import axios from "axios";
import { MyContext } from "../myContext";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
const LikedProducts = () => {
  const [products,setProducts]=useState()
  const {Token,id}= JSON.parse(window.localStorage.getItem('User'))
  const artist = jwtDecode(Token)

  useEffect(()=>{
    getLikedProds()

  },[])

  const buy = (product)=>{
    console.log(product.id);
    axios.post('http://localhost:8080/wallet/addwallet',{prod:product.id , userId:id}).then((res)=>{
    console.log(res);
    })
}

  
  const getLikedProds = ()=>{
    axios.get(`http://localhost:8080/favorites/${id}`).then((res)=>{
      setProducts(res.data)
    })
  }
  
  const dislike = (e)=>{
    console.log(e);
    axios.delete('http://localhost:8080/favorites/delete',{data:{userId:id, prodId:e.id}}).then(()=>
     getLikedProds()
    ).catch((err)=>console.log(err))
  }
  
  
  return (
    <div className="">
      <div className="flex flex-col bg-red justify-center items-center bg-opacity">
        <div className="">
          <img className=" " src={bg} />  
        </div>
        <h1 className="text-white text-[50px]">Liked Products</h1>
      </div>
    
      <div className="  justify-center flex flex-wrap gap-10 m-10 ">
       {products && products.map((e)=>
          <div className="flex flex-col-2 justify-center  ">
        <div class="w-[384.12px] h-[534.58px] flex flex-col-4 justify-center bg-black  bg-opacity-10 rounded-lg shadow ">
          <div className="rounded-lg m-5 relative top-4 transform h-64  w-60 transition duration-500 hover:scale-125">

          <img
            class="w-[240px] h-[282px]"
            src={e.img}
          />
          <div className=" relative ">
            <div className="flex flex-col-2 gap-24">
              <h1 class="text-white text-xl text-opacity-50 font-medium font-['Poppins'] ">
                {e.name}
              </h1>
              <h2 class="text-white text-sm font-bold font-['Poppins'] ">
                {e.price}.000$
              </h2>
     
            </div>
            </div>
            
          <button
          onClick={()=>buy(e)}
          className=" relative top-10 cursor-pointer [border:none] py-[7.303840637207031px] px-[14.607681274414062px] bg-[transparent] flex-1 rounded-5xs-3 [background:linear-gradient(232.11deg,_#ff5b29,_rgba(255,_242,_245,_0.64)_13.54%,_rgba(255,_61,_0,_0.74)_41.15%,_rgba(144,_12,_63,_0.82)_74.48%,_#900c3f_98.96%)] h-[37px] flex flex-row items-center justify-center box-border hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:bg-orangered">
                                    <div className="relative text-mini-6 font-semibold font-poppins text-white text-left inline-block w-[84.3px] h-[21.9px] shrink-0">
                                        Buy Now
                                    </div>
              
                                </button>

            <GoHeartFill
            onClick={()=>dislike(e)}
              size={40}
              className="text-red-700 text-red float-right relative "
              />
              
          </div>
          

          </div>
      </div>)}
      </div>
      { products && products.length <= 0 && 
      <div className="flex justify-center m-9">
      <h1 className="text-xl text-white  ">U Haven't Liked Any Products yet</h1>
    </div> }
    </div>
  );
};

export default LikedProducts;

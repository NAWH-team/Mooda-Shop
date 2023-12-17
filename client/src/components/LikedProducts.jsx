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
      <div className="flex flex-col justify-center items-center bg-white bg-opacity-10">
        <div className="">
          <img className=" " src={bg} />
        </div>
        <h1 className="text-white text-3xl lg:text-6xl">Liked Products</h1>
      </div>
    
      <div className=" flex-wrap-3 justify-center lg:flex lg:flex-wrap gap-10 m-10 ">
       {products && products.map((e)=>
        <div className="flex flex-col-2  ">
        <div class="w-[284.12px] h-[434.58px] bg-white bg-opacity-10 rounded-lg shadow relative top-20">
          <div className="rounded-lg m-5 relative top-4 transform h-64 bg-blue-400 w-60 transition duration-500 hover:scale-125">

          <img
            class="w-[240px] h-[282px]"
            src={e.img}
          />
          <div className=" relative ">
            <div className="flex flex-col-2 gap-32">
              <h1 class="text-white text-xl text-opacity-50 font-medium font-['Poppins'] ">
                {e.name}
              </h1>
              <h2 class="text-white text-sm font-bold font-['Poppins'] ">
                {e.price}
              </h2>
              
            </div>
            </div>

            <GoHeartFill
            onClick={()=>dislike(e)}
              size={40}
              className="text-red-700 float-right relative "
              />
              <h3>Hellsod</h3>
          </div>
        </div>
      </div>)}
      </div>
      { products && products.length <= 0 && 
      <div className="flex justify-center m-9">
      <h1 className="text-4xl text-white  ">U Haven't Liked Any Products yet</h1>
    </div> }
    </div>
  );
};

export default LikedProducts;

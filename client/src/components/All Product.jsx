import React, { useState, useEffect, useContext } from "react";
import ButtonAddProduct from "./Add Product";
import CartProduct from "./Cart Product";
import { MyContext } from "../myContext.jsx";
import axios from "axios";
import Products from "./Prodacts.jsx";



const AllProduct = () => {
    const { products, setProducts } = useContext(MyContext)
    const [status, setStatus] = useState(false)
    const [price, setPrice] = useState(false)
    const [collections, setCollections] = useState(false)
    const [categories, setCategories] = useState(false)
    // const [available,setAvailable] = useState(products)
    



    console.log(products, "products");

    const fetch = async () => {
        
        try {
            var { data } = await axios.get(`http://localhost:8080/product/getAll/`);
            setProducts(data);
            console.log(data,"data fetch");
        } catch (err) {
        console.log(err,"err All Products");
         }
    };
    const allStatus = async (status) => {
        console.log(status,"satatus");
        try {
            var  {data}  = await axios.get(`http://localhost:8080/product/getAllStatus/${status}`);
            setProducts(data);
            console.log(data,"data allStatus");
        } catch (err) {
        console.log(err,"err allStatus");
         }
    };

    const allCollection = async (collection) => {
        console.log(collection,"collection");
        try {
            var  {data}  = await axios.get(`http://localhost:8080/product/getAllCollection/${collection}`);
            setProducts(data);
            console.log(data,"data allcollection");
        } catch (err) {
        console.log(err,"err allcollection");
         }
    };

    const allCategory = async (category) => {
        console.log(category,"category");
        try {
            var  {data}  = await axios.get(`http://localhost:8080/product/getAllCategory/${category}`);
            setProducts(data);
            console.log(data,"data allCategory");
        } catch (err) {
        console.log(err,"err allCategory");
         }
    };

    


    useEffect(() => {
        fetch()
    }, [])




    return (
        <>
            <div className="relative  w-full h-full overflow-hidden flex flex-row items-start justify-start py-0 px-px box-border text-left text-[26px] text-white font-poppins">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start p-10 gap-[60px]">
                    <div className="self-stretch flex-1 rounded-3xss bg-gray-500 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[42px]  px-0 pb-48 box-border gap-[50px] min-w-[40px] max-w-[360px]">
                        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-[30px] gap-[16px]">
                            <img
                                className="relative w-[29.1px] h-[17px] object-cover"
                                alt=""
                                src="./src/public/Filteer.png"
                            />
                            <div className="relative font-semibold">Filters</div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                                <button
                                    className="cursor-pointer [border:none] py-2.5 px-[25px] bg-[transparent] self-stretch flex flex-row items-center justify-between hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay "
                                    onClick={() => setStatus(!status)}
                                >

                                    <div className="relative w-[52px] h-6">
                                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
                                            Status
                                        </button>
                                    </div>
                                    <img
                                        className="relative w-3 h-1.5 object-cover"
                                        alt=""
                                        src="./src/public/Vector (1).png"
                                    />
                                </button>
                                {status && (<> <div className=" hide self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                    <button 
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay"
                                    onClick={()=>{allStatus(1)}}
                                    >
                                        Available
                                    </button>
                                </div>
                                    <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                        <button 
                                        className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay"
                                        onClick={()=>{allStatus(0)}}
                                        >
                                            Not Available
                                        </button>
                                    </div> </>)}
                                <img
                                    className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                                    alt=""
                                    src="./src/public/Line 402.png"
                                />
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                                <button
                                    className=" hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay cursor-pointer [border:none] py-2.5 px-[25px] bg-[transparent] self-stretch flex flex-row items-center justify-between"
                                    onClick={() => setPrice(!price)}

                                >
                                    <div className="relative w-10 h-6">
                                        <button className="  cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
                                            Price
                                        </button>
                                    </div>
                                    <img
                                        className="relative w-3 h-1.5 object-cover"
                                        alt=""
                                        src="./src/public/Vector (1).png"
                                    />
                                </button>
                                {price && (<> <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
                                        Hight Price
                                    </button>
                                </div>
                                    <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
                                            Low Price
                                        </button>
                                    </div> </>)}
                                <img
                                    className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                                    alt=""
                                    src="./src/public/Line 402.png"
                                />
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                                <button
                                    className=" hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay cursor-pointer [border:none] py-2.5 px-[25px] bg-[transparent] self-stretch flex flex-row items-center justify-between"
                                    onClick={() => setCollections(!collections)}
                                >
                                    <div className="relative w-[90px] h-6">
                                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
                                            Collections
                                        </button>
                                    </div>
                                    <img
                                        className="relative w-3 h-1.5 object-cover"
                                        alt=""
                                        src="./src/public/Vector (1).png"
                                    />
                                </button>

                                {collections && (<>  <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                    <button 
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay"
                                    onClick={()=>{allCollection("Summer")}}
                                    >
                                        Summer Collection
                                    </button>
                                </div>
                                    <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                        <button 
                                        className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay"
                                        onClick={()=>{allCollection("Winter")}}
                                        >
                                            Winter Collection
                                        </button>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                        <button 
                                        onClick={()=>{allCollection("Autumn")}}
                                        className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
                                            Autumn Collection
                                        </button>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                        <button 
                                        onClick={()=>{allCollection("Spring")}}
                                        className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
                                            Spring Collection
                                        </button>
                                    </div> </>)}
                                <img
                                    className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                                    alt=""
                                    src="./src/public/Line 402.png"
                                />
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                                <button className=" hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay cursor-pointer [border:none] py-2.5 px-[25px] bg-[transparent] self-stretch flex flex-row items-center justify-between"
                                    onClick={() => setCategories(!categories)}
                                >
                                    <div className="relative w-[89px] h-6">
                                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
                                            Categories
                                        </button>
                                    </div>
                                    <img
                                        className="relative w-3 h-1.5 object-cover"
                                        alt=""
                                        src="./src/public/Vector (1).png"
                                    />
                                </button>

                                {categories && (<>   <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                    <button 
                                    onClick={()=>{allCategory("Women")}}
                                    
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
                                        Women
                                    </button>
                                </div>
                                    <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                        <button 
                                        onClick={()=>{allCategory("Men")}}
                                        className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
                                            Men
                                        </button>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                        <button 
                                        onClick={()=>{allCategory("Kidss")}}
                                        className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block active:mix-blend-overlay">
                                            Kids
                                        </button>
                                    </div> </>)}

                                <img
                                    className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                                    alt=""
                                    src="./src/public/Line 402.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 h-full flex flex-col items-start justify-start gap-[24px] min-w-[350px] max-w-[960px] text-base text-gray-400">

                        <ButtonAddProduct fetch={fetch} data ={products} />
                        <Products data ={products} />


                    </div>
                </div>
            </div>




        </>



    )
}

export default AllProduct
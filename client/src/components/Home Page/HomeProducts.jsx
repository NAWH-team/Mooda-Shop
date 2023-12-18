import React , { useState ,useEffect } from "react";
// import { MyContext } from "../../myContext.jsx";
import dummyData from'../DummyDataProducts.json'
import ProductHome from "./HomeOneProd.jsx";

const HomeProducts  = () => {
    const [products, setProducts] = useState(dummyData)
    const fetch = async () => {
        
        try {
            var { data } = await axios.get(`http://localhost:8080/product/getAll/`);
            setProducts(data);
            console.log(data,"data fetch");
        } catch (err) {
        console.log(err,"err All Products");
         }
    };

    useEffect(() => {
        fetch()
    }, [])


  return (
    <div className="relative  w-full h-[2290px] flex flex-row items-start justify-between py-[87px] px-0 box-border text-left text-xl text-half-white font-poppins">
      <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[23px] lg:w-[1200px] lg:h-[300px] lg:items-center lg:justify-start lg:max-w-[1200px] md:items-center md:justify-start md:pl-2.5 md:pr-0 md:box-border sm:pl-[05px] sm:pr-[5px] sm:box-border">
        <div className="w-full flex flex-row flex-wrap items-start justify-center gap-[25px] min-w-[360px] max-w-[1226px] lg:items-start lg:justify-center lg:min-w-[360px] lg:max-w-[700px] md:max-w-[580px] sm:gap-[20px] sm:min-w-[380px] sm:max-w-[580px]">
          <div className="flex-1 shrink-0 flex flex-row flex-wrap items-start justify-center gap-[20px] min-w-[172px] max-w-[470px]">
            <button className="cursor-pointer [border:none] p-[5px] bg-[transparent] flex-1 rounded-3xs [background:linear-gradient(232.11deg,_#ff5b29,_rgba(255,_242,_245,_0.64)_13.54%,_rgba(255,_61,_0,_0.74)_41.15%,_rgba(144,_12,_63,_0.82)_74.48%,_#900c3f_98.96%)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] shrink-0 flex flex-row items-center justify-center box-border min-w-[172px] max-w-[230px] hover:bg-orangered-400 active:bg-firebrick-200">
              <div className="flex-1 relative text-xl font-medium font-poppins text-white text-center">
                All Collections
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[5px] px-1 bg-gray-700 flex-1 rounded-3xs shrink-0 flex flex-row items-center justify-center box-border min-w-[172px] max-w-[230px] hover:bg-gainsboro-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:bg-lightgray-200 active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              <div className="flex-1 relative text-xl font-medium font-poppins text-white text-center">
                Verified Brands
              </div>
            </button>
          </div>
          <div className="flex-1 shrink-0 flex flex-row flex-wrap items-start justify-center gap-[20px] min-w-[172px] max-w-[470px]">
            <button className="cursor-pointer [border:none] py-[5px] px-1 bg-gray-700 flex-1 rounded-3xs shrink-0 flex flex-row items-center justify-center box-border min-w-[172px] max-w-[230px] hover:bg-gainsboro-300 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:bg-lightgray-300">
              <div className="flex-1 relative text-xl font-medium font-poppins text-white text-center">
                Verified Artists
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[5px] px-1 bg-gray-700 flex-1 rounded-3xs shrink-0 flex flex-row items-center justify-center box-border min-w-[172px] max-w-[230px] hover:bg-gainsboro-300 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:bg-gainsboro-200">
              <div className="flex-1 relative text-xl font-medium font-poppins text-white text-center">
                New Drops
              </div>
            </button>
          </div>
          <button className="cursor-pointer [border:none] py-[5px] px-1 bg-gray-700 flex-1 rounded-3xs shrink-0 flex flex-row items-start justify-center box-border min-w-[172px] max-w-[230px] hover:bg-lightgray-400 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:bg-gainsboro-400 active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            <div className="flex-1 relative text-xl font-medium font-poppins text-white text-center">
              Live Shows
            </div>
          </button>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center gap-[30px]">
         
         
         
        
        {
                    products.map((product) => {
                        // console.log(product);
                        return <ProductHome key={product.id} product={product} />
                    })}


          
          
       
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;

import React, { useState } from "react";
import CartProduct from "./Cart Product";



const Products = ({ data }) => {

    return (
        <>
            <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-between text-mini-6 text-white gap-[40px]" >
                {
                    data.map((product) => {
                        // console.log(product);
                        return <CartProduct key={product.id} product={product} />
                    })}
            </div>



        </>
    )
}
export default Products
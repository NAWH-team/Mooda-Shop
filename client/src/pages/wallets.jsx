import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
// import UserContext from "../../context/UserContext";

const Mywallet =  ()=> {
        const {userId} = useParams()
        // const {currentUser}= useContext(UserContext)
     
const [products,setProducts]=useState([])
 console.log(products)

useEffect(()=>{
        axios.get(`http://localhost:8080/wallet/8`)
        .then((response)=>{setProducts(response.data)})
        .catch((error)=>{console.error(error)})
},[])





return (
        <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <>{products.map(product =>{
                        return (
                        <div className="border p-4 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
                                <img className="w-full h-48 object-cover mb-4 rounded-md" src={product.imageUrl}></img>
                                <h2 key={product.id}>{product.name}</h2>
                                </div>)
                })}
                </>
                </div>
                <button className="bg-red-800 text-white px-4 py-2 rounded-full" onClick={(e)=>{Navigate('/')}}>Checkout</button>

</div>              
  )

}



export default Mywallet



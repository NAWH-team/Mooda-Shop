import React, { useContext, useEffect, useState } from "react";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Mywallet = () => {
        const { userId } = useParams();

        const navigate = useNavigate();
        const [itms, setItems] = useState([]);
        const [updated, setUpdated] = useState(false);



        const Total = itms.reduce((total, item) => { return total + (item.price * item.intQty) }, 0)


        const decrQty = (id) => {
                axios.put(`http://localhost:8080/wallet/dec/1/${id}`)
                        .then((response) => {
                                setUpdated(!updated);
                                setItems(response.data.products || []);
                        })
                        .catch((error) => {
                                console.error(error);
                        });
        };


        const incrQty = (id) => {
                axios.put(`http://localhost:8080/wallet/inc/1/${id}`)
                        .then((response) => {
                                setUpdated(!updated);
                                setItems(response.data.products || []);
                        })
                        .catch((error) => {
                                console.error(error);
                        });
        };

        const updateQty = () => {
                axios.put(`http://localhost:8080/wallet/UpQnty/1/${id}`)
                        .then((response) => {
                                setUpdated(!updated);
                        })
                        .catch((error) => {
                                console.error(error);
                        });
        };




        const delItem = (id) => {
                axios.delete(`http://localhost:8080/wallet/1/${id}`)
                        .then((response) => {
                                setUpdated(!updated);
                                setItems(response.data.products || []);
                                initialQty(id)
                        })
                        .catch((error) => {
                                console.error(error);
                        });
        };


        const delAllItem = (id) => {
                axios.delete(`http://localhost:8080/wallet/1`)
                        .then((response) => {
                                setUpdated(!updated);
                                setItems(response.data.products || []);
                                updateQty(id)
                        })
                        .catch((error) => {
                                console.error(error);
                        });
        };

        const initialQty = (id) => {
                axios.put(`http://localhost:8080/wallet/upIntQty/1/${id}`)
                        .then((response) => {
                                setUpdated(!updated);
                                setItems(response.data.products || []);
                        })
                        .catch((error) => {
                                console.error(error);
                        });
        }

        useEffect(() => {
                axios.get(`http://localhost:8080/wallet/1`)
                        .then((response) => {
                                console.log(response.data.products);
                                setItems(response.data.products || []);
                        })
                        .catch((error) => {
                                console.error(error);
                        });
        }, [updated]);


        return (
                <div>

                        <div className="flex justify-end">
                                <button className="p-2 rounded-full duration-300 hover:bg-orange-700 ring-offset-2 focus:ring focus:ring-orange-500 border-slate-400" onClick={() => navigate('/')}>
                                        <span className="text-white text-xl">❌</span>
                                </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {/* {itms.length === 0 && <div>Loading</div>} */}
                                {itms ? (itms.map((product) => (
                                        <div key={product.id} className="border p-1 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105 my-20 " >
                                                <div className=" flex justify-end ">

                                                        <button className="p-2 rounded-lg duration-150 hover:bg-orange-700   ring-offset-2 focus:ring  border-slate-400 " onClick={() => delItem(product.id)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                                                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                                                </svg>
                                                        </button>
                                                </div>
                                                <img className="w-full h-48 object-cover mb-1 rounded-md" src={product.img} alt={`Product: ${product.name}`} />
                                                <div className="flex items-center justify-between font-titleFont">
                                                        <h2 className="text-lg text-primeColor font-bold" >
                                                                {product.name}
                                                        </h2>
                                                        <button className="text-[30px] text-gray-500" onClick={() => decrQty(product.id)}>
                                                                -
                                                        </button>
                                                        <p className="text-black-600 mx-2" >
                                                                {product.intQty}
                                                        </p>
                                                        <button className="text-[30px] text-gray-500" onClick={() => incrQty(product.id)}>
                                                                +
                                                        </button>
                                                        <h2 className="text-[#000000] text-primeColor ">
                                                                {product.price * product.intQty} $
                                                        </h2>
                                                </div>
                                        </div>
                                ))) : (<div> Loading</div>)}
                        </div>
                        <div>
                                <div className="flex justify-center items-center">
                                        <p className="text-3xl font-semibold text-emerald-900 dark:text-white">
                                                Total: {Total} $
                                        </p>
                                </div>

                                <div className="flex justify-center items-center">
                                        <button
                                                className="text-lg leading-none py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
                                                onClick={(e) => { delAllItem() }}
                                        >
                                                CHECKOUT
                                        </button>
                                </div>
                        </div>


                </div>
        );
};

export default Mywallet;

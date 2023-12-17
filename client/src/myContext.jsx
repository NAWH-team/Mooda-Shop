import { createContext, useEffect, useState } from "react";
import dummyData from'./components/DummyDataProducts.json'

export const MyContext = createContext();
 export const MyContextProvider = ({ children }) => {

  const [products,setProducts] = useState(dummyData)
  const [current, setCurrent] = useState(JSON.parse(window.localStorage.getItem("current"))||null);
  const [viewArtist, setViewArtist] = useState(JSON.parse(window.localStorage.getItem('view')));

  
  const login =async (input)=>{
    const res= await axios.post(`http://127.0.0.1:5000/api/${current.type}/signin`,input)
    setCurrent(res.data)
 }
 const logout=async(input)=>{
      await axios.post(`http://127.0.0.1:5000/api/${current.type}/logout`)
     setCurrent(null)
 }
 useEffect(()=>{
     localStorage.setItem(current,JSON.stringify(current))
 },[current])
  return (
    <MyContext.Provider value={{login,logout,current,viewArtist,setViewArtist , products,setProducts }}>

        {children}
    </MyContext.Provider>
  );
};


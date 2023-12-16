import { createContext, useEffect, useState } from "react";
import dummyData from'./components/DummyDataProducts.json'

export const MyContext = createContext();
 export const MyContextProvider = ({ children }) => {

  const [products,setProducts] = useState(dummyData)
  const [current, setCurrent] = useState(window.localStorage.getItem('User')||null);
  return (
    <MyContext.Provider value={{ current ,products,setProducts  }}>
        {children}
    </MyContext.Provider>
  );
};


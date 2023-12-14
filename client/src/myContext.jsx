import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();
 export const MyContextProvider = ({ children }) => {

  const [current, setCurrent] = useState(window.localStorage.getItem('User')||null);
  return (
    <MyContext.Provider value={{ current }}>
        {children}
    </MyContext.Provider>
  );
};


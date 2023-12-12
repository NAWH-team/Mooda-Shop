import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();
 export const MyContextProvider = ({ children }) => {
  const [current, setCurrent] = useState(null);
  return (
    <MyContext.Provider value={{ current }}>
        {children}
    </MyContext.Provider>
  );
};


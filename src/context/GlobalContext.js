import React, { useEffect, useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [valueData, setValueData] = useState(null);

  function handleClear() {
    setValueData(0);
  }
  console.log("Context>>>>", valueData);

  return (
    <GlobalContext.Provider value={{ valueData, setValueData, handleClear }}>
      {children}
    </GlobalContext.Provider>
  );
};

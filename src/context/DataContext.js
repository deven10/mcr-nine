import React, { createContext } from "react";
import { categories, videos } from "../data/Data";

export const ContextData = createContext();

export const DataContext = ({ children }) => {
  return (
    <ContextData.Provider value={{ categories, videos }}>
      {children}
    </ContextData.Provider>
  );
};

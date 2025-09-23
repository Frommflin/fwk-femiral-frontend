import React, { createContext, useContext } from "react";

const ConfigContext = createContext();
export const useConfig = () => useContext(ConfigContext);

const ConfigProvider = ({ children }) => {
  return <ConfigContext.Provider value={{}}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;

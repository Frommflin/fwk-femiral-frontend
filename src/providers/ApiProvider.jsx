import React, { createContext, useContext } from "react";

const ApiContext = createContext();
export const useApi = () => useContext(ApiContext);

const ApiProvider = ({ children }) => {
  return <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>;
};

export default ApiProvider;

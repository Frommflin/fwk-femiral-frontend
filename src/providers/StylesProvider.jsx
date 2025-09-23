import React, { createContext, useContext } from "react";

const StylesContext = createContext();
export const useStyles = () => useContext(StylesContext);

const StylesProvider = ({ children }) => {
  return <StylesContext.Provider value={{}}>{children}</StylesContext.Provider>;
};

export default StylesProvider;

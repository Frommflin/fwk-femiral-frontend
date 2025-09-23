import React, { createContext, useContext } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

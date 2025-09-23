import React from "react";
import ConfigProvider from "./ConfigProvider";
import AuthProvider from "./AuthProvider";
import ApiProvider from "./ApiProvider";

const AppProvider = ({ children }) => (
  <ConfigProvider>
    {/* Providers är utkommenterade för att applikationen ska funka
    tills dess att de är skapade och funkar */}
    {/* <AuthProvider> */}
    {/* <ApiProvider> */}
    {children}
    {/* </ApiProvider> */}
    {/* </AuthProvider> */}
  </ConfigProvider>
);

export default AppProvider;

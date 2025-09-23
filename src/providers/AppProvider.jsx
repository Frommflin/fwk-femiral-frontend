import React from "react";
import ConfigProvider from "./ConfigProvider";
import AuthProvider from "./AuthProvider";
import ApiProvider from "./ApiProvider";
import StylesProvider from "./StylesProvider";

const AppProvider = ({ children }) => (
  <ConfigProvider>
    <AuthProvider>
      <ApiProvider>
        <StylesProvider>{children}</StylesProvider>
      </ApiProvider>
    </AuthProvider>
  </ConfigProvider>
);

export default AppProvider;

import { Header } from "femiral-components-lib";
import React from "react";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  const pages = [
    { name: "Home", path: "" },
    { name: "Game", path: "play" },
    { name: "Register", path: "register" },
    { name: "Sign In", path: "signin" },
  ];
  return (
    <>
      <Header title="Fyra I Rad" navLinks={pages} />
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default Layout;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.page";
import Game from "../pages/Game/Game.page";
import Login from "../pages/Login/Login.page";
import Register from "../pages/Register/Register.page";
import Layout from "../templates/Layout.template";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/play"
        element={
          <Layout>
            <Game />
          </Layout>
        }
      />
      <Route
        path="/signin"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

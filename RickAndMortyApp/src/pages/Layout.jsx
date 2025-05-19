import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Layout;

import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import BackButton from "../components/backButton/BackButton";

function Layout() {
  return (
    <div className="layout">
      <BackButton />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

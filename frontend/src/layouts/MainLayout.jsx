import React from "react";
import { Outlet } from "react-router-dom";
//Layout components
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default MainLayout;

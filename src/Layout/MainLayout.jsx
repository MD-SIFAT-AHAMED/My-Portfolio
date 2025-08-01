import React from "react";
import Navbar from "../Component/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav className="max-w-screen-2xl w-11/12 mx-auto">
        <Navbar />
      </nav>
      <main className="max-w-screen-2xl w-11/12 mx-auto mt-40">
        <Outlet />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

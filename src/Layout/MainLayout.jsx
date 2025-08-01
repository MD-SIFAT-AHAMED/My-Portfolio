import React from "react";
import Navbar from "../Component/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav >
        <Navbar />
      </nav>
      <main className="max-w-screen-2xl w-11/12 mx-auto space-y-20">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

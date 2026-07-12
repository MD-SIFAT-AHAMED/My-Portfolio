import React from "react";
import { Outlet } from "react-router";

import Navbar from "../Component/Shared/Navbar/Navbar";
import Footer from "../Component/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-base-100/70 border-b border-white/5">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-base-300/40">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

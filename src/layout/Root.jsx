import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20 mb-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;

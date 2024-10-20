import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/o_nama" element={<About />} />
      <Route path="/usluge" element={<Services />} />
      <Route path="/proizvodi" element={<Products />} />
    </Routes>
  );
};

export default Routing;

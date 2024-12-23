import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o_nama" element={<About />} />
        <Route path="/usluge" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Layout>
  );
}

export default App;

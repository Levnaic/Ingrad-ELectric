import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Services from "./pages/Services/Services";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;

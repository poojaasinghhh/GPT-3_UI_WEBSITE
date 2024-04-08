import React from "react";
import Header from "./container/header/Header";
import WhatGPT from "./container/whatGpt/WhatGPT";
import Features from "./container/features/Features";
import Possibility from "./container/possibility/Possibility";
import Blog from "./container/blog/Blog";
import Footer from "./container/footer/Footer";
import CTA from "./components/cta/CTA";
import Navbar from "./components/navbar/Navbar";
import Brand from "./components/brand/Brand";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>{" "}
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Footer from "../../Containers/Footer/Footer";
import Header from "../../Containers/Header/Header";
import "./layout.css";

const LayoutWrapper = ({ children }) => (
  <div id="layout">
    <div className="img"><img src="paris.jpg" alt="Paris" /></div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default LayoutWrapper;

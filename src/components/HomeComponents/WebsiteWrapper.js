import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const WebsiteWrapper = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>

      {children}

      <Footer />
    </>
  );
};

export default WebsiteWrapper;

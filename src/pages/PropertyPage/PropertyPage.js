import React from "react";
import PropertyComponentLayout from "../../components/PropertyComponent/PropertyComponentLayout";
import Navbar from "../../components/HomeComponents/NavBar";
import WebsiteWrapper from "../../components/HomeComponents/WebsiteWrapper";

const PropertyPage = () => {
  return (
    <WebsiteWrapper>
      <PropertyComponentLayout />
    </WebsiteWrapper>
  );
};

export default PropertyPage;

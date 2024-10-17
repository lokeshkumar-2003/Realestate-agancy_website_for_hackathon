import React from "react";
import FirstSection from "../../components/HomeComponents/FirstSection";
import Navbar from "../../components/HomeComponents/NavBar";
import Testimonals_Mobile from "../../components/HomeComponents/Testimonals_Mobile";
import Testimonial from "../../components/HomeComponents/Testimonial";
import ListingSection from "../../components/HomeComponents/ListingSection";
import Footer from "../../components/HomeComponents/Footer";
import WebsiteWrapper from "../../components/HomeComponents/WebsiteWrapper";

const Home = () => {
  return (
    <>
      <WebsiteWrapper>
        <>
          <FirstSection />

          <ListingSection />

          <Testimonial />
          <Testimonals_Mobile />
        </>
      </WebsiteWrapper>
    </>
  );
};

export default Home;

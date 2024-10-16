import React from "react";
import FirstSection from "../../components/HomeComponents/FirstSection";
import Navbar from "../../components/HomeComponents/NavBar";
import Testimonals_Mobile from "../../components/HomeComponents/Testimonals_Mobile";
import Testimonial from "../../components/HomeComponents/Testimonial";
import ListingSection from "../../components/HomeComponents/ListingSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <FirstSection />

      <ListingSection />

      <Testimonial />
      <Testimonals_Mobile />
    </>
  );
};

export default Home;

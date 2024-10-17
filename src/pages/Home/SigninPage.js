import React from "react";
import SignInLayout from "../../components/Auth/SignInLayout";
import Navbar from "../../components/HomeComponents/NavBar";
import Footer from "../../components/HomeComponents/Footer";

const SigninPage = () => {
  return (
    <>
      <div className=" w-full h-screen flex flex-col ">
        <Navbar />
        <div className=" flex-1  w-full h-full   ">
          <SignInLayout />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SigninPage;

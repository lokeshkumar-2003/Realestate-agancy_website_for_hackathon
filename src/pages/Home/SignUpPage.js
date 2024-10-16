import React from "react";
import SignUpLayout from "../../components/Auth/SignUpLayout";
import Navbar from "../../components/HomeComponents/NavBar";

const SignUpPage = () => {
  return (
    <div className=" w-full h-[120vh] flex flex-col ">
      <Navbar />
      <div className=" flex-1  w-full h-full   ">
        <SignUpLayout />
      </div>
    </div>
  );
};

export default SignUpPage;

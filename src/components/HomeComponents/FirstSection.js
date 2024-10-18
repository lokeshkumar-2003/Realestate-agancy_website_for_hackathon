import React from "react";
import homebg from "../../Assets/home_bg.jpg";

const src = "";

const FirstSection = () => {
  return (
    <div className=" w-full h-[92vh]  relative">
      <img className=" w-full h-full object-cover" src={homebg} />

      <div className=" w-full flex flex-col items-center h-fit absolute top-[35%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <h1 className=" w-fit text-[white] md:text-[42px] text-[24px] font-poppins font-[600] text-center md:ps-8 md:pe-8 ps-4 pe-4">
          We Are{" "}
          <span className="text-[#F0EBE3]"> The Best Real estate Agency </span>{" "}
          In Coimbatore City
        </h1>

        <div className=" w-fit flex md:flex-row md:justify-center items-center flex-col gap-[1rem] mt-[2rem]">
          <button className=" w-[165px] h-[40px] rounded-[5px] bg-[#AB886D] text-[white] font-bold font-poppins text-[14px] hover:text-[16px] duration-300">
            VIEW PROPERTIES
          </button>
          <button className=" w-[190px] h-[40px] rounded-[5px] border-2  border-[#F3C623] text-[#F3C623] font-poppins font-bold text-[14px]  duration-300 hover:text-[16px]">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

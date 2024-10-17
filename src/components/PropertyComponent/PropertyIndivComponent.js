import React from "react";
import PropertyCard from "../../templates/PropertyCard";
import { GiHomeGarage, GiJerusalemCross } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { LuBedSingle } from "react-icons/lu";
import { FaBath } from "react-icons/fa6";

let otherproperty = [
  {
    id: "1",
    image: "https://via.placeholder.com/400", // Replace with your image URLs
    title: "Country Style House with beautiful garden and terrace",
    location: "Somewhere, USA",
    lotSize: 2561,
    beds: 9,
    baths: 2,
    garage: 1,
    price: 345000,
    type: "office",
  },
  {
    id: "2",
    image: "https://via.placeholder.com/400",
    title: "Modern Luxury House with Swimming Pool",
    location: "Another Place, USA",
    lotSize: 2800,
    beds: 4,
    baths: 3,
    garage: 2,
    price: 425000,
    type: "apartment",
  },
  {
    id: "3",
    image: "https://via.placeholder.com/400",
    title: "Cozy Suburban House with Big Garden",
    location: "A Different Location, USA",
    lotSize: 1800,
    beds: 3,
    baths: 2,
    garage: 2,
    price: 315000,
    type: "home",
  },
];

const PropertyIndivComponent = ({
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjclDv0e9IVQdcKL5CgI8DITEgglEavaKqww&s",
  title = "Wireless Bluetooth Headphones",
  id = "W12345",
  description = "These wireless Bluetooth headphones offer immersive sound quality with noise-cancellation technology. Designed for comfort and long listening sessions, they feature soft ear cups and a lightweight build. The headphones have a battery life of up to 30 hours on a single charge, making them perfect for travel or daily use. They also come with built-in controls for easy playback and a built-in microphone for hands-free calls.",
  comments = [
    "Excellent sound quality and very comfortable!",
    "The battery life is amazing. Worth the price.",
    "Great noise cancellation feature, but a bit bulky.",
  ],
}) => {
  let params = useParams();

  const content = {
    id: "1",
    image: "https://via.placeholder.com/400", // Replace with your image URLs
    title: "Country Style House with beautiful garden and terrace",
    location: "Somewhere, USA",
    lotSize: 2561,
    beds: 9,
    baths: 2,
    garage: 1,
    price: 345000,
    type: "office",
  };
  return (
    <>
      <div className=" w-full h-fit flex flex-row justify-center mt-[2rem] duration-100 ">
        {/* Main Box  */}
        <div className="w-[90vw]  min-h-[25vh] rounded-[10px] bg-gray-100 flex md:flex-row flex-col justify-between p-8">
          {/* Left Side Image Container */}
          <div className=" md:w-[40%] w-full h-full ">
            <img
              src={image}
              alt={title}
              className="w-full h-full rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Right Content  */}
          <div className=" md:w-[55%] w-full h-full md:mt-0 mt-[1rem]">
            <h1 className="text-[22px] font-poppins">{title}</h1>
            <p className="text-[12px] text-gray-600">ID: {id}</p>

            <p className=" w-full text-[12px] font-poppins mt-[1rem] ">
              {description}
            </p>

            {/* Square Feet */}
            <div className=" w-full text-[14px] p-2 font-poppins  bg-gray-200 rounded mt-[2rem] flex flex-row justify-between items-center gap-[0.25rem]">
              <p className=" flex flex-row gap-[0.5rem] items-center">
                <GiJerusalemCross /> 1200 Sq.ft.
              </p>
              <button className=" w-fit h-fit hover:scale-[1.2] duration-300">
                <ImLocation2 size={18} color={"#1932b4"} />
              </button>
            </div>

            <div className="mt-4 mb-2 flex flex-wrap justify-start gap-[4rem] items-center text-gray-700 ps-2">
              <div className="flex items-center space-x-1">
                <LuBedSingle />
                <span>{content?.beds} Beds</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaBath />
                <span>{content?.baths} Baths</span>
              </div>
              <div className="flex items-center space-x-1">
                <GiHomeGarage />
                <span>{content?.garage} Garage</span>
              </div>
            </div>

            <h3 className=" text-[22px] font-poppins font-semibold text-[#1932b4] mt-[1rem] flex flex-row items-center">
              ₹ 45,00,000
            </h3>

            <div className=" w-full flex flex-row gap-[1rem] mt-[1rem]">
              <button className=" w-[120px] h-[40px] rounded-[5px] bg-[#1932b4] text-[white] font-poppins text-[14px] hover:text-[16px] duration-300">
                ENQUIRY NOW
              </button>
              <button className=" w-[190px] h-[40px] rounded-[5px] border-2  border-[#1932b4] text-[#1932b4] font-poppins text-[14px] hover:bg-gray-200 duration-300 hover:text-[16px]">
                INTERESTED SO MARK IT
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit mb-[4rem] ">
        <h1 className="text-[28px] font-semibold p-8 md:ps-[3vw] ps-[8vw]">
          {"Other Properties"}
        </h1>

        <div className=" w-full h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center   gap-y-[2rem] ">
          {otherproperty?.map((property) => {
            return <PropertyCard content={property} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PropertyIndivComponent;

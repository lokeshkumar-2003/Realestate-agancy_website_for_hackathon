import React from "react";

import { TbRulerMeasure } from "react-icons/tb";
import { LuBedSingle } from "react-icons/lu";
import { FaBath } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";

const PropertyCard = ({ content = {} }) => {
  return (
    <div className=" xl:w-[400px] lg:w-[325px] md:w-[325px] w-[80vw] rounded overflow-hidden shadow-lg border border-gray-200 hover:scale-105 hover:shadow-2xl duration-300">
      <img
        className="w-full h-48 object-cover"
        src={content?.image}
        alt={content?.title}
      />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{content?.title}</h2>
        <p className="text-gray-600 text-sm flex items-center gap-[0.25rem]">
   
          <IoLocationSharp /> {content?.location}
        </p>
        <div className="mt-4 mb-2 flex flex-wrap justify-between items-center text-gray-700">
          <div className="flex items-center space-x-1">
            <TbRulerMeasure />
            <span>{content?.lotSize} sqft</span>
          </div>
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
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">₹{content?.price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

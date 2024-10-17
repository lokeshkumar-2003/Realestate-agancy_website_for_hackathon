import React from "react";
import PropertyCard from "../../templates/PropertyCard";
import { useNavigate } from "react-router-dom";
import routes from "../../Config/route";

let properties = [
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
  {
    id: "4",
    image: "https://via.placeholder.com/400",
    title: "Cozy Suburban House with Big Garden",
    location: "A Different Location, USA",
    lotSize: 1800,
    beds: 3,
    baths: 2,
    garage: 2,
    price: 315000,
    type: "land",
  },
  {
    id: "5",
    image: "https://via.placeholder.com/400",
    title: "Cozy Suburban House with Big Garden",
    location: "A Different Location, USA",
    lotSize: 1800,
    beds: 3,
    baths: 2,
    garage: 2,
    price: 315000,
    type: "land",
  },
  {
    id: "6",
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

const ListingSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-[12vw] hover:text-[13vw] duration-200 text-center font-black text-gray-500 uppercase tracking-[-0.05em] leading-[0.8] whitespace-nowrap scale-y-[1.2]  mt-[3rem]">
        PROPERTIES
      </h1>
      <div className=" w-full h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center   gap-y-[2rem] mt-[3rem] mb-[2rem] ">
        {properties?.map((property) => {
          return <PropertyCard content={property} />;
        })}
      </div>

      <div className="w-full h-fit flex flex-row justify-center mb-[5rem]">
        <button
          onClick={() => {
            navigate(routes?.properties);
          }}
          className=" w-fit text-[14px] font-poppins text-black hover:scale-110 hover:-translate-y-1 duration-300"
        >
          view more ...
        </button>
      </div>
    </>
  );
};

export default ListingSection;

import React from "react";
import PropertyCard from "../../templates/PropertyCard";

let properties = [
  {
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
  return (
    <div className=" w-full h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center   gap-y-[2rem] mt-[2rem] ">
      {properties?.map((property) => {
        return <PropertyCard content={property} />;
      })}
    </div>
  );
};

export default ListingSection;

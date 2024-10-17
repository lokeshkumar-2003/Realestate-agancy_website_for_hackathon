import React, { useState } from "react";
import PropertyCard from "../../templates/PropertyCard";

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

const PropertyComponentLayout = () => {
  const [location, setLocation] = useState("NewYork");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [priceRange, setPriceRange] = useState([20000, 200000]);
  const [bedRooms, setBedRooms] = useState(1);
  const [bathRooms, setBathRooms] = useState(1);

  const handleSearch = () => {
    // Logic to handle search
    console.log({
      location,
      propertyType,
      priceRange,
      bedRooms,
      bathRooms,
    });
  };

  return (
    <>
      <div className="flex flex-col items-center py-16 mt-[10vh] font-poppins">
        <h1 className="text-4xl font-bold text-gray-800">
          Find Your Best Property
        </h1>
        <p className="text-gray-500 mt-2">
          Esteem spirit temper too say adieus who direct esteem.
        </p>

        <div className="flex flex-wrap justify-center md:gap-[2rem] gap-[0.5rem] mt-10 space-x-4 ps-4 pe-4">
          {/* Location */}
          <div className="flex flex-col ">
            <label className="md:text-[14px] text-[12px] text-gray-600">
              Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border rounded-lg p-2 mt-1 w-32"
            >
              <option value="NewYork">New York</option>
              {/* Add more locations here */}
            </select>
          </div>

          {/* Property Type */}
          <div className="flex flex-col">
            <label className="md:text-[14px] text-[12px] text-gray-600">
              Property Type
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="border rounded-lg p-2 mt-1 w-32"
            >
              <option value="Apartment">Apartment</option>
              {/* Add more property types here */}
            </select>
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="md:text-[14px] text-[12px] text-gray-600">
              Price ($)
            </label>
            <div className="flex space-x-2 mt-1">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([+e.target.value, priceRange[1]])
                }
                className="border rounded-lg p-2 w-32"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], +e.target.value])
                }
                className="border rounded-lg p-2 w-32"
              />
            </div>
          </div>

          {/* Bedrooms */}
          <div className="flex flex-col">
            <label className="md:text-[14px] text-[12px] text-gray-600">
              Bed Room
            </label>
            <select
              value={bedRooms}
              onChange={(e) => setBedRooms(+e.target.value)}
              className="border rounded-lg p-2 mt-1 w-24"
            >
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              {/* Add more bedroom options here */}
            </select>
          </div>

          {/* Bathrooms */}
          <div className="flex flex-col">
            <label className="md:text-[14px] text-[12px] text-gray-600">
              Bath Room
            </label>
            <select
              value={bathRooms}
              onChange={(e) => setBathRooms(+e.target.value)}
              className="border rounded-lg p-2 mt-1 w-24"
            >
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              {/* Add more bathroom options here */}
            </select>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-orange-500 text-white rounded-lg px-6 py-2 mt-6 hover:bg-orange-600"
          >
            Search
          </button>
        </div>
      </div>

      <div className=" w-full h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center   gap-y-[2rem] mt-[3rem] mb-[5rem] ">
        {properties?.map((property) => {
          return <PropertyCard content={property} />;
        })}
      </div>
    </>
  );
};

export default PropertyComponentLayout;

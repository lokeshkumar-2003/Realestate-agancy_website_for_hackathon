import React, { useState } from "react";
import axios from "axios"; // Make sure Axios is installed
import PropertyCard from "../../templates/PropertyCard";

const PropertyComponentLayout = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState([20000, 200000]);
  const [bedRooms, setBedRooms] = useState(1);
  const [bathRooms, setBathRooms] = useState(1);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2012/api/property/filter",
        {
          location,
          propertyType,
          price: {
            min: priceRange[0],
            max: priceRange[1],
          },
          bedRooms,
          bathRooms,
        }
      );
      console.log(response.data.filteredProperties);
      setFilteredProperties(response.data.filteredProperties); // Assuming API returns the filtered properties
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
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
          <div className="flex flex-col">
            <label className="md:text-[14px] text-[12px] text-gray-600">
              Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border rounded-lg p-2 mt-1 w-32"
            >
              <option value="">Any</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
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
              <option value="">Any</option>
              <option value="apartment">Apartment</option>
              <option value="home">Home</option>
              <option value="land">Land</option>
              <option value="office">Office</option>
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
                type="text"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([+e.target.value, priceRange[1]])
                }
                className="border rounded-lg p-2 w-32"
              />
              <span className="text-gray-500">-</span>
              <input
                type="text"
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
              <option value={4}>04</option>
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
              <option value={4}>04</option>
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

      {/* Displaying the filtered properties */}
      <div className="w-full h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-y-[2rem] mt-[3rem] mb-[5rem]">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>No properties found</p>
        )}
      </div>
    </>
  );
};

export default PropertyComponentLayout;

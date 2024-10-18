import React, { useState } from "react";
import axios from "axios";
import PropertyCard from "../../templates/PropertyCard";

const PropertyComponentLayout = () => {
  const [location, setLocation] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2012/api/property/filter",
        {
          location,
        }
      );
      console.log(response.data.properties); // Log the correct property array
      // Set the properties from the API response
      setFilteredProperties(response.data.properties || []);
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
        {filteredProperties && filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <p>No properties found</p>
        )}
      </div>
    </>
  );
};

export default PropertyComponentLayout;

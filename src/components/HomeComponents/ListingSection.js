import React, { useEffect, useState } from "react";
import PropertyCard from "../../templates/PropertyCard";
import { useNavigate } from "react-router-dom";
import routes from "../../Config/route";
import axios from "axios";

const ListingSection = () => {
  const [resproperties, setResProperties] = useState([]);

  // Function to fetch properties from the API
  const ListingProperties = async () => {
    try {
      const response = await axios.get("http://localhost:2012/api/Properties");
      return response.data.properties; // Assuming the response has a "properties" field
    } catch (error) {
      console.error("Error fetching properties:", error);
      return [];
    }
  };

  // Fetch properties on component mount
  useEffect(() => {
    const fetchProperties = async () => {
      const fetchedProperties = await ListingProperties();
      setResProperties(fetchedProperties); // Set the fetched properties to state
    };
    fetchProperties();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-[12vw] hover:text-[13vw] duration-200 text-center font-black text-gray-500 uppercase tracking-[-0.05em] leading-[0.8] whitespace-nowrap scale-y-[1.2] mt-[3rem]">
        PROPERTIES
      </h1>

      <div className="w-full h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-y-[2rem] mt-[3rem] mb-[2rem]">
        {resproperties?.map((property) => (
          <PropertyCard
            key={property._id} // Use unique id for each property
            content={{
              id: property._id,
              image: property.images?.[0], // Assuming images array has URLs
              title: property.title,
              location: property.location?.locationName,
              lotSize: property.squareFootage,
              beds: property.features?.units, // Or any other feature you want to display
              baths: property.features?.elevators, // Replace as needed
              garage: property.features?.parkingSpots,
              price: property.price,
              type: property.type,
            }}
          />
        ))}
      </div>

      <div className="w-full h-fit flex flex-row justify-center mb-[5rem]">
        <button
          onClick={() => navigate(routes?.properties)}
          className="w-fit text-[14px] font-poppins text-black hover:scale-110 hover:-translate-y-1 duration-300"
        >
          view more ...
        </button>
      </div>
    </>
  );
};

export default ListingSection;

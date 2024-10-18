import React, { useEffect, useState } from "react";
import PropertyCard from "../../templates/PropertyCard";
import { GiHomeGarage, GiJerusalemCross } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { useParams } from "react-router-dom";
import { LuBedSingle } from "react-icons/lu";
import { FaBath } from "react-icons/fa6";
import axios from "axios";

const PropertyIndivComponent = () => {
  let params = useParams();
  const [property, setProperty] = useState(null);
  const [listProperties, setListProperties] = useState([]);

  // Fetch the individual property details
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2012/api/Property/${params.id}`
        );
        setProperty(response.data.property); // Assuming 'property' contains the data
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };
    fetchProperty();
  }, [params.id]);

  // Fetch the other properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2012/api/Properties`
        );
        // Set the first three properties
        setListProperties(response.data.properties.slice(0, 3));
      } catch (error) {
        console.error("Error fetching other properties:", error);
      }
    };
    fetchProperties();
  }, []);

  if (!property) return <div>Loading...</div>;

  const {
    images,
    title,
    description,
    price,
    location,
    squareFootage,
    features,
    amenities,
    type,
    status,
  } = property;

  return (
    <>
      <div className="w-full h-fit flex flex-row justify-center mt-[2rem] duration-100">
        {/* Main Box  */}
        <div className="w-[90vw] min-h-[25vh] rounded-[10px] bg-gray-100 flex md:flex-row flex-col justify-between p-8">
          {/* Left Side Image Container */}
          <div className="md:w-[40%] w-full h-full">
            <img
              src={images[0]} // Display the first image from the images array
              alt={title}
              className="w-full h-full rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Right Content  */}
          <div className="md:w-[55%] w-full h-full md:mt-0 mt-[1rem]">
            <h1 className="text-[22px] font-poppins">{title}</h1>
            <p className="text-[12px] text-gray-600">Type: {type}</p>
            <p className="text-[12px] text-gray-600">Status: {status}</p>
            <p className="w-full text-[12px] font-poppins mt-[1rem]">
              {description}
            </p>

            {/* Square Feet */}
            <div className="w-full text-[14px] p-2 font-poppins bg-gray-200 rounded mt-[2rem] flex flex-row justify-between items-center gap-[0.25rem]">
              <p className="flex flex-row gap-[0.5rem] items-center">
                <GiJerusalemCross /> {squareFootage} Sq.ft.
              </p>
              <button className="w-fit h-fit hover:scale-[1.2] duration-300">
                <ImLocation2 size={18} color={"#1932b4"} />
              </button>
            </div>

            <div className="mt-4 mb-2 flex flex-wrap justify-start gap-[4rem] items-center text-gray-700 ps-2">
              <div className="flex items-center space-x-1">
                <LuBedSingle />
                <span>
                  {Array.isArray(features) && features.includes("Beds")
                    ? "Available"
                    : "N/A"}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <FaBath />
                <span>
                  {Array.isArray(features) && features.includes("Baths")
                    ? "Available"
                    : "N/A"}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <GiHomeGarage />
                <span>
                  {Array.isArray(amenities) && amenities.includes("Parking")
                    ? "Garage"
                    : "N/A"}
                </span>
              </div>
            </div>

            <h3 className="text-[22px] font-poppins font-semibold text-[#1932b4] mt-[1rem] flex flex-row items-center">
              ₹ {price}
            </h3>

            <div className="w-full flex flex-row gap-[1rem] mt-[1rem]">
              <button className="w-[120px] h-[40px] rounded-[5px] bg-[#1932b4] text-white font-poppins text-[14px] hover:text-[16px] duration-300">
                ENQUIRY NOW
              </button>
              <button className="w-[190px] h-[40px] rounded-[5px] border-2 border-[#1932b4] text-[#1932b4] font-poppins text-[14px] hover:bg-gray-200 duration-300 hover:text-[16px]">
                INTERESTED SO MARK IT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Other Properties Section */}
      <div className="w-full h-fit mb-[4rem]">
        <h1 className="text-[28px] font-semibold p-8 md:ps-[3vw] ps-[8vw]">
          Other Properties
        </h1>

        <div className="w-full h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-y-[2rem]">
          {listProperties.map((property) => (
            <PropertyCard
              key={property._id} // Use unique id for each property
              content={{
                id: property._id,
                image: property.images?.[0], // Assuming images array has URLs
                title: property.title,
                location: property.location?.locationName,
                lotSize: property.squareFootage,
                beds: property.features?.units, // Replace as needed
                baths: property.features?.elevators, // Replace as needed
                garage: property.features?.parkingSpots,
                price: property.price,
                type: property.type,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertyIndivComponent;

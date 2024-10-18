import React, { useState } from "react";

const PropertySubmissionForm = () => {
  const [formData, setFormData] = useState({
    sellerId: "",
    title: "",
    description: "",
    price: "",
    locationName: "",
    locationAddress: "",
    coordinates: {
      latitude: "",
      longitude: "",
    },
    type: "",
    features: {
      units: "",
      elevators: "",
      parkingSpots: "",
    },
    squareFootage: "",
    yearBuild: "",
    amenities: [],
    images: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.sellerId) newErrors.sellerId = "Seller ID is required";
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.price) newErrors.price = "Price is required";
    if (!formData.locationName)
      newErrors.locationName = "Location Name is required";
    if (!formData.locationAddress)
      newErrors.locationAddress = "Location Address is required";
    if (!formData.coordinates.latitude || !formData.coordinates.longitude) {
      newErrors.coordinates = "Coordinates are required";
    }
    if (!formData.type) newErrors.type = "Type is required";
    if (!formData.squareFootage)
      newErrors.squareFootage = "Square Footage is required";
    if (!formData.yearBuild) newErrors.yearBuild = "Year Built is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      alert("Property submitted for approval!");
      setFormData({
        sellerId: "",
        title: "",
        description: "",
        price: "",
        locationName: "",
        locationAddress: "",
        coordinates: {
          latitude: "",
          longitude: "",
        },
        type: "",
        features: {
          units: "",
          elevators: "",
          parkingSpots: "",
        },
        squareFootage: "",
        yearBuild: "",
        amenities: [],
        images: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Post Your Property</h2>
      <form onSubmit={handleSubmit}>
        {/* Seller ID */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Seller ID
          </label>
          <input
            type="text"
            value={formData.sellerId}
            onChange={(e) =>
              setFormData({ ...formData, sellerId: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.sellerId ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Seller ID"
          />
          {errors.sellerId && (
            <p className="text-red-500 text-xs">{errors.sellerId}</p>
          )}
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Property Title"
          />
          {errors.title && (
            <p className="text-red-500 text-xs">{errors.title}</p>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.description ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Property Description"
          />
          {errors.description && (
            <p className="text-red-500 text-xs">{errors.description}</p>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price ($)
          </label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.price ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Price"
          />
          {errors.price && (
            <p className="text-red-500 text-xs">{errors.price}</p>
          )}
        </div>

        {/* Location Name and Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location Name
          </label>
          <input
            type="text"
            value={formData.locationName}
            onChange={(e) =>
              setFormData({ ...formData, locationName: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.locationName ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Location Name"
          />
          {errors.locationName && (
            <p className="text-red-500 text-xs">{errors.locationName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location Address
          </label>
          <input
            type="text"
            value={formData.locationAddress}
            onChange={(e) =>
              setFormData({ ...formData, locationAddress: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.locationAddress ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Location Address"
          />
          {errors.locationAddress && (
            <p className="text-red-500 text-xs">{errors.locationAddress}</p>
          )}
        </div>

        {/* Coordinates */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Coordinates
          </label>
          <div className="flex space-x-4">
            <input
              type="number"
              value={formData.coordinates.latitude}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  coordinates: {
                    ...formData.coordinates,
                    latitude: e.target.value,
                  },
                })
              }
              className={`mt-1 p-2 border ${
                errors.coordinates ? "border-red-500" : "border-gray-300"
              } rounded-md w-full`}
              placeholder="Latitude"
            />
            <input
              type="number"
              value={formData.coordinates.longitude}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  coordinates: {
                    ...formData.coordinates,
                    longitude: e.target.value,
                  },
                })
              }
              className={`mt-1 p-2 border ${
                errors.coordinates ? "border-red-500" : "border-gray-300"
              } rounded-md w-full`}
              placeholder="Longitude"
            />
          </div>
          {errors.coordinates && (
            <p className="text-red-500 text-xs">{errors.coordinates}</p>
          )}
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <input
            type="text"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className={`mt-1 p-2 border ${
              errors.type ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Property Type (e.g., Apartment, Complex)"
          />
          {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
        </div>

        {/* Features (Units, Elevators, Parking Spots) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Features
          </label>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="number"
              value={formData.features.units}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: { ...formData.features, units: e.target.value },
                })
              }
              className={`mt-1 p-2 border ${
                errors.units ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="Units"
            />
            <input
              type="number"
              value={formData.features.elevators}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: { ...formData.features, elevators: e.target.value },
                })
              }
              className={`mt-1 p-2 border ${
                errors.elevators ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="Elevators"
            />
            <input
              type="number"
              value={formData.features.parkingSpots}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    parkingSpots: e.target.value,
                  },
                })
              }
              className={`mt-1 p-2 border ${
                errors.parkingSpots ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="Parking Spots"
            />
          </div>
        </div>

        {/* Square Footage */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Square Footage
          </label>
          <input
            type="number"
            value={formData.squareFootage}
            onChange={(e) =>
              setFormData({ ...formData, squareFootage: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.squareFootage ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Square Footage"
          />
          {errors.squareFootage && (
            <p className="text-red-500 text-xs">{errors.squareFootage}</p>
          )}
        </div>

        {/* Year Built */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Year Built
          </label>
          <input
            type="number"
            value={formData.yearBuild}
            onChange={(e) =>
              setFormData({ ...formData, yearBuild: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.yearBuild ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Year Built"
          />
          {errors.yearBuild && (
            <p className="text-red-500 text-xs">{errors.yearBuild}</p>
          )}
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Amenities
          </label>
          <input
            type="text"
            value={formData.amenities.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                amenities: e.target.value.split(",").map((a) => a.trim()),
              })
            }
            className={`mt-1 p-2 border ${
              errors.amenities ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Amenities (comma-separated)"
          />
          {errors.amenities && (
            <p className="text-red-500 text-xs">{errors.amenities}</p>
          )}
        </div>

        {/* Images */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Images (URL)
          </label>
          <input
            type="text"
            value={formData.images}
            onChange={(e) =>
              setFormData({ ...formData, images: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.images ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Image URLs (comma-separated)"
          />
          {errors.images && (
            <p className="text-red-500 text-xs">{errors.images}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertySubmissionForm;

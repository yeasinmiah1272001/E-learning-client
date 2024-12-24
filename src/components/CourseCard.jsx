import React from "react";

const CourseCard = ({ item }) => {
  return (
    <div className="group relative border border-gray-300 shadow-lg overflow-hidden bg-white rounded-lg transition-transform transform hover:shadow-2xl">
      {/* Image */}
      <div className="relative w-full h-64">
        <img
          className="h-full w-full object-cover transition-transform duration-300"
          src={item.image}
          alt={item.title}
        />
      </div>

      {/* Title */}
      <h1 className="p-4 text-lg font-semibold text-gray-800 truncate">
        {item.title}
      </h1>

      {/* Card Content (Visible on Hover) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-white flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h1>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        <span className="text-xl font-semibold text-green-600 mb-1">
          ${item.price}
        </span>
        <span className="text-gray-500 mb-4">Duration: {item.duration}</span>
        <button className="bg-green-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-600 transition duration-300">
          Course Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;

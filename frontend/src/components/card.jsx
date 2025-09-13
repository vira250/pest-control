import React from "react";

const PestControlCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <img
        src="/src/assets/service1.png" // replace with your image path
        alt="Cockroach Pest Control"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          Cockroach Pest Control
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          Shree Pest Control Cockroaches Gel Services Provides Total And Effective Control Of Cockroaches And Other Common Household Pests. This Service The Highly Protects And Ingredients Is Applied At All Cockroach Hideouts. This Results In Control Of Cockroaches & Other Pests & Gives Sustained Relief.
        </p>

        {/* Price */}
        <p className="text-gray-800 font-semibold mb-4">
          Price : 1,499
        </p>

        {/* Button */}
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default PestControlCard;

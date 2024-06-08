import React from "react";

const BuddyCard = ({ buddy }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg mb-8 md:mb-12 lg:mb-14 xl:mb-16 h-auto  md:h-96  overflow-hidden  my-8 w-full">
      <div className="relative">
        <img
          src={buddy.image}
          alt={buddy.name}
          className="w-full h-48 md:h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
          {buddy.name}
        </h3>
        <p className="text-gray-600">{buddy.role}</p>
        <p className="text-gray-600">{buddy.company}</p>
        <p className="text-gray-600">{buddy.institute}</p>
        <div className="mt-2 flex flex-wrap">
          {buddy.skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-gray-800 text-xs md:text-sm px-2 py-1 rounded-full mr-1 mb-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuddyCard;

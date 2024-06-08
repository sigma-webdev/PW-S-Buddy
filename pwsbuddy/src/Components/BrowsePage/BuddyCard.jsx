import React from 'react';

const BuddyCard = ({ buddy }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg mb-20 h-96 overflow-hidden">
        <div className="relative">
          <img
            src={buddy.image}
            alt={buddy.name}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{buddy.name}</h3>
          <p className="text-gray-600">{buddy.role}</p>
          <p className="text-gray-600">{buddy.company}</p>
          <p className="text-gray-600">{buddy.institute}</p>
          <div className="mt-2">
            {buddy.skills.map((skill, index) => (
              <span key={index} className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-1">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default BuddyCard;
  
import React from 'react';

function Cards({ name, position, company, testimonial, image }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
        <img
          src={image}
          alt={name}
          className="h-40 w-40 rounded-full mb-4 border-4 border-blue-500"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-lg text-gray-600 mb-2">{position} at {company}</p>
        <p className="text-base text-gray-700 text-center">{testimonial}</p>
      </div>
      
    )
}
export default Cards;
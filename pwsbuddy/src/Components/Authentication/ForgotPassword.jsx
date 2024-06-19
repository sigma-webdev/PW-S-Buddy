import React, { useState } from 'react';
import img from '../../assest/bgimg.png';
import logo from "../../assest/pwbuddy.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-14 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md w-full max-w-4xl overflow-hidden">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img src={img} alt="Welcome" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <img src={logo} alt="Logo" className="h-10 mb-8 mx-auto lg:mx-0" />
          <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">Forgot Password</h2>
          <p className="mb-6 text-center lg:text-left">Please enter your registered email address</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-white text-blue-500 px-4 py-2 rounded-md border border-blue-600 ml-4 lg:ml-20 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

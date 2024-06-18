import React, { useState } from 'react';
import img from '../../assest/bgimg.png'
import logo from "../../assest/pwbuddy.png";
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100 mt-14  ">
    <div className="flex bg-white  rounded-lg shadow-md w-full max-w-4xl ">
      <div className="w-1/2 flex items-center justify-center">
        <img
          src={img}
          alt="Welcome"
          className="rounded"
        />
      </div>
      <div className="w-1/2 p-8">
      <img src={logo} alt="Logo" className="h-10  mb-8" />
        <h2 className="text-2xl font-semibold mb-6 text-center">Forgot Password</h2>
        <p className="mb-6 text-center">Please enter your registered email address</p>
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
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-white text-blue-500 px-4 py-2 rounded-md border border-blue-600 ml-20 focus:outline-none focus:ring focus:ring-blue-200"
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


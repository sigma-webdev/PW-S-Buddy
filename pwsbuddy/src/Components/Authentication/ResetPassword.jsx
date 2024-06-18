import React, { useState } from 'react';
import img2 from '../../assest/bg1.png'
import logo from "../../assest/pwbuddy.png";
const ResetPassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  const handleCancel = () => {

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-14">
      <div className="flex bg-white  rounded shadow-md w-full max-w-4xl">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={img2 }
            alt="Welcome"
            className="rounded"
          />
        </div>
        <div className="w-1/2 p-8">
        <img src={logo} alt="Logo" className="h-10  mb-8" />
          <h2 className="text-2xl font-semibold mb-6 text-center">Reset Password</h2>
          <p className="mb-6 text-center">Enter your email to reset your password</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm New Password</label>
              <input
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="flex justify-center ">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-white text-blue-500 border border-blue-500 px-4 py-2 ml-20 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
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

export default ResetPassword;

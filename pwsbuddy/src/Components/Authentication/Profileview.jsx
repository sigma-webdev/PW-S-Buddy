import React from 'react';
import img from '../../assest/bgimg.png';
import { Link } from 'react-router-dom';

const ProfileView = () => {
  return (
    <div className="bg-gray-100 py-40">
    <div className="max-w-3xl mx-auto my-8 sm:my-16 lg:my-32 bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
        <h2 className="text-3xl font-bold text-white text-center lg:text-left">Profile</h2>
      </div>
      <div className="flex flex-col lg:flex-row p-6 lg:p-10">
        <div className="flex-grow  lg:mr-8">
          <img src={img} alt="Profile" className="w-52 h-52 rounded-full border-4 border-white shadow-lg" />
        </div>
        <div className="flex-grow">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold">Name</label>
            <p className="px-4 py-3 mt-2 bg-gray-100 rounded-lg text-lg">John Doe</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold">Email</label>
            <p className="px-4 py-3 mt-2 bg-gray-100 rounded-lg text-lg">john.doe@example.com</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold">Phone</label>
            <p className="px-4 py-3 mt-2 bg-gray-100 rounded-lg text-lg">123-456-7890</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-4">
            <Link to='/profileupdate'>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200">
                Edit Profile
              </button>
            </Link>
            <Link to='/changepassword'>
              <button className="bg-white text-blue-600 border border-blue-600  font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200">
                Change Password
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div></div>
  );
}

export default ProfileView;

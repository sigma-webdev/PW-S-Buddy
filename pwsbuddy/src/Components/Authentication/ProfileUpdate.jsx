import React from "react";

const ProfileUpdate = () => {
  return (
    <div className="max-w-md mx-auto my-8 sm:my-16 lg:my-32 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
        Update Profile
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Phone"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Profile Picture</label>
          <input type="file" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-end space-y-2 lg:space-y-0 lg:space-x-2">
          <button
            type="button"
            className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg mb-2 lg:mb-0"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate;

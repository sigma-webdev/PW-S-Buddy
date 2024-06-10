import React, { useState } from "react";
import logo from "../../assest/pwbuddy.png";

const SignIn = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-14">
      <img src={logo} alt="Logo" className="h-20 mt-12 mb-8" />
      <h1 className="text-center text-xl text-black">
        Sign in to your account
      </h1>
      <p className="mt-2 mb-8 text-center text-md text-gray-600">
        Don't have an account?{" "}
        <a
          href="/signup"
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Sign Up Now
        </a>
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-8">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "student"
                ? "border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("student")}
          >
            Student
          </button>
          <button
            className={`px-4 py-2 font-semibold ml-4 ${
              activeTab === "mentor"
                ? "border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("mentor")}
          >
            Mentor
          </button>
        </div>

        {activeTab === "student" ? (
          <form className="space-y-6">
            <div>
              <label
                htmlFor="student-email"
                className="block text-sm font-medium text-gray-700"
              >
                Student Email address
              </label>
              <input
                type="email"
                id="student-email"
                name="student-email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="student-password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="student-password"
                  name="student-password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                  onClick={toggleShowPassword}
                >
                   {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-6">
            <div>
              <label
                htmlFor="mentor-email"
                className="block text-sm font-medium text-gray-700"
              >
                Mentor Email address
              </label>
              <input
                type="email"
                id="mentor-email"
                name="mentor-email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="mentor-password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id="mentor-password"
          name="mentor-password"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
          onClick={toggleShowPassword}
        >
         {showPassword ? "Hide" : "Show"}
               
        </button>
      </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
        )}
      </div>

      <p className="max-w-xl text-center text-gray-500 mb-20">
        By continuing, you agree to PwBuddy's emails with updates. Terms of
        Service and Privacy Policy , and to receive periodic emails with
        updates.
      </p>

      <hr className="divider" />
    </div>
  );
};

export default SignIn;

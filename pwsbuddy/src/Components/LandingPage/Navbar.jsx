import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assest/pwbuddy.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white p-4 shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="h-14 w-32 ml-10 md:ml-20 lg:ml-40"
              />
            </a>
          </div>
          <div className="hidden md:flex md:mr-20 lg:mr-40 space-x-4">
            <a
              href="/signin"
              className="text-gray-800 px-4 py-2 hover:bg-gray-200 hover:rounded-full"
            >
              Sign In
            </a>
            <a
              href="/browse"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500"
            >
              Browse Your Buddies
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <a
              href="/signup"
              className="block text-gray-800 px-4 py-2 hover:bg-gray-200"
            >
              Sign In
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;

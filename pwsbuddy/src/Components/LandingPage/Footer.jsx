import React from "react";
import logo from "../../assest/pwbuddy.png";


const Footer = () => {
  return (
    <footer className="footer bg-gray-50 text-gray-700 py-6">
      <div className="flex p-20 ">
      
          <div className="space-y-10 flex flex-col  justify-start">
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="h-14 w-32 ml-10 md:ml-20 lg:ml-40"
              />
            </a>
            <p>Personalized Mentorship Every Step of the Way!</p>
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a className="text-[#0a0a0a] hover:text-[#51505077]">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-[#0f0f0f] hover:text-[#49494977]">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-[#0b0b0b] hover:text-[#30303077]">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-[#212121] hover:text-[#49494877]">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            
            </span>
          
        </div>

        <div className="max-w-6xl mx-auto px-4 flex justify-end">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Platform</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-blue-100">
                    Browse Buddies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-100">
                    Become a Buddy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-100">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Solutions</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-blue-100">
                    OSCode
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-100">
                    pwBuddy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-blue-100">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-100">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-100">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-blue-100">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-100">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 OSCode LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;

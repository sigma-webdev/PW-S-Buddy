import React from "react";
import logo from "../../assest/pwbuddy.png";
import svg1 from "../../assest/svgexport-13.svg"
import svg2 from "../../assest/svgexport-14.svg"
import svg3 from "../../assest/svgexport-15.svg"
import svg4 from "../../assest/svgexport-16.svg"
import svg5 from "../../assest/svgexport-17.svg"
const Footer = () => {
  return (

    
    <footer className="footer bg-gray-50 text-gray-700 p-12 ">
      <div className="container  py-10 mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-8 lg:mb-0 space-y-6 ">
            <a href="/">
              <img src={logo} alt="Logo" className="h-14 w-32" />
            </a>
            <p className="mt-2">
              Personalized Mentorship Every Step of the Way!
            </p>
            <div className="mt-2 flex space-x-10 px-6">
              <a href="/">
              <img src={svg1} alt="svg media"  />
            </a>
            <a href="/">
              <img src={svg2} alt="svg media"  />
            </a>
            <a href="/">
              <img src={svg3} alt="svg media"  />
            </a>
 <a href="/">
              <img src={svg4} alt="svg media"  />
            </a>
            <a href="/">
              <img src={svg5} alt="svg media"  />
            </a>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
            <div>
              <h3 className="text-lg font-semibold mb-2">Platform</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="/" className="hover:text-blue-100">
                    Browse Buddies
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-blue-100">
                    Become a Buddy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-blue-100">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Solutions</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="/" className="hover:text-blue-100">
                    OSCode
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-blue-100">
                    pwBuddy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="/" className="hover:text-blue-100">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-blue-100">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-blue-100">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="/" className="hover:text-blue-100">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-blue-100">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider my-8 " />

      <div className="max-w-7xl mx-auto">
        <p className="text-center">
          &copy; 2024 PwBuddy LLP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

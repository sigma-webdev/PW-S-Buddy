import React, { useState } from "react";
import careerImage1 from "../assest/meet.gif";
import careerImage2 from "../assest/img.jpg";
import careerImage4 from "../assest/js.jpg";
import careerImage3 from "../assest/images (1).jpg";
import amazonLogo from "../assest/Flipkart-Logo.png";
import flipkartLogo from "../assest/Microsoft-Logo1.jpg";
import oracleLogo from "../assest/Oracle-Logo-1995-Present.png";
import linkedinLogo from "../assest/th (1).jpg";
import GoogleLogo from "../assest/th.jpg";
import microsoftLogo from "../assest/th (2).jpg";
import backgroundImage from "../assest/bg.jpg";
import mentorImage from "../assest/feature-2-1.svg";
import profilePhoto from "../assest/image.png";

function Herosection() {
  const companies = [
    { logo: amazonLogo },
    { logo: flipkartLogo },
    { logo: oracleLogo },
    { logo: linkedinLogo },
    { logo: GoogleLogo },
    { logo: microsoftLogo },
  ];
  const [activeTab, setActiveTab] = useState("tab1");

  const renderImage = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <img
            src={careerImage1}
            alt="Mock Interview"
            className="w-full  max-w-md md:max-w-lg rounded-lg"
          />
        );
      case "tab2":
        return (
          <img
            src={careerImage2}
            alt="Resume Review"
            className="w-full max-w-md md:max-w-lg rounded-lg"
          />
        );
      case "tab3":
        return (
          <img
            src={careerImage3}
            alt="Career Guidance"
            className="w-full max-w-md md:max-w-lg rounded-lg"
          />
        );
      case "tab4":
        return (
          <img
            src={careerImage4}
            alt="Placement Preparation"
            className="w-full max-w-md md:max-w-lg rounded-lg"
          />
        );
      default:
        return null;
    }
  };

  const renderDescription = (tab, title, description) => (
    <li className="mb-4">
    <button
      className={`text-left text-white p-4 rounded-md transition-opacity duration-300 ${
        activeTab === tab ? "bg-blue-500 " : "bg-transparent opacity-75"
      }`}
      onClick={() => setActiveTab(tab)}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className={`mt-2 ${activeTab === tab ? "text-md" : "text-base"}`}>{description}</p>
    </button>
  </li>
  );
  return (
    <>
      {/* 1st  */}
      <div
        className="flex flex-col items-center justify-center min-h-screen p-6 pt-28 md:pt-36 "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-center max-w-5xl  bg-opacity-80 rounded-lg p-6 md:p-10">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 md:mb-6">
            Personalized{" "}
            <span className="text-5xl md:text-7xl font-bold text-blue-600">
              Mentorship
            </span>{" "}
            Every Step of the Way!
          </h1>
          <p className="text-base md:text-lg mb-4 md:mb-6 mt-4">
            Connect with experienced buddies for guidance and mock interviews,
            empowering you to excel in your academic and professional endeavors.
          </p>
          <a
            href="/browse"
            className="bg-black text-white px-4 py-2 mt-6 rounded-full hover:bg-blue-500 inline-block mb-6 md:mb-8"
          >
            Browse all buddies
          </a>
        </div>
        <div className="text-center max-w-4xl bg-opacity-80 rounded-lg p-6 md:p-10 mt-6 md:mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Our Mentors come from
          </h2>
          <ul className="flex flex-wrap justify-center">
            {companies.map((company, index) => (
              <li key={index} className="m-2">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-24 w-28"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* 2nd one side img and other side text*/}
      <div className="flex flex-col p-6 md:p-12 lg:p-24 bg-blue-600 min-h-screen">
        <div className="flex flex-col md:flex-row max-w-8xl bg-blue-500 p-6 md:p-10 rounded-lg shadow-lg">
          <div className="flex-1 flex justify-center mb-6 md:mb-0">
            <img
              src={mentorImage}
              alt="Mentor"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left p-6 md:p-10 rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your buddy at your fingertips.
            </h1>
            <p className="text-base md:text-lg mb-6 text-white">
              Discover and schedule sessions with experienced mentors for
              personalized guidance and mock interviews.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-5 p-4">
              <ul className="text-base md:text-lg space-y-2 mb-6 text-white">
                <li>✅ 1-on-1 calls</li>
                <li>✅ Schedule effortlessly</li>
                <li>✅ Hundreds of buddies available</li>
              </ul>
              <ul className="text-base md:text-lg space-y-2 mb-6 text-white">
                <li>✅ Connect with your alumni</li>
                <li>✅ Get personalized guidance</li>
                <li>✅ High satisfaction rate</li>
              </ul>
            </div>
            <a
              href="/find-buddy"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-black hover:text-white"
            >
              Find your buddy
            </a>
          </div>
        </div>
      </div>
      {/* 3rd card */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-md mx-auto">
          <div className="text-center mb-4">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-lg text-gray-800 font-bold mb-4">
              “Having access to the knowledge and experience of buddies on
              urBuddy was an opportunity I couldn't miss. Thanks to my buddy, I
              managed to reach my goal of joining Cimpress.”
            </p>
            <p className="font-bold text-gray-900">Satya Narayana Nadella</p>
            <p className="text-sm text-gray-600">CIO @Microsoft</p>{" "}
            <p>🌟🌟🌟🌟🌟</p>
          </div>
        </div>
      </div>
      {/* 4rth one side text another side img */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-blue-600">
        {" "}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4  mt-14">
          Empower your career with Expert Guidance.
        </h1>
        <p className="text-lg md:text-xl text-white mb-4">
          Connect with experienced professionals for tailored advice, interview
          practice, and career insights.
        </p>
        <div className="flex flex-col md:flex-row items-center rounded-lg p-6 md:p-10 max-w-6xl mx-auto">
          <div className="flex-1 text-center md:text-left  ">
            <ul className="text-lg md:text-xl space-y-4  ">
              {renderDescription(
                "tab1",
                "Mock Interview",
                "Hone your skills with personalized mock interviews led by experienced professionals for confidence and success."
              )}
              {renderDescription(
                "tab2",
                "Resume Review",
                "Get expert feedback and guidance on crafting a standout resume to land your dream job."
              )}
              {renderDescription(
                "tab3",
                "Career Guidance",
                "Navigate your career path with personalized advice and insights from seasoned professionals."
              )}
              {renderDescription(
                "tab4",
                "Placement Preparation",
                "Prepare for job placements with tailored guidance and support from industry experts for a competitive edge."
              )}
            </ul>
          </div>
          <div className="flex-1 flex justify-center">{renderImage()}</div>
        </div>
      </div>
    </>
  );
}

export default Herosection;

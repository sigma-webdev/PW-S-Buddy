import React from "react";
import amazonLogo from "../assest/Flipkart-Logo.png";
import flipkartLogo from "../assest/Microsoft-Logo1.jpg";
import oracleLogo from "../assest/Oracle-Logo-1995-Present.png";
import linkedinLogo from "../assest/th (1).jpg";
import GoogleLogo from "../assest/th.jpg";
import microsoftLogo from "../assest/th (2).jpg";
import backgroundImage from "../assest/bg.jpg";
import mentorImage from "../assest/feature-2-1.svg";
import profilePhoto from "../assest/image.png";
// import careerImage from "../assest/Meet-your-mentor_Blog-cover-image-1.gif";

function Herosection() {
  const companies = [
    { logo: amazonLogo },
    { logo: flipkartLogo },
    { logo: oracleLogo },
    { logo: linkedinLogo },
    { logo: GoogleLogo },
    { logo: microsoftLogo },
  ];

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
      {/* <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-6xl mx-auto">
        <div className="flex-1 text-center md:text-left p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Empower your career with Expert Guidance.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Connect with experienced professionals for tailored advice, interview practice, and career insights.
          </p>
          <ul className="text-lg md:text-xl space-y-4">
            <li className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Mock Interview</h2>
              <p>Hone your skills with personalized mock interviews led by experienced professionals for confidence and success.</p>
            </li>
            <li className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Resume Review</h2>
              <p>Get expert feedback and guidance on crafting a standout resume to land your dream job.</p>
            </li>
            <li className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Career Guidance</h2>
              <p>Navigate your career path with personalized advice and insights from seasoned professionals.</p>
            </li>
            <li className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Placement Preparation</h2>
              <p>Prepare for job placements with tailored guidance and support from industry experts for a competitive edge.</p>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={careerImage}
            alt="Career Guidance"
            className="w-full max-w-md md:max-w-lg rounded-lg"
          />
        </div>
      </div>
    </div> */}
    </>
  );
}

export default Herosection;

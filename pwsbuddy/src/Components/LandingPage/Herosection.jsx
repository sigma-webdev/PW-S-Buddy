import React, { useState } from "react";
import careerImage1 from "../../assest/meet.gif";
import careerImage2 from "../../assest/img.jpg";
import careerImage4 from "../../assest/js.jpg";
import careerImage3 from "../../assest/images (1).jpg";
import amazonLogo from "../../assest/Flipkart-Logo.png";
import flipkartLogo from "../../assest/Microsoft-Logo1.jpg";
import oracleLogo from "../../assest/Oracle-Logo-1995-Present.png";
import linkedinLogo from "../../assest/th (1).jpg";
import GoogleLogo from "../../assest/th.jpg";
import microsoftLogo from "../../assest/th (2).jpg";
import backgroundImage from "../../assest/bg.jpg";
import mentorImage from "../../assest/feature-2-1.svg";
import profilePhoto from "../../assest/image.png";
import Cards from "./Cards";

function Herosection() {
  // 1st
  const companies = [
    { logo: amazonLogo },
    { logo: flipkartLogo },
    { logo: oracleLogo },
    { logo: linkedinLogo },
    { logo: GoogleLogo },
    { logo: microsoftLogo },
  ];

  // 4th
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
        <p className={`mt-2 ${activeTab === tab ? "text-md" : "text-base"}`}>
          {description}
        </p>
      </button>
    </li>
  );
  // 5th cards data
  const buddies = [
    {
      name: "Abhay Singh",
      title: "SDE @Juspay",
      university: "Lovely Professional University",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Deepak Singh",
      title: "SDE @Flipkart",
      university: "Banasthali Vidyapith",
      image:
        "https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    },
    {
      name: "V U Bushra",
      title: "SSE @Birlasoft",
      university: "Bangalore Institute of Technology",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Subhash Purohit",
      title: "Head of Product @Cosmocloud",
      university: "University of ABC",
      image:
        "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const mycards = [
    {
      name: "Shashank Singh",
      position: "SWE Intern",
      company: "@Cimpress",
      testimonial:
        "Using PWBuddy, I landed my dream internship after receiving invaluable advice and mock interviews. Thank you for the career boost!",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    },
    {
      name: "Abhishek Kumar",
      position: "SDE",
      company: "@Telstra",
      testimonial:
        "I was nervous about my upcoming interview at college, but PWBuddy provided instant access to mock interviews, boosting my confidence significantly.",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    },
    {
      name: "Diwakar Kumar",
      position: "SDE",
      company: "@Syncron",
      testimonial:
        "As a recent graduate, I needed guidance navigating the job market. PWBuddy matched me with a mentor who provided invaluable insights.",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    },
    {
      name: "Deepak Singh",
      position: "SDE",
      company: "@Flipkart",
      testimonial:
        "As a mentor on PWBuddy, I'm impressed by the platform's impact on fostering meaningful mentorship relationships.",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    },
    {
      name: "Harsh",
      position: "SDE Intern",
      company: "@Amazon",
      testimonial:
        "The convenience of scheduling sessions with professionals on PWBuddy makes it a must-have resource for any college student.",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    },
    {
      name: "Harsh Kumar",
      position: "SDE",
      company: "@Boeing",
      testimonial:
        "Thanks to PWBuddy, I gained practical insights and advice that propelled me towards my career goals. Exceptional service!",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    },
  ];

  return (
    <>
      {/* navbar */}
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
              href="/browse"
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
              PWBuddy was an opportunity I couldn't miss. Thanks to my buddy, I
              managed to reach my goal of joining Cimpress.”
            </p>
            <p className="font-bold text-gray-900">Satya Narayana Nadella</p>
            <p className="text-sm text-gray-600">CIO @Microsoft</p>{" "}
            <p>🌟🌟🌟🌟🌟</p>
          </div>
        </div>
      </div>
      {/* 4rth one side text another side img */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6 " style={{ background: 'linear-gradient(to right, #1e3a8a, #3b82f6, #ffffff)' }}>
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
      {/* 5th cards with view all */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <div className="flex flex-col items-center rounded-lg p-6 md:p-10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Book your session now.
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center">
            Direct access to buddies for guidance and mock interviews. Elevate
            your College journey with PWBuddy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {buddies.map((buddy, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={buddy.image}
                  alt={buddy.name}
                  className=" h-80 rounded-lg mb-4 object-cover"
                />
                <h2 className="text-xl font-semibold text-gray-900">
                  {buddy.name}
                </h2>
                <p className="text-md text-gray-700">{buddy.title}</p>
                <p className="text-sm text-gray-500">{buddy.university}</p>
              </div>
            ))}
          </div>
          <a href="/browse">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            View All
          </button></a>
        </div>
      </div>
      {/* 6th   */}
      <div
        className="flex flex-col items-center justify-center h-96 p-6 "
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1588421357538-7c22591e4f90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        {" "}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4  mt-14">
          Get Started Today
        </h1>
        <p className="text-lg md:text-xl  text-white mb-14">
          Connect with experienced mentors for personalized guidance and mock
          interviews to excel in your pursuits.
        </p>
        <a href="/browse">
          <button className="bg-white font-bold text-black px-4 py-2 rounded-full hover:bg-black hover:text-white">
            Browse all buddies
          </button>
        </a>
      </div>
      {/* 7th */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <div className="flex flex-col items-center rounded-lg p-6 md:p-10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">
            Hear What Our Users Say.
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center">
            Discover how PWBuddy has transformed students' career journeys
            through mentorship and mock interviews.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {mycards.map((testimonial, index) => (
              <Cards key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
      {/* 8th */}
      <div
        className="flex flex-col items-center justify-center h-96 p-6 "
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1614279629245-d7a138f035f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-16">
          Become a part of PWBuddy community.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl text-gray-400 mb-14 mt-7">
          Managers, executives and leaders agree that mentoring is one of the
          most impactful ways to spend your time. In return, you're building
          crucial leadership qualities.
        </p>
        <a href="/browse">
          <button className="bg-white font-bold text-black px-4 py-2 mb-14 rounded-full hover:bg-black hover:text-white">
            Become a buddy
          </button>
        </a>
      </div>
      {/* 9th */}
      <div className="bg-gray-100 py-12 "  style={{
          backgroundImage:
            'url("https://migrexabogados.com/wp-content/uploads/2015/11/Savin-NY-Website-Background-Web.jpg")',
        backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat'  }}   >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What is PwBuddy?</h3>
              <p>
                Platform connecting students with professionals for guidance and
                mock interviews.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                How does PwBuddy work?
              </h3>
              <p>
                Book sessions with seniors or professionals for guidance and
                support.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Who can use PwBuddy?
              </h3>
              <p>College students seeking mentorship and career advice.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                What kind of support can I get?
              </h3>
              <p>
                Guidance, mock interviews, career advice, and industry insights
                and anything else which can help you succeed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                How do I schedule a session?
              </h3>
              <p>Browse mentors, select a time slot, and book your session.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Are the mentors qualified?
              </h3>
              <p>
                Yes, all mentors are vetted professionals or experienced
                seniors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                How long are the sessions?
              </h3>
              <p>Sessions typically last 30 minutes to an hour.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Can I reschedule or cancel sessions?
              </h3>
              <p>
                Yes, you can reschedule or cancel up to 24 hours before your
                session.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Is there a fee for using PwBuddy?
              </h3>
              <p>
                Pricing varies based on mentor expertise and session duration.
              </p>
            </div>
          </div>
          <p className="mt-8">
            If you can’t find what you’re looking for, email us at{" "}
            <a href="mailto:pw@buddy.co.in" className="text-blue-500">
              pw@buddy.co.in
            </a>
          </p>
        </div>
      </div>
      <hr className="divider" />
      {/* foooter */}
    </>
  );
}

export default Herosection;

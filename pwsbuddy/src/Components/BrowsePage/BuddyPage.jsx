import React, { useState } from "react";
import BuddyCard from "../BrowsePage/BuddyCard";

const buddies = [
  {
    name: "Amit Patel",
    role: "SDE",
    company: "Cisco",
    institute: "IIT Delhi",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["cloud", "web", "ui/ux", "dsa", "AI/ML"],
  },
  {
    name: "Ravi Kumar",
    role: "SDE",
    company: "Visa",
    institute: "NIT Karnataka",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["open source", "dev", "web"],
  },
  {
    name: "Neha Gupta",
    role: "Software Developer",
    company: "Zoom",
    institute: "VIT Vellore",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["DSA", "Dev", "System Design"],
  },
  {
    name: "Priya Singh",
    role: "Product Manager",
    company: "Ex-Flipkart",
    institute: "Liverpool John Moores University",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["product", "startups", "analytics"],
  },
  {
    name: "Aditi Sharma",
    role: "SWE",
    company: "Barclays",
    institute: "Banasthali Vidyapith",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["career"],
  },
  {
    name: "Rohan Mehta",
    role: "Software Engineer (L3)",
    company: "Twilio",
    institute: "BIT Bangalore",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["backend", "dev"],
  },
  {
    name: "Sneha Verma",
    role: "SDE-3",
    company: "Walmart",
    institute: "Mody University",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["dsa", "cassandra"],
  },
  {
    name: "Vikram Singh",
    role: "Senior Software Developer",
    company: "IG Group",
    institute: "VIT Vellore",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["dsa", "dev"],
  },
  {
    name: "Karan Jain",
    role: "Software Engineer",
    company: "Uber",
    institute: "NIT Karnataka",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["dsa", "system design", "open source"],
  },
  {
    name: "Pooja Nair",
    role: "SDE-II",
    company: "Atlassian",
    institute: "Amrita University",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["dsa", "backend"],
  },
  {
    name: "Ananya Roy",
    role: "Senior Software Engineer",
    company: "Birlasoft",
    institute: "BIT Bangalore",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["dsa", "data science", "ai"],
  },
  {
    name: "Rahul Desai",
    role: "SDE-1",
    company: "Google",
    institute: "UIT RGPV",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["dsa", "cp"],
  },
  {
    name: "Vivek Kapoor",
    role: "SDE",
    company: "Juspay",
    institute: "LPU",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["dsa"],
  },
  {
    name: "Nisha Patel",
    role: "Management Consulting Associate",
    company: "Accenture",
    institute: "IIT Delhi",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["strategy", "education"],
  },
  {
    name: "Aarav Choudhary",
    role: "SDE-II",
    company: "PayPal",
    institute: "MNNIT Allahabad",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["dsa"],
  },
  {
    name: "Rekha Pandey",
    role: "Software Engineer",
    company: "HSBC",
    institute: "Raj Kumar Goel Institute of Technology",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    skills: ["dsa", "dev"],
  },
];

const BuddyPage = () => {
  const [visibleBuddies, setVisibleBuddies] = useState(4);

  const loadMore = () => {
    setVisibleBuddies((prevVisibleBuddies) => prevVisibleBuddies + 4);
  };

  return (
    <div className="container mx-auto mt-40">
      <h1 className="text-4xl text-center font-bold my-8">Book your session now.</h1>
      <p className="text-xl text-center my-8">
        Direct access to buddies for guidance and mock interviews. Elevate your
        College journey with PwBuddy.
      </p>
      <div className="flex flex-wrap md:p-10  p-6 mx-4">
  {buddies.slice(0, visibleBuddies).map((buddy, index) => (
    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
      <BuddyCard buddy={buddy} />
    </div>
  ))}
</div>

      {visibleBuddies < buddies.length && (
        <div className="text-center my-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
      <hr className="divider " />
    </div>
  );
};

export default BuddyPage;

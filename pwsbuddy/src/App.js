import React from "react";
import Navbar from "./Components/LandingPage/Navbar";
import Footer from "./Components/LandingPage/Footer";
import MainRoutes from './Components/Routes/MainRoutes';


function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes/>
      <Footer />
    </div>
  );
}

export default App;

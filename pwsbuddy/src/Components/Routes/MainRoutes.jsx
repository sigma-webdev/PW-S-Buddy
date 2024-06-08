import React from 'react'
import { Route, Routes } from 'react-router'
import Herosection from './../LandingPage/Herosection';
import BuddyPage from '../BrowsePage/BuddyPage';
import Signup from '../Authentication/Signup';
import Signin from '../Authentication/Signin';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Herosection/>}/>
        <Route  path="/signup" element={<Signup/>}/>
        <Route  path="/signin" element={<Signin/>}/>
        <Route  path="/browse" element={<BuddyPage/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes

import React from 'react'
import { Route, Routes } from 'react-router'
import Herosection from './../LandingPage/Herosection';
import BuddyPage from '../BrowsePage/BuddyPage';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Herosection/>}/>
        <Route  path="/" element={<BuddyPage/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes

import React from 'react'
import { Route, Routes } from 'react-router'
import Herosection from './../LandingPage/Herosection';
import BuddyPage from '../BrowsePage/BuddyPage';
import Signup from '../Authentication/Signup';
import Signin from '../Authentication/Signin';
import ForgotPassword from '../Authentication/ForgotPassword';
import ResetPassword from '../Authentication/ResetPassword';
import ProfileUpdate from '../Authentication/ProfileUpdate';
import Profileview from '../Authentication/Profileview';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Herosection/>}/>
        <Route  path="/signup" element={<Signup/>}/>
        <Route  path="/signin" element={<Signin/>}/>
        <Route  path="/forgetpassword" element={<ForgotPassword/>}/>
        <Route  path="/resetpassword" element={<ResetPassword/>}/>
        <Route  path="/profileupdate" element={<ProfileUpdate/>}/>
        <Route  path="/profileview" element={<Profileview/>}/>
        <Route  path="/browse" element={<BuddyPage/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes

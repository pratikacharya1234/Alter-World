import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import './App.css'
import Profile from './Pages/Profile'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} /> 
        <Route path="/signin" element={ <SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}
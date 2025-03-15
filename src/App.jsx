import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import Profile from './Pages/Profile'
import Setting from './Pages/Setting'
import CreatePost from './Pages/CreatePost'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>} /> 
        <Route path="/signin" element={ <SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/create" element={<CreatePost/>} />
      </Routes>
    </BrowserRouter>
  )
}
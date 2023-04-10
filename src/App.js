import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AuthProvider } from './contexts/AuthContext'

import Chats from "./components/Chats"
import Login from "./components/Login"

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#FAFAFA] w-full h-screen text-[#141414]">
          <AuthProvider>
            <Routes>
              <Route path="/chats" element={<Chats />} />
              <Route path="/" element={<Login />} /> 
            </Routes>
          </AuthProvider>
      </div>
    </BrowserRouter>
  )
}

export default App

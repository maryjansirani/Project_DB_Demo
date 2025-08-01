import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='register' element={<Register />} />
    <Route path='dashboard' element={<Dashboard />} />
    <Route  index element={<Login />} />

  </Routes>
  </BrowserRouter>
  )
}

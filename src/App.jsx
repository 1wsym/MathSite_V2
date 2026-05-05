import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SettingsBar from "./components/SettingsBar.jsx"
import Home from "./pages/Home.jsx"
import Training from './pages/Training.jsx';

import "./App.css"

function App() {
  return (
    <BrowserRouter basename="/MathSite_V2">
      <SettingsBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
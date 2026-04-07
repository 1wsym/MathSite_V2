import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SettingsBar from "./components/SettingsBar.jsx"
import Home from "./pages/Home.jsx"
import Training from './pages/Training.jsx';

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <SettingsBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
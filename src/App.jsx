import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import SettingsBar from "./components/SettingsBar.jsx"
import Home from "./pages/Home.jsx"
import Training from './pages/Training.jsx';

import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        {/* Другие маршруты */}
      </Routes>
    </Router>
  );
}

export default App
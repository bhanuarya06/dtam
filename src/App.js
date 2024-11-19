import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import StartPage from "./StartPage";
import CategoryPage from "./CategoryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
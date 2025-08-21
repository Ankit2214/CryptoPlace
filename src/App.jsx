import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import MainPage from "./pages/Dataa/Home"
import Coin from "./pages/Coin/Coin"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataa" element={<MainPage/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
    </Router>
  );
}

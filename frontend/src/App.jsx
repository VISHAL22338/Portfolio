import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Exprience from './components/Exprience';
import About from './components/About';
import Banner from './components/Banner';
import Highlights from './components/Highlights';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Banner />} />
        <Route path="/Home" element={<Banner />} />
        <Route path="/about" element={<About />} />
        <Route path="/exprience" element={<Exprience />} />
        <Route path="/Highlights" element={<Highlights />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

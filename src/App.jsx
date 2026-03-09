import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './Components/home page';
import About from './Components/about page';
import Products from './Components/product';
import Contact from './Components/contact page';
import FarmApp from './Components/farm app';
import SmartBrooder from './Components/smart brooder';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/smart-brooder" element={<SmartBrooder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/app" element={<FarmApp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
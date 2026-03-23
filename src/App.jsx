import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './Components/home page';
import About from './Components/about page';
import Products from './Components/product';
import Contact from './Components/contact page';
import FarmApp from './Components/farm app';
import SmartBrooder from './Components/smart brooder';
import TermsOfService from './Components/terms of service';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position on every navigation.
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // Key forces a remount on route change so the entrance animation plays.
    <div key={location.pathname} className="animate-slide-up">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/smart-brooder" element={<SmartBrooder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/app" element={<FarmApp />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
        <Navbar />
        <ScrollToTop />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
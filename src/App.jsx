import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Komponen Global
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'; // <-- IMPORT BARU

// Import Halaman
import MainPage from './pages/MainPage.jsx';
import Portfolio from './pages/Portfolio.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="d-flex flex-column min-vh-100 bg-white text-dark">
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>

        <Footer />

        {/* Letakkan ContactModal di paling bawah agar siap dipicu dari mana saja */}
        <ContactModal /> 
      </div>
    </Router>
  );
}

export default App;
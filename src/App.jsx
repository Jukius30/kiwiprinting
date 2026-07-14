import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Komponen Global
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Import Halaman
import MainPage from './pages/MainPage.jsx';
import Portfolio from './pages/Portfolio.jsx';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-white text-dark">
        {/* Navbar tetap stand by di atas */}
        <Navbar />

        {/* Pemisah Konten Dinamis */}
        <main className="flex-grow-1">
          <Routes>
            {/* Rute "/" akan menampilkan Home, About, dan Product sekaligus dalam 1 halaman */}
            <Route path="/" element={<MainPage />} />
            
            {/* Rute "/portfolio" akan menampilkan halaman terpisah khusus portfolio */}
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>

        {/* Footer tetap di bawah */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
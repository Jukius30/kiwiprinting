import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // 1. UBAH warna bg-dark menjadi bg-light (atau bg-white) dan hilangkan text-light
    <footer className="bg-light border-top pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">
          
          {/* Kolom 1: Tentang Singkat + GAMBAR LOGO */}
          <div className="col-md-4 text-center text-md-start">
            <div className="mb-3">
              <img 
                src="/logosamping.png" 
                alt="Kiwi Printing Logo" 
                style={{ height: "55px", width: "auto", objectFit: "contain" }} 
                className="d-inline-block align-top" // 2. HAPUS class rounded, bg-white, dan p-1
              />
            </div>
            {/* 3. UBAH text-secondary menjadi text-muted agar pas dengan tema terang */}
            <p className="text-muted small lh-base" style={{ maxWidth: '280px' }}>
              Your Partner for Printing Solutions. Menyediakan solusi percetakan berkualitas tinggi dan presisi di Surabaya.
            </p>
          </div>

          {/* Kolom 2: Link Cepat */}
          <div className="col-md-4 text-center">
            {/* 4. Sesuaikan heading menjadi text-dark */}
            <h5 className="fw-bold mb-3 border-bottom pb-2 d-inline-block text-dark">
              Navigasi
            </h5>
            {/* 5. GANTI text-white-50 menjadi text-muted */}
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <Link to="/" className="text-muted text-decoration-none hover-dark">Home</Link>
              </li>
              <li>
                <Link to="/#about" className="text-muted text-decoration-none hover-dark">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted text-decoration-none hover-dark">Portfolio</Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Alamat */}
          <div className="col-md-4 text-center text-md-start">
            {/* 6. Ubah heading menjadi text-dark */}
            <h5 className="text-dark fw-semibold mb-3 border-bottom pb-2 d-inline-block text-md-start">
              Kontak Usaha
            </h5>
            {/* 7. Ubah warna list menjadi text-muted */}
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0 text-muted small">
              <li className="d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                <span>📍</span>
                <span>Margomulyo Permai - AH 34, Surabaya, Jawa Timur</span>
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <span>📞</span>
                <span>(031) 74990347</span>
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <span>📞</span>
                <span>(031) 74990348</span>
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <span>✉️</span>
                <a href="mailto:printingkiwi@gmail.com" className="text-muted text-decoration-none">printingkiwi@gmail.com</a>
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <span>✉️</span>
                <a href="mailto:kiwi_printing@yahoo.com" className="text-muted text-decoration-none">kiwi_printing@yahoo.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bagian Hak Cipta */}
        {/* 8. Ubah border atas menjadi standar abu-abu terang */}
        <div className="row mt-4 pt-3 border-top text-center text-muted small">
          <div className="col">
            <p className="mb-0">&copy; {currentYear} Kiwi Printing. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
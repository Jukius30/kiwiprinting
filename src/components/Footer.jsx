import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">
          
          {/* Kolom 1: Tentang Singkat */}
          <div className="col-md-4">
            <h5 className="text-success fw-bold mb-3">Kiwi Printing</h5>
            <p className="text-secondary small lh-base">
              Your Partner for Printing Solutions.
            </p>
          </div>

          {/* Kolom 2: Link Cepat */}
          <div className="col-md-4 px-md-5">
            <h5 className="text-light fw-semibold mb-3 border-bottom border-success pb-2 d-inline-block">Navigasi</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-secondary text-decoration-none hover-link">Home</a></li>
              <li className="mb-2"><a href="#products" className="text-secondary text-decoration-none hover-link">Produk & Layanan</a></li>
              <li className="mb-2"><a href="#portfolio" className="text-secondary text-decoration-none hover-link">Portofolio</a></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Alamat */}
          <div className="col-md-4">
            <h5 className="text-light fw-semibold mb-3 border-bottom border-success pb-2 d-inline-block">Kontak Usaha</h5>
            <p className="text-secondary small mb-2">📍 Margomulyo Permai - AH 34, Surabaya, Jawa Timur</p>
            <p className="text-secondary small mb-2">📞 (031) 74990347</p>
            <p className="text-secondary small mb-2">📞 (031) 74990348</p>
            <p className="text-secondary small mb-2">✉️ pintingkiwi@gmail.com</p>
            <p className="text-secondary small mb-2">✉️ kiwi_printing@yahoo.com</p>
          </div>

        </div>

        {/* Bagian Hak Cipta */}
        <div className="row mt-4 pt-3 border-top border-secondary text-center text-secondary small">
          <div className="col">
            <p className="mb-0">&copy; {currentYear} Kiwi Printing. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
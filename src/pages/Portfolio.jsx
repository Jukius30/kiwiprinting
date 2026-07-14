import React from 'react';

function Portfolio() {
  return (
    <div className="container py-5" id="portfolio">
      <h2 className="fw-bold text-center mb-4">Galeri Hasil Cetak</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card p-3 shadow-sm border-0">
            <h4>Stiker Botol Kopi</h4>
            <p className="text-secondary mb-0">Bahan: Vinyl Glossy (Tahan Air)</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 shadow-sm border-0">
            <h4>Spanduk Warung Makan</h4>
            <p className="text-secondary mb-0">Bahan: Flexi Korea 440gr</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio; // <-- PASTIKAN ADA INI DI BARIS PALING BAWAH
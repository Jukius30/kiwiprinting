import React, { useState } from 'react';

function Products() {
  // 1. Data Jasa / Layanan Cetak
  const listJasa = [
    'Company Profile',
    'Annual Report',
    'Catalog',
    'Brochure',
    'Leaflet',
    'Poster',
    'Magazine',
    'Calendar',
    'Invitation Card',
    'Packaging',
    'Booklet',
    'Business Form',
    'Letterhead',
    'Label',
    'Shopping Bag',
    'Etiquette',
  ];

  // 2. Data Varian Kertas & Finishing (Produk)
  const listKertas = [
    'HVS',
    'BC / Kartu Tik',
    'Blues White (BW)',
    'Matt Paper',
    'Art Paper',
    'Art Carton',
    'Art Paper + Lam Doff',
    'Art Paper + Lam Gloss',
    'Duplex Coated',
    'Ivory',
    'Fancy Paper',
    'Kraft',
    'Samson',
    'UV'
  ];

  // State untuk Tab
  const [activeTab, setActiveTab] = useState('jasa');

  return (
    <div className="container py-5 text-center" id="products">
      <h2 className="fw-bold mb-2">Layanan & Bahan Produk Kami</h2>
      <p className="text-muted mb-4">
        Pilihan lengkap layanan percetakan berkualitas dan berbagai varian bahan kertas.
      </p>

      {/* Navigasi Tab */}
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group p-1 bg-light rounded-pill shadow-sm" role="group">
          <button
            type="button"
            className={`btn rounded-pill px-4 ${
              activeTab === 'jasa' ? 'btn-primary fw-semibold' : 'btn-light text-secondary'
            }`}
            onClick={() => setActiveTab('jasa')}
          >
            Jasa & Cetakan ({listJasa.length})
          </button>
          <button
            type="button"
            className={`btn rounded-pill px-4 ${
              activeTab === 'kertas' ? 'btn-primary fw-semibold' : 'btn-light text-secondary'
            }`}
            onClick={() => setActiveTab('kertas')}
          >
            Bahan Kertas & Finishing ({listKertas.length})
          </button>
        </div>
      </div>

      {/* Grid Konten */}
      <div className="row g-3 justify-content-center">
        {(activeTab === 'jasa' ? listJasa : listKertas).map((item, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card h-100 p-3 shadow-sm border-0 bg-white d-flex align-items-center justify-content-center transition-hover">
              <h6 className="mb-0 fw-semibold text-dark fs-6">{item}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
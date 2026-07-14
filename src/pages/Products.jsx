import React from 'react';

function Products() {
  const listProduk = ['Cetak Stiker', 'Brosur & Katalog', 'Package', 'Merchandise Custom'];

  return (
    <div className="container py-5 text-center" id="products">
      <h2 className="fw-bold mb-4">Layanan & Produk Kami</h2>
      <div className="row g-3 justify-content-center">
        {listProduk.map((produk, index) => (
          <div key={index} className="col-md-3">
            <div className="card p-3 shadow-sm border-0 bg-white">
              <h5 className="mb-0 fw-semibold">{produk}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products; // <-- PASTIKAN ADA INI DI BARIS PALING BAWAH
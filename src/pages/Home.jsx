import React from 'react';

function Home() {
  return (
    <section className="bg-white py-5 mb-5">
      <div className="container py-5 text-center text-md-start">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold lh-sm mb-3">
              Cetak Cepat, Hasil Hebat, Harga Tepat!
            </h1>
            <p className="lead text-secondary mb-4">
              Kiwi Printing hadir memenuhi segala kebutuhan percetakan digital dan offset Anda dengan mesin presisi tinggi dan pelayanan profesional.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              {/* Diarahkan ke id products yang ada di MainPage */}
              <a href="#products" className="btn text-white btn-lg px-4 rounded-pill fw-bold shadow-sm" style={{ backgroundColor: '#00a2ff', border: 'none' }}>
                Lihat Layanan
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img 
              src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=600&auto=format&fit=crop" 
              alt="Kiwi Printing Workshop" 
              className="img-fluid rounded-4 shadow-sm w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home; // <-- PASTIKAN BARIS INI ADA DI PALING BAWAH!
import React from 'react';

function About() {
  return (
    <section className="container py-5 my-4">
      <div className="row g-4 align-items-center">
        <div className="col-md-5">
          <h2 className="fw-bold text-dark border-bottom border-3 pb-2 d-inline-block" style={{ borderBottomColor: '#00a2ff' }}>
            Tentang Kami
          </h2>
          <p className="mt-3 text-secondary">
            Kiwi Printing adalah penyedia solusi percetakan terintegrasi yang berbasis di Surabaya. Kami berkomitmen untuk membantu bisnis, organisasi, hingga perorangan dalam memvisualisasikan ide-ide kreatif mereka ke dalam bentuk cetakan berkualitas tinggi.
          </p>
        </div>
        <div className="col-md-7">
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="p-4 bg-light rounded-3 border-start border-4" style={{ borderColor: '#00a2ff' }}>
                <h5 className="fw-bold">🚀 Proses Ekspres</h5>
                <p className="small text-secondary mb-0">Pesanan dikerjakan tepat waktu dengan alur kerja yang efisien.</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-4 bg-light rounded-3 border-start border-4" style={{ borderColor: '#00a2ff' }}>
                <h5 className="fw-bold">💎 Kualitas Premium</h5>
                <p className="small text-secondary mb-0">Menggunakan mesin modern untuk hasil warna yang tajam dan tahan lama.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; // <-- Kunci perbaikannya ada di sini!
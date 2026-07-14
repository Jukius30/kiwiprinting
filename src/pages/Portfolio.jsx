import React from "react";

function Portfolio() {
  // Array data produk untuk mempermudah maintenance dan menjaga kode tetap bersih (DRY)
  const portfolioItems = [
    {
      title: "CLS Grand Reunion Book",
      material: "Art Paper",
      images: ["/CLS.jpg", "/CLS1.jpg", "/CLS2.jpg"],
    },
    {
      title: "Clayson Mug Box",
      material: "Duplex Custom Print",
      images: [
        "/clayson.jpg",
        "/clayson1.jpg"
      ], // PASTIKAN SUDAH PAKAI images DAN []
    },
    {
      title: "Product Label",
      material: "Vinyl Glossy",
      images: [
        "/label.jpg",
      ], //PASTIKAN SUDAH PAKAI images DAN []
    },
    {
      title: "Box Hampers",
      material: "Rigid Box Custom Full Wrapping Paper",
      images: [
        "/hampers.webp",
      ],
    },
    {
      title: "Paper Bag",
      material: "Kraft Paper",
      images: [
        "/paperbag.jpg",
      ],
    },
    {
      title: "Souvenir",
      material: "UV Print Printing",
      images: [
        "/souvenir.webp",
      ],
    },
    {
      title: "Book Printing",
      material: "Bookpaper",
      images: [
        "/book.webp",
      ],
    },
    {
      title: "Memo Stand",
      material: "Art Carton Card",
      images: [
        "/memo.webp",
      ],
    },
    {
      title: "Box Packaging",
      material: "Duplex",
      images: [
        "/box.webp",
      ],
    },
    {
      title: "Pakuwon Special Gift",
      material: "Art Paper",
      images: [
        "/pakuwon0.webp",
        "/pakuwon.webp",
        "/pakuwon1.webp",
        "/pakuwon2.webp",
        "/pakuwon3.webp",
        "/pakuwon4.webp",
        "/pakuwon5.webp",
        "/pakuwon6.webp"
      ],
    },
    {
      title: "Box Cake Packaging",
      material: "Ivory",
      images: [
        "/cake.webp",
      ],
    },
    {
      title: "Coffee Packaging",
      material: "Kraft Paper",
      images: [
        "/labajo.webp",
        "/labajo1.webp",
        "/labajo2.webp"
      ],
    },
  ];

  return (
    <div className="container py-5" id="portfolio">
      <div className="text-center mb-5">
        <h2
          className="fw-bold text-dark border-bottom border-3 pb-2 d-inline-block"
          style={{ borderBottomColor: "#00a2ff" }}
        >
          Galeri Hasil Cetak
        </h2>
        <p className="text-secondary">
          Produk berkualitas tinggi yang dikerjakan dengan mesin presisi modern
          kami.
        </p>
      </div>

      <div className="row g-4">
        {portfolioItems.map((item, index) => {
          // Buat ID unik untuk setiap carousel berdasarkan index agar tidak bentrok saat diklik
          const carouselId = `carouselProduct-${index}`;

          return (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden bg-white">
                {/* LOGIK CAROUSEL SLIDING */}
                <div
                  id={carouselId}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {/* Tambahkan tanda tanya (?) sebelum .map agar aman dari error undefined */}
                    {item.images?.map((imgUrl, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${item.title} ${imgIndex + 1}`}
                          className="img-fluid card-img-top"
                          style={{ height: "220px", objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Tombol Navigasi Slider (Hanya muncul jika gambar lebih dari 1) */}
                  {item.images.length > 1 && (
                    <>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#${carouselId}`}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#${carouselId}`}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </>
                  )}
                </div>

                {/* Info Produk */}
                <div className="card-body p-3 d-flex flex-column justify-content-between">
                  <div>
                    <h5
                      className="fw-bold mb-1 text-dark"
                      style={{ fontSize: "1.1rem" }}
                    >
                      {item.title}
                    </h5>
                    <p className="text-secondary small mb-0">{item.material}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;

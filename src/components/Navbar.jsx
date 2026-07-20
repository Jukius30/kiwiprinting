import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Fungsi untuk handle scroll, jika user di halaman portfolio, balik dulu ke Home baru scroll
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* LOGO DIUBAH MENJADI GAMBAR */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={() => handleScroll("home")}
        >
          <img 
            src="/logosamping.png" 
            alt="Kiwi Printing Logo" 
            style={{ height: "45px", width: "auto", objectFit: "contain" }} 
            className="d-inline-block align-top"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold">
            <li className="nav-item">
              <button
                className="nav-link px-3 border-0 bg-transparent"
                onClick={() => handleScroll("home")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link px-3 border-0 bg-transparent"
                onClick={() => handleScroll("about")}
              >
                About Us
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link px-3 border-0 bg-transparent"
                onClick={() => handleScroll("products")}
              >
                Products
              </button>
            </li>
            {/* Portfolio pindah ke HALAMAN BERBEDA */}
            <li className="nav-item">
              <Link className="nav-link px-3" to="/portfolio">
                Portfolio
              </Link>
            </li>
            {/* Contact LANGSUNG BUKA POP-UP MODAL */}
            <li className="nav-item">
              <button
                className="nav-link px-3 border-0 bg-transparent"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
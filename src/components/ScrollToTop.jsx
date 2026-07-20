import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Memaksa window untuk langsung scroll ke pojok kiri atas (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Efek ini akan berjalan setiap kali pathname (rute halaman) berubah

  return null; // Komponen ini tidak perlu me-render HTML apa pun
}

export default ScrollToTop;
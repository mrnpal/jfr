import { useState } from 'react';
import '../Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">JFR Photography</div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Beranda</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Layanan</a>
        <a href="#gallery" onClick={() => setIsOpen(false)}>Galeri</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Price List</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'bar rotate1' : 'bar'}></span>
        <span className={isOpen ? 'bar hide' : 'bar'}></span>
        <span className={isOpen ? 'bar rotate2' : 'bar'}></span>
      </div>
    </nav>
  );
}

export default Navbar;

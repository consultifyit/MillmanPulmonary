import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="demo-banner text-center py-2" style={{ backgroundColor: 'var(--color-primary)' }}>
        <a 
          href="https://www.consultifyit.com/" 
          target="_blank" 
          rel="noreferrer"
          style={{ color: 'white', fontSize: '0.85rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', display: 'block' }}
        >
          Demo By Consultifyit Technology Services (CIFY)
        </a>
      </div>
      <header className={`header ${isScrolled ? 'glass header-scrolled' : ''}`}>
        <div className="container header-content">
          <div className="logo">
            <span className="logo-text">Millman<span className="logo-accent">Pulmonary</span></span>
        </div>
        
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#providers" onClick={() => setIsMenuOpen(false)}>Providers</a>
          <a href="#locations" onClick={() => setIsMenuOpen(false)}>Locations</a>
          <a href="#patient-portal" onClick={() => setIsMenuOpen(false)}>Patient Portal</a>
          <div className="mobile-actions">
            <button className="btn btn-secondary"><Phone size={18} /> (248) 555-0199</button>
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </nav>

        <div className="desktop-actions">
          <a href="tel:2485550199" className="header-phone"><Phone size={18} /> <span>(248) 555-0199</span></a>
          <button className="btn btn-primary">Book Appointment</button>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>
      </header>
    </>
  );
};

export default Header;

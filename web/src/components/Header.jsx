import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bannerRef = useRef(null);
  const [bannerH, setBannerH] = useState(0);

  useEffect(() => {
    const measure = () => setBannerH(bannerRef.current ? bannerRef.current.offsetHeight : 0);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div ref={bannerRef} className="demo-banner text-center" style={{ backgroundColor: 'var(--color-primary)', padding: '0.5rem 1rem' }}>
        <a 
          href="https://www.consultifyit.com/" 
          target="_blank" 
          rel="noreferrer"
          style={{ color: 'white', fontSize: '0.8rem', fontWeight: '500', letterSpacing: '0.3px', lineHeight: 1.4, textDecoration: 'none', display: 'block' }}
        >
          Concept design by ConsultifyIT · Not the official website of Dr. Millman's practice
        </a>
      </div>
      <header className={`header ${isScrolled ? 'glass header-scrolled' : ''}`} style={{ top: isScrolled ? 0 : bannerH }}>
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

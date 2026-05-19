import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">Millman<span>Pulmonary</span></h3>
            <p className="footer-desc">
              World-class pulmonary and critical care delivered with compassion. A patient-first philosophy that focuses on education, accessibility, and personalized care.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#providers">Meet Dr. Millman</a></li>
              <li><a href="#patient-portal">Patient Experience</a></li>
              <li><a href="#locations">Locations</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={18} className="contact-icon" />
                <span>(248) 555-0199</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>office@millmanpulmonary.com</span>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 Medical Drive, Clawson, MI</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Ready to breathe better?</h4>
            <p className="footer-desc" style={{ marginBottom: '1.5rem' }}>
              Schedule your consultation today. We accept most major insurances.
            </p>
            <button className="btn btn-primary" style={{ width: '100%' }}>Book Appointment</button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Millman Pulmonary & Critical Care. All rights reserved.</p>
            <p className="footer-attribution">Website developed and managed by <a href="https://www.consultifyit.com/" target="_blank" rel="noreferrer">Consultifyit Technology Services (CIFY)</a></p>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">HIPAA Notice</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

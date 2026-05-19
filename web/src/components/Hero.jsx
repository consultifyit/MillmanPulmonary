import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="liquid-blob blob-1"></div>
      <div className="liquid-blob blob-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in delay-100">
          <div className="hero-badge">
            <span className="pulse-dot"></span> Premium Pulmonary & Critical Care
          </div>
          <h1 className="hero-title">
            The Art of<br/>
            <span className="hero-title-accent">Breathing Freely.</span>
          </h1>
          <p className="hero-description">
            Experience world-class pulmonary care delivered with uncompromised attention to detail. Dr. Bruce Millman brings 25+ years of clinical excellence to a serene, high-end environment designed exclusively for your well-being.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Reserve Consultation <ArrowRight size={20} />
            </button>
            <div className="hero-trust-indicators">
              <span className="trust-item"><CheckCircle2 size={18} className="trust-icon" /> Board Certified</span>
              <span className="trust-item"><CheckCircle2 size={18} className="trust-icon" /> Top Doctor Award</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-overlay"></div>
    </section>
  );
};

export default Hero;

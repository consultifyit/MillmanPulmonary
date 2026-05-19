import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import './Providers.css';

const Providers = () => {
  return (
    <section id="providers" className="section providers-section">
      <div className="container">
        <div className="providers-layout">
          <div className="provider-image-container">
            <div className="image-wrapper">
              <img src="/src/assets/provider_portrait.png" alt="Dr. Bruce Millman" className="provider-image" />
            </div>
            <div className="provider-badge">
              <Award size={24} className="badge-icon" />
              <div>
                <strong>Top Doctor</strong>
                <p>Hour Detroit Magazine</p>
              </div>
            </div>
          </div>
          
          <div className="provider-info">
            <div className="section-header">
              <h2 className="section-title">Meet Dr. Bruce Millman</h2>
              <p className="provider-credentials">D.O., Board-Certified in Pulmonary & Critical Care</p>
            </div>
            
            <div className="provider-bio">
              <p>
                Dr. Bruce Millman is a board-certified pulmonary and critical care physician with more than 25 years of experience helping patients breathe better and live healthier lives. His practice is built around a patient-first philosophy that focuses on education, compassion, accessibility, and personalized care.
              </p>
              <p>
                In addition to his clinical practice, Dr. Millman serves as an Assistant Professor of Internal Medicine at the Oakland University William Beaumont School of Medicine. He maintains strong affiliations with both Corewell Health William Beaumont University Hospital and DMC Harper University Hospital, ensuring his patients have access to top-tier academic medical resources when needed.
              </p>
              <p>
                Known for taking time with patients and explaining complex conditions in simple, understandable language, Dr. Millman has earned a strong reputation for delivering a more human-centered healthcare experience. His calm, modern practice environment and highly attentive approach are designed to reduce stress and help patients feel comfortable from the moment they walk in.
              </p>
            </div>
            
            <div className="provider-education">
              <div className="education-item">
                <GraduationCap size={24} className="education-icon" />
                <div>
                  <h4>Medical Degree</h4>
                  <p>Michigan State University College of Osteopathic Medicine</p>
                </div>
              </div>
              <div className="education-item">
                <GraduationCap size={24} className="education-icon" />
                <div>
                  <h4>Residency & Fellowship</h4>
                  <p>Internal Medicine, Pulmonary & Critical Care at Henry Ford Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Providers;

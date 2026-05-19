import React from 'react';
import LeadCaptureForm from './LeadCaptureForm';
import './LeadCapture.css';

const LeadCapture = () => {
  return (
    <section id="contact" className="section lead-capture-section">
      <div className="container">
        <div className="lead-capture-layout">
          <div className="lead-capture-content">
            <h2 className="section-title">Request a Consultation</h2>
            <p className="lead-capture-description">
              Take the first step towards breathing better. Leave your details below and our scheduling coordinator will reach out to you within 24 hours to secure your appointment.
            </p>
            
            <div className="contact-benefits">
              <ul>
                <li>✓ Fast response times</li>
                <li>✓ Most major insurances verified instantly</li>
                <li>✓ Telehealth and in-person options</li>
              </ul>
            </div>
          </div>

          <div className="lead-capture-form-container glass">
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;

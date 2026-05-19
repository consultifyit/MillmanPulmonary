import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import './LeadCapture.css';

const LeadCaptureForm = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) {
        // Optional callback if parent wants to know
        setTimeout(onSuccess, 3000);
      }
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="success-state">
        <CheckCircle size={64} className="success-icon" />
        <h3>Request Received</h3>
        <p>Thank you for reaching out. Our team will contact you shortly to confirm your appointment details.</p>
        <button className="btn btn-secondary" onClick={() => setIsSubmitted(false)}>Submit Another</button>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required placeholder="Jane" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required placeholder="Doe" />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required placeholder="(248) 555-0000" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required placeholder="jane@example.com" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="reason">Reason for Visit</label>
        <select id="reason" name="reason" required defaultValue="">
          <option value="" disabled>Select an option...</option>
          <option value="asthma-copd">Asthma or COPD</option>
          <option value="sleep-apnea">Sleep Apnea</option>
          <option value="chronic-cough">Chronic Cough</option>
          <option value="post-covid">Post-COVID Recovery</option>
          <option value="lung-nodule">Lung Nodule Evaluation</option>
          <option value="other">Other / General Consultation</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
        {isSubmitting ? 'Sending Request...' : (
          <>
            Request Appointment <Send size={18} />
          </>
        )}
      </button>
      <p className="form-disclaimer">
        Your information is completely secure and will only be used to contact you regarding your appointment.
      </p>
    </form>
  );
};

export default LeadCaptureForm;

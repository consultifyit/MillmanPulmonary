import React, { useState, useEffect } from 'react';
import { CalendarCheck, ShieldCheck, FileText, Smartphone, CreditCard } from 'lucide-react';
import './PatientExperience.css';

const PatientExperience = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  // Reset wallet payment animations automatically
  useEffect(() => {
    if (paymentMethod === 'apple' || paymentMethod === 'google') {
      const timer = setTimeout(() => {
        setPaymentMethod(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [paymentMethod]);

  const features = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Major Insurances Accepted",
      description: "We work with most major insurance providers to ensure you receive the care you need with minimal friction."
    },
    {
      icon: <CalendarCheck size={28} />,
      title: "Easy Booking Process",
      description: "Schedule your appointments easily online or via phone. We prioritize accommodating urgent care needs."
    },
    {
      icon: <FileText size={28} />,
      title: "Digital Intake Forms",
      description: "Complete your paperwork securely online from the comfort of your home before your visit."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Secure Patient Portal",
      description: "Access your medical records, test results, and communicate directly with our team securely."
    },
    {
      icon: <CreditCard size={28} />,
      title: "Flexible Payment Options",
      description: "Conveniently pay balances securely online using major credit cards, Apple Pay, or Google Pay."
    }
  ];

  return (
    <section id="patient-portal" className="section experience-section">
      <div className="container">
        <div className="experience-layout">
          <div className="experience-content">
            <h2 className="section-title">A modern, frictionless patient experience.</h2>
            <p className="experience-description">
              Healthcare shouldn't be stressful. We've optimized every step of your journey—from booking to follow-ups—to ensure a calm, seamless, and premium experience.
            </p>
            <div className="experience-grid">
              {features.map((feature, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-icon">{feature.icon}</div>
                  <div>
                    <h4 className="experience-item-title">{feature.title}</h4>
                    <p className="experience-item-desc">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Access Patient Portal</button>
          </div>
          <div className="experience-visual">
            <div className="glass-panel">
              <div className="panel-header">
                <div className="panel-dot red"></div>
                <div className="panel-dot yellow"></div>
                <div className="panel-dot green"></div>
              </div>
              <div className="panel-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', margin: 0}}>Quick Pay</h3>
                  {paymentMethod === 'card' && (
                    <button className="btn-link" onClick={() => setPaymentMethod(null)} style={{background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '0.85rem'}}>Cancel</button>
                  )}
                </div>
                
                <div className="payment-form">
                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="Jane Doe" className="mock-input" readOnly={paymentMethod !== 'card'} />
                  </div>
                  <div className="form-group">
                    <label>Invoice Number</label>
                    <input type="text" placeholder="INV-2026-XXXX" className="mock-input" readOnly={paymentMethod !== 'card'} />
                  </div>
                  <div className="form-group">
                    <label>Amount ($)</label>
                    <input type="text" placeholder="0.00" className="mock-input" readOnly={paymentMethod !== 'card'} />
                  </div>
                </div>

                {paymentMethod === 'card' ? (
                  <div className="card-input-box" style={{marginTop: '2rem', padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)'}}>
                    <div className="form-group" style={{marginBottom: '1rem'}}>
                      <label>Card Number</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="mock-input" style={{background: 'white', opacity: 1}} />
                    </div>
                    <div style={{display: 'flex', gap: '1rem'}}>
                      <div className="form-group" style={{flex: 1}}>
                        <label>Exp</label>
                        <input type="text" placeholder="MM/YY" className="mock-input" style={{background: 'white', opacity: 1}} />
                      </div>
                      <div className="form-group" style={{flex: 1}}>
                        <label>CVC</label>
                        <input type="text" placeholder="123" className="mock-input" style={{background: 'white', opacity: 1}} />
                      </div>
                    </div>
                    <button className="btn btn-primary submit-btn" style={{marginTop: '1.5rem'}} onClick={() => setPaymentMethod(null)}>Submit Payment</button>
                  </div>
                ) : (
                  <div className="payment-placeholders" style={{marginTop: '2rem'}}>
                    <button className="mock-pay-btn credit-card-pay" onClick={() => setPaymentMethod('card')}>
                      <CreditCard size={18} style={{marginRight: '8px'}} /> Pay with Card
                    </button>
                    <div className="mobile-wallets">
                      <button className="mock-pay-btn apple-pay" onClick={() => setPaymentMethod('apple')}>
                        <span className="pay-logo"> Pay</span>
                      </button>
                      <button className="mock-pay-btn google-pay" onClick={() => setPaymentMethod('google')}>
                        <span className="pay-logo">G Pay</span>
                      </button>
                    </div>
                  </div>
                )}
                <p className="payment-subtext">Secure payments powered by Square</p>
              </div>

              {paymentMethod === 'apple' && (
                <div className="wallet-mock-overlay apple-theme">
                  <div className="wallet-prompt">
                    <span className="pay-logo" style={{fontSize: '2rem', color: 'white', marginBottom: '1rem', display: 'block'}}> Pay</span>
                    <p style={{color: 'white', marginBottom: '2rem'}}>Confirm with Side Button</p>
                    <div className="side-button-indicator"></div>
                  </div>
                </div>
              )}
              
              {paymentMethod === 'google' && (
                <div className="wallet-mock-overlay google-theme">
                  <div className="wallet-prompt">
                    <span className="pay-logo" style={{fontSize: '2rem', color: '#3c4043', marginBottom: '1rem', display: 'block'}}>G Pay</span>
                    <p style={{color: '#3c4043', marginBottom: '2rem'}}>Verify to pay</p>
                    <div className="fingerprint-indicator"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientExperience;

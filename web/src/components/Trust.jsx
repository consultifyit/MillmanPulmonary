import React from 'react';
import './Trust.css';

const Trust = () => {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "Top Doctor", label: "Hour Detroit Magazine" },
    { value: "2", label: "Clinic Locations" },
    { value: "2", label: "Hospital Affiliations" }
  ];

  return (
    <section className="section trust-section">
      <div className="container">
        <div className="trust-grid">
          {stats.map((stat, index) => (
            <div key={index} className="trust-card">
              <h3 className="trust-value">{stat.value}</h3>
              <p className="trust-label">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="affiliations">
          <p className="text-muted text-center" style={{ marginBottom: '1.5rem', fontWeight: 500 }}>
            Proudly affiliated with leading healthcare systems
          </p>
          <div className="affiliation-logos">
            {/* Placeholder for hospital logos */}
            <div className="logo-placeholder">Corewell Health William Beaumont</div>
            <div className="logo-placeholder">DMC Harper University Hospital</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;

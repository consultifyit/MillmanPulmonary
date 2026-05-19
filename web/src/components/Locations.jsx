import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Locations.css';

const Locations = () => {
  const locations = [
    {
      city: "Clawson",
      address: "123 Medical Drive, Suite 100",
      zip: "Clawson, MI 48017",
      phone: "(248) 555-0199",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM"
    },
    {
      city: "West Bloomfield",
      address: "456 Health Boulevard, Suite 200",
      zip: "West Bloomfield, MI 48322",
      phone: "(248) 555-0299",
      hours: "Tue, Thu: 8:00 AM - 4:00 PM"
    }
  ];

  return (
    <section id="locations" className="section locations-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Conveniently Located</h2>
          <p className="section-subtitle">
            Providing expert pulmonary care across the region with two state-of-the-art clinic locations and modern telemedicine options.
          </p>
        </div>

        <div className="locations-grid">
          {locations.map((loc, index) => (
            <div key={index} className="location-card">
              <div className="location-map-container">
                <iframe 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.address + ' ' + loc.zip)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${loc.city} location`}
                ></iframe>
              </div>
              <div className="location-details">
                <h3 className="location-city">{loc.city}</h3>
                
                <div className="detail-item">
                  <MapPin size={20} className="detail-icon" />
                  <div>
                    <p>{loc.address}</p>
                    <p>{loc.zip}</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <Phone size={20} className="detail-icon" />
                  <p>{loc.phone}</p>
                </div>
                
                <div className="detail-item">
                  <Clock size={20} className="detail-icon" />
                  <p>{loc.hours}</p>
                </div>

                <button className="btn btn-secondary location-btn">Get Directions</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;

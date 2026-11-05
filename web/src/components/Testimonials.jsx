import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  // In a real deployment, these would be fetched dynamically via the Google Places API or an embed widget
  const [reviews] = React.useState([
    {
      author_name: "Sample review",
      rating: 5,
      text: "Dr. Millman is exactly what you hope for in a physician. He took the time to explain my test results in a way I could actually understand and put together a plan that finally gave me relief from my chronic cough.",
      time_description: "Placeholder text"
    },
    {
      author_name: "Sample review",
      rating: 5,
      text: "The office environment is so calming, and the staff is incredibly professional. Dr. Millman's bedside manner is unmatched. I felt heard, respected, and expertly cared for.",
      time_description: "Placeholder text"
    },
    {
      author_name: "Sample review",
      rating: 5,
      text: "After struggling with sleep apnea for years, Dr. Millman's comprehensive approach changed my life. I finally have energy during the day. Highly recommend his practice.",
      time_description: "Placeholder text"
    }
  ]);

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Patient Stories <span style={{ fontSize: '0.5em', verticalAlign: 'middle', opacity: 0.7 }}>(sample)</span></h2>
          
          <div className="google-reviews-badge">
            <div className="google-score-row">
              <span className="google-g">G</span>
              <span className="google-score">Google Reviews</span>
              <div className="google-stars">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={24} fill="#FFC107" color="#FFC107" />
                ))}
              </div>
            </div>
            <p className="google-count">Demo layout: the live site shows the practice's real Google reviews here</p>
          </div>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <div className="google-card-header">
                <div className="reviewer-info">
                   <div className="reviewer-avatar">{review.author_name.charAt(0)}</div>
                   <div className="reviewer-meta">
                     <p className="author-name">{review.author_name}</p>
                     <p className="review-time">{review.time_description}</p>
                   </div>
                </div>
                <div className="google-icon-small">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                ))}
              </div>
              <p className="quote">"{review.text}"</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;

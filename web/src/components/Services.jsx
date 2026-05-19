import React, { useState } from 'react';
import { Stethoscope, Wind, Activity, HeartPulse, Shield, Video } from 'lucide-react';
import Modal from './Modal';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <Wind size={32} />,
      title: "Asthma & COPD",
      description: "Comprehensive management plans tailored to improve daily breathing and long-term lung function.",
      details: (
        <>
          <p>Living with Asthma or COPD means your airways need a little extra support to function at their best. Our goal is to help you breathe easier and enjoy your daily activities without restriction.</p>
          <h4>How we help:</h4>
          <ul>
            <li><strong>Personalized Action Plans:</strong> We create simple, step-by-step guides so you know exactly what to do when you feel breathless.</li>
            <li><strong>Modern Inhaler Therapies:</strong> We review your medications to ensure you are using the most effective, up-to-date treatments with the least side effects.</li>
            <li><strong>Trigger Management:</strong> Identifying and gently managing environmental factors that cause flare-ups.</li>
          </ul>
          <p>With the right management, these conditions are highly treatable, and most patients lead very active, comfortable lives.</p>
        </>
      )
    },
    {
      icon: <Activity size={32} />,
      title: "Sleep Apnea",
      description: "Advanced diagnostic testing and personalized CPAP or alternative therapy solutions for restorative sleep.",
      details: (
        <>
          <p>Quality sleep is the foundation of good health. If you are waking up tired or your partner notices you snoring, you might be experiencing sleep apnea—a very common and highly treatable condition.</p>
          <h4>Our Approach:</h4>
          <ul>
            <li><strong>Comfortable Diagnostics:</strong> We offer convenient home sleep testing options so you can be evaluated in your own bed.</li>
            <li><strong>Modern CPAP Solutions:</strong> Today's machines are incredibly quiet, small, and comfortable compared to older models.</li>
            <li><strong>Alternative Therapies:</strong> If CPAP isn't right for you, we explore oral appliances and other non-invasive alternatives.</li>
          </ul>
          <p>Treating sleep apnea doesn't just stop snoring; it dramatically improves your daytime energy, mood, and long-term heart health.</p>
        </>
      )
    },
    {
      icon: <Stethoscope size={32} />,
      title: "Chronic Cough",
      description: "Thorough diagnostic workups to identify the root cause and effective treatments for persistent coughs.",
      details: (
        <>
          <p>A cough that won't go away can be frustrating and exhausting. Rather than just suppressing it, we act as detectives to find the underlying cause.</p>
          <h4>Common Causes We Treat:</h4>
          <ul>
            <li><strong>Acid Reflux (GERD):</strong> Often the silent culprit behind a lingering tickle in the throat.</li>
            <li><strong>Post-Nasal Drip:</strong> Gentle allergy and sinus management can clear up chronic throat clearing.</li>
            <li><strong>Airway Sensitivity:</strong> Creating protective treatments for lungs that are overreacting to normal air.</li>
          </ul>
          <p>By identifying the exact cause, we can usually resolve a chronic cough completely, bringing quiet and comfort back to your life.</p>
        </>
      )
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Post-COVID Care",
      description: "Specialized recovery protocols for patients experiencing long-term respiratory effects from COVID-19.",
      details: (
        <>
          <p>Recovery from respiratory viruses like COVID-19 can take time. If you are still feeling short of breath, fatigued, or have a lingering cough months later, you are not alone, and we can help.</p>
          <h4>Your Recovery Journey:</h4>
          <ul>
            <li><strong>Thorough Evaluation:</strong> We take the time to listen to your symptoms and map your lung function gently.</li>
            <li><strong>Pulmonary Rehabilitation:</strong> Safe, guided exercises to slowly rebuild your lung capacity and stamina without pushing you too hard.</li>
            <li><strong>Symptom Relief:</strong> Targeted therapies to ease chest tightness and clear inflammation.</li>
          </ul>
          <p>Healing takes patience, but with a structured recovery plan, we see patients make consistent, encouraging progress over time.</p>
        </>
      )
    },
    {
      icon: <Shield size={32} />,
      title: "Lung Nodules",
      description: "Expert evaluation, monitoring, and state-of-the-art diagnostic interventions for lung abnormalities.",
      details: (
        <>
          <p>Finding out you have a "lung nodule" on a scan can sound intimidating, but it is actually incredibly common. The vast majority of these spots are harmless—often just tiny scars from past infections you didn't even know you had.</p>
          <h4>Our Monitoring Process:</h4>
          <ul>
            <li><strong>Careful Review:</strong> Dr. Millman personally reviews your scans to assess the characteristics of the nodule.</li>
            <li><strong>Watchful Waiting:</strong> In most cases, the safest and best approach is simply to monitor it with a follow-up scan in a few months to ensure it isn't changing.</li>
            <li><strong>Advanced Diagnostics:</strong> If further testing is needed, we coordinate minimally invasive procedures with top local specialists.</li>
          </ul>
          <p>We are here to explain your results clearly, answer every question, and provide peace of mind through careful, expert monitoring.</p>
        </>
      )
    },
    {
      icon: <Video size={32} />,
      title: "Telehealth Visits",
      description: "Convenient, secure virtual consultations bringing expert pulmonary care directly to your home.",
      details: (
        <>
          <p>We believe accessing expert medical care should be as easy and comfortable as possible. Telehealth allows you to consult with Dr. Millman from your living room.</p>
          <h4>Benefits of Telehealth:</h4>
          <ul>
            <li><strong>No Travel Required:</strong> Perfect for follow-up appointments, reviewing test results, or discussing medication changes.</li>
            <li><strong>Easy to Use:</strong> A secure link is sent right to your phone or email. Just click to join—no complicated apps to download.</li>
            <li><strong>Family Participation:</strong> Loved ones can easily join the video call from different locations to help listen and ask questions.</li>
          </ul>
          <p>We use HIPAA-compliant, highly secure video platforms to ensure your privacy is always protected.</p>
        </>
      )
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Comprehensive Pulmonary Care</h2>
          <p className="section-subtitle">
            Advanced medical expertise paired with a deeply human approach. We treat a wide range of respiratory and sleep conditions.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card interactive"
              onClick={() => setSelectedService(service)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <span className="learn-more-link">Learn more &rarr;</span>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
        icon={selectedService?.icon}
      >
        {selectedService?.details}
      </Modal>
    </section>
  );
};

export default Services;

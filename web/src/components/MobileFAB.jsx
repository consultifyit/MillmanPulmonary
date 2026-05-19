import React, { useState, useEffect } from 'react';
import { CalendarPlus } from 'lucide-react';
import Modal from './Modal';
import LeadCaptureForm from './LeadCaptureForm';
import './MobileFAB.css';

const MobileFAB = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the FAB only after scrolling down a bit (e.g., past the hero section)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <button 
        className={`mobile-fab ${isVisible ? 'visible' : ''}`}
        onClick={() => setIsModalOpen(true)}
      >
        <CalendarPlus size={20} />
        <span>Book Consult</span>
      </button>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Request Appointment"
        icon={<CalendarPlus size={24} />}
      >
        <div style={{ marginTop: '1rem' }}>
          <LeadCaptureForm onSuccess={() => setIsModalOpen(false)} />
        </div>
      </Modal>
    </>
  );
};

export default MobileFAB;

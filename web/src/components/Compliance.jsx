import React, { useState } from 'react';
import { ShieldCheck, Eye, Lock, FileCheck } from 'lucide-react';
import Modal from './Modal';
import './Compliance.css';

const Compliance = () => {
  const [selectedStandard, setSelectedStandard] = useState(null);

  const standards = [
    {
      icon: <Lock size={24} />,
      title: "HIPAA Compliant",
      description: "All patient data, intake forms, and communication are secured using end-to-end encryption protocols exceeding Health Insurance Portability and Accountability Act standards.",
      details: (
        <>
          <p>We take the privacy and security of your Protected Health Information (PHI) extremely seriously. Our entire digital infrastructure has been audited and certified to meet or exceed HIPAA standards.</p>
          <h4>Our Security Measures Include:</h4>
          <ul>
            <li><strong>End-to-End Encryption:</strong> All data transmitted between your device and our servers is encrypted using AES-256 military-grade encryption.</li>
            <li><strong>Secure Data Storage:</strong> Patient records are stored in highly secure, HIPAA-compliant cloud environments with strict access controls.</li>
            <li><strong>Role-Based Access:</strong> Only authorized medical personnel directly involved in your care have access to your sensitive health information.</li>
            <li><strong>Audit Logging:</strong> Every interaction with patient data is securely logged and monitored to prevent unauthorized access.</li>
          </ul>
          <p>You can request a full copy of our Notice of Privacy Practices at any time from our office.</p>
        </>
      )
    },
    {
      icon: <Eye size={24} />,
      title: "WCAG 2.1 AA+ Accessible",
      description: "Designed for all patients. Features high-contrast typography, screen-reader optimized semantic HTML, and full keyboard navigation support.",
      details: (
        <>
          <p>Healthcare information must be accessible to everyone, regardless of physical or cognitive ability. This platform was engineered following the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA+ level.</p>
          <h4>Accessibility Features:</h4>
          <ul>
            <li><strong>Screen-Reader Compatibility:</strong> Built with strict Semantic HTML and ARIA landmarks to ensure seamless navigation for visually impaired users.</li>
            <li><strong>High Contrast UI:</strong> Our "Liquid Glass" design system is carefully calibrated to meet high contrast ratios, making text highly legible for patients with low vision.</li>
            <li><strong>Keyboard Navigation:</strong> Every interactive element (modals, buttons, forms) can be fully operated without a mouse.</li>
            <li><strong>Readability:</strong> Typography is selected specifically for dyslexia and general legibility, utilizing modern geometric sans-serifs.</li>
          </ul>
        </>
      )
    },
    {
      icon: <FileCheck size={24} />,
      title: "Section 508 Compliant",
      description: "Adheres strictly to US Government visual and technical guidelines for electronic information accessibility.",
      details: (
        <>
          <p>In addition to WCAG standards, this platform complies with Section 508 of the Rehabilitation Act, which requires federal agencies (and their contractors) to make their electronic and information technology (EIT) accessible to people with disabilities.</p>
          <h4>How we align with federal standards:</h4>
          <ul>
            <li><strong>Form Accessibility:</strong> All digital intake and contact forms feature explicit labeling, error-handling, and clear focus states.</li>
            <li><strong>Predictable Layouts:</strong> Navigation and structure are consistent across the entire platform, eliminating confusion for cognitively impaired users.</li>
            <li><strong>No Timed Content:</strong> Users are never rushed or timed out when filling out crucial medical information.</li>
          </ul>
        </>
      )
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "PCI DSS Certified",
      description: "Payment processing via Square ensures all credit card data and transactions meet rigorous Payment Card Industry Data Security Standards.",
      details: (
        <>
          <p>We do not store your raw credit card data on our servers. All financial transactions are securely tokenized and handled directly by Square, a global leader in payment security.</p>
          <h4>Financial Data Protection:</h4>
          <ul>
            <li><strong>PCI DSS Level 1:</strong> Square complies with the highest level of certification in the payments industry.</li>
            <li><strong>Tokenization:</strong> When you enter a card, the sensitive data is immediately replaced with a secure token.</li>
            <li><strong>Fraud Prevention:</strong> Machine learning algorithms monitor transactions 24/7 to block fraudulent activity.</li>
          </ul>
          <p>This allows us to offer you the convenience of paying balances online via Card, Apple Pay, or Google Pay with absolute peace of mind.</p>
        </>
      )
    }
  ];

  return (
    <section className="section compliance-section">
      <div className="container">
        <div className="compliance-layout">
          <div className="compliance-header">
            <h2 className="section-title">Enterprise-Grade Compliance</h2>
            <p className="compliance-description">
              As a premier technology solution developed by Consultifyit Technology Services (CIFY), this platform serves as the gold standard for healthcare digital infrastructure. We prioritize patient privacy, strict US data security regulations, and universal accessibility.
            </p>
          </div>
          
          <div className="compliance-grid">
            {standards.map((std, index) => (
              <div 
                key={index} 
                className="compliance-card interactive"
                onClick={() => setSelectedStandard(std)}
              >
                <div className="compliance-icon">{std.icon}</div>
                <div className="compliance-content">
                  <h4 className="compliance-card-title">{std.title}</h4>
                  <p className="compliance-card-desc">{std.description}</p>
                  <span className="compliance-learn-more">View Documentation &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal 
        isOpen={!!selectedStandard} 
        onClose={() => setSelectedStandard(null)}
        title={selectedStandard?.title}
        icon={selectedStandard?.icon}
      >
        {selectedStandard?.details}
      </Modal>
    </section>
  );
};

export default Compliance;

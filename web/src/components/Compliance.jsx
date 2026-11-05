import React, { useState } from 'react';
import { ShieldCheck, Eye, Lock, FileCheck } from 'lucide-react';
import Modal from './Modal';
import './Compliance.css';

const Compliance = () => {
  const [selectedStandard, setSelectedStandard] = useState(null);

  const standards = [
    {
      icon: <Lock size={24} />,
      title: "HIPAA-Ready Architecture",
      description: "In production, built to HIPAA Security Rule patterns: encryption in transit and at rest, role-based access and audit logging, on hosting covered by a Business Associate Agreement.",
      details: (
        <>
          <p>This concept is a front-end design. A production build for a practice adds the safeguards below, and every vendor that handles Protected Health Information (PHI) signs a Business Associate Agreement.</p>
          <h4>Production safeguards:</h4>
          <ul>
            <li><strong>Encryption:</strong> TLS for all data in transit and AES-256 encryption for data at rest.</li>
            <li><strong>Secure Data Storage:</strong> Patient data is kept on HIPAA-eligible cloud services under a signed BAA, with strict access controls.</li>
            <li><strong>Role-Based Access:</strong> Only authorized medical personnel directly involved in your care have access to your sensitive health information.</li>
            <li><strong>Audit Logging:</strong> Every interaction with patient data is securely logged and monitored to prevent unauthorized access.</li>
          </ul>
                  </>
      )
    },
    {
      icon: <Eye size={24} />,
      title: "Designed to WCAG 2.1 AA",
      description: "Designed for all patients. Features high-contrast typography, screen-reader optimized semantic HTML, and full keyboard navigation support.",
      details: (
        <>
          <p>Healthcare information must be accessible to everyone, regardless of physical or cognitive ability. This design follows the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA.</p>
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
      title: "Section 508 Aligned",
      description: "Follows the US Section 508 guidelines for accessible electronic information.",
      details: (
        <>
          <p>In addition to WCAG standards, this design follows Section 508 of the Rehabilitation Act, which requires federal agencies (and their contractors) to make their electronic and information technology (EIT) accessible to people with disabilities.</p>
          <h4>How we align with federal standards:</h4>
          <ul>
            <li><strong>Form Accessibility:</strong> All digital intake and contact forms feature explicit labeling, error-handling, and clear focus states.</li>
            <li><strong>Predictable Layouts:</strong> Navigation and structure are consistent across the entire platform, eliminating confusion for cognitively impaired users.</li>
            <li><strong>Fair Timeouts:</strong> Security timeouts warn users first and let them extend their session, so no one loses a half-finished form.</li>
          </ul>
        </>
      )
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Payments via Square",
      description: "In production, card payments run through Square, a PCI DSS Level 1 provider, so card details never touch the practice's servers.",
      details: (
        <>
          <p>We do not store your raw credit card data on our servers. All financial transactions are securely tokenized and handled directly by Square, a global leader in payment security.</p>
          <h4>Financial Data Protection:</h4>
          <ul>
            <li><strong>PCI DSS Level 1:</strong> Square complies with the highest level of certification in the payments industry.</li>
            <li><strong>Tokenization:</strong> When you enter a card, the sensitive data is immediately replaced with a secure token.</li>
            <li><strong>Fraud Prevention:</strong> Machine learning algorithms monitor transactions 24/7 to block fraudulent activity.</li>
          </ul>
          <p>Patients can pay balances online by card, Apple Pay or Google Pay.</p>
        </>
      )
    }
  ];

  return (
    <section className="section compliance-section">
      <div className="container">
        <div className="compliance-layout">
          <div className="compliance-header">
            <h2 className="section-title">Built for Healthcare Compliance</h2>
            <p className="compliance-description">
              A concept design by ConsultifyIT Technology Services (CIFY). In production, we build practice websites and patient portals to the standards below: patient privacy, US data security rules and accessibility.
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
                  <span className="compliance-learn-more">Details &rarr;</span>
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

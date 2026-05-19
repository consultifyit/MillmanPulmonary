import React, { useEffect } from 'react';
import { Palette, Type, X } from 'lucide-react';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentColor, setCurrentColor] = React.useState('minimalist');
  const [currentFont, setCurrentFont] = React.useState('luxury');

  const colorThemes = [
    { id: 'hospitality', name: 'Hospitality Luxury', primary: '#1E3A8A', accent: '#A16207' },
    { id: 'clinical', name: 'Clinical Trust', primary: '#0891B2', accent: '#059669' },
    { id: 'minimalist', name: 'Deep Minimalist', primary: '#1C1917', accent: '#B45309' },
    { id: 'wellness', name: 'Natural Wellness', primary: '#415D43', accent: '#B38E5D' }
  ];

  const fontThemes = [
    { id: 'modern', name: 'Geometric Modern', desc: 'Outfit & Work Sans' },
    { id: 'luxury', name: 'Editorial Classic', desc: 'Cormorant Garamond & Libre Baskerville' },
    { id: 'clean', name: 'Medical Clean', desc: 'Figtree & Noto Sans' },
    { id: 'trust', name: 'Professional Authority', desc: 'EB Garamond & Lato' }
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-color', currentColor);
    document.documentElement.setAttribute('data-font', currentFont);
  }, [currentColor, currentFont]);

  return (
    <div className={`theme-switcher ${isOpen ? 'open' : ''}`}>
      <button className="theme-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Palette size={24} />}
      </button>

      <div className="theme-panel">
        <div className="theme-panel-header">
          <h3>Design System Preview</h3>
          <p>Real-time aesthetic controls</p>
        </div>

        <div className="theme-section">
          <h4><Palette size={16} /> Color Palettes</h4>
          <div className="theme-options">
            {colorThemes.map(theme => (
              <button 
                key={theme.id}
                className={`theme-option ${currentColor === theme.id ? 'active' : ''}`}
                onClick={() => setCurrentColor(theme.id)}
              >
                <div className="color-swatches">
                  <span className="swatch" style={{ backgroundColor: theme.primary }}></span>
                  <span className="swatch" style={{ backgroundColor: theme.accent }}></span>
                </div>
                <span>{theme.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="theme-section">
          <h4><Type size={16} /> Typography Pairings</h4>
          <div className="theme-options">
            {fontThemes.map(theme => (
              <button 
                key={theme.id}
                className={`theme-option font-option ${currentFont === theme.id ? 'active' : ''}`}
                onClick={() => setCurrentFont(theme.id)}
              >
                <strong>{theme.name}</strong>
                <span>{theme.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;

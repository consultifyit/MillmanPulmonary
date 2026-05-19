import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Providers from './components/Providers';
import PatientExperience from './components/PatientExperience';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import LeadCapture from './components/LeadCapture';
import Compliance from './components/Compliance';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import MobileFAB from './components/MobileFAB';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Providers />
        <PatientExperience />
        <Locations />
        <Testimonials />
        <LeadCapture />
        <Compliance />
      </main>
      <Footer />
      <ThemeSwitcher />
      <MobileFAB />
    </div>
  );
}

export default App;

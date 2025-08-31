import React from 'react';
import HeroSection from './HeroSection';
import WeddingDetails from './WeddingDetails';
import GettingThere from './GettingThere';
import Registry from './Registry';
import Schedule from './Schedule';
import RSVP from './RSVP';
import FAQ from './FAQ';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <WeddingDetails />
      <GettingThere />
      <Schedule />
      <Registry />
      <RSVP />
      <FAQ />
    </div>
  );
};

export default App;

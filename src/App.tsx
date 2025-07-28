import React from 'react';
import HeroSection from './HeroSection';
import WeddingDetails from './WeddingDetails';
import GettingThere from './GettingThere';
import Registry from './Registry';
import Schedule from './Schedule';
import RSVP from './RSVP';
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
    </div>
  );
};

export default App;

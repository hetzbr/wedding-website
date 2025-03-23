import React from 'react';
import HeroSection from './HeroSection';
import WeddingDetails from './WeddingDetails';
import GettingThere from './GettingThere';
import Registry from './Registry';
import Schedule from './Schedule';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <WeddingDetails />
      <GettingThere />
      <Schedule />
      <Registry />
    </div>
  );
};

export default App;

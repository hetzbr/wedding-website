import React from 'react';
import HeroSection from './HeroSection';
import WeddingDetails from './WeddingDetails';
import GettingThere from './GettingThere';
import Registry from './Registry';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <WeddingDetails />
      <GettingThere />
      <Registry />
    </div>
  );
};

export default App;

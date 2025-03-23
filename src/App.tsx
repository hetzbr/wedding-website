import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import HeroSection from './HeroSection';
import WeddingDetails from './WeddingDetails';
import GettingThere from './GettingThere';
import Registry from './Registry';

import './App.scss';

const App: React.FC = () => {
  return (
    <Parallax pages={4}>
    {/*
      Sticky background layer using <img>:
      - It remains visible from the top (offset 0) until the start of page 1.
      - The inline style zIndex is set to -1 so that later content (like the card) overlays it.
    */}
    <ParallaxLayer sticky={{ start: 0, end: 1 }} style={{ zIndex: -1 }}>
      <img
        src="/images/bridge.jpg"
        alt="Background"
        className="background-img"
        loading="eager"
      />
    </ParallaxLayer>

    {/* Optional overlay content on the first page
    <ParallaxLayer offset={0} speed={0.2}>
      <div className="overlay-content">
        <h1>Scroll Down</h1>
      </div>
    </ParallaxLayer> */}

    {/* Card layer that scrolls into view on page 2 */}
    <ParallaxLayer offset={1} speed={0.5}>
      <WeddingDetails />
      <GettingThere />
      <Registry />
    </ParallaxLayer>

    <ParallaxLayer sticky={{ start: 2, end: 3 }} style={{ zIndex: -1 }} factor={4}>
      <img
        src="/images/city.jpg"
        alt="Background"
        className="background-img"
        loading="eager"
      />
    </ParallaxLayer>

    {/* <ParallaxLayer offset={2} speed={0.5}>
      <GettingThere />
    </ParallaxLayer>

    <ParallaxLayer offset={3} speed={0.5}>
      <Registry />
    </ParallaxLayer> */}

    {/* <ParallaxLayer offset={1} speed={0.8}>
      <WeddingDetails />
    </ParallaxLayer> */}
  </Parallax>
    // <div>
    //   <HeroSection />
    //   <WeddingDetails />
    //   <GettingThere />
    //   <Registry />
    // </div>
  );
};

export default App;

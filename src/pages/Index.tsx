import React from 'react';
import Confetti from '@/components/Confetti';
import Hero from '@/components/Hero';
import FeatureBlocks from '@/components/FeatureBlocks';
import VisionBoard from '@/components/VisionBoard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Confetti />
      <Hero />
      <FeatureBlocks />
      <VisionBoard />
      <Footer />
    </div>
  );
};

export default Index;

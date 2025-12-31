import React from 'react';
import { Button } from '@/components/ui/button';
import Sparkles from './Sparkles';
import { Sparkles as SparklesIcon, PartyPopper } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-midnight">
      <Sparkles />
      
      {/* Radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-20 text-center px-4">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <SparklesIcon className="w-6 h-6 text-primary animate-sparkle" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Welcome to</span>
            <SparklesIcon className="w-6 h-6 text-primary animate-sparkle" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        
        <h1 
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="text-gradient-gold">Happy</span>
          <br />
          <span className="text-foreground">New Year</span>
        </h1>
        
        <div 
          className="text-8xl md:text-9xl lg:text-[12rem] font-display font-bold text-gradient-gold mb-8 animate-float animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          2025
        </div>
        
        <p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          A new chapter begins. Set your intentions, dream big, and make this year extraordinary.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <Button variant="hero" size="xl">
            <PartyPopper className="w-5 h-5" />
            Create Vision Board
          </Button>
          <Button variant="goldOutline" size="xl">
            Explore Templates
          </Button>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

import React from 'react';
import { Target, Heart, Rocket, Stars, Compass, Flame } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Set Goals',
    description: 'Define clear, achievable goals for personal and professional growth.',
    delay: '0.1s',
  },
  {
    icon: Heart,
    title: 'Self-Care',
    description: 'Prioritize your wellbeing with mindful habits and healthy routines.',
    delay: '0.2s',
  },
  {
    icon: Rocket,
    title: 'Dream Big',
    description: 'Visualize your biggest aspirations and take steps to achieve them.',
    delay: '0.3s',
  },
  {
    icon: Stars,
    title: 'Celebrate Wins',
    description: 'Acknowledge every milestone, big or small, on your journey.',
    delay: '0.4s',
  },
  {
    icon: Compass,
    title: 'Find Direction',
    description: 'Discover your purpose and align your actions with your values.',
    delay: '0.5s',
  },
  {
    icon: Flame,
    title: 'Stay Motivated',
    description: 'Keep the fire burning with inspiration and accountability.',
    delay: '0.6s',
  },
];

const FeatureBlocks = () => {
  return (
    <section className="py-24 px-4 bg-gradient-midnight relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient-gold">Make 2025</span>{' '}
            <span className="text-foreground">Your Year</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start the new year with intention. These pillars will guide you toward your best self.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-card border border-border/50 rounded-2xl p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: feature.delay }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;

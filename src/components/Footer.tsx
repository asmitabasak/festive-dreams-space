import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-midnight-light border-t border-border/30">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-display text-2xl font-bold text-gradient-gold">2025</span>
          </div>
          <p className="text-muted-foreground text-center">
            Made with <Heart className="w-4 h-4 inline text-rose-500 mx-1" /> for dreamers everywhere
          </p>
          <p className="text-sm text-muted-foreground/60">
            © 2025 Happy New Year. Make it count.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

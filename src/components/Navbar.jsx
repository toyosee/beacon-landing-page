
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section: Removed padding wrapper for tighter alignment */}
        <a href="#" className="flex items-center gap-3 hover:opacity-90 transition-opacity group">
          <img 
            src="beaconIcon.png" 
            alt="Beacon Logo" 
            className="w-10 h-10 object-contain" 
          />
          <span className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Beacon
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About Us</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#download" className="hover:text-white transition-colors">Download</a>
        </div>
      </div>
    </nav>
  );
}

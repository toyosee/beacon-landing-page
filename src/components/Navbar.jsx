
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    if (!isHome) return; // If not home, standard navigation handles it via Link
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity group">
          <img 
            src="beaconIcon.png" 
            alt="Beacon Logo" 
            className="w-10 h-10 object-contain" 
          />
          <span className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Beacon<span className='text-blue-500'>IO</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {isHome ? (
            <>
              <button onClick={() => handleScrollToSection('features')} className="hover:text-white transition-colors">Features</button>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <button onClick={() => handleScrollToSection('contact')} className="hover:text-white transition-colors">Contact</button>
              <button onClick={() => handleScrollToSection('download')} className="hover:text-white transition-colors">Download</button>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
              <Link to="/#download" className="hover:text-white transition-colors">Download</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

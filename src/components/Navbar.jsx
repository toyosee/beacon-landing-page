
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavLinks = ({ mobile = false, handleNav, isHome }) => (
  <>
    <button onClick={() => handleNav(isHome ? '#features' : '/')} className={`hover:text-white transition-colors text-left ${mobile ? 'py-2 border-b border-slate-800' : ''}`}>
      {isHome ? 'Features' : 'Home'}
    </button>
    
    <Link to="/about" className={`hover:text-white transition-colors ${mobile ? 'py-2 border-b border-slate-800' : ''}`}>
      About Us
    </Link>
    
    {!isHome && (
      <Link to="/careers" className={`hover:text-white transition-colors ${mobile ? 'py-2 border-b border-slate-800' : ''}`}>
         Careers
      </Link>
    )}

    <button onClick={() => handleNav('#contact')} className={`hover:text-white transition-colors text-left ${mobile ? 'py-2 border-b border-slate-800' : ''}`}>
      Contact
    </button>

    <button onClick={() => handleNav('#download')} className={`hover:text-white transition-colors text-left ${mobile ? 'py-2' : ''}`}>
      Download
    </button>
  </>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    // setIsOpen(false);
  }, [location]);

  const handleNav = (target) => {
    setIsOpen(false);
    if (target.startsWith('#')) {
      const id = target.substring(1);
      if (isHome) {
        const element = document.getElementById(id);
        if (element) {
            // Offset for fixed header
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
      } else {
        navigate(`/${target}`);
      }
    } else {
      navigate(target);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'} ${isOpen ? 'bg-slate-950' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity group z-50">
            <img 
                src="beaconIcon.png" 
                alt="Beacon Logo" 
                className="w-10 h-10 object-contain" 
            />
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Beacon<span className='text-blue-500'>IO</span>
            </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                <NavLinks handleNav={handleNav} isHome={isHome} />
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-slate-300 hover:text-white z-50 p-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 animate-in slide-in-from-top-5 fade-in duration-200 shadow-2xl h-screen">
            <div className="flex flex-col p-6 text-base font-medium text-slate-300">
                <NavLinks mobile={true} handleNav={handleNav} isHome={isHome} />
            </div>
        </div>
      )}
    </nav>
  );
}

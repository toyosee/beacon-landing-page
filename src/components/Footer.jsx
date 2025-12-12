
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SurveyDocButton from './SurveyDocButton';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Brand */}
        <div className="text-left max-w-xs">
          <div className="text-2xl font-bold text-white mb-4">Beacon<span className="text-blue-500">IO</span></div>
          <p className="text-slate-500 text-sm mb-6">
            Empowering neighborhoods with real-time, verified safety and utility data.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Links Container */}
        <div className="flex flex-wrap gap-16">
            {/* Legal */}
            <div className="flex flex-col gap-4 text-sm text-slate-400 font-medium">
                <h4 className="text-white font-bold mb-2">Legal</h4>
                <Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-blue-500 transition-colors">Cookie Policy</Link>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4 text-sm text-slate-400 font-medium">
                <h4 className="text-white font-bold mb-2">Company</h4>
                <Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
                <Link to="/careers" className="hover:text-blue-500 transition-colors">Careers</Link>
                <Link to="/#contact" className="hover:text-blue-500 transition-colors">Contact</Link>
            </div>

            {/* Internal / Tools */}
            <div className="flex flex-col gap-4 text-sm text-slate-400 font-medium">
                <h4 className="text-white font-bold mb-2">Internal</h4>
                <a href="#" className="hover:text-blue-500 transition-colors">Web Version</a>
                <SurveyDocButton />
            </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
        © {currentYear} BeaconIO. All rights reserved.
      </div>
    </footer>
  );
}

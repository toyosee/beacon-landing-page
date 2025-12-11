
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <div className="text-2xl font-bold text-white mb-2">Beacon</div>
          <p className="text-slate-500 text-sm">© {currentYear} Beacon Inc. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>

        <div className="flex gap-8 text-sm text-slate-400 font-medium">
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
}

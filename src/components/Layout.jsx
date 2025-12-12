
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-slate-950 text-slate-50 selection:bg-blue-500 selection:text-white">
      <ScrollToTop />
      {/* Background Gradients (Fixed across pages) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

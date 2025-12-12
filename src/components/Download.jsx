
import React from 'react';
import { Apple } from 'lucide-react';

export default function Download() {
  return (
    <section id="download" className="py-24 px-6 bg-slate-900 relative overflow-hidden border-t border-slate-800">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to join the <span className="text-blue-500">Community?</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
                Download BeaconIO today and start contributing to a safer, more informed neighborhood. Available now on iOS and Android.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
                {/* iOS Button */}
                <button className="flex items-center gap-4 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 text-white px-8 py-4 rounded-2xl transition-all duration-300 group shadow-lg shadow-blue-900/5 hover:shadow-blue-500/20 hover:-translate-y-1">
                    <Apple className="w-10 h-10 fill-current text-white" />
                    <div className="text-left">
                        <div className="text-xs text-slate-400 font-medium group-hover:text-blue-400 transition-colors">Download on the</div>
                        <div className="text-2xl font-bold leading-none mt-1">App Store</div>
                    </div>
                </button>

                {/* Android Button */}
                <button className="flex items-center gap-4 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-green-500/50 text-white px-8 py-4 rounded-2xl transition-all duration-300 group shadow-lg shadow-blue-900/5 hover:shadow-green-500/20 hover:-translate-y-1">
                    {/* Google Play Styled Icon */}
                    <svg className="w-9 h-9 text-white group-hover:text-green-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M5 3.5V20.5L18.5 12L5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
                         <path d="M6 6L15 12L6 18" fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </svg>
                    <div className="text-left">
                        <div className="text-xs text-slate-400 font-medium group-hover:text-green-400 transition-colors">GET IT ON</div>
                        <div className="text-2xl font-bold leading-none mt-1">Google Play</div>
                    </div>
                </button>
            </div>
            
            {/* Rating Mockup */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-800">
                    <div className="flex text-yellow-500 gap-0.5">★★★★★</div>
                    <span className="font-semibold text-slate-300">4.9/5 Rating</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full"></div>
                <div className="bg-slate-800/50 px-4 py-2 rounded-full border border-slate-800 font-semibold text-slate-300">
                    1K+ Downloads
                </div>
            </div>
        </div>
    </section>
  );
}

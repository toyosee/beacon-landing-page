
import React from 'react';
import { Target, Heart, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Empowering the <br />
            <span className="text-blue-500">Collective Voice.</span>
          </h2>
          
          <p className="text-slate-400 text-lg leading-relaxed">
            Beacon was born from a simple idea: information is safety. In times of scarcity or uncertainty, your neighbor is your best source of truth.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed">
            We are building a decentralized network where trust is currency. By verifying real-time reports of fuel, traffic, and hazards, we turn individual observations into community resilience.
          </p>

          <div className="pt-4 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">50k+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">1.2m</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Alerts Sent</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Verification Rate</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
            <p className="text-slate-400">To reduce anxiety and improve daily logistics through transparent, real-time community data.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/50 transition-colors ml-0 lg:ml-8">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Community First</h3>
            <p className="text-slate-400">We prioritize user safety and privacy above all else. No data selling, no intrusive tracking.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-green-500/50 transition-colors">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Global Vision</h3>
            <p className="text-slate-400">Starting local, expanding global. Every city deserves a pulse.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

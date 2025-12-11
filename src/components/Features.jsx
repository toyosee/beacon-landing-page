
import React from 'react';
import { Map, Users, ShieldAlert, Zap, Radio, Lock } from 'lucide-react';

const FEATURE_LIST = [
  {
    icon: <Radio className="w-6 h-6 text-blue-400" />,
    title: "Live Radar Map",
    desc: "Visualize incidents around you with our interactive heatmap. See trouble spots before you encounter them."
  },
  {
    icon: <Users className="w-6 h-6 text-purple-400" />,
    title: "Crowd Verification",
    desc: "Trust issues? Our reputation system ensures only verified reports from trusted neighbors make it to your feed."
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Instant Alerts",
    desc: "Get push notifications the second fuel arrives at a station or a traffic jam clears up in your area, or an ATM has cash."
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-red-400" />,
    title: "Hazard Reporting",
    desc: "From potholes to security threats, report dangers instantly to warn others and keep the community safe."
  },
  {
    icon: <Map className="w-6 h-6 text-green-400" />,
    title: "Offline Support",
    desc: "Bad network? No problem. The app caches critical data so you can access recent alerts even when offline."
  },
  {
    icon: <Lock className="w-6 h-6 text-slate-400" />,
    title: "Privacy First",
    desc: "Your location is only shared when you choose to post. Browsing the map is completely anonymous."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Beacon?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Built for resilience. Whether it's finding resources during scarcity or navigating chaos, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_LIST.map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

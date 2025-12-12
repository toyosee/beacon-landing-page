
import React from 'react';
import { ArrowRight, Briefcase, Code, Megaphone } from 'lucide-react';

const JOBS = [
  { title: "Senior React Native Engineer", dept: "Engineering", type: "Remote", icon: <Code /> },
  { title: "Backend Systems Architect", dept: "Engineering", type: "Hybrid", icon: <Code /> },
  { title: "Community Manager (Lagos)", dept: "Operations", type: "On-site", icon: <Megaphone /> },
  { title: "Product Designer", dept: "Design", type: "Remote", icon: <Briefcase /> },
];

export default function Careers() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Join the <span className="text-blue-500">Mission.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          We are looking for passionate individuals who want to use technology to solve real-world logistical and safety problems.
        </p>
      </div>

      <div className="space-y-4">
        {JOBS.map((job, i) => (
          <div key={i} className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                {job.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
                <div className="flex gap-3 text-sm text-slate-500 mt-1">
                  <span>{job.dept}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-slate-600 group-hover:text-white group-hover:translate-x-2 transition-all" />
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-slate-900/30 border border-dashed border-slate-700 rounded-2xl text-center">
        <h3 className="text-xl font-bold mb-2">Don't see your role?</h3>
        <p className="text-slate-400 mb-6">We are always looking for exceptional talent. Send us your resume.</p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20">
          Email Talent Team
        </button>
      </div>
    </div>
  );
}

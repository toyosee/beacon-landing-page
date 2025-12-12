import React from 'react';
import { Shield, Users, Globe, Zap, Linkedin, Instagram, Facebook } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop'

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alice Morgan",
      designation: "Co-Founder & CEO",
      brief: "Visionary leader passionate about building resilient communities through technology.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      links: {
        linkedin: "https://linkedin.com/in/alicemorgan",
        instagram: "https://instagram.com/alice.morgan",
        facebook: "https://facebook.com/alice.morgan"
      }
    },
    {
      name: "Brian Kim",
      designation: "CTO",
      brief: "Engineer with expertise in distributed systems and real-time data pipelines.",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      links: {
        linkedin: "https://linkedin.com/in/briankim",
        instagram: "https://instagram.com/brian.kim",
        facebook: "https://facebook.com/brian.kim"
      }
    },
    {
      name: "Catherine Lee",
      designation: "Head of Community",
      brief: "Organizer focused on empowering neighborhoods with verified local intelligence.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      links: {
        linkedin: "https://linkedin.com/in/catherinelee",
        instagram: "https://instagram.com/catherine.lee",
        facebook: "https://facebook.com/catherine.lee"
      }
    },
    {
      name: "David Smith",
      designation: "Lead Designer",
      brief: "Design thinker creating intuitive interfaces for real-time crisis navigation.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      links: {
        linkedin: "https://linkedin.com/in/davidsmith",
        instagram: "https://instagram.com/david.smith",
        facebook: "https://facebook.com/david.smith"
      }
    }
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <ScrollToTop />
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Building Digital <span className="text-blue-500">Resilience.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          We are on a mission to democratize real-time local intelligence, ensuring no community is left in the dark during daily challenges or emergencies.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
          <div className="w-full h-64 bg-blue-900/20 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
            <Globe className="w-24 h-24 text-blue-400 opacity-80" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              It started during a fuel scarcity crisis. Information was fragmented, rumors were rampant, and people wasted hours in queues that didn't exist. We realized that while the official news was slow, the people on the ground knew exactly what was happening.
            </p>
            <p>
              BeaconIO was built to bridge that gap. By connecting neighbors and validating their reports through a trust-based algorithm, we created a living, breathing map of the city's pulse.
            </p>
            <p>
              We plan to serve thousands of users, helping them navigate traffic gridlocks, find essential utilities, and stay safe from local hazards.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Shield className="w-8 h-8 text-blue-400"/>, title: "Trust Above All", desc: "We prioritize verified information. Our reputation system ensures bad actors are filtered out instantly." },
            { icon: <Users className="w-8 h-8 text-purple-400"/>, title: "Community First", desc: "We build for the people. Our features are dictated by the needs of the neighborhoods we serve." },
            { icon: <Zap className="w-8 h-8 text-yellow-400"/>, title: "Radical Speed", desc: "In emergencies, seconds matter. Our architecture is designed for millisecond-latency updates." }
          ].map((val, i) => (
            <div key={i} className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-colors">
              <div className="mb-6">{val.icon}</div>
              <h3 className="text-xl font-bold mb-3">{val.title}</h3>
              <p className="text-slate-400">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team CTA */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-12 text-center border border-blue-500/20">
        <h2 className="text-3xl font-bold mb-4">Led by Builders</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Our team comes from backgrounds in emergency response, distributed systems, and community organizing.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-colors"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-slate-700"
              />
              <h3 className="text-lg font-bold text-slate-200">{member.name}</h3>
              <p className="text-sm text-blue-400 mb-2">{member.designation}</p>
              <p className="text-slate-400 text-sm mb-4">{member.brief}</p>
              <div className="flex justify-center gap-4 text-xl">
                <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.links.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={member.links.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
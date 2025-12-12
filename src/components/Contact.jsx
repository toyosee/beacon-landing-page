
import React from 'react';
import { Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in <span className="text-blue-500">Touch</span></h2>
            <p className="text-slate-400 text-lg mb-12">
              Have questions, partnership inquiries, or feedback? We'd love to hear from you. Our team usually responds within 2 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email Us</h3>
                  <p className="text-slate-400">support@beacon.com</p>
                  <p className="text-slate-400">partners@beacon.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">HQ Location</h3>
                  <p className="text-slate-400">Barterverse Tech Hub</p>
                  <p className="text-slate-400">NO.1 Gongola. Rd. Barnawa, Kaduna State</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Live Chat</h3>
                  <p className="text-slate-400">Available Mon-Fri, 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                  <option>General Inquiry</option>
                  <option>Report a Bug</option>
                  <option>Partnership</option>
                  <option>Press</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                <textarea rows="4" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

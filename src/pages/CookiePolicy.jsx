
import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto prose prose-invert prose-lg">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <section className="mb-12 space-y-4">
        <p className="text-slate-300">
          This Cookie Policy explains how BeaconIO uses cookies and similar technologies to recognize you when you visit our website or use our app.
        </p>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-white">What are Cookies?</h2>
        <p className="text-slate-300">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide reporting information.
        </p>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-white">How We Use Cookies</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li><strong>Essential Cookies:</strong> Necessary for the app to function (e.g., keeping you logged in).</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the app so we can improve features (e.g., Google Analytics).</li>
          <li><strong>Preference Cookies:</strong> Remember your settings, such as language or dark mode preference.</li>
        </ul>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-white">Managing Cookies</h2>
        <p className="text-slate-300">
          You have the right to accept or reject cookies. You can set your browser controls to accept or refuse cookies. However, rejecting essential cookies may impact the functionality of the BeaconIO platform.
        </p>
      </section>
    </div>
  );
}

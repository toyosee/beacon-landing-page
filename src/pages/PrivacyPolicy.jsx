
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto prose prose-invert prose-lg">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-slate-400 mb-8">Last Updated: December 12, 2025</p>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
        <p className="text-slate-300">
          At BeaconIO we take your privacy seriously. This policy explains how we collect, use, and protect your personal information when you use our mobile application and services. We are committed to transparency and only collecting data that is essential for the functionality of our emergency and utility notification network.
        </p>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li><strong>Location Data:</strong> We collect your precise location only when you are actively using the app to show relevant local alerts or when you post a new alert.</li>
          <li><strong>User Profile:</strong> Name, email address, and profile picture provided during registration.</li>
          <li><strong>Usage Data:</strong> Interaction logs, such as alerts confirmed, disputes raised, and comments posted.</li>
          <li><strong>Device Information:</strong> Device model, OS version, and unique device identifiers for push notifications.</li>
        </ul>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-white">3. How We Use Your Data</h2>
        <p className="text-slate-300">
          Your data is used primarily to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Verify the authenticity of alerts based on proximity.</li>
          <li>Send you push notifications for hazards within your selected radius.</li>
          <li>Calculate reputation scores to maintain community trust.</li>
          <li>Improve app performance and fix bugs.</li>
        </ul>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Data Sharing</h2>
        <p className="text-slate-300">
          We do <strong>not</strong> sell your personal data to third parties. We may share anonymized, aggregated data (e.g., "Traffic gridlock trends in City X") with municipal partners to improve city infrastructure.
        </p>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-white">5. Contact Us</h2>
        <p className="text-slate-300">
          If you have any questions about this Privacy Policy, please contact us at <span className="text-blue-400">privacy@beaconio.com</span>.
        </p>
      </section>
    </div>
  );
}

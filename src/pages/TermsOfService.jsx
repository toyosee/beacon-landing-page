
import React from 'react';

export default function TermsOfService() {
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto prose prose-invert prose-lg">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-slate-400 mb-8">Last Updated: December 12, 2025</p>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
        <p className="text-slate-300">
          By accessing or using the BeaconIO application, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
        </p>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-white">2. User Conduct</h2>
        <p className="text-slate-300">
          You agree to use the app responsibly. The following actions are prohibited and may result in an immediate ban:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Posting false or misleading alerts intentionally.</li>
          <li>Using hate speech, harassment, or abusive language in comments.</li>
          <li>Spamming the network with duplicate or irrelevant content.</li>
          <li>Attempting to manipulate reputation scores.</li>
        </ul>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Content Ownership</h2>
        <p className="text-slate-300">
          You retain ownership of the content (text, images) you post. However, by posting, you grant BeaconIO a non-exclusive, worldwide license to use, display, and distribute said content within the platform.
        </p>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Liability Disclaimer</h2>
        <p className="text-slate-300">
          BeaconIO provides information "as is". While we strive for accuracy through community verification, we are not liable for any damages arising from reliance on the alerts provided. Always use personal judgment and follow official emergency instructions.
        </p>
      </section>
    </div>
  );
}

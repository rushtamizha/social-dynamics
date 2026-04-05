
import React from "react";

export default function PrivacyPage() {
  return (
    <main className="pt-40 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">Last Updated: April 2026</p>
        
        <div className="space-y-10 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>Welcome to Social Dynamics. We value your privacy and the security of your data. This policy explains how we collect, use, and protect your information when you visit socialdynamics.cloud or use our SaaS products.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information Collection</h2>
            <p>We collect information you provide directly to us, such as when you fill out an enquiry form, including your name, email address, and project requirements. We also collect automated data via log files, including IP addresses and browser types.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Use of Data</h2>
            <p>Your data is used to provide and improve our services, communicate with you regarding project inquiries, and ensure the security of our SaaS platforms like LeadFlow CRM.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Your Rights</h2>
            <p>You have the right to request access to the personal data we hold, request corrections, or ask for the deletion of your information. For any such requests, please contact team@socialdynamics.cloud.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
import React from "react";

export default function TermsPage() {
  return (
    <main className="pt-40 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms and Conditions</h1>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">Last Updated: April 2026</p>
        
        <div className="space-y-10 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing socialdynamics.cloud, you agree to be bound by these terms, all applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using this site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Service License</h2>
            <p>Permission is granted to use our SaaS products and website materials for professional business purposes. This is a license grant, not a transfer of title. You may not reverse engineer our proprietary AI tools or LeadFlow CRM software.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Limitations of Liability</h2>
            <p>Social Dynamics shall not be held liable for any damages arising out of the use or inability to use the materials on our website, even if notified orally or in writing of the possibility of such damage.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
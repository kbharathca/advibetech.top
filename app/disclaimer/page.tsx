import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AlertTriangle, ArrowLeft, ShieldAlert, CheckCircle, Scale, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Non-Affiliation & Election Disclaimer | AdVibe Tech - Google & Meta Compliant',
  description: 'Official Non-Affiliation and Election Advertising Disclaimer for AdVibe Tech (advibetech.top). Fully compliant with Google Ads and Meta Advertising Standards for political and commercial advertising.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-200 font-medium">Non-Affiliation & Legal Disclaimer</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Policy & Regulatory Transparency Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Non-Affiliation & Advertising Disclaimer
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Mandatory Disclosure for Google Ads & Meta Advertising Standards Compliance &bull; Last Revised: November 2026
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-blue-500/15 border-2 border-amber-500/30 space-y-3">
          <div className="flex items-center gap-2.5 text-amber-400 font-extrabold text-sm sm:text-base">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span>Independent Private Commercial Enterprise Declaration</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            <strong>AdVibe Tech</strong> (Proprietor: SURA DEVI PRASAD, Rajampet, Kadapa District, Andhra Pradesh) is a privately owned and operated commercial manufacturing business and digital marketing consultancy. 
            <br className="hidden sm:inline" />
            <strong>AdVibe Tech is NOT affiliated with, sponsored by, endorsed by, authorized by, or in any way connected with the Election Commission of India (ECI), any State Election Commission, any government agency, or any political party.</strong>
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* Section 1: Non-Affiliation with Government & Electoral Authorities */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              1. Non-Affiliation with Government & Statutory Bodies
            </h2>
            <p>
              In accordance with Google Ads Misrepresentation Policies and consumer protection regulations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                This website (<a href="https://advibetech.top" className="text-amber-400 underline">advibetech.top</a>) is neither a government website nor an official portal of any statutory electoral authority.
              </li>
              <li>
                We do not issue official election identification, voter ID cards, nomination certificates, or official ballot papers.
              </li>
              <li>
                Our operations are strictly limited to the private contract manufacturing of promotional publicity merchandise (custom keychains, t-shirts, mobile stickers, placards, badges) and commercial digital advertising execution.
              </li>
            </ul>
          </section>

          {/* Section 2: Non-Partisan Stand & Open Commercial Services */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              2. Non-Partisan Service & Demonstration Portfolio
            </h2>
            <p>
              AdVibe Tech operates on the principle of equal, non-discriminatory commercial access:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                We do not discriminate between political parties, registered organizations, or independent candidates. Any law-abiding individual or organization wishing to order promotional items or digital marketing is served equally upon lawful commercial terms.
              </li>
              <li>
                Any election symbols, color schemes, themes (such as yellow, blue, red, green, tricolor), or sample product mockups depicted on our website, banners, or video walkthroughs are displayed <strong>strictly for illustrative, educational, and manufacturing capability demonstration purposes</strong>.
              </li>
              <li>
                Displaying sample mockups of election symbols does NOT imply any official endorsement, sponsorship, or exclusive agreement with any candidate or party.
              </li>
            </ul>
          </section>

          {/* Section 3: Campaign Outcomes & Realistic Representations */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              3. Campaign Outcomes & No Victory Guarantee
            </h2>
            <p>
              In compliance with Meta and Google policies prohibiting unrealistic promises or misleading claims:
            </p>
            <p>
              Promotional merchandise (keychains, t-shirts, stickers) and digital marketing campaigns (Meta ads, Instagram reels, WhatsApp broadcasts) are communication mediums intended to increase voter awareness, enhance brand visibility, and facilitate candidate outreach.
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <strong>Explicit Clarification:</strong> AdVibe Tech does not promise, represent, warrant, or guarantee any specific electoral outcome, ballot victory, vote tally, or election result. Election victories depend entirely on voter sentiment, local political dynamics, candidate credibility, and voter turnout.
            </div>
          </section>

          {/* Section 4: Model Code of Conduct & Client Compliance */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              4. Client Responsibility for Model Code of Conduct (MCC)
            </h2>
            <p>
              Clients purchasing merchandise or commissioning digital marketing services are solely responsible for compliance with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>The Model Code of Conduct (MCC) enforced by the Election Commission of India (ECI) or State Election Commissions.</li>
              <li>Obtaining mandatory prior certification or pre-certification for political advertisements from Media Certification and Monitoring Committees (MCMC), where applicable under local electoral laws.</li>
              <li>Accounting for merchandise expenditure in the candidate&apos;s official election expense returns.</li>
              <li>Ensuring that candidate photos, slogans, and symbols provided to us for printing are fully authorized and non-defamatory.</li>
            </ul>
          </section>

          {/* Section 5: Meta & Google Ads Platform Disclaimers */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              5. Meta & Google Advertising Disclosures
            </h2>
            <p>
              When AdVibe Tech assists clients with digital advertising campaigns on Meta platforms (Facebook, Instagram) and Google:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Ads are run in compliance with Meta&apos;s rules for &ldquo;Ads About Social Issues, Elections or Politics,&rdquo; including identity verification and transparent &ldquo;Paid for by&rdquo; disclaimers when required.</li>
              <li>All claims regarding turnaround times, fabric quality, and minimum order quantities on our website are truthful, substantiated, and backed by our actual factory operations in Rajampet.</li>
            </ul>
          </section>

          {/* Section 6: Inquiries & Verification */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              6. Factory & Proprietor Verification
            </h2>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
              <p><strong className="text-white">Business Name:</strong> AdVibe Tech</p>
              <p><strong className="text-white">Founder & Proprietor:</strong> SURA DEVI PRASAD</p>
              <p><strong className="text-white">Physical Location:</strong> 6/279 B, Balaji Nagar, Rajampet, Kadapa District, Andhra Pradesh - 516115</p>
              <p><strong className="text-white">Direct Phone:</strong> <a href="tel:+917075209795" className="text-blue-400 underline">+91 7075209795</a></p>
              <p><strong className="text-white">Email Address:</strong> <a href="mailto:support@advibetech.com" className="text-amber-400 underline">support@advibetech.com</a></p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <Link href="/shipping-policy" className="text-xs text-slate-400 hover:text-white">
            &larr; Shipping & Delivery Policy
          </Link>
          <Link href="/contact" className="text-xs text-amber-400 hover:underline">
            Contact Us & Factory Location &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

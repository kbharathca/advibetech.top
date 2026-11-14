'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

export default function ContactPage() {
  const { triggerLightTap, triggerSuccessHaptic } = useHaptic();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    triggerSuccessHaptic();
    setSent(true);

    const formatted = `💬 *AdVibe Tech Website Inquiry* 💬
----------------------------------
👤 *Name:* ${name.trim()}
📱 *Phone:* ${phone.trim()}
📍 *Location:* ${location.trim() || 'Not specified'}
📝 *Requirement:* ${message.trim() || 'Merchandise and digital marketing consultation'}
----------------------------------
_Sent from Contact page (advibetech.top)_`;

    const encoded = encodeURIComponent(formatted);
    const waUrl = `https://wa.me/917075209795?text=${encoded}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  const openGoogleMaps = () => {
    triggerLightTap();
    window.open('https://www.google.com/maps/search/?api=1&query=Balaji+Nagar,+Rajampet,+Kadapa+516115', '_blank');
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-slate-950 text-slate-100 font-sans">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-200 font-medium">Contact Us</span>
        </div>

        {/* Page Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Manufacturer Contact</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact AdVibe Tech
          </h1>
          <p className="text-sm text-slate-400">
            Have questions about custom campaign keychains, bulk T-shirts, mobile stickers, or digital marketing? Reach out directly to our workshop founder.
          </p>
        </div>

        {/* Grid Layout: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Workshop & Office Information
              </span>
              <h2 className="text-xl font-black text-white">SURA DEVI PRASAD</h2>
              <p className="text-xs text-slate-400">Proprietor, AdVibe Tech</p>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              {/* Address */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-white block">Workshop Address</span>
                  <p className="text-slate-400 leading-relaxed">
                    6/279 B, Balaji Nagar, Rajampet, Kadapa District, Andhra Pradesh - 516115
                  </p>
                  <button
                    onClick={openGoogleMaps}
                    className="text-amber-400 hover:text-amber-300 font-semibold underline pt-1 inline-block"
                  >
                    View on Google Maps &rarr;
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-white block">Direct Phone Line</span>
                  <a href="tel:+917075209795" className="text-blue-400 font-bold hover:underline block text-sm">
                    +91 7075209795
                  </a>
                  <p className="text-[11px] text-slate-500">Call anytime between 9:00 AM – 9:00 PM IST</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-white block">WhatsApp Direct Chat</span>
                  <a
                    href="https://wa.me/917075209795?text=Hello%20Sura%20Devi%20Prasad%20garu%2C%20I%20have%20an%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold hover:underline block text-sm"
                  >
                    +91 7075209795
                  </a>
                  <p className="text-[11px] text-slate-500">Quick 5-minute reply for mockups and quotes</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                <Mail className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-white block">Email Support</span>
                  <a href="mailto:contact@advibetech.top" className="text-purple-300 font-bold hover:underline block">
                    contact@advibetech.top
                  </a>
                  <p className="text-[11px] text-slate-500">For quotations, design files & invoices</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-white block">Working Hours</span>
                  <p className="text-slate-300">Monday to Sunday: 9:00 AM – 9:00 PM IST</p>
                  <p className="text-[11px] text-emerald-400 font-semibold">Open all 7 days during campaign season</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Quick WhatsApp Quote
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Send a Message to Sura Devi Prasad
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Enter your details below to start a direct WhatsApp chat with our workshop founder.
              </p>
            </div>

            {sent ? (
              <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Opening WhatsApp...</h3>
                <p className="text-xs text-slate-300">
                  Your inquiry is ready for WhatsApp (+91 7075209795). If WhatsApp did not open automatically, click below:
                </p>
                <a
                  href={`https://wa.me/917075209795?text=Hello%20Sura%20Devi%20Prasad%20garu%2C%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp Directly</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">
                      Your Name / Candidate Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Reddy"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">
                      Phone Number (WhatsApp) <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Village, Mandal & District
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Rajampet Mandal, Kadapa District"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    What Items Do You Need?
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Need 1,000 double-sided keychains and 50 T-shirts with candidate photo, plus quote for social media ads in our mandal."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition active:scale-95"
                >
                  <Send className="w-4 h-4 fill-current" />
                  <span>Send WhatsApp Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

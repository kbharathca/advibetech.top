'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, Send, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface BookingFormProps {
  initialService?: string;
  initialMessage?: string;
}

export function BookingForm({ initialService, initialMessage }: BookingFormProps) {
  const { triggerLightTap, triggerSuccessHaptic } = useHaptic();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState(
    initialService || 'Campaign Merchandise (Keychains, T-Shirts, Stickers)'
  );
  const [message, setMessage] = useState(initialMessage || '');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update initialMessage when changed from outside (e.g. clicking a combo or product)
  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage('Please enter your name or candidate name');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }

    setErrorMessage('');
    triggerSuccessHaptic();
    setSubmitted(true);

    // Format WhatsApp inquiry directly to owner Sura Devi Prasad
    const formattedMessage =
`🗳️ *AdVibe Tech - Direct Booking & Inquiry* 🗳️
-----------------------------------------
👤 *Name / Candidate:* ${name.trim()}
📱 *Mobile Number:* ${phone.trim()}
💼 *Service Required:* ${serviceType}
📝 *Requirement / Message:* ${message.trim() || 'Please share pricing, design mockups, and bulk discount details.'}
-----------------------------------------
_Sent via Official Website (advibetech.top)_
_Direct to Owner: SURA DEVI PRASAD (+91 7075209795)_`;

    const encoded = encodeURIComponent(formattedMessage);
    const waUrl = `https://api.whatsapp.com/send?phone=917075209795&text=${encoded}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  const handleReset = () => {
    triggerLightTap();
    setSubmitted(false);
  };

  return (
    <section id="booking" className="py-14 px-3 sm:px-6 w-full max-w-full overflow-hidden">
      <div className="max-w-2xl mx-auto w-full">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-emerald-500/40 p-4 sm:p-8 shadow-2xl relative overflow-hidden w-full max-w-full">
          {/* Header */}
          <div className="text-center space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Quick WhatsApp Quote & Booking</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Get an Instant Quote
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Fill in your details below. Your request will open directly in WhatsApp to owner Sura Devi Prasad for immediate pricing and samples.
            </p>
          </div>

          {/* Form / Submitted Success View */}
          {submitted ? (
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white">Opening WhatsApp...</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Your inquiry has been formatted and directed to <strong className="text-white">+91 7075209795</strong>.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                <a
                  href={`https://wa.me/917075209795`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp Directly</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-900/60 border border-red-500/50 text-red-200 text-xs font-semibold text-center">
                  {errorMessage}
                </div>
              )}

              {/* 1. Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                  <span>Your Name / Candidate Name <span className="text-emerald-400">*</span></span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Reddy"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
                />
              </div>

              {/* 2. Mobile Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                  <span>Mobile Number (WhatsApp) <span className="text-emerald-400">*</span></span>
                  <span className="text-[10px] text-slate-400">10-digit number</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="9876543210"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
                  />
                </div>
              </div>

              {/* 3. Type of Service Required */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Select Type of Service Required <span className="text-emerald-400">*</span>
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => {
                    triggerLightTap();
                    setServiceType(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                >
                  <option value="Campaign Merchandise (Keychains, T-Shirts, Stickers)">
                    Campaign Merchandise (Keychains, T-Shirts, Stickers, Placards)
                  </option>
                  <option value="Digital Marketing & Social Media Ads (Meta, Instagram, WhatsApp)">
                    Digital Marketing & Social Media Ads (Meta, Instagram, WhatsApp)
                  </option>
                  <option value="Complete Campaign Combo Package (Merchandise + Digital Ads)">
                    Complete Campaign Combo Package (Merchandise + Digital Ads)
                  </option>
                  <option value="Other Custom Requirement / General Inquiry">
                    Other Custom Requirement / General Inquiry
                  </option>
                </select>
              </div>

              {/* 4. Message / Requirement */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Message / Requirement Details
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Need 1,000 double-sided keychains and 50 T-shirts for upcoming panchayat elections in Kadapa district."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition active:scale-95 border border-emerald-300/30"
                >
                  <Send className="w-4 h-4 fill-current" />
                  <span>Send Direct WhatsApp Inquiry</span>
                </button>
              </div>

              {/* Trust Footer */}
              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct to Sura Devi Prasad</span>
                </span>
                <span>•</span>
                <span>Replies in 5 minutes</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

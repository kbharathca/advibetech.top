'use client';

import React from 'react';
import { MapPin, Phone, Mail, User, ShieldCheck, ExternalLink, Award } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

export function ProprietorTrust() {
  const { triggerLightTap } = useHaptic();

  const handleCall = () => {
    triggerLightTap();
    window.location.href = 'tel:+917075209795';
  };

  const handleEmail = () => {
    triggerLightTap();
    window.location.href = 'mailto:contact@advibetech.top';
  };

  const openGoogleMaps = () => {
    triggerLightTap();
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Balaji+Nagar,+Rajampet,+Kadapa+516115',
      '_blank'
    );
  };

  return (
    <section className="py-14 px-3 sm:px-6 bg-slate-900/40 border-t border-white/5">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Workshop & Proprietor Details</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Workshop & Proprietor
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Direct election merchandise manufacturing and wholesale dispatch based in Rajampet, Kadapa District, Andhra Pradesh.
          </p>
        </div>

        {/* Credentials Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Proprietor Card */}
          <div className="md:col-span-5 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 flex flex-col justify-between shadow-xl space-y-5">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    Proprietor & Founder
                  </span>
                  <h3 className="text-xl font-black text-white">
                    SURA DEVI PRASAD
                  </h3>
                  <span className="text-xs text-slate-300">
                    AdVibe Tech, Rajampet
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Quality & Defect Replacement Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Direct Workshop Dispatches (Best Bulk Rates)</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleCall}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition active:scale-95 shadow"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call: +91 7075209795</span>
              </button>
              <button
                onClick={handleEmail}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition active:scale-95"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>contact@advibetech.top</span>
              </button>
            </div>
          </div>

          {/* Address & Logistics Card */}
          <div className="md:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between shadow-xl space-y-5">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Workshop Address & Dispatch Hub</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-1.5 text-sm text-slate-200">
                <p className="font-extrabold text-white text-base">AdVibe Tech</p>
                <p className="text-slate-300">D.No: 6/279 B, Balaji Nagar,</p>
                <p className="text-slate-300">Rajampet, Kadapa District,</p>
                <p className="text-slate-300 font-semibold">Andhra Pradesh – 516115</p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Prompt 24-48 hour delivery via RTC Cargo and private express courier to all mandals across Kadapa, Tirupati, Nellore, Kurnool, Anantapur, Chittoor, and Telangana.
              </p>
            </div>

            <div>
              <button
                onClick={openGoogleMaps}
                className="w-full py-3 px-4 rounded-xl bg-slate-950 border border-amber-500/40 hover:border-amber-400 text-amber-400 font-bold text-xs flex items-center justify-center gap-2 transition active:scale-95 shadow"
              >
                <MapPin className="w-4 h-4" />
                <span>View Manufacturing Location on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

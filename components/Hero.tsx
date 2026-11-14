'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, Award, Zap, Sparkles } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  const { triggerLightTap, triggerSuccessHaptic } = useHaptic();

  const handleCall = () => {
    triggerLightTap();
    window.location.href = 'tel:+917075209795';
  };

  const handleWhatsApp = () => {
    triggerSuccessHaptic();
    const msg = encodeURIComponent(
      'Hello Sura Devi Prasad garu (AdVibe Tech), I would like to book election campaign merchandise and digital marketing services. Please send catalog & price details.'
    );
    window.open(`https://wa.me/917075209795?text=${msg}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-12 px-3 sm:px-6">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headlines, Value Props & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-blue-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-inner">
              <Zap className="w-3.5 h-3.5 fill-current text-amber-400" />
              <span>AP & Telangana Panchayat & Assembly Campaign Specialist</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Win Every Vote With <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                High-Impact Campaign Merchandise
              </span> <br />
              <span className="text-2xl sm:text-3xl text-blue-400 font-bold">
                & Digital Marketing Solutions
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Custom-manufactured double-sided oval keychains, polo/round-neck campaign T-shirts, waterproof mobile stickers, placards & badges with your candidate photo, name and symbol. Plus targeted Meta ads and WhatsApp marketing directly from Rajampet, Kadapa.
            </p>

            {/* Dual High-Converting Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2.5 transition-all transform active:scale-95 border border-emerald-300/30"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book Direct on WhatsApp</span>
              </button>

              <button
                onClick={handleCall}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-slate-700 hover:border-slate-500 flex items-center justify-center gap-2.5 transition-all active:scale-95 shadow-md"
              >
                <Phone className="w-4 h-4 text-amber-400 fill-current" />
                <span>Call: +91 7075209795</span>
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-lg mx-auto lg:mx-0">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center">
                <span className="block font-black text-amber-400 text-sm sm:text-base">500+</span>
                <span className="text-[10px] sm:text-[11px] text-slate-400">
                  Winning Campaigns
                </span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center">
                <span className="block font-black text-emerald-400 text-sm sm:text-base">500 Pcs</span>
                <span className="text-[10px] sm:text-[11px] text-slate-400">
                  Keychains MOQ
                </span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center">
                <span className="block font-black text-blue-400 text-sm sm:text-base">Fast</span>
                <span className="text-[10px] sm:text-[11px] text-slate-400">
                  AP & TG Dispatch
                </span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center">
                <span className="block font-black text-rose-400 text-sm sm:text-base">Direct</span>
                <span className="text-[10px] sm:text-[11px] text-slate-400">
                  Factory Pricing
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: AI-Generated Election Branding Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl p-3 bg-gradient-to-b from-slate-800/80 to-slate-950/90 border border-white/10 shadow-2xl shadow-blue-900/30">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-inner border border-white/10">
                <Image
                  src="/assets/election-campaign-banner.jpg"
                  alt="AdVibe Tech Election Campaign Branding & Merchandise Banner"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/30 flex items-center gap-1.5 shadow-lg">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-bold text-amber-300">
                    #1 Campaign Quality
                  </span>
                </div>

                <div className="absolute bottom-3 inset-x-3 bg-slate-950/90 backdrop-blur-md p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Direct Order Hotline</span>
                    <span className="text-xs font-extrabold text-white">
                      +91 7075209795 (Sura Devi Prasad)
                    </span>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
              </div>

              {/* Mini Strip Below */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/assets/oval-keychains.jpg"
                    alt="Oval Keychains"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-end p-1">
                    <span className="text-[9px] font-bold text-white truncate">Keychains</span>
                  </div>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/assets/tshirts-symbols.jpg"
                    alt="Campaign T-Shirts"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-end p-1">
                    <span className="text-[9px] font-bold text-white truncate">T-Shirts</span>
                  </div>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/assets/mobile-stickers.jpg"
                    alt="Mobile Stickers"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-end p-1">
                    <span className="text-[9px] font-bold text-white truncate">Stickers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

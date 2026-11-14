'use client';

import React from 'react';
import Image from 'next/image';
import {
  Share2,
  Megaphone,
  TrendingUp,
  Target,
  BarChart3,
  Video,
  MessageSquare,
  Globe,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

export function DigitalMarketing() {
  const { triggerLightTap, triggerSuccessHaptic } = useHaptic();

  const handleWhatsAppConsult = () => {
    triggerSuccessHaptic();
    const msg = encodeURIComponent(
      'Hello Sura Devi Prasad garu (AdVibe Tech), I would like to consult about your Digital Marketing & Campaign Promotion services (Social Media Ads, WhatsApp Marketing, Video Reels).'
    );
    window.open(`https://wa.me/917075209795?text=${msg}`, '_blank');
  };

  const handleCall = () => {
    triggerLightTap();
    window.location.href = 'tel:+917075209795';
  };

  const services = [
    {
      icon: Target,
      title: 'Hyper-Local Social Media Ads',
      desc: 'Precision targeted Facebook & Instagram ads down to specific mandals, villages, and voter demographics across Andhra Pradesh & Telangana.',
      tag: 'Meta & Instagram Ads',
    },
    {
      icon: MessageSquare,
      title: 'Bulk WhatsApp & SMS Outreach',
      desc: 'Official WhatsApp broadcast engines, manifesto dissemination, interactive voter greeting bots, and automated constituency updates.',
      tag: 'Direct Voter Reach',
    },
    {
      icon: Video,
      title: 'Viral Video Reels & YouTube Ads',
      desc: 'Cinematic candidate introductions, speech highlights, manifesto walkthroughs, and high-impact short-form video content.',
      tag: 'Video Production',
    },
    {
      icon: Megaphone,
      title: 'Political PR & Narrative Building',
      desc: '24/7 social media handle management, reputation monitoring, rapid response to counter-campaigns, and daily press releases.',
      tag: 'Brand & PR',
    },
    {
      icon: Globe,
      title: 'Campaign Portals & Landing Pages',
      desc: 'Ultra-fast mobile-optimized websites showcasing candidate achievements, track record, promises, and donation/volunteer portals.',
      tag: 'Web & Tech',
    },
    {
      icon: BarChart3,
      title: 'Voter Analytics & Sentiment Tracking',
      desc: 'Real-time booth-level voter sentiment analysis, engagement heatmaps, and data-backed campaign strategy adjustments.',
      tag: 'Data Intelligence',
    },
  ];

  return (
    <section id="digital-marketing" className="py-14 px-3 sm:px-6 bg-slate-950 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Full-Suite Digital Agency Division</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
              Digital Marketing Services
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Beyond physical merchandise, AdVibe Tech powers modern political campaigns and commercial brands with cutting-edge digital advertising, viral social media content, and targeted voter communication.
          </p>
        </div>

        {/* AI-Generated Master Banner Display */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-900/30 group">
          <div className="relative aspect-[16/9] w-full bg-slate-900">
            <Image
              src="/assets/digital-marketing-banner.jpg"
              alt="AdVibe Tech Digital Marketing and Campaign Advertising Banner"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5 sm:p-10">
              <div className="max-w-2xl space-y-3">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow inline-block">
                  AI-Powered Strategy & Advertising
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                  Reach Every Voter on Their Smartphone Screen
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 sm:line-clamp-none">
                  Combine ground merchandise with synchronized digital ads on Instagram, Facebook, and WhatsApp to maximize your voter reach and candidate visibility.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={handleWhatsAppConsult}
                    className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/30 transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Get Digital Campaign Quote</span>
                  </button>
                  <button
                    onClick={handleCall}
                    className="py-2.5 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700 flex items-center gap-2 transition active:scale-95"
                  >
                    <Phone className="w-4 h-4 text-amber-400 fill-current" />
                    <span>Call +91 7075209795</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 p-6 flex flex-col justify-between shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                      {srv.tag}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Available in AP & TG</span>
                  <button
                    onClick={handleWhatsAppConsult}
                    className="text-amber-400 font-bold hover:text-amber-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial & Business Marketing Highlight */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-amber-950/30 border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Also Serving Commercial Businesses & Enterprises
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Looking for Corporate & Business Digital Marketing?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We also run high-ROI digital marketing, lead generation, Google Search ads, and social media branding for retail businesses, schools, colleges, real estate builders, and healthcare brands.
            </p>
          </div>
          <button
            onClick={handleWhatsAppConsult}
            className="shrink-0 py-3.5 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consult on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}

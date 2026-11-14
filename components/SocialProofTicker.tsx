'use client';

import React, { useState, useEffect } from 'react';
import { PackageCheck, Sparkles } from 'lucide-react';

interface TickerProps {
  lang: 'te' | 'en';
}

const DISPATCHES = [
  {
    te: '📦 తాజా డెలివరీ: 1,000 ఓవల్ కీచైన్లు రాజంపేట, కడప జిల్లాకు డిస్పాచ్ చేయబడ్డాయి!',
    en: '📦 Just Dispatched: 1,000 Oval Keychains to Rajampet, Kadapa District!',
    timeTe: '2 నిమిషాల క్రితం',
    timeEn: '2m ago',
  },
  {
    te: '⚡ కొత్త ఆర్డర్: 500 ప్రచార టీ-షర్ట్లు తిరుపతి రూరల్ సర్పంచ్ అభ్యర్థికి సిద్ధమయ్యాయి!',
    en: '⚡ New Order: 500 Campaign T-Shirts ready for Tirupati Rural candidate!',
    timeTe: '5 నిమిషాల క్రితం',
    timeEn: '5m ago',
  },
  {
    te: '📦 తాజా డెలివరీ: 2,000 మొబైల్ స్టిక్కర్లు ప్రొద్దుటూరుకు పంపబడ్డాయి!',
    en: '📦 Just Dispatched: 2,000 Mobile Stickers dispatched to Proddatur!',
    timeTe: '8 నిమిషాల క్రితం',
    timeEn: '8m ago',
  },
  {
    te: '🗳️ కొత్త బుకింగ్: కర్నూలు నుండి సర్పంచ్ విక్టరీ మెగా కిట్ బుక్ చేయబడింది!',
    en: '🗳️ New Booking: Sarpanch Victory Mega Kit booked from Kurnool!',
    timeTe: '12 నిమిషాల క్రితం',
    timeEn: '12m ago',
  },
  {
    te: '📦 తాజా డెలివరీ: 500 రౌండ్ ఫోటో కీచైన్లు అనంతపురం జిల్లాకు రవాణాలో ఉన్నాయి!',
    en: '📦 In Transit: 500 Round Photo Keychains dispatched to Anantapur!',
    timeTe: '15 నిమిషాల క్రితం',
    timeEn: '15m ago',
  },
];

export function SocialProofTicker({ lang }: TickerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % DISPATCHES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = DISPATCHES[index];

  return (
    <div className="bg-gradient-to-r from-amber-500/15 via-blue-600/15 to-emerald-500/15 border-y border-white/5 py-1.5 px-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-xs gap-2">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <p className="truncate text-slate-200 font-medium transition-all duration-300">
            {lang === 'te' ? current.te : current.en}
          </p>
        </div>
        <span className="shrink-0 text-[11px] text-amber-400 font-semibold bg-slate-900/80 px-2 py-0.5 rounded-full border border-amber-500/20">
          {lang === 'te' ? current.timeTe : current.timeEn}
        </span>
      </div>
    </div>
  );
}

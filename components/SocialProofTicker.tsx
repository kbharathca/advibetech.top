'use client';

import React, { useState, useEffect } from 'react';

const DISPATCHES = [
  {
    msg: '📦 Just Dispatched: 1,000 Oval Keychains to Rajampet, Kadapa District!',
    time: '2m ago',
  },
  {
    msg: '⚡ New Order: 500 Campaign T-Shirts ready for Tirupati Rural candidate!',
    time: '5m ago',
  },
  {
    msg: '🚀 Live Campaign: Meta Ads & WhatsApp voter broadcast launched for Kadapa ward!',
    time: '7m ago',
  },
  {
    msg: '📦 Just Dispatched: 2,000 Mobile Stickers dispatched to Proddatur!',
    time: '11m ago',
  },
  {
    msg: '🗳️ New Booking: Sarpanch Campaign Mega Kit booked from Kurnool District!',
    time: '14m ago',
  },
  {
    msg: '📦 In Transit: 500 Round Photo Keychains dispatched to Anantapur!',
    time: '18m ago',
  },
];

export function SocialProofTicker() {
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
            {current.msg}
          </p>
        </div>
        <span className="shrink-0 text-[11px] text-amber-400 font-semibold bg-slate-900/80 px-2 py-0.5 rounded-full border border-amber-500/20">
          {current.time}
        </span>
      </div>
    </div>
  );
}

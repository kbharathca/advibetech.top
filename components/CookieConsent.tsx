'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

export function CookieConsent() {
  const [show, setShow] = useState(false);
  const { triggerLightTap } = useHaptic();

  useEffect(() => {
    try {
      const consent = localStorage.getItem('advibe_cookie_consent');
      if (!consent) {
        const timer = setTimeout(() => setShow(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleAccept = () => {
    triggerLightTap();
    try {
      localStorage.setItem('advibe_cookie_consent', 'accepted');
    } catch {
      // ignore
    }
    setShow(false);
  };

  const handleDismiss = () => {
    triggerLightTap();
    try {
      localStorage.setItem('advibe_cookie_consent', 'dismissed');
    } catch {
      // ignore
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Cookie & Privacy Notice"
      className="fixed bottom-16 md:bottom-5 left-3 right-3 sm:left-auto sm:right-5 sm:max-w-md z-50 bg-slate-900/95 border border-slate-700/80 backdrop-blur-md rounded-2xl p-4 shadow-2xl text-xs space-y-3 animate-fade-in"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-emerald-400 font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Cookie & Privacy Notice</span>
        </div>
        <button
          onClick={handleDismiss}
          className="text-slate-400 hover:text-white p-1"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-slate-300 leading-relaxed text-[11px]">
        We use essential cookies to ensure our website works smoothly and to help process your quotes and inquiries quickly.
      </p>

      <div className="flex items-center justify-between gap-3 pt-1">
        <Link
          href="/privacy-policy"
          className="text-amber-400 hover:text-amber-300 underline text-[11px] font-medium"
        >
          View Privacy Policy
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={handleAccept}
            className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all active:scale-95"
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}

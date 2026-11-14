'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface VideoShowcaseProps {
  lang: 'te' | 'en';
}

export function VideoShowcase({ lang }: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const { triggerLightTap } = useHaptic();

  const togglePlay = () => {
    triggerLightTap();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    triggerLightTap();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-8 px-3 sm:px-6 bg-slate-900/40 border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{lang === 'te' ? 'వీడియో పరిచయం & డెమో' : 'Live Product Demonstration'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {lang === 'te'
              ? 'మా ప్రచార సామగ్రి లైవ్ డెమో చూడండి'
              : 'Watch Our Real Campaign Products Demo'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            {lang === 'te'
              ? 'సర్పంచ్ ఎన్నికల అభ్యర్థుల కోసం రూపొందించిన కీచైన్లు, టీ-షర్ట్లు, మొబైల్ స్టిక్కర్లు మరియు ప్లకార్డ్స్ ప్రత్యక్ష ప్రదర్శన.'
              : 'Direct video walkthrough showing our manufactured election keychains, custom t-shirts, mobile stickers and placards.'}
          </p>
        </div>

        {/* Video Container Styled as a Premium Mobile Reel */}
        <div className="relative mx-auto max-w-sm sm:max-w-md aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/60 bg-black">
          <video
            ref={videoRef}
            src="/video/campaign-video.mp4"
            playsInline
            loop
            muted={isMuted}
            poster="/assets/hero-presenter.jpg"
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlay}
          />

          {/* Top Bar with Live Badge & Mute Toggle */}
          <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20 pointer-events-none">
            <span className="bg-red-600/90 text-white font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
              ● Official Video
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="pointer-events-auto p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-900 backdrop-blur-md border border-white/20 transition-all active:scale-90"
              aria-label="Toggle Audio"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>

          {/* Central Play/Pause Overlay */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer z-10 transition-opacity"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-500/40 transform hover:scale-110 active:scale-95 transition-all">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
            </div>
          )}

          {/* Bottom Card Inside Video */}
          <div className="absolute bottom-4 inset-x-4 z-20 p-3 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-extrabold text-white">
                {lang === 'te' ? 'హనుమంతు / సూరా దేవి ప్రసాద్' : 'AdVibe Tech Rajampet'}
              </span>
              <span className="text-[11px] font-bold text-amber-400">
                +91 7075209795
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://wa.me/917075209795?text=Hi%20Sura%20Devi%20Prasad%20garu,%20I%20saw%20your%20election%20campaign%20video%20and%20want%20to%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+917075209795"
                className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

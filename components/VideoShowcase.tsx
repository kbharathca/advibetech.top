'use client';

import React, { useRef, useState } from 'react';
import { Play, Volume2, VolumeX, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { triggerLightTap } = useHaptic();

  const togglePlay = () => {
    triggerLightTap();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // Ensure unmuted playback with full audio
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      setIsMuted(false);
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Fallback if browser policy blocks unmuted play on initial touch
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => setIsPlaying(true));
          }
        });
    }
  };

  const toggleMute = () => {
    triggerLightTap();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section className="py-10 px-3 sm:px-6 bg-slate-900/40 border-y border-white/5 w-full max-w-full overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Live Production Walkthrough</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Watch Our Real Campaign Products Video
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Direct video demonstration of manufactured election keychains, polo t-shirts, mobile stickers, placards, and badges.
          </p>
        </div>

        {/* Video Frame */}
        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-md aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/60 bg-black">
          <video
            ref={videoRef}
            src="/video/campaign-video.mp4"
            playsInline
            loop
            preload="metadata"
            muted={isMuted}
            poster="/assets/hero-presenter.jpg"
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Top Bar with Live Badge & Mute Toggle */}
          <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20 pointer-events-none">
            <span className="bg-red-600/90 text-white font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
              ● Official Product Video
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 text-white hover:bg-slate-900 backdrop-blur-md border border-white/20 transition-all active:scale-90 shadow-lg"
              aria-label={isMuted ? "Enable Sound" : "Mute Sound"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-red-400" />
                  <span className="text-[10px] font-bold text-red-300">Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-300">Audio On</span>
                </>
              )}
            </button>
          </div>

          {/* Play/Pause Overlay */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer z-10 transition-opacity gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-500/40 transform hover:scale-110 active:scale-95 transition-all">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <span className="text-xs font-bold text-white bg-slate-950/85 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md flex items-center gap-1.5 shadow">
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                Play with Audio
              </span>
            </div>
          )}

          {/* Bottom Card Inside Video */}
          <div className="absolute bottom-4 inset-x-4 z-20 p-3 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-extrabold text-white">
                AdVibe Tech • Sura Devi Prasad
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

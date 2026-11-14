'use client';

import React, { useState } from 'react';
import { MessageCircle, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface BookingFormProps {
  prefilledSymbol?: string;
  prefilledQuantities?: {
    keychains?: number;
    tshirts?: number;
    stickers?: number;
    placards?: number;
    badges?: number;
  };
}

export function BookingForm({ prefilledSymbol, prefilledQuantities }: BookingFormProps) {
  const { triggerLightTap, triggerSuccessHaptic } = useHaptic();

  // Form State
  const [candidateName, setCandidateName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  // Free text input for Election Symbol as requested (party/independent/custom)
  const [symbol, setSymbol] = useState(prefilledSymbol || '');
  const [partyTheme, setPartyTheme] = useState('Yellow Theme');
  const [keychainQty, setKeychainQty] = useState(prefilledQuantities?.keychains || 500);
  const [tshirtQty, setTshirtQty] = useState(prefilledQuantities?.tshirts || 0);
  const [stickerQty, setStickerQty] = useState(prefilledQuantities?.stickers || 500);
  const [placardQty, setPlacardQty] = useState(prefilledQuantities?.placards || 0);
  const [badgeQty, setBadgeQty] = useState(prefilledQuantities?.badges || 0);
  const [serviceType, setServiceType] = useState('Campaign Merchandise & Printing');
  const [notes, setNotes] = useState('');

  // UI status
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!candidateName.trim()) {
      setErrorMessage('Please enter Candidate / Contact person name');
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number');
      return;
    }
    if (!location.trim()) {
      setErrorMessage('Please enter Village, Mandal & District details');
      return;
    }
    if (!symbol.trim()) {
      setErrorMessage('Please enter your allocated Election Symbol (or type "Yet to be allocated")');
      return;
    }

    setErrorMessage('');
    triggerSuccessHaptic();
    setSubmitted(true);

    // Build Formatted English WhatsApp Message
    const formattedMessage =
`🗳️ *AdVibe Tech - Campaign Order & Service Booking* 🗳️
-----------------------------------------
👤 *Candidate / Contact Name:* ${candidateName.trim()}
📱 *Phone Number:* ${phoneNumber.trim()}
📍 *Village, Mandal & District:* ${location.trim()}
🎯 *Election Symbol:* ${symbol.trim()}
🎨 *Party / Color Theme:* ${partyTheme}
💼 *Service Selected:* ${serviceType}

📦 *Required Merchandise & Quantities:*
${keychainQty > 0 ? `• Double-Sided Oval Keychains: ${keychainQty} Pcs (MOQ 500)\n` : ''}${stickerQty > 0 ? `• Glossy Mobile Stickers: ${stickerQty} Pcs\n` : ''}${tshirtQty > 0 ? `• Campaign T-Shirts: ${tshirtQty} Pcs\n` : ''}${placardQty > 0 ? `• Hand Placards / Fan Signs: ${placardQty} Pcs\n` : ''}${badgeQty > 0 ? `• Cadre Badges & Scarves: ${badgeQty} Pcs\n` : ''}
${notes.trim() ? `📝 *Special Instructions / Deadline:* ${notes.trim()}\n` : ''}-----------------------------------------
_Sent via Official Website (advibetech.top)_
_Direct to Owner: SURA DEVI PRASAD (+91 7075209795)_`;

    // Open WhatsApp directly to owner
    const encoded = encodeURIComponent(formattedMessage);
    const waUrl = `https://api.whatsapp.com/send?phone=917075209795&text=${encoded}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <section id="booking" className="py-14 px-3 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-emerald-500/40 p-5 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Manufacturer Booking Gateway</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Book Your Order With Sura Devi Prasad
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Fill in your details below. Your complete order summary will be compiled and sent directly to owner Sura Devi Prasad (+91 7075209795) on WhatsApp for fast confirmation and digital samples.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-900/60 border border-red-500/50 text-red-200 text-xs font-bold text-center">
                {errorMessage}
              </div>
            )}

            {/* Row 1: Candidate Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Candidate / Contact Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="e.g. Ramesh Babu / Suresh Kumar"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  WhatsApp Contact Number <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="9XXXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
                />
              </div>
            </div>

            {/* Row 2: Location (Village / Mandal / District) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                Village, Mandal & District <span className="text-emerald-400">*</span>
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Balapalle, Rajampet Mandal, YSR Kadapa District"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            {/* Row 3: Election Symbol (FREE-TEXT INPUT FIELD) & Party Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                  <span>Election Symbol (Type Any Symbol) <span className="text-emerald-400">*</span></span>
                  <span className="text-[10px] text-amber-400 font-normal">Party or Independent</span>
                </label>
                <input
                  type="text"
                  required
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value)}
                  placeholder="e.g. Cot, Scissors, Kite, Ring, Tractor, Glass, Fan..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Color / Party Theme
                </label>
                <select
                  value={partyTheme}
                  onChange={(e) => {
                    triggerLightTap();
                    setPartyTheme(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                >
                  <option value="Yellow Theme (TDP Style)">Yellow Theme</option>
                  <option value="Blue & Green Theme (YSR Style)">Blue & Green Theme</option>
                  <option value="Red & White Theme (JSP Style)">Red & White Theme</option>
                  <option value="Tricolor National Theme">Tricolor Theme</option>
                  <option value="Custom Independent Theme">Custom Independent Colorway</option>
                </select>
              </div>
            </div>

            {/* Row 4: Service Type Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                Primary Service Required
              </label>
              <select
                value={serviceType}
                onChange={(e) => {
                  triggerLightTap();
                  setServiceType(e.target.value);
                }}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
              >
                <option value="Campaign Merchandise & Printing">Election Campaign Merchandise & Printing</option>
                <option value="Digital Marketing & Social Media Ads">Digital Marketing, Meta Ads & Video Reels</option>
                <option value="Combo: Merchandise + Digital Marketing">Combo: Full Physical Merchandise + Digital Marketing Campaign</option>
              </select>
            </div>

            {/* Row 5: Merchandise Quantities Configurator */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                Required Quantities (Enter 0 if not needed):
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* Keychains */}
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-[11px] font-bold text-slate-300 block truncate">
                    Oval Keychains
                  </span>
                  <span className="text-[9px] text-emerald-400 block">MOQ 500 pcs</span>
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={keychainQty}
                    onChange={(e) => setKeychainQty(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-extrabold text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Stickers */}
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-[11px] font-bold text-slate-300 block truncate">
                    Mobile Stickers
                  </span>
                  <span className="text-[9px] text-blue-400 block">Glossy Vinyl</span>
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={stickerQty}
                    onChange={(e) => setStickerQty(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-extrabold text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* T-Shirts */}
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-[11px] font-bold text-slate-300 block truncate">
                    Campaign T-Shirts
                  </span>
                  <span className="text-[9px] text-amber-400 block">Collar / Round Neck</span>
                  <input
                    type="number"
                    min="0"
                    step="10"
                    value={tshirtQty}
                    onChange={(e) => setTshirtQty(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-extrabold text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Placards */}
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-[11px] font-bold text-slate-300 block truncate">
                    Hand Placards & Fans
                  </span>
                  <span className="text-[9px] text-slate-400 block">Rally Signs</span>
                  <input
                    type="number"
                    min="0"
                    step="50"
                    value={placardQty}
                    onChange={(e) => setPlacardQty(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-extrabold text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Badges / Kanduvas */}
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-1 col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-bold text-slate-300 block truncate">
                    Cadre Badges & Scarves
                  </span>
                  <span className="text-[9px] text-purple-400 block">Ribbon Rosettes</span>
                  <input
                    type="number"
                    min="0"
                    step="50"
                    value={badgeQty}
                    onChange={(e) => setBadgeQty(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-extrabold text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Row 6: Notes & Delivery Requirements */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                Special Delivery Instructions or Campaign Details
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Urgent delivery needed in 3 days, T-shirt sizes (L: 30, XL: 20), specific design requests..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3 transition-all active:scale-95 border border-emerald-300/40"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Send Order Direct to Sura Devi Prasad on WhatsApp (+91 7075209795)</span>
            </button>

            {/* Trust Assurance */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                Direct manufacturer dispatch from Rajampet, Kadapa. 100% genuine factory prices with zero middleman commissions.
              </span>
            </div>
          </form>

          {/* Success Toast Modal Overlay */}
          {submitted && (
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
              <div className="bg-slate-900 border border-emerald-500/50 rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-white">
                  Order Message Generated!
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  WhatsApp is opening with your formatted requirements. Simply tap Send to connect directly with owner Sura Devi Prasad (+91 7075209795).
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

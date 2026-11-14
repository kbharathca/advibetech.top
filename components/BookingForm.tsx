'use client';

import React, { useState } from 'react';
import { ELECTION_SYMBOLS, PARTY_THEMES } from '@/data/symbols';
import { MessageCircle, CheckCircle, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface BookingFormProps {
  lang: 'te' | 'en';
  prefilledSymbol?: string;
  prefilledQuantities?: {
    keychains?: number;
    tshirts?: number;
    stickers?: number;
    placards?: number;
    badges?: number;
  };
}

export function BookingForm({ lang, prefilledSymbol, prefilledQuantities }: BookingFormProps) {
  const { triggerLightTap, triggerSelectionTap, triggerSuccessHaptic } = useHaptic();

  // Form State
  const [candidateName, setCandidateName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [symbol, setSymbol] = useState(prefilledSymbol || 'Cot / మంచం');
  const [partyTheme, setPartyTheme] = useState('పసుపు / Yellow');
  const [keychainQty, setKeychainQty] = useState(prefilledQuantities?.keychains || 500);
  const [tshirtQty, setTshirtQty] = useState(prefilledQuantities?.tshirts || 0);
  const [stickerQty, setStickerQty] = useState(prefilledQuantities?.stickers || 500);
  const [placardQty, setPlacardQty] = useState(prefilledQuantities?.placards || 0);
  const [badgeQty, setBadgeQty] = useState(prefilledQuantities?.badges || 0);
  const [notes, setNotes] = useState('');

  // UI status
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!candidateName.trim()) {
      setErrorMessage(lang === 'te' ? 'దయచేసి అభ్యర్థి పేరు నమోదు చేయండి' : 'Please enter Candidate / Contact name');
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.length < 10) {
      setErrorMessage(lang === 'te' ? 'దయచేసి సరైన 10 అంకెల ఫోన్ నంబర్ నమోదు చేయండి' : 'Please enter a valid 10-digit phone number');
      return;
    }
    if (!location.trim()) {
      setErrorMessage(lang === 'te' ? 'దయచేసి గ్రామం / మండలం / జిల్లా వివరాలు నమోదు చేయండి' : 'Please enter Village, Mandal & District');
      return;
    }

    setErrorMessage('');
    triggerSuccessHaptic();
    setSubmitted(true);

    // Build Formatted WhatsApp Message
    const formattedMessage =
`🗳️ *అద్వైబ్ టెక్ - ఎన్నికల ప్రచార సామగ్రి ఆర్డర్ బుకింగ్* 🗳️
-----------------------------------------
👤 *అభ్యర్థి / కాంటాక్ట్ పేరు:* ${candidateName.trim()}
📱 *ఫోన్ నంబర్:* ${phoneNumber.trim()}
📍 *గ్రామం/మండలం/జిల్లా:* ${location.trim()}
🎯 *ఎన్నికల గుర్తు:* ${symbol}
🎨 *రంగుల థీమ్:* ${partyTheme}

📦 *కావాల్సిన వస్తువుల వివరాలు:*
${keychainQty > 0 ? `• ఓవల్ కీచైన్లు: ${keychainQty} పీసులు (కనిష్టం 500)\n` : ''}${stickerQty > 0 ? `• మొబైల్ స్టిక్కర్లు: ${stickerQty} పీసులు\n` : ''}${tshirtQty > 0 ? `• ప్రచార టీ-షర్ట్లు: ${tshirtQty} పీసులు\n` : ''}${placardQty > 0 ? `• హ్యాండ్ ప్లకార్డ్స్: ${placardQty} పీసులు\n` : ''}${badgeQty > 0 ? `• బ్యాడ్జెస్ / కండువాలు: ${badgeQty} పీసులు\n` : ''}
${notes.trim() ? `📝 *సూచనలు / డెలివరీ గడువు:* ${notes.trim()}\n` : ''}-----------------------------------------
_వెబ్‌సైట్ (advibetech.top) ద్వారా నేరుగా పంపబడిన ఆర్డర్ వినతి_
_యజమాని సూరా దేవి ప్రసాద్ గారికి (+91 7075209795)_`;

    // Open WhatsApp directly to owner
    const encoded = encodeURIComponent(formattedMessage);
    const waUrl = `https://api.whatsapp.com/send?phone=917075209795&text=${encoded}`;
    
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <section id="booking" className="py-12 px-3 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-emerald-500/40 p-5 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Top Decorative Banner */}
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'te' ? 'డైరెక్ట్ యజమాని ఆర్డర్ బుకింగ్' : 'Direct Owner Booking Gateway'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'te'
                ? 'మీ ప్రచార సామగ్రిని నేరుగా బుక్ చేయండి'
                : 'Book Your Election Campaign Merchandise'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              {lang === 'te'
                ? 'క్రింది వివరాలు పూరించిన వెంటనే మీ ఆర్డర్ సారాంశం నేరుగా యజమాని సూరా దేవి ప్రసాద్ గారి (+91 7075209795) వాట్సాప్‌కు చేరుతుంది.'
                : 'Fill in your details below to directly dispatch your requirements to owner Sura Devi Prasad (+91 7075209795) on WhatsApp for fast confirmation & samples.'}
            </p>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-900/60 border border-red-500/50 text-red-200 text-xs font-bold text-center">
                {errorMessage}
              </div>
            )}

            {/* Row 1: Candidate Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  {lang === 'te' ? 'అభ్యర్థి / కాంటాక్ట్ పేరు (Candidate Name)*' : 'Candidate Name*'}
                </label>
                <input
                  type="text"
                  required
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder={lang === 'te' ? 'ఉదా: రమేష్ బాబు (సర్పంచ్ అభ్యర్థి)' : 'e.g. Ramesh Babu'}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  {lang === 'te' ? 'ఫోన్ నంబర్ (WhatsApp Number)*' : 'Phone / WhatsApp Number*'}
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
                {lang === 'te' ? 'గ్రామం, మండలం & జిల్లా (Village, Mandal, District)*' : 'Village, Mandal & District*'}
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={lang === 'te' ? 'ఉదా: బాలపల్లె గ్రామం, రాజంపేట మండలం, వైఎస్ఆర్ కడప జిల్లా' : 'e.g. Balapalle, Rajampet, Kadapa District'}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            {/* Row 3: Election Symbol & Party Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  {lang === 'te' ? 'ఎన్నికల గుర్తు (Election Symbol)' : 'Election Symbol'}
                </label>
                <select
                  value={symbol}
                  onChange={(e) => {
                    triggerLightTap();
                    setSymbol(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                >
                  <option value="Cot / మంచం">మంచం గుర్తు (Cot Symbol)</option>
                  <option value="Scissors / కత్తెర">కత్తెర గుర్తు (Scissors Symbol)</option>
                  <option value="Ring / ఉంగరం">ఉంగరం గుర్తు (Ring Symbol)</option>
                  <option value="Basket / బుట్ట">బుట్ట గుర్తు (Basket Symbol)</option>
                  <option value="Stool / స్టూల్">స్టూల్ గుర్తు (Stool Symbol)</option>
                  <option value="Bat / బ్యాట్">బ్యాట్ గుర్తు (Bat Symbol)</option>
                  <option value="Gas Stove / గ్యాస్ స్టౌవ్">గ్యాస్ స్టౌవ్ గుర్తు (Gas Stove)</option>
                  <option value="Football / ఫుట్‌బాల్">ఫుట్‌బాల్ గుర్తు (Football)</option>
                  <option value="Cylinder / సిలిండర్">సిలిండర్ గుర్తు (Cylinder)</option>
                  <option value="Frock / ఫ్రాక్">ఫ్రాక్ గుర్తు (Frock)</option>
                  <option value="Custom / ఇతర గుర్తు">ఇతర గుర్తు (Other/Custom Symbol)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  {lang === 'te' ? 'పార్టీ రంగులు / థీమ్' : 'Party Colors / Theme'}
                </label>
                <select
                  value={partyTheme}
                  onChange={(e) => {
                    triggerLightTap();
                    setPartyTheme(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-400 transition"
                >
                  <option value="పసుపు / Yellow (TDP Theme)">పసుపు (TDP Theme)</option>
                  <option value="నీలం & ఆకుపచ్చ / Blue & Green (YSR Theme)">నీలం & ఆకుపచ్చ (YSR Theme)</option>
                  <option value="ఎరుపు & తెలుపు / Red & White (JSP Theme)">ఎరుపు & తెలుపు (JSP Theme)</option>
                  <option value="మువ్వన్నెల రంగులు / Tricolor Theme">మువ్వన్నెల రంగులు (Tricolor)</option>
                  <option value="కస్టమ్ రంగులు / Custom Colorways">ప్రత్యేక రంగులు (Custom Colorways)</option>
                </select>
              </div>
            </div>

            {/* Row 4: Merchandise Quantities Configurator */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                {lang === 'te' ? 'కావాల్సిన వస్తువుల సంఖ్యను ఎంచుకోండి:' : 'Select Merchandise Quantities:'}
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* Keychains */}
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-[11px] font-bold text-slate-300 block truncate">
                    {lang === 'te' ? 'ఓవల్ కీచైన్లు' : 'Oval Keychains'}
                  </span>
                  <span className="text-[9px] text-emerald-400 block">కనిష్టం 500 pcs</span>
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
                    {lang === 'te' ? 'మొబైల్ స్టిక్కర్లు' : 'Mobile Stickers'}
                  </span>
                  <span className="text-[9px] text-blue-400 block">గ్లోసీ స్టిక్కర్స్</span>
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
                    {lang === 'te' ? 'ప్రచార టీ-షర్ట్లు' : 'Campaign T-Shirts'}
                  </span>
                  <span className="text-[9px] text-amber-400 block">కాలర్/రౌండ్ నెక్</span>
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
                    {lang === 'te' ? 'హ్యాండ్ ప్లకార్డ్స్' : 'Hand Placards'}
                  </span>
                  <span className="text-[9px] text-slate-400 block">ర్యాలీ విసనకర్రలు</span>
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
                    {lang === 'te' ? 'రిబ్బన్ బ్యాడ్జెస్' : 'Cadre Badges'}
                  </span>
                  <span className="text-[9px] text-purple-400 block">రోసెట్స్ & కండువాలు</span>
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

            {/* Row 5: Notes & Delivery Requirements */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                {lang === 'te' ? 'ప్రత్యేక సూచనలు / డెలివరీ గడువు' : 'Special Instructions / Delivery Deadline'}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={lang === 'te' ? 'ఉదా: 4 రోజుల్లో డెలివరీ కావాలి, టీ-షర్ట్ సైజులు...' : 'e.g. Need delivery in 4 days, T-shirt sizes...'}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3 transition-all active:scale-95 border border-emerald-300/40"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>
                {lang === 'te'
                  ? 'యజమాని సూరా దేవి ప్రసాద్ గారికి వాట్సాప్‌లో ఆర్డర్ పంపండి (+91 7075209795)'
                  : 'Submit & Send Direct Order on WhatsApp (+91 7075209795)'}
              </span>
            </button>

            {/* Trust Assurance */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                {lang === 'te'
                  ? 'నేరుగా తయారీదారుడు సూరా దేవి ప్రసాద్ (రాజంపేట) గారికి చేరుతుంది. దళారులు లేరు.'
                  : 'Direct dispatch to owner Sura Devi Prasad (Rajampet). 100% Genuine factory pricing.'}
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
                  {lang === 'te' ? 'ఆర్డర్ సిద్ధమైంది!' : 'Order Prepared!'}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'te'
                    ? 'మీ ఆర్డర్ వివరాలు వాట్సాప్‌లో ఓపెన్ అవుతున్నాయి. యజమాని సూరా దేవి ప్రసాద్ గారికి సెండ్ బటన్ నొక్కండి.'
                    : 'Opening WhatsApp to send your requirement to owner Sura Devi Prasad (+91 7075209795). Simply hit Send on WhatsApp.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
                >
                  {lang === 'te' ? 'సరే' : 'Close'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

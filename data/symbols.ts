export interface ElectionSymbol {
  id: string;
  nameEn: string;
  nameTe: string;
  iconType: string;
  color: string;
}

export const ELECTION_SYMBOLS: ElectionSymbol[] = [
  { id: 'cot', nameEn: 'Cot', nameTe: 'మంచం', iconType: 'cot', color: '#10B981' },
  { id: 'scissors', nameEn: 'Scissors', nameTe: 'కత్తెర', iconType: 'scissors', color: '#EF4444' },
  { id: 'ring', nameEn: 'Ring', nameTe: 'ఉంగరం', iconType: 'ring', color: '#F59E0B' },
  { id: 'basket', nameEn: 'Basket', nameTe: 'బుట్ట', iconType: 'basket', color: '#8B5CF6' },
  { id: 'stool', nameEn: 'Stool', nameTe: 'స్టూల్', iconType: 'stool', color: '#06B6D4' },
  { id: 'bat', nameEn: 'Bat', nameTe: 'బ్యాట్', iconType: 'bat', color: '#3B82F6' },
  { id: 'stove', nameEn: 'Gas Stove', nameTe: 'గ్యాస్ స్టౌవ్', iconType: 'stove', color: '#EC4899' },
  { id: 'football', nameEn: 'Football', nameTe: 'ఫుట్‌బాల్', iconType: 'football', color: '#14B8A6' },
  { id: 'cylinder', nameEn: 'Cylinder', nameTe: 'సిలిండర్', iconType: 'cylinder', color: '#F97316' },
  { id: 'frock', nameEn: 'Frock', nameTe: 'ఫ్రాక్', iconType: 'frock', color: '#6366F1' },
];

export const PARTY_THEMES = [
  { id: 'yellow', name: 'Yellow (TDP Theme)', bgClass: 'from-yellow-400 to-amber-500', textClass: 'text-yellow-950', badge: 'bg-yellow-400 text-yellow-950' },
  { id: 'bluegreen', name: 'Blue & Green (YSR Theme)', bgClass: 'from-blue-600 via-white to-green-600', textClass: 'text-blue-950', badge: 'bg-blue-600 text-white' },
  { id: 'redwhite', name: 'Red & White (Jana Sena Theme)', bgClass: 'from-red-600 to-rose-700', textClass: 'text-white', badge: 'bg-red-600 text-white' },
  { id: 'tricolor', name: 'Tricolor Theme', bgClass: 'from-orange-500 via-white to-green-600', textClass: 'text-slate-900', badge: 'bg-orange-500 text-white' },
  { id: 'royal', name: 'Royal Gold & Navy', bgClass: 'from-blue-900 to-indigo-950', textClass: 'text-amber-400', badge: 'bg-blue-900 text-amber-400' },
];

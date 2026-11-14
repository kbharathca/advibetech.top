export interface ComboKit {
  id: string;
  nameEn: string;
  nameTe: string;
  taglineEn: string;
  taglineTe: string;
  idealForEn: string;
  idealForTe: string;
  itemsEn: string[];
  itemsTe: string[];
  recommendedBadge?: string;
  defaultPayload: {
    keychains: number;
    stickers: number;
    tshirts: number;
    placards: number;
    badges: number;
  };
}

export const COMBO_KITS: ComboKit[] = [
  {
    id: 'starter-kit',
    nameEn: 'Grama Sarpanch Starter Kit',
    nameTe: 'గ్రామ సర్పంచ్ స్టార్టర్ కిట్',
    taglineEn: 'Essential promotional package designed for small panchayats and ward-level campaigns.',
    taglineTe: 'చిన్న గ్రామాలు మరియు వార్డు స్థాయి ప్రచారానికి అవసరమైన సమగ్ర ప్రచార ప్యాకేజీ.',
    idealForEn: 'Villages with 1,000 to 1,500 voters',
    idealForTe: '1,000 నుండి 1,500 మంది ఓటర్లు ఉన్న గ్రామాలు',
    recommendedBadge: 'Most Popular',
    itemsEn: [
      '500 Double-Sided Oval Keychains',
      '500 Glossy Mobile Back Stickers',
      '25 Customized Campaign T-Shirts',
      '50 Cadre Ribbon Badges',
      '25 Printed Party Scarves / Kanduvas'
    ],
    itemsTe: [
      '500 ఓవల్ కీచైన్లు (రెండు వైపులా ప్రింటింగ్)',
      '500 మొబైల్ బ్యాక్ స్టిక్కర్లు',
      '25 కస్టమ్ ప్రచార టీ-షర్ట్లు',
      '50 కార్యకర్తల రిబ్బన్ బ్యాడ్జెస్',
      '25 ప్రచార కండువాలు'
    ],
    defaultPayload: {
      keychains: 500,
      stickers: 500,
      tshirts: 25,
      placards: 0,
      badges: 50
    }
  },
  {
    id: 'mega-kit',
    nameEn: 'Major Panchayat Mega Victory Kit',
    nameTe: 'మేజర్ పంచాయతీ మెగా విక్టరీ కిట్',
    taglineEn: 'Maximum impact package designed for large panchayats with massive rally presence.',
    taglineTe: 'పెద్ద పంచాయతీలలో సంపూర్ణ విస్తృత ప్రచారానికి మరియు భారీ ర్యాలీలకు మేలైన ప్యాకేజీ.',
    idealForEn: 'Major Panchayats with 2,500 to 5,000+ voters',
    idealForTe: '2,500 నుండి 5,000+ ఓటర్లు ఉన్న మేజర్ పంచాయతీలు',
    recommendedBadge: 'Complete Coverage',
    itemsEn: [
      '1,500 Double-Sided Oval Keychains',
      '1,500 Glossy Mobile Back Stickers',
      '100 Customized Campaign T-Shirts (Collar/Round)',
      '300 Hand Placards / Fan Signs',
      '150 Cadre Ribbon Badges',
      '100 Printed Party Kanduvas'
    ],
    itemsTe: [
      '1,500 ఓవల్ కీచైన్లు',
      '1,500 మొబైల్ బ్యాక్ స్టిక్కర్లు',
      '100 కస్టమ్ ప్రచార టీ-షర్ట్లు (కాలర్/రౌండ్ నెక్)',
      '300 హ్యాండ్ ప్లకార్డ్స్ / విసనకర్రలు',
      '150 కార్యకర్తల రిబ్బన్ బ్యాడ్జెస్',
      '100 పార్టీ కండువాలు'
    ],
    defaultPayload: {
      keychains: 1500,
      stickers: 1500,
      tshirts: 100,
      placards: 300,
      badges: 150
    }
  }
];

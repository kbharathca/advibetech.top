export interface Product {
  id: string;
  category: 'keychains' | 'tshirts' | 'stickers' | 'placards' | 'badges';
  nameEn: string;
  nameTe: string;
  taglineEn: string;
  taglineTe: string;
  image: string;
  moq: string;
  moqTe: string;
  badge?: string;
  featuresEn: string[];
  featuresTe: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'oval-keychain',
    category: 'keychains',
    nameEn: 'Double-Sided Oval Keychain',
    nameTe: 'ఓవల్ కీచైన్ (రెండు వైపులా ప్రింటింగ్)',
    taglineEn: 'Candidate photo on front, election symbol on reverse with scratch-resistant acrylic finish.',
    taglineTe: 'ఒకవైపు అభ్యర్థి ఫోటో మరియు పేరు, మరోవైపు ఎన్నికల గుర్తు స్పష్టమైన యాక్రిలిక్ కోటింగ్‌తో.',
    image: '/assets/oval-keychains.jpg',
    moq: 'Min 500 Pieces',
    moqTe: 'కనీస ఆర్డర్: 500 పీసులు',
    badge: 'Best Seller / అత్యధిక డిమాండ్',
    featuresEn: ['Heavy-duty steel ring', 'High-definition photo printing', 'Durable acrylic shield', 'Fast doorstep delivery'],
    featuresTe: ['బలమైన స్టీల్ కీరింగ్', 'హై-డెఫినిషన్ ఫోటో ప్రింటింగ్', 'గీతలు పడని యాక్రిలిక్ షీల్డ్', 'త్వరిత డోర్‌స్టెప్ డెలివరీ'],
  },
  {
    id: 'round-keychain',
    category: 'keychains',
    nameEn: 'Round Photo Keychain',
    nameTe: 'రౌండ్ ఫోటో కీచైన్',
    taglineEn: 'Circular double-sided photo keychain with vibrant party theme background.',
    taglineTe: 'గుండ్రటి ఆకారంలో అభ్యర్థి ఫోటో మరియు గుర్తుతో ఆకర్షణీయమైన కీచైన్.',
    image: '/assets/round-keychains.jpg',
    moq: 'Min 500 Nos',
    moqTe: 'కనీస ఆర్డర్: 500 nos',
    badge: 'Popular Choice',
    featuresEn: ['Sleek pocket-friendly design', 'Double-sided colored graphics', 'Rust-proof metal chain'],
    featuresTe: ['జేబులో సులువుగా ఇమిడే డిజైన్', 'రెండు వైపులా రంగుల గ్రాఫిక్స్', 'తుప్పు పట్టని మెటల్ చైన్'],
  },
  {
    id: 'campaign-tshirts',
    category: 'tshirts',
    nameEn: 'Customized Election T-Shirts',
    nameTe: 'ఎన్నికల ప్రచార టీ-షర్ట్లు',
    taglineEn: 'Collar & Round-neck t-shirts customized with candidate portrait, party colors & symbol.',
    taglineTe: 'కాలర్ & రౌండ్ నెక్ టీ-షర్ట్లు - అభ్యర్థి ఫోటో, పేరు మరియు గుర్తుతో కస్టమ్ కలర్స్‌లో.',
    image: '/assets/tshirts-symbols.jpg',
    moq: 'Min 25 Pieces',
    moqTe: 'కనీస ఆర్డర్: 25 పీసులు',
    badge: 'Campaign Essential',
    featuresEn: ['Breathable polyester/cotton blend', 'Non-fading screen/sublimation print', 'Available in S, M, L, XL, XXL'],
    featuresTe: ['ఎండలో సౌకర్యవంతమైన ఫ్యాబ్రిక్', 'రంగు వెలవని హై-క్వాలిటీ ప్రింట్', 'అన్ని సైజుల్లో లభ్యం (S, M, L, XL, XXL)'],
  },
  {
    id: 'mobile-stickers',
    category: 'stickers',
    nameEn: 'Glossy Mobile Back Stickers',
    nameTe: 'మొబైల్ బ్యాక్ స్టిక్కర్లు',
    taglineEn: 'High-tack waterproof stickers for smartphones, bikes, autos, and household doors.',
    taglineTe: 'ఫోన్ వెనుక, బైక్‌లు మరియు ఆటోలపై అంటించుకునే వాటర్‌ప్రూఫ్ గ్లోసీ స్టిక్కర్లు.',
    image: '/assets/mobile-stickers.jpg',
    moq: 'Min 500 Pieces',
    moqTe: 'కనీస ఆర్డర్: 500 పీసులు',
    badge: 'High Reach / విస్తృత ప్రచారం',
    featuresEn: ['Ultra-strong adhesive', 'Water & sunlight resistant', 'Includes village slogan & symbol'],
    featuresTe: ['బలమైన గమ్మింగ్', 'ఎండ మరియు నీటికి తట్టుకునే నాణ్యత', 'మన గ్రామ అభివృద్ధి నినాదం & గుర్తుతో'],
  },
  {
    id: 'hand-placards',
    category: 'placards',
    nameEn: 'Hand Placards & Campaign Fans',
    nameTe: 'హ్యాండ్ ప్లకార్డ్స్ & విసనకర్రలు',
    taglineEn: 'Rigid handheld signboards and hand-fans for public meetings, roadshows and door campaigning.',
    taglineTe: 'సభలు, ర్యాలీలు మరియు ఇంటింటి ప్రచారంలో మహిళలకు మరియు కార్యకర్తలకు అనువైన విసనకర్రలు.',
    image: '/assets/placards-badges.jpg',
    moq: 'Min 200 Pieces',
    moqTe: 'కనీస ఆర్డర్: 200 పీసులు',
    featuresEn: ['Heavy cardstock with handle', 'Double-sided symbol printing', 'Eye-catching rally visibility'],
    featuresTe: ['గట్టి హ్యాండిల్ ఉన్న కార్డ్‌బోర్డ్', 'రెండు వైపులా గుర్తు స్పష్టమైన ప్రింటింగ్', 'ర్యాలీలలో ఆకర్షణీయమైన లుక్'],
  },
  {
    id: 'cadre-badges',
    category: 'badges',
    nameEn: 'Cadre Rosettes & Pin Badges',
    nameTe: 'కార్యకర్తల బ్యాడ్జెస్ & రిబ్బన్ రోసెట్స్',
    taglineEn: 'Satin ribbon rosettes and pin badges for booth agents, youth leaders, and election committees.',
    taglineTe: 'బూత్ ఏజెంట్లు మరియు యువజన విభాగం కార్యకర్తల కోసం రిబ్బన్ రోసెట్స్ & పిన్ బ్యాడ్జెస్.',
    image: '/assets/merchandise-spread.jpg',
    moq: 'Min 100 Pieces',
    moqTe: 'కనీస ఆర్డర్: 100 పీసులు',
    featuresEn: ['Sturdy safety pin clip', 'Vibrant satin party ribbons', 'Clear protective dome'],
    featuresTe: ['సురక్షితమైన పిన్ క్లిప్', 'ఆకర్షణీయమైన శాటిన్ రిబ్బన్లు', 'ప్రకాశవంతమైన రంగులు'],
  },
];

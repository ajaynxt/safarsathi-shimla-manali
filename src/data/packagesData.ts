import { getAssetUrl } from '../utils/asset';

export interface PackageItem {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  category: 'honeymoon' | 'family' | 'budget' | 'luxury';
  startingPricePerCouple: number;
  featured: boolean;
  heroImage: string;
  badge: string;
  highlights: string[];
  inclusions: string[];
  itinerarySummary: string[];
}

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'honeymoon-special-5n6d',
    title: 'Shimla Manali 5N/6D Romantic Honeymoon Special',
    tagline: 'Crafted for Couples • Private Cab • Candlelight Dinner • Luxury Resort',
    duration: '5 Nights / 6 Days',
    category: 'honeymoon',
    startingPricePerCouple: 21999,
    featured: true,
    heroImage: getAssetUrl('/images/shimla_sunset_balcony.jpg'),
    badge: '❤️ #1 BESTSELLER FOR COUPLES',
    highlights: [
      'Dedicated Sanitized Private Cab (Delhi / Chandigarh Pickup & Drop)',
      '2 Nights Luxury Shimla Resort + 3 Nights Cozy Manali Wood Suite',
      'Romantic Candlelight Dinner & Special Flower Bed Decoration',
      'Daily Mountain-View Breakfast & Dinner Included',
      'Kufri Snow Adventure, Solang Valley, Atal Tunnel & Sissu Drive',
      'Complimentary Honeymoon Cake & Local Himachali Mementos',
    ],
    inclusions: [
      'Private Cab for complete 6 days sightseeing & transfers',
      'All toll taxes, state road taxes, parking & driver allowances',
      '5 Nights accommodation in Handpicked Valley View Rooms',
      '5 Breakfasts & 5 Dinners (MAP Plan)',
      'Special Candlelight dinner table setup with roses',
      'Flower bed decoration on 1st night in Manali',
      '24x7 Dedicated Local Himachal Trip Concierge',
    ],
    itinerarySummary: [
      'Day 1: Delhi/Chandigarh Pickup ➔ Scenic Drive to Shimla ➔ Evening Mall Road & Ridge Walk',
      'Day 2: Kufri Snow Viewpoint ➔ Green Valley ➔ Hassan Valley Pine Forest ➔ Jakhoo Temple',
      'Day 3: Shimla to Manali Scenic Drive ➔ Pandoh Dam ➔ Kullu Shawl Weaving & River Rafting',
      'Day 4: Solang Valley Snow Sports ➔ Atal Tunnel ➔ Sissu Waterfall (Lahaul Valley)',
      'Day 5: Hadimba Devi Temple ➔ Vashisht Hot Springs ➔ Old Manali Cafes ➔ Van Vihar Walk',
      'Day 6: Manali Checkout ➔ Scenic Return Drive to Chandigarh / Delhi Drop',
    ],
  },
  {
    id: 'luxury-honeymoon-6n7d',
    title: 'Himachal 6N/7D Royal Honeymoon & Pine Retreat',
    tagline: 'Extra Day of Pure Leisure • Heated Jacuzzi Rooms • Bonfire Night',
    duration: '6 Nights / 7 Days',
    category: 'luxury',
    startingPricePerCouple: 28999,
    featured: true,
    heroImage: getAssetUrl('/images/manali_wooden_suite.jpg'),
    badge: '👑 ULTRA LUXURY EXPERIENCE',
    highlights: [
      'Toyota Innova Crysta / Premium Sedan from Pickup to Drop',
      '3 Nights Deluxe Shimla Stay + 3 Nights Alpine Wooden Cottage Manali',
      'Candlelight Dinner with Live Acoustic Guitar Setting',
      'Private Bonfire Evening with Mountain Snacks',
      'Complete Sightseeing: Shimla, Kufri, Solang, Rohtang / Atal Tunnel, Kasol',
      'Complimentary Professional Couple Photoshoot in Traditional Dress',
    ],
    inclusions: [
      'Exclusive private SUV cab with experienced mountain chauffeur',
      '6 Nights in Luxury 4-Star / Boutique Heritage Stays',
      'Daily gourmet breakfast and chef-crafted dinners',
      'Flower bed decoration + Heart-shaped anniversary/honeymoon cake',
      'Bonfire session with stargazing experience',
      'All vehicle permits, green taxes & parking charges',
    ],
    itinerarySummary: [
      'Day 1: Delhi / Chandigarh Pickup ➔ Shimla Mountain Resort Check-in',
      'Day 2: Kufri Adventure Park ➔ Mahasu Peak ➔ Heritage Shimla Mall Road',
      'Day 3: Scenic Drive to Manali via Kullu Valley & Beas River banks',
      'Day 4: Solang Snow Wonderland ➔ Atal Tunnel ➔ Sissu Snow Plateau',
      'Day 5: Manali Local Strolls ➔ Hadimba Temple ➔ Romantic Cafe Date in Old Manali',
      'Day 6: Day Excursion to Kasol & Manikaran Hot Springs OR Leisure Valley Walk',
      'Day 7: Farewell Mountain Views ➔ Return Drive to Delhi / Chandigarh Drop',
    ],
  },
  {
    id: 'shimla-kufri-3n4d',
    title: 'Shimla & Kufri 3N/4D Romantic Weekend Escape',
    tagline: 'Quick Scenic Rejuvenation • Mall Road Heritage • Pine Forest Trek',
    duration: '3 Nights / 4 Days',
    category: 'budget',
    startingPricePerCouple: 13999,
    featured: false,
    heroImage: getAssetUrl('/images/pine_forest_terrace.jpg'),
    badge: '⚡ POPULAR WEEKEND GETAWAY',
    highlights: [
      'Comfortable Pickup from Kalka, Chandigarh or Delhi',
      '3 Nights in Charming Valley-Facing Shimla Hotel',
      'Kufri Fun World, Horse Riding & Snow Viewpoints',
      'Evening Shopping at Lakkar Bazaar & Christ Church Walk',
      'Daily Breakfast & Dinner Included',
    ],
    inclusions: [
      'Dedicated private taxi for all transfers and sightseeing',
      '3 Nights Hotel Stay in Deluxe Room',
      'Breakfast and Dinner daily',
      'Fuel, driver charges, toll & parking',
    ],
    itinerarySummary: [
      'Day 1: Pickup from Chandigarh/Delhi ➔ Scenic Hill Drive to Shimla',
      'Day 2: Full Day Kufri, Green Valley, Wildflower Hall & Jakhoo Hill',
      'Day 3: Shimla Local Sightseeing ➔ Viceregal Lodge ➔ Evening Ridge Stroll',
      'Day 4: Leisure Breakfast ➔ Return Transfer to Chandigarh / Delhi',
    ],
  },
  {
    id: 'manali-solang-4n5d',
    title: 'Manali, Solang Valley & Atal Tunnel 4N/5D Escape',
    tagline: 'Snow Activities • Cozy Wooden Cottages • River Rafting',
    duration: '4 Nights / 5 Days',
    category: 'family',
    startingPricePerCouple: 17999,
    featured: false,
    heroImage: getAssetUrl('/images/destinations/manali.jpg'),
    badge: '❄️ SNOW & ADVENTURE SPECIAL',
    highlights: [
      'Direct Private Cab from Chandigarh / Delhi to Manali',
      '4 Nights in Riverside or Apple Orchard Resort in Manali',
      'Solang Valley Snow Point, Zorbing & Paragliding',
      'Atal Tunnel Engineering Wonder & Sissu Lahaul Trip',
      'Vashisht Temple & Jogini Waterfall Nature Walk',
    ],
    inclusions: [
      'Private dedicated cab throughout the tour',
      '4 Nights Deluxe Hotel / Resort Stay',
      'Daily morning breakfast and delicious dinner',
      'Sightseeing as per itinerary without hidden fees',
    ],
    itinerarySummary: [
      'Day 1: Pickup ➔ Overnight / Day Drive through Mandi & Kullu to Manali',
      'Day 2: Solang Valley Snow Wonderland ➔ Atal Tunnel Exploration',
      'Day 3: Hadimba Temple ➔ Manu Temple ➔ Old Manali Cafes ➔ Mall Road',
      'Day 4: Naggar Castle Heritage Tour ➔ Art Gallery ➔ River Rafting at Kullu',
      'Day 5: Morning Mountain Views ➔ Return Drop to Chandigarh / Delhi',
    ],
  },
];

export const HONEYMOON_PERKS = [
  {
    title: 'Private Mountain View Suite',
    description: 'Reserved couple room with warm wooden interiors and uninterrupted sunrise view over snow peaks.',
    icon: '🏨',
  },
  {
    title: 'Candlelight Dinner for Two',
    description: 'Romantic evening dining with candle decor, fresh roses and customized culinary menu.',
    icon: '🕯️',
  },
  {
    title: 'Aromatic Flower Bed Decor',
    description: 'Fresh floral setup on the wedding couple bed prepared by the hotel team on arrival night.',
    icon: '🌹',
  },
  {
    title: 'Dedicated Sanitized Private Cab',
    description: 'Comfortable sedan or SUV with courteous local driver from Delhi/Chandigarh pickup to drop.',
    icon: '🚗',
  },
  {
    title: 'Honeymoon Cake & Surprises',
    description: 'Special celebration cake for your milestone trip, plus personalized anniversary/birthday surprises.',
    icon: '🎂',
  },
  {
    title: 'Snow & Valley Sightseeing',
    description: 'Kufri, Solang, Atal Tunnel, Mall Road, and hidden pine forest spots with flexible timings.',
    icon: '❄️',
  },
];

export const HOTEL_GALLERY = [
  {
    name: 'Hadimba Pine Luxury Wooden Suite',
    location: 'Old Manali, Himachal Pradesh',
    image: getAssetUrl('/images/manali_wooden_suite.jpg'),
    type: 'Luxury Wooden Suite',
    features: ['Panoramic Snow Balcony', 'Cedar Wood Interior', 'Room Heater', 'King Size Bed'],
  },
  {
    name: 'Sunset Valley Glass Terrace Resort',
    location: 'Mashobra, Shimla Hills',
    image: getAssetUrl('/images/shimla_sunset_balcony.jpg'),
    type: 'Valley View Luxury Stay',
    features: ['Sunset Cloud View', 'Glass Balcony Lounge', 'Fine Dining Cafe', 'Bonfire Garden'],
  },
  {
    name: 'Pine Crest Garden Cafe & Resort',
    location: 'Shimla - Kufri Road',
    image: getAssetUrl('/images/pine_forest_terrace.jpg'),
    type: 'Alpine Garden Resort',
    features: ['Pine Woods Setting', 'Open Air Mountain Cafe', 'Kids Play Zone', 'Peaceful Serenity'],
  },
  {
    name: 'Himalayan Orchard Dining Stay',
    location: 'Kullu - Manali Highway',
    image: getAssetUrl('/images/mountain_dining.jpg'),
    type: 'Orchard Valley Retreat',
    features: ['Riverside Lawn', 'Candlelight Dining', 'Mountain Backdrop', 'Apple Orchard Walk'],
  },
];

export const CAB_OPTIONS = [
  {
    name: 'Swift Dzire / Toyota Etios',
    category: 'Sedan (Best for Couples)',
    capacity: '2-3 Passengers + 2 Bags',
    idealFor: 'Couples, Honeymooners, Small Budget Travelers',
    image: getAssetUrl('/images/fleet/dzire.jpeg'),
    rateNote: 'All Tolls, Fuel, State Taxes & Driver Charges Included',
  },
  {
    name: 'Maruti Ertiga',
    category: 'Compact SUV (Spacious & Smooth)',
    capacity: '4-5 Passengers + 3 Bags',
    idealFor: 'Small Families & Extra Legroom for Couples',
    image: getAssetUrl('/images/fleet/ertiga.jpeg'),
    rateNote: 'Perfect for Mountain Hairpins & Snowy Ascents',
  },
  {
    name: 'Toyota Innova Crysta',
    category: 'Luxury SUV (Ultimate Mountain Comfort)',
    capacity: '6-7 Passengers + 5 Bags',
    idealFor: 'VIP Luxury Travel, Supreme Comfort on Long Drives',
    image: getAssetUrl('/images/fleet/innova_crysta.jpeg'),
    rateNote: 'Captain Seats, Rear AC, Maximum Luggage Space',
  },
];

export const FAQS = [
  {
    question: 'How do we book a Shimla Manali honeymoon package?',
    answer: 'Booking is simple and transparent! Click on "Get Instant WhatsApp Quote" or call +91 83519 87587. Our Himachal travel specialist will share a day-by-day customized itinerary, hotel photos, vehicle confirmation, and a fixed price quote with no hidden charges.',
  },
  {
    question: 'Is the cab shared with other tourists or completely private?',
    answer: 'All our tour packages include 100% DEDICATED PRIVATE CABS. The cab stays exclusively with you from Delhi or Chandigarh pickup, throughout all local sightseeing in Shimla and Manali, until final drop.',
  },
  {
    question: 'Are candlelight dinner and flower bed decoration included?',
    answer: 'Yes! Our Honeymoon Packages include a special candlelight dinner and romantic flower bed decoration, along with a complimentary honeymoon cake.',
  },
  {
    question: 'What is the best time to visit Shimla and Manali for snow?',
    answer: 'For fresh snow, mid-December to early March is the best time. You will find snow at Kufri in Shimla and Solang Valley, Atal Tunnel, and Sissu in Manali. For lush green weather and pleasant temperatures, April to June and September to November are ideal.',
  },
  {
    question: 'Are there any hidden costs or driver night charges?',
    answer: 'No! Safar Sathi operates with 100% transparent pricing. Fuel, driver allowance, toll taxes, state permits, and hotel taxes (GST) are all covered in your agreed package price.',
  },
];

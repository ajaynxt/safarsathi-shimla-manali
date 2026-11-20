import React, { useState } from 'react';
import { MapPin, Navigation, Coffee, BedDouble, Camera, Sunset, Car, Sparkles } from 'lucide-react';

const DAYS = [
  {
    dayNumber: '01',
    title: 'Delhi / Chandigarh to Shimla — Queen of Hills Arrival',
    route: 'Delhi / Chandigarh ➔ Kalka ➔ Shimla (2,276m)',
    icon: Car,
    stay: 'Overnight in Shimla Mountain Resort',
    meals: 'Dinner Included',
    points: [
      'Warm pickup by dedicated chauffeur from Delhi Airport/Railway Station or Chandigarh.',
      'Enjoy the scenic upward mountain drive passing timber trails and pine-covered ridges.',
      'Check-in at Shimla hotel, relax with a hot cup of authentic masala tea.',
      'Evening leisurely stroll at Mall Road, Ridge, Christ Church and Lakkar Bazaar.',
      'Welcome dinner served at the hotel dining room.',
    ],
  },
  {
    dayNumber: '02',
    title: 'Kufri Snow Viewpoint & Green Valley Day Tour',
    route: 'Shimla ➔ Green Valley ➔ Kufri ➔ Jakhoo Hill ➔ Shimla',
    icon: Camera,
    stay: 'Overnight in Shimla Mountain Resort',
    meals: 'Breakfast & Dinner Included',
    points: [
      'Morning breakfast with panoramic Himalayan valley views.',
      'Drive through the breathtaking Green Valley, one of Asia’s densest pine forests.',
      'Explore Kufri: Mahasu Peak, Himalayan Nature Park, and snow fun activities.',
      'Optional Yak riding and local Himachali photography sessions.',
      'Visit the iconic Jakhoo Temple dedicated to Lord Hanuman situated atop the highest hill in Shimla.',
    ],
  },
  {
    dayNumber: '03',
    title: 'Scenic Drive from Shimla to Manali via Kullu Valley',
    route: 'Shimla ➔ Bilaspur ➔ Mandi ➔ Pandoh Dam ➔ Kullu ➔ Manali',
    icon: Navigation,
    stay: 'Overnight in Manali Alpine Wooden Suite',
    meals: 'Breakfast & Dinner Included',
    points: [
      'Early morning hearty breakfast and checkout from Shimla.',
      'Scenic highway drive alongside the Beas River through lush apple orchards.',
      'Stop at Sundernagar Lake, Pandoh Dam, and the sacred Hanogi Mata Temple.',
      'Visit Kullu Shawl Weaving Centers and optional thrilling White Water River Rafting.',
      'Check-in at cozy Manali hotel; evening at leisure to experience fresh mountain air.',
    ],
  },
  {
    dayNumber: '04',
    title: 'Solang Valley Snow Wonderland & Atal Tunnel Experience',
    route: 'Manali ➔ Solang Valley ➔ Atal Tunnel (3,048m) ➔ Sissu (Lahaul)',
    icon: Sparkles,
    stay: 'Overnight in Manali Alpine Wooden Suite',
    meals: 'Breakfast & Special Candlelight Dinner',
    points: [
      'Full day excursion to Solang Valley, renowned for adventure snow sports (skiing, zorbing, paragliding, snowmobiling).',
      'Drive through the world-famous Atal Tunnel, an engineering marvel piercing through the Pir Panjal range.',
      'Step out into the breathtaking, snow-clad landscape of Sissu in Lahaul Valley.',
      'Capture romantic couple photos against the backdrop of snow-capped Himalayan peaks.',
      'Evening: Romantic Candlelight Dinner & Flower Bed Decoration arranged specially for you.',
    ],
  },
  {
    dayNumber: '05',
    title: 'Manali Local Heritage & Old Manali Cafe Hopping',
    route: 'Hadimba Temple ➔ Vashisht Kund ➔ Old Manali ➔ Van Vihar',
    icon: Coffee,
    stay: 'Overnight in Manali Alpine Wooden Suite',
    meals: 'Breakfast & Dinner Included',
    points: [
      'Visit the ancient 16th-century wooden Hadimba Devi Temple set in giant deodar cedar forests.',
      'Take a dip in the natural therapeutic hot sulfur springs at Vashisht Village.',
      'Visit Tibetan Monasteries and shop for local handcrafted souvenirs.',
      'Afternoon cafe crawl through Old Manali with wood-fired pizzas and live acoustic mountain vibes.',
      'Peaceful sunset walk through the Van Vihar deodar nature sanctuary.',
    ],
  },
  {
    dayNumber: '06',
    title: 'Manali to Chandigarh / Delhi Farewell Drop',
    route: 'Manali ➔ Mandi ➔ Chandigarh / Delhi Drop',
    icon: Sunset,
    stay: 'Tour Concludes with Cherished Memories',
    meals: 'Breakfast Included',
    points: [
      'Relish your final breakfast amidst snow-dusted pine breezes.',
      'Check out and embark on your return journey with private cab.',
      'Stop for lunch and fresh fruit preserves along the highway.',
      'Timely drop at Chandigarh / Delhi Airport or Railway Station for your onward journey.',
    ],
  },
];

export const DetailedItineraryTimeline: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="itinerary" className="py-20 bg-[#081E3B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest border border-amber-400/30">
            <Navigation className="w-3.5 h-3.5" /> Flagship 5N/6D Route
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Your Day-by-Day Journey
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Carefully paced for maximum romance, comfortable driving hours, and zero rushed sightseeing.
          </p>
        </div>

        {/* Day selection tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2.5 pb-4 mb-8 justify-start lg:justify-center">
          {DAYS.map((d, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`shrink-0 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition flex items-center gap-2 border ${
                activeDay === index
                  ? 'bg-gradient-to-r from-[#E0A96D] to-[#D48C46] text-slate-900 border-amber-400 shadow-lg'
                  : 'bg-white/10 text-white/80 border-white/15 hover:bg-white/15'
              }`}
            >
              <span>Day {d.dayNumber}</span>
            </button>
          ))}
        </div>

        {/* Active Day Detail Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#E0A96D] text-slate-950 text-xs font-extrabold px-3 py-1 rounded-lg">
                DAY {DAYS[activeDay].dayNumber}
              </span>
              <span className="text-xs font-bold text-amber-200 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {DAYS[activeDay].route}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              {DAYS[activeDay].title}
            </h3>

            {/* Inclusions tags */}
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-white/15 px-3 py-1 rounded-full text-slate-200 flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5 text-amber-300" /> {DAYS[activeDay].stay}
              </span>
              <span className="bg-white/15 px-3 py-1 rounded-full text-slate-200 flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-emerald-300" /> {DAYS[activeDay].meals}
              </span>
            </div>

            {/* Points checklist */}
            <div className="space-y-2.5 pt-2">
              {DAYS[activeDay].points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200/90 leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-center p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-400/20 text-[#E0A96D] flex items-center justify-center text-2xl mb-4">
              ✨
            </div>
            <h4 className="text-base font-bold text-white">Need Customized Timing?</h4>
            <p className="text-xs text-slate-300 mt-1 mb-5">
              Want to add Kasol, Manikaran, or an extra night in Manali? We will tailor the timeline for you.
            </p>
            <a
              href="https://wa.me/918351987587?text=Hello%20Safar%20Sathi!%20Can%20we%20customize%20the%205N6D%20Shimla%20Manali%20itinerary?"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 rounded-xl font-bold text-xs shadow-md transition"
            >
              Customize on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PACKAGES_DATA, PackageItem } from '../data/packagesData';
import { Heart, Clock, Check, ChevronDown, ChevronUp, Sparkles, Send } from 'lucide-react';

interface PackageListProps {
  onOpenBooking: (pkgTitle?: string) => void;
}

export const PackageListSection: React.FC<PackageListProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'honeymoon' | 'luxury' | 'budget'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('honeymoon-special-5n6d');

  const filtered = PACKAGES_DATA.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleBookOnWhatsApp = (pkg: PackageItem) => {
    const text = `Hello Safar Sathi! I am interested in booking:
• Package: ${pkg.title} (${pkg.duration})
• Starting Price: ₹${pkg.startingPricePerCouple.toLocaleString('en-IN')} for 2
Please send me available travel dates and booking details.`;
    window.open(`https://wa.me/918351987587?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#9A713C]">
              Featured Himachal Itineraries
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#421E29]">
              Handcrafted Shimla & Manali Packages
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              Every package includes dedicated private cab, sanitised mountain hotel stays, daily meals, and transparent local rates.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 bg-[#FAF7F2] p-1.5 rounded-2xl border border-slate-200">
            {[
              { id: 'all', label: 'All Packages' },
              { id: 'honeymoon', label: '❤️ Honeymoon' },
              { id: 'luxury', label: '👑 Luxury' },
              { id: 'budget', label: '⚡ Weekend' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                  activeTab === tab.id
                    ? 'bg-[#421E29] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filtered.map((pkg) => {
            const isExpanded = expandedId === pkg.id;

            return (
              <div
                key={pkg.id}
                className="bg-[#FAF7F2] rounded-3xl border border-[#E9DFD5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header & Media */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={pkg.heroImage}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="bg-[#421E29]/90 backdrop-blur-md text-amber-300 text-xs font-extrabold px-3 py-1.5 rounded-full border border-amber-400/30">
                        {pkg.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> {pkg.duration}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold leading-snug">{pkg.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-5">
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">{pkg.tagline}</p>

                    {/* Highlights bullet points */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Package Highlights:
                      </span>
                      {pkg.highlights.slice(0, 4).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Collapsible Detailed Itinerary */}
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleExpand(pkg.id)}
                        className="text-xs font-bold text-[#E05500] hover:text-[#B84000] flex items-center gap-1 transition"
                      >
                        {isExpanded ? (
                          <>
                            Hide Day-by-Day Plan <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            View Full Day-by-Day Itinerary <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-4 p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2.5 text-xs text-slate-700 animate-fadeIn">
                          <div className="font-bold text-[#421E29] mb-1">Detailed Route & Stays:</div>
                          {pkg.itinerarySummary.map((day, idx) => (
                            <div key={idx} className="pb-1 border-b border-slate-100 last:border-0">
                              {day}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Price & Action Bar */}
                <div className="p-6 sm:p-7 bg-white border-t border-[#E9DFD5] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Starting Rate Per Couple
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#421E29]">
                        ₹{pkg.startingPricePerCouple.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">all-inclusive</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleBookOnWhatsApp(pkg)}
                      className="bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3 rounded-xl transition shadow"
                      title="Chat on WhatsApp"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenBooking(pkg.title)}
                      className="bg-[#421E29] hover:bg-[#5B293A] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow transition"
                    >
                      Book This Tour
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

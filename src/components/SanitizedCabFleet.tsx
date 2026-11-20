import React from 'react';
import { CAB_OPTIONS } from '../data/packagesData';
import { ShieldCheck, Users, Briefcase, CheckCircle2 } from 'lucide-react';

export const SanitizedCabFleet: React.FC = () => {
  return (
    <section id="cabs" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#9A713C]">
            Verified Mountain Fleet
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#421E29]">
            Dedicated Private Cabs
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Never crammed into shared buses. Travel at your own rhythm with licensed mountain chauffeurs who know every panoramic hairpin turn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CAB_OPTIONS.map((cab, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-[#E9DFD5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={cab.image}
                    alt={cab.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#421E29] text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
                    {cab.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-xl text-slate-900">{cab.name}</h3>

                  <div className="flex flex-wrap gap-3 text-xs text-slate-600 border-y border-slate-100 py-3">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Users className="w-4 h-4 text-[#E05500]" /> {cab.capacity}
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> Sanitized Daily
                    </span>
                  </div>

                  <p className="text-xs text-slate-600">{cab.idealFor}</p>

                  <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl text-xs font-semibold flex items-start gap-2 border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cab.rateNote}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/918351987587?text=Hello%20Safar%20Sathi!%20I%20want%20to%20book%20a%20private%20${encodeURIComponent(cab.name)}%20for%20Shimla%20Manali%20tour.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-[#421E29] hover:bg-[#5B293A] text-white py-3 rounded-xl font-bold text-xs transition"
                >
                  Book This Vehicle
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

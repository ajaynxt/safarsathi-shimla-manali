import React, { useState } from 'react';
import { HOTEL_GALLERY } from '../data/packagesData';
import { Hotel, Check, Eye } from 'lucide-react';

export const ResortShowcase: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="resorts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#9A713C]">
            Verified Mountain Stays
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#421E29]">
            Where You Will Stay
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            No stock illusions. We only partner with handpicked properties featuring direct mountain views, private balconies, and exceptional Himachali warmth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTEL_GALLERY.map((hotel, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] rounded-3xl border border-[#E9DFD5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelectedImage(hotel.image)}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-1.5 rounded-full text-slate-700 opacity-0 group-hover:opacity-100 transition">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#421E29]/90 text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    {hotel.type}
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-bold text-base text-slate-900 group-hover:text-[#421E29] transition">
                    {hotel.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">{hotel.location}</p>

                  <div className="mt-4 space-y-1.5">
                    {hotel.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={`https://wa.me/918351987587?text=Hello%20Safar%20Sathi!%20Can%20you%20share%20more%20room%20photos%20and%20rates%20for%20${encodeURIComponent(hotel.name)}?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-white hover:bg-slate-50 text-[#421E29] border border-[#E9DFD5] py-2.5 rounded-xl font-bold text-xs transition"
                >
                  Request Room Photos
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-[90vh] relative">
              <img
                src={selectedImage}
                alt="Selected Resort View"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 text-white hover:bg-white/40 px-3 py-1.5 rounded-full font-bold text-xs backdrop-blur-sm"
              >
                Close ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

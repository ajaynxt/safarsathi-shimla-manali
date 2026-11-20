import React, { useState } from 'react';
import { X, Send, Phone, Calendar, Users, MapPin, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackageTitle?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultPackageTitle = 'Shimla Manali 5N/6D Romantic Honeymoon Special',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [pickupCity, setPickupCity] = useState('Delhi');
  const [packageTitle, setPackageTitle] = useState(defaultPackageTitle);
  const [guests, setGuests] = useState('2 Persons (Couple)');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Safar Sathi! I want to book a tour:
• Name: ${name}
• Contact: ${phone}
• Package: ${packageTitle}
• Travel Date: ${travelDate || 'Flexible / Upcoming'}
• Pickup Location: ${pickupCity}
• Travelers: ${guests}
${notes ? `• Special Requests: ${notes}` : ''}

Please send the complete itinerary quotation and confirm room availability.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/918351987587?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 relative">
        {/* Modal Header */}
        <div className="bg-[#421E29] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Direct Local Quote
          </div>
          <h3 className="text-xl font-bold">Request Itinerary & Pricing</h3>
          <p className="text-xs text-slate-300 mt-1">
            Get instant response from our Shimla & Manali travel team via WhatsApp.
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Your Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#421E29]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                WhatsApp Phone
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#421E29]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Pickup City
              </label>
              <select
                value={pickupCity}
                onChange={(e) => setPickupCity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#421E29]"
              >
                <option value="Delhi">Delhi</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Kalka">Kalka</option>
                <option value="Shimla">Shimla</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Estimated Date
              </label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#421E29]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#421E29]"
              >
                <option value="2 Persons (Couple)">2 Persons (Couple)</option>
                <option value="3-4 Persons (Family)">3-4 Persons (Family)</option>
                <option value="5-6 Persons (SUV)">5-6 Persons (SUV)</option>
                <option value="7+ Persons (Group)">7+ Persons (Group)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Package Selected
            </label>
            <input
              type="text"
              value={packageTitle}
              onChange={(e) => setPackageTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Special Requests (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="e.g. Honeymoon candlelight dinner, anniversary date, high floor mountain view..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#421E29]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2 mt-2"
          >
            <Send className="w-4 h-4" /> Send Request on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

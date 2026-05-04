import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export function Book() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get('service') || 'individual';

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  if (isSubmitted) {
    return (
      <div className="py-32 max-w-3xl mx-auto px-8 text-center bg-[#f9f8f4] min-h-[70vh] flex flex-col justify-center">
        <div className="mb-10 text-[#1a1a1a] font-sans text-[12px] uppercase tracking-[0.5em]">
          Transmission Confirmed
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-[#1a1a1a] mb-8 italic">Request Logged</h1>
        <p className="text-sm font-sans text-stone-600 mb-12 leading-relaxed max-w-lg mx-auto">
          Our intake coordinators are currently reviewing your parameters. You will receive scheduling protocols within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="py-20 md:py-32 bg-[#f9f8f4]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-20 text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-stone-400 block mb-6">Intake</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-6 italic">Initiate Protocol</h1>
          <p className="text-sm font-sans text-stone-600 max-w-xl mx-auto">Supply the foundational parameters below to begin your structural assessment.</p>
        </div>

        <div className="bg-white border border-[#1a1a1a] shadow-2xl overflow-hidden relative">
          <div className="grid md:grid-cols-12">
            
            {/* Sidebar Info */}
            <div className="bg-[#1a1a1a] text-[#f9f8f4] p-12 md:col-span-5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -bottom-20 -left-10 text-[200px] leading-none font-black text-white/5 pointer-events-none select-none z-0">
                04
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif mb-10 italic text-stone-300">Phase Guidelines</h3>
                <ul className="space-y-8 font-sans text-[10px] uppercase tracking-widest text-[#f9f8f4]">
                  <li className="flex items-start border-b border-[#333] pb-6">
                    <span className="w-6 text-stone-500 mr-4 font-serif italic">01</span>
                    <span className="leading-loose">Algorithmic matching to the optimal clinical architect.</span>
                  </li>
                  <li className="flex items-start border-b border-[#333] pb-6">
                    <span className="w-6 text-stone-500 mr-4 font-serif italic">02</span>
                    <span className="leading-loose">Initial blueprints mapped in a 50-minute interval.</span>
                  </li>
                  <li className="flex items-start border-b border-[#333] pb-6">
                    <span className="w-6 text-stone-500 mr-4 font-serif italic">03</span>
                    <span className="leading-loose">Secure telemetry channel provided 24h prior.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-20 font-sans text-[9px] uppercase tracking-widest text-stone-500 relative z-10 border-t border-[#333] pt-6">
                Emergency protocol: Override to 988 or nearest medical facility if immediate structural failure is imminent.
              </div>
            </div>

            {/* Form Area */}
            <div className="p-12 md:p-16 md:col-span-7 bg-white relative z-10">
              <form onSubmit={handleSubmit} className="space-y-10 group">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="firstName" className="block font-sans text-[9px] uppercase tracking-widest text-stone-500">First Name</label>
                    <input type="text" id="firstName" required className="w-full px-0 py-3 border-b border-stone-200 focus:border-[#1a1a1a] outline-none transition-colors bg-transparent text-[#1a1a1a] font-sans text-sm" />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="lastName" className="block font-sans text-[9px] uppercase tracking-widest text-stone-500">Last Name</label>
                    <input type="text" id="lastName" required className="w-full px-0 py-3 border-b border-stone-200 focus:border-[#1a1a1a] outline-none transition-colors bg-transparent text-[#1a1a1a] font-sans text-sm" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="block font-sans text-[9px] uppercase tracking-widest text-stone-500">Digital Address (Email)</label>
                  <input type="email" id="email" required className="w-full px-0 py-3 border-b border-stone-200 focus:border-[#1a1a1a] outline-none transition-colors bg-transparent text-[#1a1a1a] font-sans text-sm" />
                </div>

                <div className="space-y-3">
                  <label htmlFor="phone" className="block font-sans text-[9px] uppercase tracking-widest text-stone-500">Telemetry (Phone)</label>
                  <input type="tel" id="phone" required className="w-full px-0 py-3 border-b border-stone-200 focus:border-[#1a1a1a] outline-none transition-colors bg-transparent text-[#1a1a1a] font-sans text-sm" />
                </div>

                <div className="space-y-3">
                  <label htmlFor="service" className="block font-sans text-[9px] uppercase tracking-widest text-stone-500">Requested Architecture</label>
                  <select id="service" defaultValue={initialService} className="w-full px-0 py-4 border-b border-stone-200 focus:border-[#1a1a1a] outline-none transition-colors bg-white text-[#1a1a1a] font-sans text-sm uppercase tracking-widest">
                    <option value="individual">Individual Framework</option>
                    <option value="couples">Relational Dynamics</option>
                    <option value="group">Group Matrix</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label htmlFor="notes" className="block font-sans text-[9px] uppercase tracking-widest text-stone-500">Initial Topography (Optional)</label>
                  <textarea id="notes" rows={3} className="w-full px-0 py-3 border-b border-stone-200 focus:border-[#1a1a1a] outline-none transition-colors bg-transparent text-[#1a1a1a] font-sans text-sm resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#1a1a1a] hover:bg-[#333] text-[#f9f8f4] py-6 font-sans text-[11px] uppercase tracking-widest transition-colors shadow-none mt-8 border border-[#1a1a1a]">
                  Transmit Intake Block
                </button>
                <p className="font-sans text-[9px] uppercase tracking-widest text-stone-400 text-center mt-6">
                  Data stream is heavily encrypted and structurally compliant.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

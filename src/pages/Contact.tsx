export function Contact() {
  return (
    <div className="py-20 md:py-32 bg-[#f9f8f4]">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="mb-24 flex flex-col justify-center items-center text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-stone-400 block mb-6">Comms Channel</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-8 italic">Interface</h1>
          <p className="text-sm font-sans text-stone-600 max-w-xl leading-relaxed">
            Establish a connection with our clinical navigators. We are available to decode parameters and direct your initial trajectory.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start relative z-10">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-16 lg:pr-8">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 border-b border-stone-300 pb-2 mb-8 block">Digital & Vocal Telemetry</span>
              <div className="space-y-8">
                <div className="flex flex-col">
                  <h3 className="font-sans text-[11px] uppercase tracking-widest text-[#1a1a1a] mb-2">Primary Node</h3>
                  <p className="text-stone-500 font-serif italic text-lg hover:text-[#1a1a1a] transition-colors cursor-pointer">hello@healyourmind.space</p>
                  <p className="font-sans text-[9px] uppercase tracking-widest text-stone-400 mt-2">Latency: &lt; 24h</p>
                </div>
                
                <div className="flex flex-col">
                  <h3 className="font-sans text-[11px] uppercase tracking-widest text-[#1a1a1a] mb-2">Voice Array</h3>
                  <p className="text-stone-500 font-serif italic text-lg hover:text-[#1a1a1a] transition-colors cursor-pointer">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div>
               <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 border-b border-stone-300 pb-2 mb-8 block">Physical Base</span>
              <div className="space-y-8">
                <div className="flex flex-col">
                  <h3 className="font-sans text-[11px] uppercase tracking-widest text-[#1a1a1a] mb-2">Coordinates</h3>
                  <p className="text-stone-500 font-sans text-sm leading-relaxed">
                    123 Wellness Ave, Sector 4<br/>
                    New York, NY 10001
                  </p>
                </div>
                
                <div className="flex flex-col">
                  <h3 className="font-sans text-[11px] uppercase tracking-widest text-[#1a1a1a] mb-2">Operational Windows</h3>
                  <p className="text-stone-500 font-sans text-sm leading-relaxed">
                    M-F: 0800 - 2000 Hrs<br/>
                    SAT: 0900 - 1400 Hrs<br/>
                    SUN: Offline
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-[#1a1a1a] p-12 md:p-16 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-[#1a1a1a] z-0"></div>
            
             <h2 className="text-3xl font-serif text-[#1a1a1a] mb-12 italic relative z-10">Initialize Transmission</h2>
            <form className="space-y-10 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Transmission active."); }}>
              
              <div className="space-y-3">
                <label htmlFor="name" className="block font-sans text-[9px] uppercase tracking-widest text-stone-500">Designation (Name)</label>
                <input type="text" id="name" required className="w-full px-0 py-3 border-b border-stone-200 focus:border-[#1a1a1a] outline-none transition-colors bg-transparent text-[#1a1a1a] font-sans text-sm" />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="email" className="block font-sans text-[9px] uppercase tracking-widest text-stone-500">Return Vector (Email)</label>
                <input type="email" id="email" required className="w-full px-0 py-3 border-b border-stone-200 focus:border-[#1a1a1a] outline-none transition-colors bg-transparent text-[#1a1a1a] font-sans text-sm" />
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="block font-sans text-[9px] uppercase tracking-widest text-stone-500">Data Payload</label>
                <textarea id="message" rows={4} required className="w-full px-0 py-3 border-b border-stone-200 focus:border-[#1a1a1a] outline-none transition-colors bg-transparent text-[#1a1a1a] font-sans text-sm resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#1a1a1a] hover:bg-transparent text-[#f9f8f4] hover:text-[#1a1a1a] border border-[#1a1a1a] py-6 font-sans text-[11px] uppercase tracking-widest transition-colors mt-8">
                Broadcast Signal
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

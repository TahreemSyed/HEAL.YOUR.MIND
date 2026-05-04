import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col bg-[#f9f8f4] text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] px-8 py-20 lg:px-16 flex flex-col justify-center overflow-hidden border-b border-stone-200">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] leading-none font-sans font-black text-stone-200/40 pointer-events-none select-none z-0">
          01
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 w-full h-full">
          <div className="lg:col-span-6 flex flex-col justify-center py-16">
            <div className="mb-12">
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-stone-500 block mb-6">Mental Wellness</span>
              <h1 className="text-[70px] sm:text-[90px] lg:text-[110px] leading-[0.85] font-serif font-normal italic -ml-2 mb-8 text-[#1a1a1a]">
                The <br/>Quiet <br/><span className="not-italic">Space</span>
              </h1>
              <p className="font-sans text-sm leading-relaxed text-stone-600 max-w-sm">
                A minimalist clinical practice situated at the intersection of evidence-based therapy and holistic self-care. Designed to merge the boundaries between internal solace and external reality.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-12 bg-[#1a1a1a]"></div>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Established — 2024</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end lg:items-end pb-16 relative">
             <div className="hidden lg:flex absolute top-10 right-0 w-64 h-80 bg-stone-200/50 border border-stone-300 z-0 items-center justify-center p-8 text-center backdrop-blur-sm">
                <p className="font-serif italic text-2xl text-stone-500">Purity through internal structure.</p>
             </div>

             <div className="relative z-10 bg-white p-12 border border-stone-200 w-full lg:w-4/5 shadow-2xl">
                <h4 className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-6">Take the first step</h4>
                <p className="font-serif text-2xl text-[#1a1a1a] mb-10 leading-snug">
                  Professional therapy tailored to your unique psychological architecture. 
                </p>
                <div className="flex flex-col gap-4">
                  <Link
                    to="/book"
                    className="group border border-[#1a1a1a] bg-[#1a1a1a] text-[#f9f8f4] px-8 py-4 font-sans text-[11px] uppercase tracking-widest hover:bg-transparent hover:text-[#1a1a1a] transition-all duration-300 flex justify-between items-center"
                  >
                    Book a Session
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link
                    to="/assessment"
                    className="border border-stone-300 text-[#1a1a1a] px-8 py-4 font-sans text-[11px] uppercase tracking-widest hover:border-[#1a1a1a] transition-colors duration-300 text-center"
                  >
                    Free Assessment
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between text-[#1a1a1a]">
          <div className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold mb-6 sm:mb-0">
            Data & Metrics
          </div>
          <div className="flex flex-wrap justify-center gap-12 font-sans text-[10px] uppercase tracking-widest text-stone-500">
            <span>Licensed Therapists</span>
            <span>Secure & Confidential</span>
            <span>Flexible Scheduling</span>
            <span className="text-[#1a1a1a]">4.9/5 Average Rating</span>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-stone-400 block mb-4">Practice Areas</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#1a1a1a]">Clinical Focus</h2>
            </div>
            <p className="text-sm font-sans text-stone-600 max-w-sm leading-relaxed border-l border-[#1a1a1a] pl-6">
              Comprehensive mental health methodologies designed to map and re-structure your personal narrative.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 border-t border-l border-stone-200">
            {[
              { title: "Individual Identity", num: "01", desc: "One-on-one sessions addressing anxiety, depression, trauma, and structural life transitions.", link: "/services#individual" },
              { title: "Relational Dynamics", num: "02", desc: "Couples therapy focused on repairing communication architectures and rebuilding intimacy.", link: "/services#couples" },
              { title: "Group Processing", num: "03", desc: "Expert-facilitated environments for shared understanding and collective psychological restructuring.", link: "/services#group" },
            ].map((s) => (
              <div key={s.num} className="border-r border-b border-stone-200 p-12 hover:bg-white transition-colors duration-500 group flex flex-col">
                <span className="font-sans text-[10px] text-stone-400 mb-8 block">{s.num}</span>
                <h3 className="text-3xl font-serif text-[#1a1a1a] mb-6 italic">{s.title}</h3>
                <p className="text-stone-600 mb-12 text-sm leading-relaxed flex-grow font-sans">{s.desc}</p>
                <Link to={s.link} className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#1a1a1a] border-b border-[#1a1a1a] self-start pb-1 hover:text-stone-500 hover:border-transparent transition-all">
                  Review Approach
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#1a1a1a] text-[#f9f8f4] text-center px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 border border-[#333] opacity-50 m-8 z-0"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#222] opacity-50 m-8 z-0"></div>
        
        <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-stone-500 block mb-6">Initiate Process</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-10 italic">Prioritize your <br/><span className="not-italic">architecture.</span></h2>
          
          <Link
            to="/book"
            className="bg-white text-[#1a1a1a] border border-white px-10 py-5 font-sans text-[10px] uppercase tracking-[0.3em] hover:bg-transparent hover:text-white transition-colors duration-500"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

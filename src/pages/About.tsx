export function About() {
  return (
    <div className="py-20 md:py-32 max-w-5xl mx-auto px-8 relative">
      {/* Background Graphic */}
      <div className="absolute top-20 right-0 text-[15vw] leading-none font-sans font-black text-stone-200/50 pointer-events-none select-none z-0">
        PRCT.
      </div>

      <div className="relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-stone-400 block mb-6">About the practice</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-8 italic">HealYourMind</h1>
          <p className="text-sm font-sans text-stone-600 max-w-xl leading-relaxed">
            Committed to structural mental clarity, mapping emotional resilience, and merging internal solace with external reality.
          </p>
        </div>

        <div className="space-y-32">
          {/* Mission Section */}
          <section className="grid md:grid-cols-12 gap-12 items-start border-t border-stone-200 pt-16">
            <h2 className="md:col-span-4 text-3xl font-serif text-[#1a1a1a] italic">Our Objective</h2>
            <div className="md:col-span-8">
              <p className="text-stone-600 leading-relaxed text-sm font-sans mb-8">
                At HealYourMind, our mission is to provide accessible, compassionate, and evidence-based mental health support. We believe that everyone deserves a structured sanctuary to explore their emotions, confront their foundational challenges, and develop the architectural tools necessary to lead a fulfilling life.
              </p>
            </div>
          </section>

          {/* Founder Section */}
          <section className="bg-white border border-stone-200 p-12 md:p-16 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-100 border-l border-b border-stone-200 pointer-events-none z-0 hidden md:block"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-16 items-start">
              <div className="w-full md:w-1/3 aspect-[3/4] bg-stone-200 flex-shrink-0 flex items-center justify-center text-stone-400 font-sans text-[10px] uppercase tracking-widest relative overflow-hidden">
                <span className="relative z-10">Portrait Archive</span>
                <div className="absolute inset-0 bg-stone-300 mix-blend-multiply opacity-50"></div>
              </div>
              
              <div className="w-full md:w-2/3">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-stone-400 block mb-4">Founder & Lead Psychologist</span>
                <h2 className="text-4xl font-serif text-[#1a1a1a] mb-8 italic">Dr. Sarah Jenkins</h2>
                
                <p className="text-stone-600 leading-relaxed text-sm font-sans mb-6">
                  With over 15 years of experience in clinical psychology, Dr. Jenkins founded HealYourMind to create a practice rooted in clinical empathy and scientific rigor. She specializes in cognitive-behavioral therapy (CBT) and trauma-informed care.
                </p>
                <div className="pl-6 border-l border-[#1a1a1a] my-10">
                  <p className="text-[#1a1a1a] leading-relaxed font-serif text-xl italic">
                    "Cognitive healing isn't linear, but with the correct structural guidance, psychological reconstruction is always possible."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Credentials Section */}
          <section className="grid md:grid-cols-12 gap-12 items-start border-t border-stone-200 pt-16">
            <h2 className="md:col-span-4 text-3xl font-serif text-[#1a1a1a] italic">Methodology</h2>
            <ul className="md:col-span-8 space-y-10 text-stone-600 font-sans text-sm">
              <li className="flex flex-col border-b border-stone-100 pb-8 last:border-0 last:pb-0">
                <strong className="text-[#1a1a1a] font-serif text-xl italic mb-3">Evidence-Based Practices</strong>
                <p className="leading-relaxed">We utilize operational modalities like CBT, DBT, and EMDR which have been empirically proven to rebuild cognitive frameworks.</p>
              </li>
              <li className="flex flex-col border-b border-stone-100 pb-8 last:border-0 last:pb-0">
                <strong className="text-[#1a1a1a] font-serif text-xl italic mb-3">Licensed Professionals</strong>
                <p className="leading-relaxed">All practitioners are fully licensed, rigorously vetted, and engage in continuous architectural and psychological development.</p>
              </li>
              <li className="flex flex-col border-b border-stone-100 pb-8 last:border-0 last:pb-0">
                <strong className="text-[#1a1a1a] font-serif text-xl italic mb-3">Holistic Synthesis</strong>
                <p className="leading-relaxed">We analyze the entire organism—mind, physiological body, and environmental context—to engineer comprehensive treatment topologies.</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export function Resources() {
  const articles = [
    {
      id: 1,
      title: 'Understanding High-Functioning Anxiety',
      category: 'Psychological Analysis',
      excerpt: 'Investigating the hidden structural signs of high-functioning anxiety and its deviation from generalized disorder frameworks.',
      readTime: '05 Min'
    },
    {
      id: 2,
      title: 'Setting Boundaries in Relationships',
      category: 'Relational Dynamics',
      excerpt: 'Practical structural scripts and architectural strategies for establishing healthy demarcations with family, peers, and partners.',
      readTime: '07 Min'
    },
    {
      id: 3,
      title: 'The Science of Sleep',
      category: 'Physiological Synthesis',
      excerpt: 'How sleep architecture affects emotional regulation thresholds and methodologies to optimize chronological hygiene.',
      readTime: '06 Min'
    },
    {
      id: 4,
      title: 'Navigating Career Burnout',
      category: 'Systemic Stress',
      excerpt: 'Analyzing the distinction between operational stress and total systemic burnout, including structural recovery protocols.',
      readTime: '08 Min'
    }
  ];

  return (
    <div className="py-20 md:py-32 max-w-7xl mx-auto px-8">
      <div className="text-center mb-24 max-w-2xl mx-auto">
        <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-stone-400 block mb-6">Archive & Texts</span>
        <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-8 italic">The Journal</h1>
        <p className="text-sm font-sans text-stone-600 leading-relaxed">
          Operational methodologies, clinical texts, and structural documentation to fortify your cognitive development between syncs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-20 border-b border-stone-200 pb-12">
        {['All Index', 'Analysis', 'Dynamics', 'Synthesis', 'Stressors'].map((cat, i) => (
          <button key={cat} className={`font-sans text-[10px] uppercase tracking-[0.2em] transition-colors pb-1 border-b ${i === 0 ? 'text-[#1a1a1a] border-[#1a1a1a]' : 'text-stone-400 border-transparent hover:text-[#1a1a1a]'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {articles.map(article => (
          <article key={article.id} className="group cursor-pointer flex flex-col">
            {/* Minimalist Image Placeholder */}
            <div className="w-full aspect-[16/9] bg-stone-200 mb-8 overflow-hidden relative">
               <div className="absolute inset-0 bg-stone-300 mix-blend-multiply opacity-50 transform group-hover:scale-105 transition-transform duration-700"></div>
            </div>
            
            <div className="flex justify-between items-center mb-6 font-sans text-[9px] uppercase tracking-widest text-stone-400">
              <span className="border border-stone-200 px-3 py-1">
                {article.category}
              </span>
              <span>READ — {article.readTime}</span>
            </div>
            
            <h2 className="text-3xl font-serif text-[#1a1a1a] mb-4 italic group-hover:text-stone-500 transition-colors">{article.title}</h2>
            
            <p className="text-stone-600 mb-8 flex-grow font-sans text-sm leading-relaxed">{article.excerpt}</p>
            
            <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a] border-b border-[#1a1a1a] self-start pb-1 group-hover:text-stone-500 group-hover:border-transparent transition-all">
              Initiate Read
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

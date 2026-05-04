import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      id: 'individual',
      title: 'Individual Therapy',
      description: 'One-on-one structured sessions addressing anxiety, depression, trauma, life transitions, and personal systemic growth.',
      price: '$150',
      duration: '50 min',
      features: ['Personalized architecture plan', 'CBT & DBT modalities', 'Secure channel integration'],
    },
    {
      id: 'couples',
      title: 'Relational Therapy',
      description: 'Systemic focus on repairing communication architectures, resolving structural conflicts, and rebuilding intimacy.',
      price: '$180',
      duration: '60 min',
      features: ['Gottman Method structure', 'Conflict resolution logic', 'Pre-marital foundation'],
    },
    {
      id: 'group',
      title: 'Group Processing',
      description: 'Led by a licensed clinical architect, find support and perspective by connecting with a collective cognitive network.',
      price: '$60',
      duration: '90 min',
      features: ['Small cohorts (6-8 units)', 'Specific clinical themes', 'Recurring synchronization'],
    }
  ];

  return (
    <div className="py-20 md:py-32 bg-[#f9f8f4] text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="absolute top-0 right-0 text-[20vw] leading-none font-sans font-black text-stone-200/50 pointer-events-none select-none z-0 opacity-50">
          SVC.
        </div>
        
        <div className="relative z-10 mb-20 md:mb-32">
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-stone-400 block mb-6">Service Topologies</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-8 italic">Methodologies</h1>
          <p className="text-sm font-sans text-stone-600 max-w-xl leading-relaxed">
            Transparent protocols for comprehensive structural care. HSA/FSA accepted. Out-of-network reimbursement documentation available.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="bg-white border border-stone-200 p-12 flex flex-col hover:border-[#1a1a1a] transition-all duration-500 group relative overflow-hidden">
              <span className="absolute top-4 right-4 font-sans text-[200px] leading-none font-black text-stone-100 z-0 group-hover:text-stone-50 transition-colors duration-500">
                0{index + 1}
              </span>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-6 block">Protocol 0{index + 1}</span>
                <h2 className="text-3xl font-serif text-[#1a1a1a] mb-4 italic">{service.title}</h2>
                
                <div className="flex items-baseline mb-8 border-b border-stone-100 pb-8">
                  <span className="text-5xl font-serif text-[#1a1a1a]">{service.price}</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-stone-500 ml-3">/ session</span>
                </div>
                
                <p className="text-stone-600 mb-10 font-sans text-sm leading-relaxed flex-grow">{service.description}</p>
                
                <div className="mb-12 space-y-4 font-sans text-[11px] uppercase tracking-widest text-stone-500">
                  <div className="flex items-center text-[#1a1a1a] mb-6">
                    <div className="w-1.5 h-1.5 bg-[#1a1a1a] mr-3"></div> 
                    Duration: {service.duration} sessions
                  </div>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="text-stone-300 mr-3 hidden group-hover:block">-</div>
                      <div className="text-stone-300 mr-3 group-hover:hidden">+</div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  to={`/book?service=${service.id}`}
                  className="w-full border border-[#1a1a1a] text-[#1a1a1a] text-center py-4 font-sans text-[10px] uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-[#f9f8f4] transition-colors duration-300 mt-auto"
                >
                  Initiate Booking
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 border-t border-stone-200 pt-12 flex flex-col sm:flex-row justify-between items-center text-sm font-sans uppercase tracking-[0.2em] text-[#1a1a1a] relative z-10">
          <span className="mb-4 sm:mb-0">Telehealth Integration Active</span>
          <span>Physical Base: NY Hub</span>
        </div>
      </div>
    </div>
  );
}

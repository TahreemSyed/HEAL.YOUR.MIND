import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#f9f8f4] py-20 px-8 mt-auto font-sans relative overflow-hidden">
      <div className="absolute -bottom-10 -right-10 text-[20vw] leading-none font-black text-white/5 pointer-events-none select-none z-0">
        H.Y.M
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-4 flex flex-col">
          <Link to="/" className="text-[#f9f8f4] mb-8">
            <span className="font-bold text-xl tracking-[0.2em] uppercase">Heal.Your.Mind</span>
          </Link>
          <p className="text-xs leading-relaxed text-stone-400 max-w-xs font-sans">
            Providing compassionate, evidence-based mental wellness support. A structured sanctuary for personal growth.
          </p>
        </div>
        
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-6 text-[10px] uppercase tracking-[0.3em] text-stone-500">Navigation</h3>
          <ul className="space-y-4 text-[11px] tracking-widest uppercase">
            <li><Link to="/about" className="hover:text-stone-300 transition-colors">Practice</Link></li>
            <li><Link to="/services" className="hover:text-stone-300 transition-colors">Services</Link></li>
            <li><Link to="/resources" className="hover:text-stone-300 transition-colors">Journal</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-3">
          <h3 className="font-semibold mb-6 text-[10px] uppercase tracking-[0.3em] text-stone-500">Specializations</h3>
          <ul className="space-y-4 text-[11px] tracking-widest uppercase text-stone-400">
            <li><Link to="/services#individual" className="hover:text-stone-300 transition-colors">Individual Therapy</Link></li>
            <li><Link to="/services#couples" className="hover:text-stone-300 transition-colors">Couples Counseling</Link></li>
            <li><Link to="/services#group" className="hover:text-stone-300 transition-colors">Group Sessions</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-3">
          <h3 className="font-semibold mb-6 text-[10px] uppercase tracking-[0.3em] text-stone-500">Contact</h3>
          <ul className="space-y-4 text-[11px] tracking-wider text-stone-400">
            <li><a href="mailto:hello@healyourmind.space" className="hover:text-stone-300 uppercase">hello@healyourmind.space</a></li>
            <li className="uppercase">T: (555) 123-4567</li>
            <li className="mt-8">
              <Link to="/assessment" className="inline-block border-b border-stone-500 hover:border-white text-stone-300 hover:text-white pb-1 transition-colors uppercase tracking-[0.2em] text-[10px]">
                Free Assessment &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[#333] text-[9px] uppercase tracking-[0.2em] text-stone-500 flex flex-col md:flex-row justify-between items-center relative z-10">
        <p>&copy; {new Date().getFullYear()} HealYourMind. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-stone-300">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-stone-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

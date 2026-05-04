import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#f9f8f4] border-b border-stone-200 relative z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center text-[#1a1a1a]">
            <span className="font-bold text-lg tracking-[0.2em] font-sans uppercase">Heal.Your.Mind</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            <div className="flex gap-8 font-sans text-[10px] uppercase tracking-[0.3em] font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors hover:text-stone-400 ${isActive(link.path) ? 'text-[#1a1a1a]' : 'text-stone-500'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/assessment"
                className="font-sans text-[10px] uppercase tracking-[0.2em] border-b border-[#1a1a1a] pb-0.5 text-[#1a1a1a] hover:text-stone-500 hover:border-stone-500 transition-colors"
              >
                Free Assessment
              </Link>
              <Link
                to="/book"
                className="border border-[#1a1a1a] px-8 py-3 font-sans text-[10px] uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-[#f9f8f4] transition-colors duration-300"
              >
                Book a Session
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#1a1a1a] hover:text-stone-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#f9f8f4] border-t border-stone-200 px-8 pt-4 pb-8 space-y-4 absolute w-full shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-[11px] font-sans uppercase tracking-[0.3em] font-medium ${isActive(link.path) ? 'text-[#1a1a1a]' : 'text-stone-500 hover:text-[#1a1a1a]'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col space-y-6">
            <Link
              to="/assessment"
              className="font-sans text-[11px] uppercase tracking-[0.2em] border-b border-[#1a1a1a] pb-0.5 text-[#1a1a1a] self-start"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Free Assessment
            </Link>
            <Link
              to="/book"
              className="text-center border border-[#1a1a1a] bg-[#1a1a1a] text-[#f9f8f4] px-8 py-4 font-sans text-[10px] uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

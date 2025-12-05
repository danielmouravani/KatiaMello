import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_LINK } from '../constants';

interface NavbarProps {
  onNavigate: (page: 'home' | 'cataract' | 'refractive' | 'exams') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Não precisamos de lógica complexa aqui. 
    // O App.tsx detecta a mudança de hash automaticamente.
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-md py-3 border-b border-slate-800' 
        : 'bg-transparent py-4 bg-gradient-to-b from-slate-900/80 to-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#"
          className="flex items-center gap-2 focus:outline-none"
        >
           <div className="bg-white py-1.5 px-3 rounded-lg shadow-lg shadow-black/20">
             <img 
               src="https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/logo-25-anos-katia-mello-mjE72n1DRwslRPoM.png" 
               alt="Centro de Saúde Ocular Katia Mello" 
               className="h-10 w-auto object-contain"
             />
           </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium transition-colors text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 border border-brand-400/20"
          >
            <Phone size={16} />
            Agendar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-4 flex flex-col gap-4 shadow-xl animate-fade-in-up">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-slate-300 text-lg font-medium py-2 hover:text-white border-b border-slate-800/50"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-2 bg-brand-500 text-white py-3 rounded-lg font-bold mt-2"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} />
            Agendar pelo Whatsapp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
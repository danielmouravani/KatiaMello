import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Specialties from './components/Specialties';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Footer from './components/Footer';
import CataractPage from './components/CataractPage';
import RefractivePage from './components/RefractivePage';
import ExamsPage from './components/ExamsPage';
import { Phone, X } from 'lucide-react';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'cataract' | 'refractive' | 'exams'>('home');
  const [showBubble, setShowBubble] = useState(false);
  const [isBubbleClosed, setIsBubbleClosed] = useState(false);

  // Mapeamento de URLs Amigáveis para Google Ads
  // URL: /catarata -> Page: cataract
  // URL: /refrativa -> Page: refractive
  // URL: /exames -> Page: exams

  useEffect(() => {
    // 1. Ler a URL quando o site carrega
    const path = window.location.pathname.toLowerCase();
    
    if (path.includes('/catarata') || path.includes('/cataract')) {
      setCurrentPage('cataract');
    } else if (path.includes('/refrativa') || path.includes('/refractive')) {
      setCurrentPage('refractive');
    } else if (path.includes('/exames') || path.includes('/exams')) {
      setCurrentPage('exams');
    } else {
      setCurrentPage('home');
    }

    // 2. Lidar com o botão "Voltar" do navegador
    const handlePopState = () => {
      const newPath = window.location.pathname.toLowerCase();
      if (newPath.includes('/catarata')) setCurrentPage('cataract');
      else if (newPath.includes('/refrativa')) setCurrentPage('refractive');
      else if (newPath.includes('/exames')) setCurrentPage('exams');
      else setCurrentPage('home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: 'home' | 'cataract' | 'refractive' | 'exams') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);

    // 3. Atualizar a URL sem recarregar a página (SPA Feeling)
    let friendlyUrl = '/';
    if (page === 'cataract') friendlyUrl = '/catarata';
    if (page === 'refractive') friendlyUrl = '/refrativa';
    if (page === 'exams') friendlyUrl = '/exames';

    window.history.pushState({}, '', friendlyUrl);
  };

  useEffect(() => {
    if (!isBubbleClosed) {
      const timer = setTimeout(() => {
        setShowBubble(true);
      }, 5000); // 5 seconds delay
      return () => clearTimeout(timer);
    }
  }, [isBubbleClosed]);

  const handleCloseBubble = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowBubble(false);
    setIsBubbleClosed(true);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar onNavigate={navigateTo} />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Stats />
            <Specialties onNavigate={navigateTo} />
            <Partners />
            <Team />
            <Gallery />
            <Testimonials />
          </>
        ) : currentPage === 'cataract' ? (
          <CataractPage onNavigate={navigateTo} />
        ) : currentPage === 'refractive' ? (
          <RefractivePage onNavigate={navigateTo} />
        ) : (
          <ExamsPage onNavigate={navigateTo} />
        )}
      </main>
      
      {/* Global Floating WhatsApp Container */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Chat Bubble */}
        <div 
          className={`
            pointer-events-auto relative bg-white p-4 rounded-2xl rounded-br-sm shadow-2xl 
            border border-slate-100 max-w-[240px] transition-all duration-500 transform origin-bottom-right
            ${showBubble ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}
          `}
        >
          <button 
            onClick={handleCloseBubble}
            className="absolute -top-3 -left-3 bg-slate-100 hover:bg-red-100 text-slate-400 hover:text-red-500 rounded-full p-1 transition-colors shadow-sm border border-slate-200"
            aria-label="Fechar mensagem"
          >
            <X size={14} />
          </button>
          
          <p className="text-slate-800 text-sm font-medium leading-snug">
            Olá! <span className="inline-block animate-wave">👋</span><br/>
            Agende sua consulta agora pelo WhatsApp.
          </p>
          
          {/* Arrow Pointer */}
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45 border-r border-b border-slate-100"></div>
        </div>

        {/* WhatsApp Button */}
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Falar no WhatsApp"
        >
          {/* Pulse/Ping Animation Ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          
          <div className="relative z-10">
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
            <Phone className="w-8 h-8 fill-current" />
          </div>
        </a>
      </div>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
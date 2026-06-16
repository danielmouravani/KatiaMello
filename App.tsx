
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
import OculoplasticsPage from './components/OculoplasticsPage';
import ExamsPage from './components/ExamsPage';
import BookingSection from './components/BookingSection';
import SurveyPage from './components/SurveyPage';
import CampaignPopup from './components/CampaignPopup';
import { Phone, X } from 'lucide-react';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  // 1. Inicializa o estado lendo a URL IMEDIATAMENTE.
  const [currentPage, setCurrentPage] = useState<'home' | 'cataract' | 'refractive' | 'exams' | 'oculoplastics' | 'survey'>(() => {
    if (typeof window === 'undefined') return 'home';
    
    const hash = window.location.hash.toLowerCase();
    const path = window.location.pathname.toLowerCase();

    if (hash.includes('catarata') || path.includes('catarata')) return 'cataract';
    if (hash.includes('refrativa') || path.includes('refrativa')) return 'refractive';
    if (hash.includes('exames') || path.includes('exames')) return 'exams';
    if (hash.includes('oculoplastica') || path.includes('oculoplastica')) return 'oculoplastics';
    if (hash.includes('pesquisa') || path.includes('pesquisa')) return 'survey';
    
    return 'home';
  });

  const [showBubble, setShowBubble] = useState(false);
  const [isBubbleClosed, setIsBubbleClosed] = useState(false);

  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      
      let newPage: 'home' | 'cataract' | 'refractive' | 'exams' | 'oculoplastics' | 'survey' = 'home';

      if (hash.includes('catarata') || path.includes('catarata')) {
        newPage = 'cataract';
      } else if (hash.includes('refrativa') || path.includes('refrativa')) {
        newPage = 'refractive';
      } else if (hash.includes('exames') || path.includes('exames')) {
        newPage = 'exams';
      } else if (hash.includes('oculoplastica') || path.includes('oculoplastica')) {
        newPage = 'oculoplastics';
      } else if (hash.includes('pesquisa') || path.includes('pesquisa')) {
        newPage = 'survey';
      }

      setCurrentPage((prev) => {
        if (prev !== newPage) {
          window.scrollTo(0, 0);
          return newPage;
        }
        return prev;
      });

      if (newPage === 'home' && hash && !hash.includes('home')) {
         setTimeout(() => {
           try {
             const id = hash.replace('#', '');
             const element = document.getElementById(id);
             if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
             }
           } catch (e) {
             console.error("Erro ao rolar para âncora:", e);
           }
         }, 100);
      }
    };

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    handleUrlChange();

    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const navigateTo = (page: 'home' | 'cataract' | 'refractive' | 'exams' | 'oculoplastics' | 'survey') => {
    try {
      if (page === 'cataract') window.location.hash = 'catarata';
      else if (page === 'refractive') window.location.hash = 'refrativa';
      else if (page === 'exams') window.location.hash = 'exames';
      else if (page === 'oculoplastics') window.location.hash = 'oculoplastica';
      else if (page === 'survey') window.location.hash = 'pesquisa';
      else window.location.hash = 'home';
    } catch (e) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (!isBubbleClosed) {
      const timer = setTimeout(() => {
        setShowBubble(true);
      }, 5000); // Retornado para 5s agora que não há popup inicial
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
            <BookingSection />
          </>
        ) : currentPage === 'cataract' ? (
          <CataractPage onNavigate={navigateTo} />
        ) : currentPage === 'refractive' ? (
          <RefractivePage onNavigate={navigateTo} />
        ) : currentPage === 'oculoplastics' ? (
          <OculoplasticsPage onNavigate={navigateTo} />
        ) : currentPage === 'survey' ? (
          <SurveyPage onNavigate={navigateTo} />
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
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          
          <div className="relative z-10">
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
            <Phone className="w-8 h-8 fill-current" />
          </div>
        </a>
      </div>

      <Footer onNavigate={navigateTo} />
      <CampaignPopup />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

// Link da imagem da campanha.
const CAMPAIGN_IMAGE_URL = "https://res.cloudinary.com/dm2aqydrq/image/upload/v1782906534/gppjxymn7vddgps2dk4p.png"; 

const CampaignPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Abre o popup suavemente após 1 segundo se não tiver visto na sessão
    const hasSeen = sessionStorage.getItem('hasSeenCampaignFlyer2026');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenCampaignFlyer2026', 'true');
  };

  if (!isOpen) return null;

  // Link personalizado do WhatsApp para a campanha de Saúde Visual do dia 10/07 por R$130,00
  const CAMPAIGN_WHATSAPP_LINK = "https://wa.me/5521987445827?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20campanha%20visual%20do%20dia%2010%2F07%20por%20R%24130%2C00";

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop com desfoque de fundo */}
      <div 
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-500 cursor-pointer"
        onClick={closePopup}
      ></div>

      {/* Caixa do Modal de Imagem */}
      <div className="relative bg-white border border-slate-200/50 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden transform transition-all duration-300 scale-100 animate-scale-up z-10">
        
        {/* Botão de Fechar elegante */}
        <button 
          onClick={closePopup}
          className="absolute top-3 right-3 text-white hover:text-red-500 hover:bg-white p-2 rounded-full transition-all duration-200 z-50 bg-slate-900/60 backdrop-blur shadow-md"
          aria-label="Fechar"
        >
          <X size={18} />
        </button>

        {/* Imagem clicável que direciona ao WhatsApp */}
        <a 
          href={CAMPAIGN_WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="relative block overflow-hidden group cursor-pointer focus:outline-none"
          onClick={closePopup}
        >
          <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
          <img 
            src={CAMPAIGN_IMAGE_URL} 
            alt="Campanha de Saúde Visual dia 10/07" 
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[65vh] object-contain mx-auto transform transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </a>

        {/* Botão de Agendamento inferior */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 shrink-0">
          <a 
            href={CAMPAIGN_WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={closePopup}
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-5 rounded-2xl font-bold shadow-md shadow-green-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] w-full text-center text-sm md:text-base"
          >
            <MessageCircle size={18} className="fill-current" />
            <span>Agendar pelo WhatsApp (21) 98744-5827</span>
          </a>
          <button 
            onClick={closePopup}
            className="w-full text-center mt-2 text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium hover:underline"
          >
            Entrar no site
          </button>
        </div>

      </div>
    </div>
  );
};

export default CampaignPopup;

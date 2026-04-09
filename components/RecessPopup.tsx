
import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK, DOCTORALIA_LINK } from '../constants';

const RecessPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já viu o popup nesta sessão
    const hasSeen = sessionStorage.getItem('hasSeenRecess2024');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenRecess2024', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop com desfoque pesado */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-500"
        onClick={closePopup}
      ></div>

      {/* Container do Modal - Otimizado para Mobile */}
      <div className="relative bg-white border border-white/20 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden animate-fade-in-up transform transition-all">
        
        {/* Faixa Decorativa de Topo */}
        <div className="shrink-0 h-1.5 w-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400"></div>

        {/* Botão de Fechar - Mais visível no Mobile */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-all z-30 bg-white/80 backdrop-blur shadow-sm border border-slate-100"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Área de Conteúdo com Scroll Interno */}
        <div className="overflow-y-auto custom-scrollbar p-6 sm:p-10">
          {/* Header com Ícone Animado */}
          <div className="flex justify-center mb-5 sm:mb-6">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-500/10 rounded-full flex items-center justify-center text-brand-600">
                <Clock size={32} className="sm:size-[40px] animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="text-amber-400 animate-bounce" size={20} />
              </div>
            </div>
          </div>

          <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Comunicado Importante</h2>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-tight">
              Recesso de <span className="text-brand-600">Fim de Ano</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Estaremos em recesso de <span className="font-bold text-slate-900">20/12</span> a <span className="font-bold text-slate-900">04/01</span>. Retornamos ao atendimento presencial dia <span className="font-bold text-brand-600">05/01</span>.
            </p>
          </div>

          {/* Destaque Agendamento Online - Mais compacto */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-center">
            <p className="text-xs font-bold text-slate-800 mb-1">Agendamento Online Ativo:</p>
            <p className="text-xs sm:text-sm text-slate-500">
              Garanta seu horário para Janeiro via Doctoralia ou WhatsApp agora mesmo!
            </p>
          </div>

          {/* Botões de Conversão - Layout adaptável */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            <a 
              href={DOCTORALIA_LINK}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between bg-slate-900 text-white p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98]"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Calendar size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold">Agendar via Doctoralia</p>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest">Confirmação Imediata</p>
                </div>
              </div>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between bg-[#25D366] text-white p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-[#20bd5a] transition-all shadow-lg active:scale-[0.98]"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <MessageCircle size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold">Falar no WhatsApp</p>
                  <p className="text-[9px] text-green-100 uppercase tracking-widest">Atendimento das 08h às 17h00</p>
                </div>
              </div>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
             <button 
              onClick={closePopup}
              className="text-slate-400 text-xs sm:text-sm font-medium hover:text-slate-600 transition-colors underline underline-offset-4"
             >
               Fechar e explorar o site
             </button>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default RecessPopup;

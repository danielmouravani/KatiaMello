import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import BookingModal from './BookingModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=70" 
          alt="Advanced Eye Care Technology" 
          className="w-full h-full object-cover opacity-30"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-brand-300 uppercase tracking-wider">Tecnologia de Ponta</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Cuide da sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">visão</span> com excelência.
          </h1>
          
          <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
            A clínica oftalmológica referência em Duque de Caxias. Mais de 25 anos unindo atendimento humanizado e alta tecnologia para o cuidado dos seus olhos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-600/30 cursor-pointer"
              aria-label="Agendar consulta no Centro Katia Mello"
            >
              Agendar Consulta
              <ArrowRight size={20} />
            </button>
            <a 
              href="#specialties"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-semibold transition-all"
              aria-label="Conheça nossas especialidades oftalmológicas"
            >
              Nossas Especialidades
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[
                { id: 1, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=70" },
                { id: 2, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=70" },
                { id: 3, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=70" },
                { id: 4, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=70" }
              ].map((patient) => (
                <img 
                  key={patient.id} 
                  src={patient.img} 
                  alt={`Paciente atendido ${patient.id}`} 
                  className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                  loading="lazy"
                  decoding="async"
                  width="40"
                  height="40"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-sm text-slate-400 font-medium">+1.500 avaliações 5 estrelas</span>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
           <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-brand-500/20 border border-slate-700/50 group">
             <img 
              src="https://res.cloudinary.com/dm2aqydrq/image/upload/f_auto,q_auto,w_800/v1780754865/wmotptj20txizvxa6wui.jpg" 
              alt="Centro Katia Mello" referrerPolicy="no-referrer" 
              className="w-full h-[500px] object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
              loading="eager"
              {...{ fetchpriority: 'high' }}
              decoding="async"
              width="600"
              height="500"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end px-8 pb-24">
               <div className="text-white">
                 <p className="font-bold text-xl">Diagnóstico Preciso</p>
                 <p className="text-slate-300 text-sm">Equipamentos de última geração</p>
               </div>
             </div>
           </div>
           
           {/* Floating elements */}
           <div className="absolute -bottom-10 -left-6 z-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce-slow">
             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
             </div>
             <div>
               <p className="text-xs text-slate-500 font-bold uppercase">Convênios</p>
               <p className="text-slate-900 dark:text-white font-bold">Aceitamos os principais</p>
             </div>
           </div>
        </div>
      </div>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
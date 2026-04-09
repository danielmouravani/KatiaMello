import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import BookingModal from './BookingModal';

const BookingSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="agendamento" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden relative">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-brand-300 text-sm font-bold uppercase tracking-wide backdrop-blur-md">
                            <Star size={14} className="fill-brand-300" /> Referência em Oftalmologia
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                            Agende sua consulta <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">sem sair de casa</span>
                        </h2>
                        <p className="text-slate-300 text-lg max-w-xl mx-auto lg:mx-0">
                            Escolha a forma mais conveniente para você. Acesse nossa agenda em tempo real ou fale diretamente com nossa equipe.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button 
                                onClick={openModal}
                                className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-500/30 group"
                            >
                                <Calendar className="w-5 h-5" />
                                Agendar Consulta
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        <p className="text-slate-500 text-sm">
                            * Atendimento rápido e confirmação imediata.
                        </p>
                    </div>

                    <div className="lg:w-1/2 w-full max-w-md hidden md:block">
                        {/* Visual Card mimicking a calendar/booking app */}
                        <div className="bg-white rounded-2xl p-6 shadow-2xl border border-slate-700/50 relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
                             <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                                 <div className="flex items-center gap-3">
                                     <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 font-bold text-xl">
                                         K
                                     </div>
                                     <div>
                                         <p className="font-bold text-slate-900">Centro Katia Mello</p>
                                         <div className="flex text-yellow-400 text-xs">
                                             <Star size={12} fill="currentColor"/>
                                             <Star size={12} fill="currentColor"/>
                                             <Star size={12} fill="currentColor"/>
                                             <Star size={12} fill="currentColor"/>
                                             <Star size={12} fill="currentColor"/>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                     Aberto
                                 </div>
                             </div>

                             <div className="space-y-4">
                                 <div className="flex gap-4">
                                     <div className="flex-1 bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                                         <p className="text-xs text-slate-500 uppercase font-bold">Hoje</p>
                                         <p className="text-brand-600 font-bold text-lg">Manhã</p>
                                         <p className="text-xs text-slate-400">Poucas vagas</p>
                                     </div>
                                     <div className="flex-1 bg-brand-50 p-3 rounded-lg border border-brand-100 text-center ring-2 ring-brand-200">
                                         <p className="text-xs text-brand-600 uppercase font-bold">Amanhã</p>
                                         <p className="text-brand-700 font-bold text-lg">Tarde</p>
                                         <p className="text-xs text-brand-500">Disponível</p>
                                     </div>
                                     <div className="flex-1 bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                                         <p className="text-xs text-slate-500 uppercase font-bold">Segunda</p>
                                         <p className="text-slate-700 font-bold text-lg">Manhã</p>
                                         <p className="text-xs text-slate-400">Vagas</p>
                                     </div>
                                 </div>

                                 <div className="space-y-3 pt-2">
                                     <div className="flex items-center gap-3 text-slate-600">
                                         <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                         <span className="text-sm">Confirmação imediata via SMS/Email</span>
                                     </div>
                                     <div className="flex items-center gap-3 text-slate-600">
                                         <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                         <span className="text-sm">Sem taxas adicionais de agendamento</span>
                                     </div>
                                     <div className="flex items-center gap-3 text-slate-600">
                                         <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                         <span className="text-sm">Lembretes automáticos da consulta</span>
                                     </div>
                                 </div>

                                 <button onClick={openModal} className="block w-full bg-slate-900 text-white text-center py-3 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors mt-4">
                                     Agendar Agora
                                 </button>
                             </div>
                        </div>
                        {/* Floating elements behind */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-brand-500/20 rounded-3xl blur-2xl"></div>
                    </div>
                </div>
            </div>

            {/* Features below */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4">
                {[
                    { icon: Clock, title: "Economize Tempo", desc: "Não precisa ligar. Veja os horários vagos e agende em menos de 1 minuto." },
                    { icon: Star, title: "Avaliações Reais", desc: "Veja a opinião de outros pacientes sobre nossos especialistas." },
                    { icon: CheckCircle2, title: "Praticidade Total", desc: "Gerencie, reagende ou cancele sua consulta online se necessário." }
                ].map((feature, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-600 shadow-lg mb-4 border border-slate-100">
                            <feature.icon size={24} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                        <p className="text-slate-500 text-sm max-w-xs">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Modal Overlay via Component */}
        <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default BookingSection;
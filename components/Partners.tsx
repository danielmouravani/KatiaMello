import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  // Duplicate array for seamless infinite scroll
  const scrollingPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="py-20 bg-white border-t border-slate-100 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
        <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-3">Convênios</h2>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
          Planos de Saúde Aceitos
        </h3>
        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
          Trabalhamos com as principais operadoras de saúde para garantir o seu acesso ao melhor tratamento oftalmológico.
        </p>
      </div>

      <div className="relative w-full mask-gradient">
        <div className="flex gap-16 items-center animate-scroll-left w-max px-4">
          {scrollingPartners.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`} 
              className="group flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
            >
              <div className="h-16 w-40 flex items-center justify-center p-2">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
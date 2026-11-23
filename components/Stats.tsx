import React from 'react';
import { STATS } from '../constants';
import { Star } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 -mt-20 relative z-20" aria-label="Indicadores da Clínica">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="sr-only">Nossos Indicadores e Diferenciais</h2>
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {STATS.map((stat, index) => {
            const formattedValue = `${stat.prefix || ''}${stat.value.toFixed(stat.decimals || 0)}${stat.suffix || ''}`;
            return (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <span className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-600 to-brand-400 mb-2 flex items-center gap-2">
                  <span>{formattedValue}</span>
                  {stat.value === 5 && stat.decimals === 1 && (
                    <Star className="text-amber-400 fill-amber-400" size={40} aria-hidden="true" />
                  )}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{stat.label}</h3>
                <p className="text-slate-500 max-w-xs">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
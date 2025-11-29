import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Create a looped array to ensure smooth infinite scrolling
  // We duplicate the array to ensure we have enough items to fill the width before the loop resets
  const row1 = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const row2 = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].reverse();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-brand-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            O que dizem nossos pacientes
          </h2>
          <p className="text-slate-500 text-lg">
            Histórias reais de quem transformou sua visão e qualidade de vida conosco.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Container - Row 1 (Left) */}
      <div className="relative w-full mb-8 mask-gradient">
        <div className="flex gap-6 animate-scroll-left w-max px-4 hover:[animation-play-state:paused]">
          {row1.map((testimonial, index) => (
             <TestimonialCard key={`r1-${index}`} item={testimonial} />
          ))}
        </div>
      </div>

      {/* Infinite Scroll Container - Row 2 (Right) */}
      <div className="relative w-full mask-gradient">
        <div className="flex gap-6 animate-scroll-right w-max px-4 hover:[animation-play-state:paused]">
          {row2.map((testimonial, index) => (
            <TestimonialCard key={`r2-${index}`} item={testimonial} />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 text-center relative z-10">
        <a 
          href="https://www.google.com/maps" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 hover:underline underline-offset-4 transition-colors"
        >
            Ver mais avaliações no Google
        </a>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ item: typeof TESTIMONIALS[0] }> = ({ item }) => (
  <div className="w-[350px] md:w-[400px] bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between shrink-0 hover:border-brand-200 hover:shadow-lg transition-all duration-300 group">
    <div>
       <Quote className="text-brand-200 mb-4 group-hover:text-brand-400 transition-colors" size={28} />
       <p className="text-slate-600 italic leading-relaxed mb-6 font-medium text-lg">
         "{item.content}"
       </p>
    </div>
    
    <div>
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            fill={i < item.rating ? "#fbbf24" : "none"} 
            className={i < item.rating ? "text-amber-400" : "text-slate-200"} 
          />
        ))}
      </div>
      
      <div className="flex items-center gap-3 pt-3 border-t border-slate-50">
        <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 font-bold text-sm border border-brand-100">
           {item.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-slate-900 text-sm">{item.name}</p>
          <p className="text-xs text-slate-400 uppercase tracking-wide">Paciente Verificado</p>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
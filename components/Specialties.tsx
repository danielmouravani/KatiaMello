import React from 'react';
import { SPECIALTIES } from '../constants';
import { ArrowRight } from 'lucide-react';

interface SpecialtiesProps {
  onNavigate: (page: 'home' | 'cataract') => void;
}

const Specialties: React.FC<SpecialtiesProps> = ({ onNavigate }) => {
  return (
    <section id="specialties" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2">Tratamentos</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Especialidades Oftalmológicas</h3>
          <p className="text-slate-600 text-lg">
            O Centro Katia Mello conta com oftalmologistas especializados para iniciar seu tratamento com a melhor tecnologia disponível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map((spec, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 border border-slate-100 hover:border-brand-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <spec.icon size={120} className="text-brand-500 transform rotate-12 translate-x-4 -translate-y-4" />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <spec.icon size={28} />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {spec.title}
                </h4>
                
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {spec.description}
                </p>
                
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    if (spec.title === 'Catarata') {
                      onNavigate('cataract');
                    } else {
                      // Fallback for other items for now
                      console.log('Navigate to:', spec.title);
                    }
                  }}
                  className="inline-flex items-center text-sm font-bold text-brand-600 group-hover:gap-2 transition-all cursor-pointer focus:outline-none"
                >
                  Saiba mais <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
import React from 'react';
import { DOCTORS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2">Corpo Clínico</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Especialistas Dedicados</h3>
            <p className="text-slate-600 text-lg">
              Nosso corpo clínico é composto por médicos prontos para lhe atender em todas as áreas clínicas e cirúrgicas da oftalmologia.
            </p>
          </div>
          <button className="px-6 py-3 border border-slate-200 rounded-full text-slate-700 font-semibold hover:border-brand-500 hover:text-brand-600 transition-colors">
            Ver toda a equipe
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doctor, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden cursor-pointer h-96">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-brand-300 text-sm font-medium mb-1">{doctor.specialty}</p>
                <h4 className="text-white text-xl font-bold">{doctor.name}</h4>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                   {doctor.crm && (
                     <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                       CRM {doctor.crm}
                     </p>
                   )}
                   <button className="mt-3 text-white text-sm font-semibold hover:underline">
                     Ver perfil completo
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
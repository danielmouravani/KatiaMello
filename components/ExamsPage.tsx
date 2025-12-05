import React, { useEffect, useState } from 'react';
import { Search, Eye, ArrowRight, Phone, FileSearch, CalendarCheck, Microscope } from 'lucide-react';
import { EXAMS, WHATSAPP_LINK } from '../constants';

interface ExamsPageProps {
  onNavigate: (page: 'home' | 'cataract' | 'refractive' | 'exams') => void;
}

const ExamsPage: React.FC<ExamsPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExams, setFilteredExams] = useState(EXAMS);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const results = EXAMS.filter(exam =>
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (exam.category && exam.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredExams(results);
  }, [searchTerm]);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 animate-fade-in-up font-sans">
      
      {/* 1. HERO SECTION COMPACTO */}
      <section className="relative bg-slate-900 text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-1 mb-6 text-sm text-brand-300">
            <Microscope size={14} /> Diagnóstico Preciso
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Exames Oftalmológicos
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Tecnologia de ponta para cuidar da saúde dos seus olhos. Realize todos os seus exames em um só lugar.
          </p>

          {/* SEARCH BAR */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-slate-400" size={20} />
            </div>
            <input
              type="text"
              placeholder="Qual exame você procura?"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-500/30 shadow-xl transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
               <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                 {filteredExams.length} resultados
               </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. EXAMS GRID */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          
          {filteredExams.length === 0 ? (
            <div className="text-center py-20 opacity-50">
              <FileSearch size={48} className="mx-auto mb-4 text-slate-300" />
              <p className="text-xl font-medium text-slate-600">Nenhum exame encontrado para "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-brand-600 hover:underline"
              >
                Ver todos os exames
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredExams.map((exam, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        <Eye size={20} />
                      </div>
                      {exam.category && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-1 rounded">
                          {exam.category}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-brand-600 transition-colors">
                      {exam.title}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {exam.description}
                    </p>
                  </div>

                  <a 
                    href={`${WHATSAPP_LINK}&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20o%20exame%3A%20${encodeURIComponent(exam.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto w-full py-2.5 rounded-lg border border-brand-100 text-brand-600 text-sm font-bold hover:bg-brand-50 flex items-center justify-center gap-2 transition-colors"
                  >
                    Agendar Exame <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <section className="bg-white border-t border-slate-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
             
             <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 relative z-10">
               Não encontrou o que procurava?
             </h2>
             <p className="text-brand-100 mb-8 relative z-10">
               Entre em contato com nossa central de atendimento. Nossa equipe está pronta para tirar suas dúvidas e verificar a disponibilidade.
             </p>
             
             <a 
               href={WHATSAPP_LINK} 
               target="_blank" 
               rel="noreferrer"
               className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-full font-bold hover:bg-brand-50 transition-colors shadow-lg relative z-10"
             >
               <Phone size={18} /> Falar com Atendente
             </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ExamsPage;
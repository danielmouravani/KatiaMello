import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Eye, AlertCircle, Phone, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { LENSES, WHATSAPP_LINK } from '../constants';

interface CataractPageProps {
  onNavigate: (page: 'home' | 'cataract' | 'refractive' | 'exams') => void;
}

const FAQ_ITEMS = [
  {
    question: "A cirurgia de catarata dói?",
    answer: "Não. O procedimento é realizado com anestesia local (colírios e sedação leve), sendo totalmente indolor durante a execução. O desconforto pós-operatório é mínimo."
  },
  {
    question: "Quanto tempo demora a recuperação?",
    answer: "A recuperação visual é rápida. A maioria dos pacientes nota melhora significativa em 24 a 48 horas. O retorno às atividades leves geralmente ocorre em poucos dias."
  },
  {
    question: "Preciso ficar internado?",
    answer: "Não. A cirurgia é ambulatorial. Você chega, opera e vai para casa no mesmo dia, geralmente poucas horas após o procedimento."
  },
  {
    question: "O convênio cobre a cirurgia?",
    answer: "Sim, a maioria dos planos de saúde cobre a cirurgia de catarata. Nossa equipe de concierge auxilia em todo o processo de autorização."
  }
];

const CataractPage: React.FC<CataractPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen pt-20 animate-fade-in-up font-sans">
      
      {/* 1. HERO CONVERSÃO: Promessa Forte + Imagem + CTA Imediato */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden pb-16 pt-8 md:pt-16">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/10 rounded-l-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Copy de Vendas */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-400/30 px-4 py-1.5 rounded-full text-brand-300 text-sm font-bold uppercase tracking-wide">
                <ShieldCheck size={16} /> Cirurgia Segura e Moderna
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Recupere a Nitidez da Sua Visão e <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">Viva Sem Limites.</span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Diga adeus à visão embaçada. A cirurgia de catarata é rápida, indolor e devolve sua qualidade de vida em poucos dias.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-500/30 transform hover:-translate-y-1 animate-pulse"
                >
                  <Phone size={24} />
                  Agendar Avaliação
                </a>
                <div className="flex items-center gap-2 text-sm text-slate-400 px-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs">
                        {i}k+
                      </div>
                    ))}
                  </div>
                  <p>+5.000 Cirurgias Realizadas</p>
                </div>
              </div>
            </div>

            {/* Imagem Estática (Alta Conversão - Carregamento Rápido) */}
            <div className="md:w-1/2 w-full flex justify-center relative">
               <div className="relative group w-full max-w-md">
                 <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                 <div className="relative bg-slate-800 rounded-3xl p-2 shadow-2xl">
                    <img 
                      src="https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/unnamed-pPL6tHtNi8aqAr0W.jpg" 
                      alt="Olho com catarata" 
                      className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl"
                    />
                    <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                      <p className="text-white font-medium text-sm flex items-center gap-2">
                        <AlertCircle size={16} className="text-yellow-400" />
                        Diagnóstico Especializado
                      </p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IDENTIFICAÇÃO DA DOR: Checklist de Sintomas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Você sente sua visão assim?
            </h2>
            <p className="text-slate-600">
              A catarata evolui lentamente. Se você apresenta um ou mais destes sintomas, agende uma avaliação preventiva.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Visão Embaçada", desc: "Sensação de névoa constante" },
              { icon: AlertCircle, title: "Cores Desbotadas", desc: "O mundo parece amarelado" },
              { icon:  CheckCircle2, title: "Dificuldade à Noite", desc: "Dirigir se torna perigoso" },
              { icon: Eye, title: "Troca de Grau", desc: "O óculos nunca parece bom" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AUTORIDADE & MÉTODO: Por que operar aqui? */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 relative">
               <div className="grid grid-cols-2 gap-4">
                 <img src="https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/whatsapp-image-2025-04-10-at-12.26.12-1-d951pxJxqWi2aJ82.jpeg" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Equipamento" />
                 <img src="https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/whatsapp-image-2025-04-10-at-12.26.12-2-m6LZvBnB6asgLZqa.jpeg" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" alt="Consultório" />
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white p-6 rounded-2xl shadow-xl text-center min-w-[200px]">
                 <p className="text-4xl font-bold">+25</p>
                 <p className="text-sm uppercase tracking-wider font-medium">Anos de Experiência</p>
               </div>
            </div>

            <div className="lg:w-1/2">
               <h2 className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-2">Tecnologia Premium</h2>
               <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                 Cirurgia Moderna e Sem Internação
               </h3>
               <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                 Utilizamos a técnica de <strong>Facoemulsificação</strong>, o padrão ouro mundial. O procedimento é minimamente invasivo, realizado através de microincisões que não necessitam de pontos na maioria dos casos.
               </p>
               
               <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Clock className="text-brand-500 shrink-0" size={28} />
                    <div>
                      <h4 className="font-bold text-slate-900">Rápido</h4>
                      <p className="text-sm text-slate-500">Procedimento dura entre 15 a 20 minutos.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <ShieldCheck className="text-brand-500 shrink-0" size={28} />
                    <div>
                      <h4 className="font-bold text-slate-900">Seguro</h4>
                      <p className="text-sm text-slate-500">Altíssimas taxas de sucesso e segurança.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Eye className="text-brand-500 shrink-0" size={28} />
                    <div>
                      <h4 className="font-bold text-slate-900">Sem Dependência</h4>
                      <p className="text-sm text-slate-500">Possibilidade de reduzir ou eliminar o uso de óculos.</p>
                    </div>
                 </div>
               </div>

               <div className="mt-8">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-600 font-bold border-b-2 border-brand-200 hover:border-brand-600 transition-all pb-1">
                    Falar com especialista agora <ArrowRight size={18} />
                  </a>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. LENSES: O "Produto" */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Escolha Como Quer Enxergar o Mundo
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Substituímos seu cristalino opaco por lentes intraoculares de alta tecnologia. 
            A escolha certa define sua liberdade dos óculos.
          </p>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {LENSES.map((lens, index) => (
             <div key={index} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 hover:bg-slate-800 transition-colors duration-300">
               <div className="w-10 h-10 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-400 mb-4 font-bold">
                 {index + 1}
               </div>
               <h3 className="text-xl font-bold text-white mb-3">
                 {lens.title}
               </h3>
               <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[80px]">
                 {lens.description}
               </p>
               <ul className="space-y-2 border-t border-slate-700/50 pt-4">
                 {lens.features.slice(0, 2).map((feature, idx) => (
                   <li key={idx} className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                     <CheckCircle2 size={12} className="text-green-400" />
                     {feature}
                   </li>
                 ))}
               </ul>
             </div>
           ))}
        </div>
      </section>

      {/* 5. FAQ: Matando Objeções */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900">Perguntas Frequentes</h2>
          </div>
          
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="font-bold text-slate-800 flex items-center gap-3">
                    <HelpCircle size={20} className="text-brand-500" />
                    {item.question}
                  </span>
                  {openFaq === index ? <ChevronUp size={20} className="text-slate-400"/> : <ChevronDown size={20} className="text-slate-400"/>}
                </button>
                {openFaq === index && (
                  <div className="p-5 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-brand-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-600/30">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Não deixe a catarata apagar o brilho da sua vida.
              </h2>
              <p className="text-brand-100 text-lg">
                Agenda aberta para este mês. Aceitamos os principais convênios.
              </p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-brand-700 hover:bg-slate-100 px-8 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <Phone size={20} className="fill-current" />
                QUERO AGENDAR AGORA
              </a>
              <p className="text-xs text-brand-200 opacity-80 mt-4">
                Atendimento rápido via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default CataractPage;
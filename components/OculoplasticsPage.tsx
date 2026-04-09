import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Eye, AlertCircle, Phone, HelpCircle, ChevronDown, ChevronUp, Sparkles, Droplets, UserCheck } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface OculoplasticsPageProps {
  onNavigate: (page: 'home' | 'cataract' | 'refractive' | 'exams' | 'oculoplastics') => void;
}

const FAQ_ITEMS = [
  {
    question: "A blefaroplastia deixa cicatrizes visíveis?",
    answer: "As cicatrizes da blefaroplastia são estrategicamente posicionadas nas dobras naturais das pálpebras ou logo abaixo dos cílios, tornando-as praticamente imperceptíveis após o período inicial de cicatrização."
  },
  {
    question: "Qual o tempo de recuperação?",
    answer: "O retorno às atividades leves costuma ocorrer em 7 a 10 dias. Inchaço e pequenos hematomas são comuns nos primeiros dias, mas regridem rapidamente com compressas geladas e repouso."
  },
  {
    question: "O que é a dacriocistorrinostomia?",
    answer: "É a cirurgia indicada para desobstruir as vias lacrimais quando há lacrimejamento constante ou infecções de repetição (dacriocistite). O objetivo é criar um novo canal para a lágrima chegar ao nariz."
  },
  {
    question: "A cirurgia de ptose é apenas estética?",
    answer: "Não. Embora traga benefícios estéticos, a correção da ptose (pálpebra caída) é muitas vezes funcional, pois a pálpebra pode obstruir o eixo visual, diminuindo o campo de visão do paciente."
  }
];

const PROCEDURES = [
  {
    title: "Blefaroplastia",
    desc: "Remoção do excesso de pele e bolsas de gordura das pálpebras superiores e inferiores.",
    icon: Sparkles
  },
  {
    title: "Correção de Ptose",
    desc: "Reposicionamento da pálpebra caída que pode estar afetando a visão e a aparência.",
    icon: UserCheck
  },
  {
    title: "Vias Lacrimais",
    desc: "Tratamento de obstruções que causam lacrimejamento excessivo e infecções.",
    icon: Droplets
  },
  {
    title: "Entrópio e Ectrópio",
    desc: "Correção da posição da pálpebra virada para dentro ou para fora.",
    icon: Eye
  }
];

const OculoplasticsPage: React.FC<OculoplasticsPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div id="oculoplastica" className="bg-white min-h-screen pt-20 animate-fade-in-up font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden pb-16 pt-8 md:pt-16">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-4 py-1.5 rounded-full text-emerald-300 text-sm font-bold uppercase tracking-wide">
                <Sparkles size={16} /> Estética e Função Ocular
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Rejuvenesça seu Olhar e <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Recupere sua Autoconfiança.</span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Especialistas em cirurgia plástica ocular e vias lacrimais. Procedimentos precisos para melhorar sua visão e estética facial.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-500/30 transform hover:-translate-y-1"
                >
                  <Phone size={24} />
                  Agendar Consulta
                </a>
              </div>
            </div>

            <div className="md:w-1/2 w-full flex justify-center relative">
               <div className="relative group w-full max-w-md">
                 <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                 <div className="relative bg-slate-800 rounded-3xl p-2 shadow-2xl">
                    <img 
                      src="https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/chatgpt-image-9-de-abr.-de-2026-10_55_14-C5qrYtgDvkzYhosC.png" 
                      alt="Oculoplástica e Vias Lacrimais" 
                      className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                      <p className="text-white font-medium text-sm flex items-center gap-2">
                        <UserCheck size={16} className="text-emerald-400" />
                        Resultados Naturais
                      </p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROCEDIMENTOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Nossas Especialidades em Oculoplástica
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Tratamentos avançados para pálpebras, órbita e vias lacrimais, unindo saúde ocular e estética.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCEDURES.map((proc, idx) => (
              <div key={idx} className="border border-slate-100 rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:border-emerald-200 transition-all text-center group">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <proc.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{proc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENEFÍCIOS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-2">Por que realizar?</h2>
               <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                 Mais do que estética, uma melhora na sua qualidade de vida.
               </h3>
               
               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-500">
                     <Eye size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 mb-1">Melhora do Campo Visual</h4>
                     <p className="text-slate-600 text-sm">A remoção do excesso de pele nas pálpebras superiores pode ampliar significativamente sua visão periférica.</p>
                   </div>
                 </div>
                 
                 <div className="flex gap-4">
                   <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-500">
                     <Sparkles size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 mb-1">Aparência Rejuvenescida</h4>
                     <p className="text-slate-600 text-sm">Elimine o aspecto de "olhar cansado" e bolsas de gordura, recuperando uma expressão mais descansada e jovial.</p>
                   </div>
                 </div>
                 
                 <div className="flex gap-4">
                   <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-500">
                     <Droplets size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 mb-1">Conforto Ocular</h4>
                     <p className="text-slate-600 text-sm">Tratamento eficaz para lacrimejamento constante e irritações causadas pelo mau posicionamento das pálpebras.</p>
                   </div>
                 </div>
               </div>

               <div className="mt-10">
                 <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
                   Agendar Avaliação <ArrowRight size={18} />
                 </a>
               </div>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                 <img 
                   src="https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/06cacdb2-57a4-4c9d-8236-c87dbbfc2300-fR3eHbdtAQCgfjCF.png" 
                   alt="Atendimento Especializado" 
                   className="w-full h-[500px] object-cover"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                   <div className="text-white">
                     <p className="text-2xl font-bold">Cuidado Individualizado</p>
                     <p className="text-emerald-300">Cada rosto é único, cada tratamento é personalizado.</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900">Dúvidas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 hover:bg-slate-50 transition-colors text-left"
                >
                  <span className="font-bold text-slate-800 flex items-center gap-3">
                    <HelpCircle size={20} className="text-emerald-500" />
                    {item.question}
                  </span>
                  {openFaq === index ? <ChevronUp size={20} className="text-slate-400"/> : <ChevronDown size={20} className="text-slate-400"/>}
                </button>
                {openFaq === index && (
                  <div className="p-5 bg-slate-50 text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Dê o primeiro passo para um novo olhar.
              </h2>
              <p className="text-emerald-100 text-lg">
                Agende sua avaliação com nossos especialistas em Oculoplástica e Vias Lacrimais.
              </p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-emerald-700 hover:bg-slate-100 px-8 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <Phone size={20} />
                FALAR NO WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OculoplasticsPage;

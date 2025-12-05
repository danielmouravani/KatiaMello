import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Eye, AlertCircle, Phone, HelpCircle, ChevronDown, ChevronUp, Glasses, Sun, Clock } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface RefractivePageProps {
  onNavigate: (page: 'home' | 'cataract' | 'refractive' | 'exams') => void;
}

const FAQ_ITEMS = [
  {
    question: "Quanto tempo dura a cirurgia?",
    answer: "O procedimento é extremamente rápido. A aplicação do laser leva apenas alguns segundos por olho, e o tempo total na sala cirúrgica costuma ser de 10 a 15 minutos."
  },
  {
    question: "Vou sentir dor?",
    answer: "Não. A cirurgia é feita com colírios anestésicos. Você pode sentir uma leve pressão ou desconforto passageiro, mas não dor. No pós-operatório, pode haver sensação de areia nos olhos, que passa em poucos dias."
  },
  {
    question: "A partir de que idade posso operar?",
    answer: "Geralmente a partir dos 18 ou 21 anos, desde que o grau esteja estabilizado há pelo menos um ano. É necessária uma avaliação completa para confirmar."
  },
  {
    question: "É seguro? Existe risco de ficar cego?",
    answer: "A cirurgia refrativa é um dos procedimentos mais seguros e realizados do mundo. O laser é controlado por computador com altíssima precisão. O risco de complicações graves é extremamente baixo."
  }
];

const STEPS = [
  { num: 1, title: "Avaliação pelo Especialista", desc: "Anamnese completa para entender seu caso." },
  { num: 2, title: "Exames Completos", desc: "Incluindo topografia e tomografia da córnea." },
  { num: 3, title: "Avaliação Pré-Operatória", desc: "Confirmação da técnica ideal (Lasik ou PRK)." },
  { num: 4, title: "Procedimento Cirúrgico", desc: "Rápido, seguro e com tecnologia a laser." },
  { num: 5, title: "Pós-Operatório", desc: "Acompanhamento da cicatrização." },
  { num: 6, title: "Alta do Paciente", desc: "Liberdade para enxergar o mundo." }
];

const RefractivePage: React.FC<RefractivePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen pt-20 animate-fade-in-up font-sans">
      
      {/* 1. HERO CONVERSÃO */}
      <section className="relative bg-slate-900 text-white overflow-hidden pb-16 pt-8 md:pt-16">
        {/* Background Laser Effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Copy */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full text-blue-300 text-sm font-bold uppercase tracking-wide">
                <Zap size={16} className="text-yellow-400" /> Tecnologia 100% a Laser
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Liberte-se dos Óculos e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Viva com Liberdade.</span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Corrija Miopia, Hipermetropia e Astigmatismo. Procedimento rápido, recuperação ágil e a segurança que seus olhos merecem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-500/30 transform hover:-translate-y-1 animate-pulse"
                >
                  <Phone size={24} />
                  Agendar Avaliação
                </a>
              </div>
              <p className="text-sm text-slate-400 italic">
                * Avaliação necessária para verificar elegibilidade.
              </p>
            </div>

            {/* Imagem Estática (Alta Conversão) */}
            <div className="md:w-1/2 w-full flex justify-center relative">
               <div className="relative group w-full max-w-md">
                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                 <div className="relative bg-slate-800 rounded-3xl p-2 shadow-2xl">
                    <img 
                      src="https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/gemini_generated_image_c78jg0c78jg0c78j-3MdkfdFLWj0HsE3C.png" 
                      alt="Cirurgia Refrativa a Laser" 
                      className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl opacity-90"
                    />
                    <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                      <p className="text-white font-medium text-sm flex items-center gap-2">
                        <Glasses size={16} className="text-blue-400" />
                        Adeus Óculos
                      </p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENEFÍCIOS (A DOR X PRAZER) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Principais benefícios da cirurgia refrativa
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Mais do que estética, é sobre qualidade de vida e praticidade no seu dia a dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Card 1 */}
             <div className="border border-slate-100 rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:border-brand-200 transition-all text-center group">
               <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
                 <Eye size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Visão sem óculos ou lentes</h3>
               <p className="text-slate-600 text-sm leading-relaxed">
                 Um dos maiores benefícios é a liberdade de não depender mais de correção visual para acordar, tomar banho ou enxergar o despertador.
               </p>
             </div>

             {/* Card 2 */}
             <div className="border border-slate-100 rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:border-brand-200 transition-all text-center group">
               <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
                 <Clock size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Rápida recuperação</h3>
               <p className="text-slate-600 text-sm leading-relaxed">
                 A maioria dos pacientes retorna às atividades normais em poucos dias. A técnica Lasik permite recuperação visual quase imediata.
               </p>
             </div>

             {/* Card 3 */}
             <div className="border border-slate-100 rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:border-brand-200 transition-all text-center group">
               <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
                 <Sun size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Melhora da qualidade de vida</h3>
               <p className="text-slate-600 text-sm leading-relaxed">
                 Conforto para praticar esportes, ir à praia, usar óculos escuros comuns e fim do embaçamento com máscaras ou ar condicionado.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. TÉCNICAS: LASIK vs PRK */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2">Tecnologias</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Qual é o melhor procedimento para você?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {/* LASIK */}
             <div className="bg-white rounded-3xl p-8 border-2 border-transparent hover:border-blue-400 shadow-xl transition-all">
                <div className="flex justify-center mb-6">
                   <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-4 border-blue-100">
                      <Eye className="text-blue-600" size={40} />
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-blue-600 mb-6">LASIK</h3>
                <p className="text-slate-600 text-sm leading-relaxed text-justify">
                  Esse é o procedimento mais moderno, habitualmente indicado para pessoas com miopia, hipermetropia e astigmatismo. O Lasik consiste na criação de um "flap" (uma fina camada) na córnea, aplicação do laser na camada interna e reposicionamento do flap.
                </p>
                <div className="mt-6 space-y-3 bg-blue-50/50 p-4 rounded-xl">
                  <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> <strong>Pós-operatório:</strong> Tranquilo e indolor.</p>
                  <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> <strong>Recuperação:</strong> Rápida (1 a 2 dias).</p>
                </div>
             </div>

             {/* PRK */}
             <div className="bg-white rounded-3xl p-8 border-2 border-transparent hover:border-blue-400 shadow-xl transition-all">
                <div className="flex justify-center mb-6">
                   <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-4 border-blue-100">
                      <Eye className="text-blue-600" size={40} />
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-blue-600 mb-6">Trans PRK</h3>
                <p className="text-slate-600 text-sm leading-relaxed text-justify">
                  Técnica onde o laser é aplicado diretamente na superfície da córnea, sem cortes (sem flap). É indicada para córneas mais finas ou esportistas de contato. No pós-operatório é utilizada uma lente de contato terapêutica temporária.
                </p>
                <div className="mt-6 space-y-3 bg-blue-50/50 p-4 rounded-xl">
                  <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> <strong>Indicação:</strong> Córneas finas.</p>
                  <p className="text-sm text-slate-700 flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> <strong>Recuperação:</strong> Gradual (aprox. 1 semana).</p>
                </div>
             </div>
          </div>
          
          <div className="mt-12 text-center text-sm text-slate-500 max-w-3xl mx-auto">
             <p>Em ambos os procedimentos a anestesia é tópica (colírios). O melhor procedimento para o seu caso deve ser avaliado e decidido pelo especialista através de exames precisos.</p>
          </div>
        </div>
      </section>

      {/* 4. PASSO A PASSO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="flex flex-col lg:flex-row gap-12 items-center">
              
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-10 text-center lg:text-left">
                  Conheça as etapas da cirurgia refrativa
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {STEPS.map((step) => (
                    <div key={step.num} className="bg-brand-500 text-white p-6 rounded-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-lg">
                       <div className="absolute -right-4 -top-4 text-brand-600 opacity-20 font-bold text-8xl font-display group-hover:scale-125 transition-transform">
                         {step.num}
                       </div>
                       <div className="relative z-10 text-center">
                         <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                           {step.num}
                         </div>
                         <h4 className="font-bold text-sm uppercase tracking-wide mb-1">{step.title}</h4>
                         <p className="text-xs text-brand-100">{step.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Placeholder Section */}
              <div className="lg:w-1/2 relative">
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-[9/16] max-w-sm mx-auto border-4 border-slate-100">
                    <img 
                      src="https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/470494881_582373847728893_3199652955436485462_n-mjE792GKxacvBDPZ.jpg" 
                      alt="Dra Claudia Morgado explicando" 
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                       <p className="font-bold">Dra. Claudia Morgado</p>
                       <p className="text-xs text-slate-300">Especialista em Córnea e Refrativa</p>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900">Dúvidas Comuns</h2>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 hover:bg-slate-50 transition-colors text-left"
                >
                  <span className="font-bold text-slate-800 flex items-center gap-3">
                    <HelpCircle size={20} className="text-brand-500" />
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

      {/* 6. CTA FINAL */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-brand-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Sua vida sem óculos começa aqui.
              </h2>
              <p className="text-blue-100 text-lg">
                Agende sua avaliação e descubra se você é candidato à cirurgia refrativa.
              </p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-600/30"
              >
                <Phone size={20} />
                AGENDAR AVALIAÇÃO AGORA
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RefractivePage;
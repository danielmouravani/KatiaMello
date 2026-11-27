import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Eye,
  AlertCircle,
  Phone,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MapPin,
  FileCheck2,
  Stethoscope,
  Microscope
} from 'lucide-react';
import { LENSES, WHATSAPP_LINK } from '../constants';

interface CataractPageProps {
  onNavigate: (page: 'home' | 'cataract' | 'refractive' | 'exams' | 'oculoplastics' | 'survey' | 'privacy' | 'terms') => void;
}

const FAQ_ITEMS = [
  {
    question: "Quando devo operar a catarata?",
    answer:
      "O momento ideal para a cirurgia de catarata é definido em consulta oftalmológica. Atualmente, não é necessário esperar a catarata 'amadurecer' completamente: a cirurgia costuma ser indicada quando a opacidade do cristalino passa a prejudicar atividades cotidianas, como leitura, uso de telas ou direção noturna, sendo planejada de forma segura conforme avaliação clínica individual."
  },
  {
    question: "Qual a melhor lente intraocular?",
    answer:
      "Não existe uma única lente intraocular ideal para todos os pacientes. A escolha faz parte do planejamento cirúrgico personalizado conduzido pelo médico oftalmologista, após exames como biometria óptica, topografia de córnea e avaliação da retina. São consideradas tecnologias monofocais, tóricas (para astigmatismo), EDOF (foco estendido), multifocais e trifocais, de acordo com as características oculares e hábitos visuais de cada pessoa."
  },
  {
    question: "A cirurgia de catarata é coberta pelo plano de saúde?",
    answer:
      "Sim. A cirurgia de catarata pela técnica de facoemulsificação possui cobertura pela maioria dos planos de saúde, seguindo as diretrizes da ANS e as regras de cada operadora. Nossa equipe auxilia na verificação de cobertura, emissão de guias e orientações sobre autorizações prévias e eventuais opções de tecnologias de lentes."
  },
  {
    question: "Quanto custa uma cirurgia de catarata?",
    answer:
      "Em conformidade com as normas médicas, os valores de procedimentos cirúrgicos não são divulgados de forma padronizada sem avaliação presencial. O custo na modalidade particular varia conforme os exames pré-operatórios necessários, a complexidade cirúrgica e a tecnologia de lente intraocular definida no planejamento personalizado. Pacientes com plano de saúde também recebem orientação clara sobre cobertura do convênio e eventuais diferenças conforme o plano."
  },
  {
    question: "Onde fazer cirurgia de catarata em Duque de Caxias e na Baixada Fluminense?",
    answer:
      "O Centro de Saúde Ocular Katia Mello está localizado no Centro de Duque de Caxias (Av. Presidente Vargas, 132 – Edifício Fertonani), oferecendo fácil acesso para pacientes de toda a Baixada Fluminense, incluindo Nova Iguaçu, São João de Meriti, Belford Roxo, Nilópolis e Magé, com exames pré-operatórios e acompanhamento clínico no mesmo endereço."
  },
  {
    question: "A cirurgia de catarata dói e precisa de internação?",
    answer:
      "O procedimento é ambulatorial, sem necessidade de internação hospitalar, e realizado com anestesia local (colírios e sedação leve) para proporcionar maior conforto, sendo geralmente bem tolerado. Após um breve período de repouso e orientações pós-operatórias, o paciente retorna para casa no mesmo dia."
  },
  {
    question: "Como é a recuperação após a cirurgia de catarata?",
    answer:
      "O tempo de recuperação visual varia conforme as características clínicas de cada paciente e a resposta ao pós-operatório. Muitos pacientes percebem melhora gradual nos primeiros dias ao seguir corretamente o uso dos colírios prescritos e as recomendações médicas para retorno às atividades."
  }
];

const DEFAULT_TITLE = "Centro de Saúde Ocular Katia Mello";
const DEFAULT_DESCRIPTION =
  "Centro de Saúde Ocular Katia Mello em Duque de Caxias - RJ. Mais de 25 anos de excelência em cirurgia de catarata, setor de córnea, oculoplástica e exames completos.";

const CATARACT_TITLE = "Cirurgia de Catarata em Duque de Caxias e Baixada Fluminense | Centro Katia Mello";
const CATARACT_DESCRIPTION =
  "Cirurgia de catarata em Duque de Caxias e Baixada Fluminense com planejamento cirúrgico personalizado, tecnologias de lentes intraoculares e atendimento por plano de saúde.";

const CataractPage: React.FC<CataractPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Atualiza SEO da página de Catarata dinamicamente
    document.title = CATARACT_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');

    if (metaDesc) metaDesc.setAttribute('content', CATARACT_DESCRIPTION);
    if (ogTitle) ogTitle.setAttribute('content', CATARACT_TITLE);
    if (ogDesc) ogDesc.setAttribute('content', CATARACT_DESCRIPTION);
    if (twitterTitle) twitterTitle.setAttribute('content', CATARACT_TITLE);
    if (twitterDesc) twitterDesc.setAttribute('content', CATARACT_DESCRIPTION);

    const faqSchemaScript = document.createElement('script');
    faqSchemaScript.type = 'application/ld+json';
    faqSchemaScript.id = 'cataract-seo-schema';
    faqSchemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalProcedure",
          "name": "Cirurgia de Catarata (Facoemulsificação) com Planejamento Cirúrgico Personalizado",
          "procedureType": "SurgicalProcedure",
          "description": CATARACT_DESCRIPTION,
          "howPerformed": "Facoemulsificação com microincisão e implante de lente intraocular definida em planejamento cirúrgico individualizado após biometria óptica e avaliação oftalmológica.",
          "provider": {
            "@type": "MedicalClinic",
            "name": "Centro de Saúde Ocular Katia Mello",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av Presidente Vargas, 132, Edifício Fertonani",
              "addressLocality": "Duque de Caxias",
              "addressRegion": "RJ",
              "addressCountry": "BR"
            },
            "areaServed": [
              "Duque de Caxias",
              "Baixada Fluminense",
              "Nova Iguaçu",
              "São João de Meriti",
              "Belford Roxo",
              "Nilópolis",
              "Magé"
            ]
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        }
      ]
    });
    document.head.appendChild(faqSchemaScript);

    return () => {
      document.title = DEFAULT_TITLE;
      if (metaDesc) metaDesc.setAttribute('content', DEFAULT_DESCRIPTION);
      if (ogTitle) ogTitle.setAttribute('content', DEFAULT_TITLE);
      if (ogDesc) ogDesc.setAttribute('content', DEFAULT_DESCRIPTION);
      if (twitterTitle) twitterTitle.setAttribute('content', DEFAULT_TITLE);
      if (twitterDesc) twitterDesc.setAttribute('content', DEFAULT_DESCRIPTION);
      const existingSchema = document.getElementById('cataract-seo-schema');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div id="catarata" className="bg-white min-h-screen pt-20 animate-fade-in-up font-sans">
      
      {/* 1. HERO: Regionalidade + Planejamento Cirúrgico + Avaliação Médica */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden pb-16 pt-8 md:pt-16">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/10 rounded-l-full blur-3xl pointer-events-none" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-400/30 px-4 py-1.5 rounded-full text-brand-200 text-sm font-bold uppercase tracking-wide">
                <MapPin size={16} aria-hidden="true" /> Duque de Caxias • Baixada Fluminense
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-bold leading-tight">
                Cirurgia de Catarata em <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-100">Duque de Caxias e Baixada Fluminense</span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Cuidado oftalmológico com <strong className="text-white">planejamento cirúrgico personalizado</strong>, avaliação diagnóstica completa e tecnologias de lentes intraoculares indicadas de forma individualizada para o seu olho — particular ou pelo plano de saúde.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-900/30 transform hover:-translate-y-0.5"
                >
                  <Phone size={22} aria-hidden="true" />
                  Agendar Avaliação Médica
                </a>
                <div className="flex items-center gap-3 text-sm text-slate-300 px-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs font-semibold">
                        {i}k+
                      </div>
                    ))}
                  </div>
                  <p>+5.000 Cirurgias Realizadas</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full flex justify-center relative">
               <div className="relative group w-full max-w-md">
                 <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000" aria-hidden="true"></div>
                 <div className="relative bg-slate-800 rounded-3xl p-2 shadow-2xl">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQ2LUOqx5D04STX4di3OLN4V0uQqJYipI-cGZsvbAymrjQXjAiLjOtT4&s=10" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/olho-com-catarata.jpg';
                      }}
                      alt="Olho com catarata - Opacidade no cristalino avaliada em consulta oftalmológica" 
                      className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl"
                      loading="lazy"
                      decoding="async"
                      width="450"
                      height="450"
                    />
                    <div className="absolute bottom-6 left-6 bg-black/75 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                      <p className="text-white font-medium text-sm flex items-center gap-2">
                        <AlertCircle size={16} className="text-yellow-400" aria-hidden="true" />
                        Diagnóstico Oftalmológico Especializado
                      </p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUANDO OPERAR A CATARATA & SINTOMAS */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-700 font-bold uppercase tracking-wider text-sm mb-2">Indicação Médica</p>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Quando devo operar a catarata?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              A catarata evolui de forma gradual. Hoje não é preciso esperar que a visão fique totalmente comprometida para operar: a cirurgia costuma ser indicada quando os sintomas passam a afetar a leitura, o trabalho ou a segurança no dia a dia. Se você percebe sinais como os abaixo, agende uma avaliação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Visão Embaçada", desc: "Sensação constante de névoa ou vidro embaçado ao olhar." },
              { icon: AlertCircle, title: "Cores Desbotadas", desc: "Percepção de cores mais opacas ou amareladas." },
              { icon: CheckCircle2, title: "Dificuldade à Noite", desc: "Ofuscamento com faróis e menor segurança ao dirigir." },
              { icon: Eye, title: "Troca Frequente de Grau", desc: "Sensação de que os óculos não proporcionam mais nitidez." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 mb-4">
                  <item.icon size={24} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PLANEJAMENTO CIRÚRGICO PERSONALIZADO (VALORIZANDO O ATO MÉDICO) */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 relative">
               <div className="grid grid-cols-2 gap-4">
                 <img 
                   src="https://res.cloudinary.com/dm2aqydrq/image/upload/f_auto,q_auto,w_600/v1781611731/kk6m7nuckvzosoxg0cd5.jpg" 
                   className="rounded-2xl shadow-lg w-full h-64 object-cover" 
                   alt="Equipamento para exames pré-operatórios e cirurgia de catarata em Duque de Caxias" 
                   loading="lazy"
                   decoding="async"
                   width="300"
                   height="256"
                 />
                 <img 
                   src="https://res.cloudinary.com/dm2aqydrq/image/upload/f_auto,q_auto,w_600/v1781611731/v0w25pk2lyhmkayf2dql.jpg" 
                   className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" 
                   alt="Estrutura do Centro de Saúde Ocular Katia Mello na Baixada Fluminense" 
                   loading="lazy"
                   decoding="async"
                   width="300"
                   height="256"
                 />
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-700 text-white p-6 rounded-2xl shadow-xl text-center min-w-[200px]">
                 <p className="text-4xl font-bold">+25</p>
                 <p className="text-sm uppercase tracking-wider font-medium">Anos de Experiência</p>
               </div>
            </div>

            <div className="lg:w-1/2">
               <p className="text-brand-700 font-bold uppercase tracking-wider text-sm mb-2">Planejamento Cirúrgico Personalizado</p>
               <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                 Cirurgia Moderna, Precisão Médica e Sem Internação
               </h2>
               <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                 Mais do que o implante de uma lente, a cirurgia de catarata exige um <strong>planejamento cirúrgico personalizado</strong> conduzido pelo cirurgião oftalmologista. Realizamos exames pré-operatórios detalhados — como biometria óptica, topografia corneana e mapeamento de retina — para executar a <strong>facoemulsificação</strong> com microincisões e total foco na saúde de cada olho.
               </p>
               
               <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Stethoscope className="text-brand-700 shrink-0" size={28} aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-slate-900">Avaliação Pré-Operatória e Cálculo Individual</h3>
                      <p className="text-sm text-slate-600">Medições anatômicas precisas da córnea e do globo ocular para orientar a conduta cirúrgica.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Clock className="text-brand-700 shrink-0" size={28} aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-slate-900">Procedimento Ambulatorial</h3>
                      <p className="text-sm text-slate-600">Duração média de 15 a 20 minutos, com alta no mesmo dia sem necessidade de internação.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <ShieldCheck className="text-brand-700 shrink-0" size={28} aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-slate-900">Protocolos de Segurança e Acompanhamento</h3>
                      <p className="text-sm text-slate-600">Assistência médica desde os exames iniciais até as consultas pós-operatórias na própria clínica.</p>
                    </div>
                 </div>
               </div>

               <div className="mt-8">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-700 font-bold border-b-2 border-brand-200 hover:border-brand-700 transition-all pb-1">
                    Agendar consulta pré-operatória <ArrowRight size={18} aria-hidden="true" />
                  </a>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. TECNOLOGIAS DE LENTES INTRAOCULARES: Qual a melhor lente intraocular? */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center mb-14">
          <p className="text-brand-300 font-bold uppercase tracking-wider text-sm mb-2">Decisão Clínica Baseada em Exames</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Qual a melhor lente intraocular?
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Não existe uma única lente ideal para todas as pessoas. No <strong>planejamento cirúrgico personalizado</strong>, o oftalmologista avalia as medidas do seu olho, a saúde da retina e da córnea e a sua rotina (leitura, computador, direção noturna) para indicar a tecnologia de lente intraocular mais adequada.
          </p>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {LENSES.map((lens, index) => (
             <div key={index} className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-3xl p-8 hover:bg-slate-800 transition-colors duration-300">
               <div className="w-10 h-10 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-300 mb-4 font-bold">
                 {index + 1}
               </div>
               <h3 className="text-xl font-bold text-white mb-3">
                 {lens.title}
               </h3>
               <p className="text-slate-300 text-sm mb-6 leading-relaxed min-h-[84px]">
                 {lens.description}
               </p>
               <ul className="space-y-2 border-t border-slate-700/60 pt-4">
                 {lens.features.slice(0, 3).map((feature, idx) => (
                   <li key={idx} className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                     <CheckCircle2 size={12} className="text-green-400 shrink-0" aria-hidden="true" />
                     {feature}
                   </li>
                 ))}
               </ul>
             </div>
           ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 mt-10">
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <Microscope className="text-brand-300 shrink-0 mt-1" size={28} aria-hidden="true" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Tecnologias Tóricas para Correção de Astigmatismo</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Quando os exames pré-operatórios identificam astigmatismo corneano relevante, as diferentes tecnologias de lentes (monofocais, EDOF, multifocais e trifocais) podem ser avaliadas na versão tórica, mediante cálculo personalizado pelo cirurgião.
                </p>
              </div>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Tirar Dúvidas com a Equipe
            </a>
          </div>
        </div>
      </section>

      {/* 5. PLANO DE SAÚDE, INVESTIMENTO E ATENDIMENTO NA BAIXADA FLUMINENSE */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-brand-700 font-bold uppercase tracking-wider text-sm mb-2">Acesso e Orientação Transparente</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Convênios, Custos e Atendimento Regional
            </h2>
            <p className="text-slate-600">
              Informações práticas para quem busca cirurgia de catarata em Duque de Caxias e em toda a Baixada Fluminense.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-5">
                  <FileCheck2 size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Cirurgia de catarata pelo plano de saúde</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Atendemos diversos planos de saúde que oferecem cobertura para a cirurgia de catarata (facoemulsificação), conforme o rol da ANS e as condições contratuais da sua operadora. Nossa equipe apoia o paciente na conferência de guias e solicitações de autorização.
                </p>
              </div>
              <a
                href="#partners"
                className="text-left text-brand-700 font-bold text-sm hover:underline inline-flex items-center gap-1.5 mt-2"
              >
                Consultar operadoras atendidas na clínica <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-5">
                  <ShieldCheck size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Quanto custa uma cirurgia de catarata?</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Por responsabilidade médica e ética profissional, o valor de uma cirurgia de catarata depende da avaliação clínica individual. Na modalidade particular, o orçamento considera os exames pré-operatórios, a estrutura cirúrgica e a tecnologia de lente intraocular definida em consulta. Pelo convênio, orientamos sobre cobertura integral ou eventuais diferenças conforme sua escolha.
                </p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-brand-700 font-bold text-sm hover:underline inline-flex items-center gap-1.5 mt-2"
              >
                Solicitar orientação sobre consulta e valores <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-5">
                  <MapPin size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Duque de Caxias e Baixada Fluminense</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Com mais de 25 anos no Centro de Duque de Caxias (Av. Presidente Vargas, 132 – Edifício Fertonani), recebemos pacientes de Nova Iguaçu, São João de Meriti, Belford Roxo, Nilópolis, Magé e toda a Baixada Fluminense com estrutura completa para consultas e exames pré-operatórios.
                </p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-brand-700 font-bold text-sm hover:underline inline-flex items-center gap-1.5 mt-2"
              >
                Agendar atendimento presencial <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ: Principais Dúvidas sobre Cirurgia de Catarata */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-brand-700 font-bold uppercase tracking-wider text-sm mb-2">Dúvidas Frequentes</p>
            <h2 className="text-3xl font-display font-bold text-slate-900">Perguntas Frequentes sobre Cirurgia de Catarata</h2>
          </div>
          
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button 
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left cursor-pointer"
                  >
                    <span className="font-bold text-slate-800 flex items-center gap-3 pr-4">
                      <HelpCircle size={20} className="text-brand-700 shrink-0" aria-hidden="true" />
                      {item.question}
                    </span>
                    {isOpen ? <ChevronUp size={20} className="text-slate-500 shrink-0" aria-hidden="true" /> : <ChevronDown size={20} className="text-slate-500 shrink-0" aria-hidden="true" />}
                  </button>
                  <div className={`${isOpen ? 'block' : 'hidden'} p-5 bg-white text-slate-600 leading-relaxed border-t border-slate-100`}>
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-brand-700 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-700/30">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Agende sua avaliação de catarata em Duque de Caxias.
              </h2>
              <p className="text-brand-100 text-lg">
                Atendimento humanizado para pacientes de toda a Baixada Fluminense, particular e pelos principais planos de saúde.
              </p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-brand-800 hover:bg-slate-100 px-8 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <Phone size={20} className="fill-current" aria-hidden="true" />
                AGENDAR AVALIAÇÃO MÉDICA
              </a>
              <p className="text-xs text-brand-100 opacity-90 mt-4">
                Atendimento via WhatsApp. A indicação cirúrgica e a escolha da lente intraocular dependem de avaliação médica presencial.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default CataractPage;
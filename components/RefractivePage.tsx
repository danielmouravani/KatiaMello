import React, { useEffect, useState } from "react";
import {
  Microscope,
  Eye,
  ShieldCheck,
  Activity,
  ChevronDown,
  ChevronUp,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Search,
  AlertCircle,
  Stethoscope,
  Clock,
  HelpCircle,
  FileCheck,
  UserCheck,
  Zap,
} from "lucide-react";
import { WHATSAPP_LINK } from "../constants";
import BookingModal from "./BookingModal";

interface RefractivePageProps {
  onNavigate: (
    page:
      | "home"
      | "cataract"
      | "refractive"
      | "exams"
      | "oculoplastics"
      | "survey"
      | "privacy"
      | "terms",
  ) => void;
}

// 3. Principais Condições Tratadas
const CONDITIONS = [
  {
    name: "Ceratocone",
    desc: "Afinamento e ectasia progressiva que deforma a córnea em formato cônico.",
  },
  {
    name: "Olho seco",
    desc: "Deficiência ou instabilidade no filme lacrimal provocando atrito e queimação.",
  },
  {
    name: "Ceratite",
    desc: "Processos inflamatórios superficiais ou profundos do tecido corneano.",
  },
  {
    name: "Úlcera de córnea",
    desc: "Lesão aberta e dolorosa na superfície epitelial que requer pronto atendimento.",
  },
  {
    name: "Infecções da córnea",
    desc: "Acometimentos bacterianos, fúngicos, virais ou por parasitas (como Acanthamoeba).",
  },
  {
    name: "Distrofias corneanas",
    desc: "Alterações genéticas bilaterais que provocam acúmulos opacos na córnea.",
  },
  {
    name: "Degenerações corneanas",
    desc: "Deposições teciduais e afinamentos associados ao tempo ou agressões crônicas.",
  },
  {
    name: "Ectasias corneanas",
    desc: "Instabilidades estruturais da córnea com perda do contorno esférico natural.",
  },
  {
    name: "Erosão corneana recorrente",
    desc: "Descolamento repetido do epitélio com crises de dor aguda e sensibilidade.",
  },
  {
    name: "Edema de córnea",
    desc: "Retenção excessiva de líquidos por falha nas células do endotélio corneano.",
  },
  {
    name: "Cicatrizes e opacidades corneanas",
    desc: "Perda da transparência ideal em virtude de traumas, infecções prévias ou cirurgias.",
  },
  {
    name: "Alterações da superfície ocular",
    desc: "Desequilíbrios do microambiente epitelial e conjuntival do globo ocular.",
  },
  {
    name: "Complicações relacionadas a lentes de contato",
    desc: "Hipóxia, microtraumas epiteliais ou intolerâncias mecânicas e químicas.",
  },
  {
    name: "Pterígio",
    desc: "Crescimento fibrovascular benigno da conjuntiva em direção à córnea.",
  },
  {
    name: "Trauma ocular com comprometimento da córnea",
    desc: "Lacerações, arranhões ou perfurações acidentais na arquitetura da córnea.",
  },
];

// 4. Tratamentos, Procedimentos e Cirurgias
const TREATMENTS_LIST = [
  "Tratamento de olho seco",
  "Tratamento de ceratocone",
  "Tratamento de ceratites",
  "Tratamento de úlceras de córnea",
  "Tratamento de infecções corneanas",
  "Tratamento de erosões recorrentes",
  "Tratamento de distrofias corneanas",
  "Tratamento de degenerações corneanas",
  "Tratamento de doenças da superfície ocular",
];

const PROCEDURES_LIST = [
  "Crosslinking corneano",
  "Adaptação de lentes rígidas",
  "Adaptação de lentes esclerais",
  "Adaptação de lentes para ceratocone",
  "Lentes terapêuticas",
  "Implante de anel intracorneano (Anel de Ferrara)",
  "Remoção de anel intracorneano",
];

const SURGERIES_LIST = [
  "Transplante de córnea",
  "Transplante penetrante",
  "DALK",
  "DMEK",
  "DSAEK",
  "Cirurgias para ceratocone",
  "Tratamento cirúrgico de perfurações corneanas",
  "Outros procedimentos cirúrgicos",
];

// 5. Exames e Diagnósticos
const FEATURED_EXAMS = [
  {
    title: "Pentacam",
    badge: "Alta Tecnologia",
    description:
      "Tomografia de Scheimpflug de altíssima precisão. Mapeia as superfícies anterior e posterior da córnea, medindo elevações, espessura total e biomecânica em segundos.",
    highlight: true,
  },
  {
    title: "Topografia corneana",
    badge: "Mapeamento Curvatura",
    description:
      "Avaliação computadorizada minuciosa da curvatura anterior da córnea, indispensável na detecção precoce e acompanhamento de ceratocone e astigmatismos irregulares.",
    highlight: true,
  },
  {
    title: "Tomografia de córnea",
    badge: "Análise Tridimensional",
    description:
      "Reconstrução tridimensional completa da estrutura corneana para planejamento cirúrgico seguro e rastreamento de ectasias.",
    highlight: true,
  },
  {
    title: "Paquimetria corneana",
    badge: "Espessura Métrica",
    description:
      "Mensuração micrométrica rigorosa da espessura corneana em múltiplos pontos, fundamental em pré-operatórios e controle de edemas.",
    highlight: true,
  },
];

const STANDARD_EXAMS = [
  {
    title: "Microscopia especular",
    description:
      "Contagem e análise morfológica das células do endotélio corneano.",
  },
  {
    title: "Ceratometria",
    description:
      "Medição precisa do raio de curvatura da porção central da córnea.",
  },
  {
    title: "Biomicroscopia de córnea",
    description:
      "Exame minucioso em lâmpada de fenda das camadas corneanas e anexos.",
  },
  {
    title: "Avaliação de superfície ocular",
    description:
      "Investigação aprofundada da estabilidade epitelial e conjuntival.",
  },
  {
    title: "BUT (Break-Up Time)",
    description:
      "Avaliação do tempo de quebra do filme lacrimal com fluoresceína.",
  },
  {
    title: "Teste de Schirmer",
    description:
      "Quantificação precisa da produção basal e reflexa da lágrima.",
  },
  {
    title: "Teste com fluoresceína",
    description:
      "Coloração vital que evidencia microlesões e desepitelizações.",
  },
  {
    title: "Avaliação do filme lacrimal",
    description:
      "Diagnóstico funcional e qualitativo das camadas mucina, aquosa e lipídica.",
  },
];

// 6. Consultas e Avaliações
const EVALUATIONS = [
  "Consulta especializada em córnea",
  "Avaliação de doenças da córnea",
  "Avaliação de ceratocone",
  "Avaliação de olho seco",
  "Avaliação para adaptação de lentes de contato",
  "Avaliação para lentes de contato especiais",
  "Avaliação pré e pós-operatória",
  "Segunda opinião médica",
];

// 7. Especialistas
const CORNEA_SPECIALISTS = [
  {
    name: "Dra. Claudia Morgado",
    role: "Especialista em Córnea",
    image:
      "https://res.cloudinary.com/dm2aqydrq/image/upload/f_auto,q_auto,w_500/v1781611527/wvy94bshgxcmfu6uuvad.jpg",
  },
  {
    name: "Dr. Rodrigo Borges",
    role: "Especialista em Córnea",
    image:
      "https://res.cloudinary.com/dm2aqydrq/image/upload/f_auto,q_auto,w_500/v1788182614/nzea72jrt8jpl12qnou4.jpg",
  },
];

// 8. Quando procurar
const SYMPTOMS_LIST = [
  "Visão embaçada ou distorcida",
  "Dificuldade para enxergar com nitidez",
  "Sensibilidade à luz (fotofobia)",
  "Vermelhidão ou irritação ocular",
  "Sensação de corpo estranho ou areia",
  "Ressecamento ocular persistente",
  "Alterações relacionadas ao ceratocone",
  "Desconforto relacionado ao uso de lentes de contato",
  "Histórico de doença ou cirurgia da córnea",
];

// 10. FAQ
const CORNEA_FAQ = [
  {
    question: "O que é o Setor de Córnea?",
    answer:
      "É o setor especializado do Centro da Saúde Ocular dedicado exclusivamente à avaliação detalhada, diagnóstico por imagem, acompanhamento clínico e intervenções cirúrgicas de condições que afetam a córnea e a superfície ocular, unindo tecnologia de ponta e especialistas dedicados.",
  },
  {
    question: "Quais doenças são tratadas pelo especialista em córnea?",
    answer:
      "O especialista atua no diagnóstico e tratamento de ceratocone, olho seco crônico, ceratites, úlceras de córnea, infecções bacterianas ou fúngicas, distrofias e degenerações corneanas, ectasias, pterígio, edema corneano e traumas na superfície ocular.",
  },
  {
    question: "O ceratocone tem tratamento?",
    answer:
      "Sim. O tratamento é individualizado conforme o estágio da doença. Inicialmente pode envolver correção visual com óculos ou lentes de contato especiais (rígidas ou esclerais), procedimentos para estabilização como o Crosslinking, implante de anéis intracorneanos (Anel de Ferrara) ou, nos casos mais avançados, transplante de córnea.",
  },
  {
    question: "Quais exames podem ser necessários para avaliar a córnea?",
    answer:
      "Os exames dependem da hipótese diagnóstica, podendo englobar tomografia de córnea (Pentacam), topografia computadorizada, paquimetria ultrassônica, microscopia especular do endotélio e testes diagnósticos de filme lacrimal (Schirmer, BUT e fluoresceína).",
  },
  {
    question: "O Pentacam avalia a córnea?",
    answer:
      "Sim. O Pentacam é um padrão ouro na oftalmologia diagnóstica. Por meio de uma câmera rotatória Scheimpflug, ele captura imagens em 360 graus, analisando detalhadamente a espessura, elevação anterior e posterior, curvatura e biomecânica corneana com altíssima definição.",
  },
  {
    question:
      "Quem usa lentes de contato pode precisar de avaliação especializada?",
    answer:
      "Sim. O acompanhamento com um especialista em córnea é essencial para avaliar a integridade epitelial, garantir uma oxigenação adequada da córnea, verificar a adaptação correta do modelo de lente e prevenir complicações infecciosas ou mecânicas graves.",
  },
  {
    question: "O que é o crosslinking corneano?",
    answer:
      "É um procedimento cirúrgico ambulatorial que combina aplicação de riboflavina (vitamina B2) e irradiação com luz ultravioleta A. O objetivo é fortalecer as ligações de colágeno da córnea, aumentando sua rigidez estrutural para estabilizar a progressão do ceratocone e de ectasias.",
  },
  {
    question: "Quando pode ser necessário um transplante de córnea?",
    answer:
      "O transplante é indicado quando a córnea perde sua transparência ou seu formato regular de forma irreversível por outros métodos clínicos, como em casos avançados de ceratocone, cicatrizes pós-úlcera, perfurações ou falência do endotélio (edema de córnea persistente).",
  },
];

const RefractivePage: React.FC<RefractivePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<
    "tratamentos" | "procedimentos" | "cirurgias"
  >("tratamentos");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // 12. SEO Dinâmico
    const prevTitle = document.title;
    document.title =
      "Setor de Córnea | Centro da Saúde Ocular Dra. Kátia Mello";

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Cuidados especializados para doenças da córnea e superfície ocular. Consulte especialistas, conheça exames, tratamentos e procedimentos realizados pelo Setor de Córnea.",
      );
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute("content", prevDesc);
      }
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToTreatments = () => {
    const el = document.getElementById("tratamentos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="cornea-page"
      className="bg-white min-h-screen pt-20 animate-fade-in-up font-sans text-slate-800 selection:bg-brand-500 selection:text-white"
    >
      {/* 1. HERO — SETOR DE CÓRNEA */}
      <section
        id="hero-cornea"
        className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white overflow-hidden pb-20 pt-10 md:pt-20 border-b border-slate-800/80"
      >
        {/* Subtle architectural ambient light */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -ml-24 -mb-24"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Copy Content */}
            <div className="lg:w-7/12 space-y-7">
              <div className="inline-flex items-center gap-2.5 bg-brand-500/15 border border-brand-400/30 px-4 py-1.5 rounded-full text-brand-300 text-xs md:text-sm font-semibold tracking-wide uppercase shadow-sm backdrop-blur-sm">
                <Microscope size={15} className="text-brand-400" /> Centro
                Especializado de Oftalmologia
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.12]">
                Setor de Córnea
              </h1>

              <p className="text-xl md:text-2xl font-light text-brand-100 leading-snug">
                Cuidado especializado para a saúde, transparência e integridade
                da sua córnea.
              </p>

              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Diagnóstico preciso, acompanhamento especializado e tratamentos
                personalizados para doenças da córnea e da superfície ocular, com
                tecnologia e experiência médica.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  id="hero-cta-agendar"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white text-base font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Calendar size={20} />
                  AGENDAR CONSULTA
                </button>

                <button
                  id="hero-cta-tratamentos"
                  onClick={scrollToTreatments}
                  className="flex items-center justify-center gap-3 bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700 text-base font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm"
                >
                  CONHEÇA NOSSOS TRATAMENTOS
                  <ArrowRight size={18} className="text-brand-400" />
                </button>
              </div>

              {/* Medical Trust Tags */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs md:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-brand-400 shrink-0" />
                  <span>Corpo Clínico Dedicado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-brand-400 shrink-0" />
                  <span>Tomografia Pentacam</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 size={18} className="text-brand-400 shrink-0" />
                  <span>Protocolos Seguros</span>
                </div>
              </div>
            </div>

            {/* Visual Medical Card */}
            <div className="lg:w-5/12 w-full flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-500/40 to-sky-500/30 rounded-3xl blur-md opacity-60"></div>
                <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden">
                  <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 bg-slate-950 mb-5 border border-slate-800/60">
                    <img
                      src="https://res.cloudinary.com/dm2aqydrq/image/upload/f_auto,q_auto,w_700/v1781615566/nn3fq0a5ygqt3kojye8t.png"
                      alt="Exame diagnósticos de córnea no Centro Katia Mello"
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="320"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-brand-500/90 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        Superfície Ocular & Córnea
                      </span>
                      <p className="text-white text-sm font-medium mt-1">
                        Alta precisão para diagnóstico e cirurgias
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-800 text-xs sm:text-sm">
                      <span className="text-slate-300 flex items-center gap-2">
                        <Layers size={16} className="text-brand-400" />
                        Camadas da Córnea
                      </span>
                      <span className="text-white font-medium">
                        Epitélio ao Endotélio
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-800 text-xs sm:text-sm">
                      <span className="text-slate-300 flex items-center gap-2">
                        <Activity size={16} className="text-brand-400" />
                        Tecnologia Diagnóstica
                      </span>
                      <span className="text-white font-medium">
                        Pentacam & Topografia
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUÇÃO AO SETOR */}
      <section id="introducao" className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-brand-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 inline-block">
                Excelência Oftalmológica
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight">
                Cuidado especializado em cada detalhe da sua visão
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/80 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-500"></div>

              <div className="space-y-6 text-slate-700 text-lg md:text-xl leading-relaxed font-normal">
                <p>
                  A córnea é uma das estruturas mais importantes do sistema
                  visual. Alterações em sua transparência, formato ou superfície
                  podem comprometer significativamente a qualidade da visão.
                </p>
                <p>
                  No <strong>Setor de Córnea</strong>, oferecemos avaliação
                  especializada, diagnóstico, acompanhamento e tratamento de
                  diferentes condições que afetam a córnea e a superfície ocular,
                  desde casos clínicos até procedimentos cirúrgicos
                  especializados.
                </p>
              </div>

              {/* Three Institutional Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-slate-100">
                <div className="flex flex-col items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Transparência Óptica
                  </h3>
                  <p className="text-slate-500 text-sm leading-normal">
                    Manutenção da claridade e saúde do tecido para focar as
                    imagens com fidelidade.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                    <Activity size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Estabilidade Estrutural
                  </h3>
                  <p className="text-slate-500 text-sm leading-normal">
                    Identificação precoce de afinamentos, irregularidades e
                    ectasias progressivas.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Superfície Ocular Saudável
                  </h3>
                  <p className="text-slate-500 text-sm leading-normal">
                    Cuidado integral do filme lacrimal, epitélio corneano e
                    conforto visual diário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRINCIPAIS CONDIÇÕES TRATADAS */}
      <section id="condicoes" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 inline-block">
              Quadro Clínico
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Doenças e condições atendidas
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Tratamento especializado para diferentes condições que podem
              afetar a córnea e a superfície ocular.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {CONDITIONS.map((condition, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-50 group-hover:bg-brand-50 text-brand-600 flex items-center justify-center mb-4 transition-colors">
                    <Eye size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {condition.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {condition.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCEDIMENTOS E TRATAMENTOS */}
      <section
        id="tratamentos"
        className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-brand-400 font-semibold uppercase tracking-widest text-xs md:text-sm mb-3 inline-block">
              Terapêutica Avançada
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Tratamentos e procedimentos
            </h2>
            <p className="text-slate-300 text-base md:text-lg">
              Protocolos personalizados divididos em abordagens clínicas,
              procedimentos ambulatoriais e cirurgias de alta complexidade.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-800/90 p-1.5 rounded-2xl border border-slate-700/80 max-w-full overflow-x-auto">
              <button
                id="tab-tratamentos"
                onClick={() => setActiveCategory("tratamentos")}
                className={`px-5 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === "tratamentos"
                    ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Tratamentos ({TREATMENTS_LIST.length})
              </button>
              <button
                id="tab-procedimentos"
                onClick={() => setActiveCategory("procedimentos")}
                className={`px-5 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === "procedimentos"
                    ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Procedimentos ({PROCEDURES_LIST.length})
              </button>
              <button
                id="tab-cirurgias"
                onClick={() => setActiveCategory("cirurgias")}
                className={`px-5 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === "cirurgias"
                    ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Cirurgias ({SURGERIES_LIST.length})
              </button>
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="max-w-5xl mx-auto">
            {activeCategory === "tratamentos" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
                {TREATMENTS_LIST.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/70 border border-slate-700/70 hover:border-brand-400/60 rounded-2xl p-6 transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base leading-snug">
                        {item}
                      </h3>
                      <span className="text-xs text-slate-400 mt-1 block">
                        Acompanhamento clínico especializado
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeCategory === "procedimentos" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
                {PROCEDURES_LIST.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/70 border border-slate-700/70 hover:border-brand-400/60 rounded-2xl p-6 transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base leading-snug">
                        {item}
                      </h3>
                      <span className="text-xs text-slate-400 mt-1 block">
                        Procedimento ambulatorial e lentes
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeCategory === "cirurgias" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
                {SURGERIES_LIST.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/70 border border-slate-700/70 hover:border-brand-400/60 rounded-2xl p-6 transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base leading-snug">
                        {item}
                      </h3>
                      <span className="text-xs text-slate-400 mt-1 block">
                        Centro cirúrgico de ponta
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. EXAMES E DIAGNÓSTICO */}
      <section id="exames" className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 inline-block">
              Diagnóstico por Imagem
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4">
              Exames para avaliação da córnea
            </h2>
            <p className="text-xl text-slate-800 font-medium mb-3">
              Tecnologia para um diagnóstico preciso
            </p>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Uma avaliação detalhada é fundamental para identificar alterações
              da córnea, acompanhar a evolução das doenças e definir a melhor
              estratégia de tratamento.
            </p>
          </div>

          {/* Destaques Especiais: Pentacam, Topografia, Tomografia, Paquimetria */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
            {FEATURED_EXAMS.map((exam, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border-2 border-brand-100/80 shadow-md hover:shadow-xl hover:border-brand-500 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="bg-brand-50 text-brand-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {exam.badge}
                  </span>
                  <Sparkles
                    size={20}
                    className="text-brand-500 opacity-80 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {exam.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {exam.description}
                </p>
              </div>
            ))}
          </div>

          {/* Demais Exames */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Search size={20} className="text-brand-600" />
              Exames Complementares de Córnea e Superfície Ocular
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {STANDARD_EXAMS.map((exam, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:border-brand-200 transition-all"
                >
                  <h4 className="font-bold text-slate-900 text-base mb-1.5">
                    {exam.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {exam.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONSULTAS E AVALIAÇÕES */}
      <section id="avaliacoes" className="py-20 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-14 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-brand-400 font-semibold uppercase tracking-widest text-xs md:text-sm mb-2 block">
                  Atendimento Personalizado
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Avaliação especializada em córnea
                </h2>
                <p className="text-slate-300 text-sm md:text-base">
                  Realize uma investigação oftalmológica completa com médicos
                  focados em doenças corneanas e planejamento cirúrgico.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {EVALUATIONS.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-slate-800/80 border border-slate-700/80 p-4 rounded-xl text-sm md:text-base text-slate-200"
                  >
                    <CheckCircle2 size={18} className="text-brand-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  id="cta-agendar-avaliacao"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center gap-3 bg-brand-500 hover:bg-brand-600 text-white text-base font-bold px-9 py-4 rounded-xl transition-all shadow-lg shadow-brand-500/30 hover:scale-105 cursor-pointer"
                >
                  <Calendar size={20} />
                  AGENDAR AVALIAÇÃO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MÉDICOS ESPECIALISTAS */}
      <section id="especialistas" className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 inline-block">
              Corpo Clínico
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4">
              Especialistas em córnea
            </h2>
            <p className="text-xl text-slate-800 font-medium mb-2">
              Especialistas que cuidam da saúde da sua córnea
            </p>
            <p className="text-slate-600 text-base md:text-lg">
              “Experiência médica e cuidado individualizado em todas as etapas da
              sua jornada.”
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {CORNEA_SPECIALISTS.map((doc, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden h-[420px] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-slate-900"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="420"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <p className="text-brand-400 text-sm font-medium mb-1">
                    {doc.role}
                  </p>
                  <h3 className="text-white text-2xl font-bold mb-3">
                    {doc.name}
                  </h3>
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-300 hover:text-white uppercase tracking-wider transition-colors pt-2 border-t border-slate-700/80 w-full"
                  >
                    Agendar consulta com o especialista
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. QUANDO PROCURAR UM ESPECIALISTA EM CÓRNEA? */}
      <section id="quando-procurar" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-brand-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 inline-block">
                Sinais de Alerta
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                Quando procurar um especialista em córnea?
              </h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                Alterações na córnea podem apresentar diferentes sinais e
                sintomas. Uma avaliação especializada pode ajudar a identificar a
                causa e indicar o acompanhamento adequado.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {SYMPTOMS_LIST.map((symptom, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-brand-300 transition-colors"
                >
                  <AlertCircle size={18} className="text-brand-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-sm font-medium">
                    {symptom}
                  </span>
                </div>
              ))}
            </div>

            {/* Ética Médica / Disclaimer */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-sm flex items-start gap-3">
              <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Importante:</strong> Os sintomas listados são
                informativos e não configuram diagnóstico médico ou conclusão
                automática. Somente uma consulta oftalmológica presencial e
                exames especializados podem avaliar sua saúde ocular e
                determinar o plano terapêutico adequado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA DE DESTAQUE */}
      <section id="cta-destaque" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-b from-slate-800/80 to-slate-900/90 p-8 md:p-14 rounded-3xl border border-slate-700/80 shadow-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider">
              Primeiro Passo
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
              Cuide da saúde da sua córnea
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Uma avaliação especializada é o primeiro passo para entender suas
              necessidades e encontrar o acompanhamento mais adequado.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                id="cta-destaque-agendar"
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-brand-500/30 hover:scale-105 cursor-pointer"
              >
                <Calendar size={20} />
                AGENDAR CONSULTA
              </button>

              <a
                id="cta-destaque-whatsapp"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl text-base border border-slate-600 transition-all hover:border-brand-400"
              >
                <Phone size={20} className="text-[#25D366]" />
                FALE CONOSCO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 inline-block">
              Perguntas e Respostas
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Dúvidas frequentes sobre córnea
            </h2>
          </div>

          <div className="space-y-4">
            {CORNEA_FAQ.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 md:p-6 hover:bg-slate-50 transition-colors text-left gap-4"
                >
                  <span className="font-bold text-slate-800 text-base md:text-lg flex items-center gap-3">
                    <HelpCircle size={20} className="text-brand-500 shrink-0" />
                    {item.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp size={20} className="text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-5 md:p-6 bg-slate-50/60 text-slate-600 text-base leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default RefractivePage;

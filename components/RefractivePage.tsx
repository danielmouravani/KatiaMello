import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Eye,
  ShieldCheck,
  Microscope,
  Stethoscope,
  Activity,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Calendar,
  MessageCircle
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { WHATSAPP_LINK } from "../constants";

interface RefractivePageProps {
  onNavigate: (
    page:
      | "home"
      | "cataract"
      | "refractive"
      | "exams"
      | "oculoplastics"
      | "survey"
  ) => void;
}

const CONDITIONS = [
  "Ceratocone", "Olho seco", "Ceratite", "Úlcera de córnea",
  "Infecções da córnea", "Distrofias corneanas", "Degenerações corneanas",
  "Ectasias corneanas", "Erosão corneana recorrente", "Edema de córnea",
  "Cicatrizes e opacidades corneanas", "Alterações da superfície ocular",
  "Complicações com lentes", "Pterígio", "Trauma ocular"
];

const TREATMENTS = [
  "Tratamento de olho seco", "Tratamento de ceratocone", "Tratamento de ceratites",
  "Tratamento de úlceras de córnea", "Tratamento de infecções corneanas",
  "Tratamento de erosões recorrentes", "Tratamento de distrofias corneanas",
  "Tratamento de degenerações corneanas", "Tratamento de doenças da superfície ocular"
];

const PROCEDURES = [
  "Crosslinking corneano", "Adaptação de lentes rígidas", "Adaptação de lentes esclerais",
  "Adaptação de lentes para ceratocone", "Lentes terapêuticas",
  "Implante de anel intracorneano (Anel de Ferrara)", "Remoção de anel intracorneano"
];

const SURGERIES = [
  "Transplante de córnea", "Transplante penetrante", "DALK", "DMEK", "DSAEK",
  "Cirurgias para ceratocone", "Tratamento cirúrgico de perfurações",
  "Outros procedimentos cirúrgicos"
];

const EXAMS = [
  { name: "Topografia corneana", highlight: true },
  { name: "Tomografia de córnea", highlight: true },
  { name: "Pentacam", highlight: true },
  { name: "Paquimetria corneana", highlight: true },
  { name: "Microscopia especular", highlight: false },
  { name: "Ceratometria", highlight: false },
  { name: "Biomicroscopia de córnea", highlight: false },
  { name: "Avaliação de superfície ocular", highlight: false },
  { name: "BUT (Break-Up Time)", highlight: false },
  { name: "Teste de Schirmer", highlight: false },
  { name: "Teste com fluoresceína", highlight: false },
  { name: "Avaliação do filme lacrimal", highlight: false }
];

const EVALUATIONS = [
  "Consulta especializada em córnea", "Avaliação de doenças da córnea",
  "Avaliação de ceratocone", "Avaliação de olho seco",
  "Avaliação para adaptação de lentes de contato", "Avaliação para lentes especiais",
  "Avaliação pré e pós-operatória", "Segunda opinião"
];

const SYMPTOMS = [
  "Visão embaçada ou distorcida", "Dificuldade para enxergar com nitidez",
  "Sensibilidade à luz", "Vermelhidão ou irritação ocular",
  "Sensação de corpo estranho", "Ressecamento ocular persistente",
  "Alterações relacionadas ao ceratocone", "Desconforto com lentes de contato",
  "Histórico de doença ou cirurgia da córnea"
];

const FAQ_ITEMS = [
  {
    question: "O que é o Setor de Córnea?",
    answer: "É uma área dedicada exclusivamente ao diagnóstico, acompanhamento e tratamento das doenças e condições que afetam a córnea e a superfície ocular."
  },
  {
    question: "Quais doenças são tratadas pelo especialista em córnea?",
    answer: "Tratamos condições como ceratocone, olho seco, infecções (ceratites e úlceras), distrofias e degenerações corneanas, pterígio, além de adaptações de lentes de contato especiais e transplantes."
  },
  {
    question: "O ceratocone tem tratamento?",
    answer: "Sim, o ceratocone tem diversas opções de tratamento, como uso de óculos, adaptação de lentes de contato especiais, crosslinking, implante de anel intracorneano e, em casos avançados, transplante de córnea."
  },
  {
    question: "Quais exames podem ser necessários para avaliar a córnea?",
    answer: "Os mais comuns são a topografia e tomografia corneana, paquimetria, microscopia especular, além de testes para avaliar a superfície ocular e o filme lacrimal."
  },
  {
    question: "O Pentacam avalia a córnea?",
    answer: "Sim, o Pentacam é uma tomografia de alta precisão que avalia a córnea por completo, incluindo curvatura, espessura e elevação, sendo fundamental para diagnósticos detalhados."
  },
  {
    question: "Quem usa lentes de contato pode precisar de avaliação especializada?",
    answer: "Sim, usuários de lentes de contato precisam de acompanhamento regular para evitar complicações como infecções, úlceras ou intolerância ao uso das lentes."
  },
  {
    question: "O que é o crosslinking corneano?",
    answer: "É um procedimento menos invasivo utilizado para fortalecer a córnea e estabilizar a progressão do ceratocone ou de outras ectasias corneanas."
  },
  {
    question: "Quando pode ser necessário um transplante de córnea?",
    answer: "O transplante é indicado quando a córnea perde sua transparência ou formato natural de forma irreversível, não havendo melhora visual com outras opções de tratamento."
  }
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const RefractivePage: React.FC<RefractivePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Parallax setup for Hero
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Setor de Córnea | Centro da Saúde Ocular Dra. Kátia Mello";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Cuidados especializados para doenças da córnea e superfície ocular. Consulte especialistas, conheça exames, tratamentos e procedimentos realizados pelo Setor de Córnea.");
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToTreatments = () => {
    const section = document.getElementById("tratamentos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="refrativa" className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-brand-500 selection:text-white overflow-hidden">
      
      {/* 1. HERO - CLEAN & PREMIUM WITH VIDEO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Background Video & Overlays */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 will-change-transform">
           <video
             autoPlay
             loop
             muted
             playsInline
             className="absolute inset-0 w-full h-full object-cover opacity-90"
           >
             <source src="/video-cornea.mp4" type="video/mp4" />
           </video>
           {/* Overlay sem blur para não travar a GPU (melhor performance) */}
           <div className="absolute inset-0 bg-white/50"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 w-full pt-20">
          <div className="flex flex-col items-center text-center space-y-6 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
              <span className="text-sm font-semibold tracking-wide text-brand-700 uppercase">Tecnologia Médica Avançada</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-slate-900"
            >
              Setor de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">Córnea</span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 font-light mt-6 max-w-3xl leading-relaxed"
            >
              Cuidado especializado para a saúde, transparência e integridade da sua visão.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-12 w-full justify-center"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-bold tracking-wide text-lg transition-all hover:bg-brand-700 hover:-translate-y-1 shadow-lg shadow-brand-500/20 w-full sm:w-auto"
              >
                AGENDAR CONSULTA <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={scrollToTreatments}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold tracking-wide text-lg border border-slate-200 bg-white hover:border-brand-200 hover:bg-slate-50 transition-all text-slate-700 shadow-sm hover:shadow-md w-full sm:w-auto"
              >
                TRATAMENTOS <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
        

      </section>

      {/* 2. INTRODUÇÃO - CLEAN ELEGANCE */}
      <section className="py-24 relative z-10 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="lg:w-1/2 space-y-8"
            >
              <div className="w-16 h-1 bg-brand-500 rounded-full"></div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Cuidado especializado em cada detalhe.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed text-justify">
                A córnea é uma das estruturas mais importantes do sistema visual. Alterações em sua transparência, formato ou superfície podem comprometer significativamente a qualidade da visão.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed text-justify">
                No Setor de Córnea, oferecemos avaliação avançada, diagnóstico preciso e acompanhamento de ponta para condições clínicas e cirúrgicas.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl group border border-slate-200 bg-white p-2">
                 <div className="w-full h-full rounded-2xl overflow-hidden relative">
                   <img
                     src="https://res.cloudinary.com/dm2aqydrq/image/upload/v1781615566/nn3fq0a5ygqt3kojye8t.png"
                     alt="Tecnologia Oftalmológica"
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                   />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PRINCIPAIS CONDIÇÕES TRATADAS */}
      <section className="py-24 relative bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Condições Atendidas
            </h2>
            <p className="text-lg text-slate-600">Tratamento especializado para diferentes condições que podem afetar a córnea e a superfície ocular.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {CONDITIONS.map((cond, i) => (
              <motion.div 
                key={i} 
                variants={fadeUpVariant}
                className="group relative bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-white hover:border-brand-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <Eye className="text-brand-400 mb-4 group-hover:text-brand-600 transition-colors" size={28} />
                <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors block">
                  {cond}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. PROCEDIMENTOS E TRATAMENTOS */}
      <section id="tratamentos" className="py-24 relative bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUpVariant}
             className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Protocolos Clínicos</h2>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Soluções avançadas para a restauração e manutenção da sua saúde ocular.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tratamentos */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                <Stethoscope size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Tratamentos</h3>
              <ul className="space-y-4">
                {TREATMENTS.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-600">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Procedimentos */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white border border-brand-200 p-8 md:p-10 rounded-3xl shadow-lg md:-translate-y-4 ring-1 ring-brand-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8">
                  <Activity size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Procedimentos</h3>
                <ul className="space-y-4">
                  {PROCEDURES.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-600">
                      <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={20} />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Cirurgias */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-8">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Cirurgias</h3>
              <ul className="space-y-4">
                {SURGERIES.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-600">
                    <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. EXAMES */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUpVariant}
             className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Tecnologia Diagnóstica</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Precisão absoluta na avaliação e mapeamento detalhado da sua córnea para um tratamento seguro.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {EXAMS.map((exam, i) => (
              <motion.div 
                key={i}
                variants={fadeUpVariant}
                className={`p-6 rounded-2xl border flex flex-col items-center justify-center text-center transition-all ${
                  exam.highlight 
                  ? 'bg-brand-50 border-brand-200 shadow-md' 
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Microscope size={28} className={`mb-4 ${exam.highlight ? 'text-brand-600' : 'text-slate-400'}`} />
                <h4 className={`text-sm md:text-base ${exam.highlight ? 'font-bold text-brand-900' : 'font-medium text-slate-700'}`}>
                  {exam.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6 & 7. AVALIAÇÕES E MÉDICOS */}
      <section className="py-24 relative bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col xl:flex-row gap-16">
            
            {/* Avaliações */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="xl:w-1/3"
            >
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Jornada do Paciente</h2>
              <div className="space-y-3">
                {EVALUATIONS.map((ev, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                    <CheckCircle2 size={20} className="text-brand-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{ev}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Médicos */}
            <div className="xl:w-2/3">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="mb-8"
              >
                <h2 className="text-3xl font-display font-bold text-slate-900">O Corpo Clínico</h2>
                <p className="text-slate-600 text-lg mt-2">A excelência médica exigida pelos seus olhos.</p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Dra. Claudia */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-white border border-slate-200 shadow-md"
                >
                  <img 
                    src="https://res.cloudinary.com/dm2aqydrq/image/upload/v1781611527/wvy94bshgxcmfu6uuvad.jpg" 
                    alt="Dra. Claudia Morgado" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <p className="text-brand-300 text-sm font-bold uppercase tracking-wider mb-1">Especialista em Córnea</p>
                    <h4 className="text-white text-2xl font-bold">Dra. Claudia Morgado</h4>
                  </div>
                </motion.div>

                {/* Dr. Rodrigo */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-white border border-slate-200 shadow-md"
                >
                  <img 
                    src="https://res.cloudinary.com/dm2aqydrq/image/upload/v1788182614/nzea72jrt8jpl12qnou4.jpg" 
                    alt="Dr. Rodrigo Borges" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <p className="text-brand-300 text-sm font-bold uppercase tracking-wider mb-1">Especialista em Córnea</p>
                    <h4 className="text-white text-2xl font-bold">Dr. Rodrigo Borges</h4>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. ALERTA DE SINTOMAS - CLEAN MEDICAL */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUpVariant}
             className="text-center mb-16 max-w-3xl mx-auto"
          >
            <p className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-4">Sinais de Alerta</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">Quando procurar um especialista em córnea?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Alterações na córnea podem apresentar diferentes sinais e sintomas. Uma avaliação especializada pode ajudar a identificar a causa e indicar o acompanhamento adequado.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          >
            {SYMPTOMS.map((symp, i) => (
              <motion.div 
                key={i} 
                variants={fadeUpVariant}
                className="flex items-center gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-brand-300 transition-colors"
              >
                <AlertCircle className="text-brand-500 shrink-0" size={20} />
                <span className="text-slate-700 text-sm font-medium">{symp}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-yellow-50/50 border border-yellow-200 p-6 rounded-2xl flex gap-4 items-start shadow-sm"
          >
             <AlertCircle className="text-yellow-600 shrink-0 mt-0.5" size={24} />
             <p className="text-yellow-900 text-sm md:text-base leading-relaxed">
               <strong>Importante:</strong> Os sintomas listados são informativos e não configuram diagnóstico médico ou conclusão automática. Somente uma consulta oftalmológica presencial e exames especializados podem avaliar sua saúde ocular e determinar o plano terapêutico adequado.
             </p>
          </motion.div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-24 px-4 bg-[#0B1120] border-t border-slate-100">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUpVariant}
             className="bg-[#111827] border border-slate-800 rounded-3xl p-10 md:p-20 text-center text-white relative shadow-2xl"
          >
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <div className="inline-block bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-2">
                Primeiro Passo
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white">
                Cuide da saúde da sua córnea
              </h2>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto pb-6">
                Uma avaliação especializada é o primeiro passo para entender suas necessidades e encontrar o acompanhamento mais adequado.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle size={18} />
                  AGENDAR CONSULTA
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUpVariant}
             className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Dúvidas Frequentes</h2>
          </motion.div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 hover:bg-slate-50 transition-colors text-left"
                >
                  <span className="font-bold text-slate-800 text-lg flex items-center gap-4">
                    <HelpCircle className="text-brand-500 shrink-0" size={24}/>
                    {item.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp size={24} className="text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-slate-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 pt-2 text-slate-600 text-lg leading-relaxed border-t border-slate-100"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default RefractivePage;

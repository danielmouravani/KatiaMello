import React, { useEffect } from 'react';
import { ArrowLeft, FileText, Shield, Phone, Mail, Globe, CheckCircle2, AlertTriangle, Scale, Lock } from 'lucide-react';

interface TermsOfUsePageProps {
  onNavigate: (page: 'home' | 'cataract' | 'refractive' | 'exams' | 'oculoplastics' | 'survey' | 'privacy' | 'terms') => void;
}

const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Navigation / Back Button */}
        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium text-sm mb-8 transition-colors group cursor-pointer"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Voltar para a página inicial
        </button>

        {/* Header Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 mb-10 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-5 text-white pointer-events-none">
            <FileText size={240} />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale size={12} />
            Documento Legal
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Termos de Uso
          </h1>
          <p className="text-slate-400 text-sm">
            Última atualização: <span className="text-slate-200 font-medium">07 de agosto de 2026</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 md:p-10 space-y-8 text-slate-300 leading-relaxed shadow-lg">
          
          <p className="text-base md:text-lg text-slate-200 leading-relaxed">
            Estes <strong className="text-white">Termos de Uso</strong> regulam o acesso e a utilização da plataforma desenvolvida pelo <strong className="text-white">Centro Kátia Mello</strong>, destinada à gestão de atendimento, comunicação e relacionamento com clientes por meio da integração com a API Oficial do WhatsApp Business da Meta.
          </p>

          <p className="text-sm md:text-base text-slate-300 bg-slate-800/40 border border-slate-800 p-4 rounded-xl">
            Ao utilizar a plataforma, o usuário declara que leu, compreendeu e concorda com as condições descritas abaixo.
          </p>

          <hr className="border-slate-800" />

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">1</span>
              Objeto
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              A plataforma oferece funcionalidades para:
            </p>
            <ul className="space-y-2 pt-1 text-sm md:text-base">
              {[
                "Gerenciamento de atendimentos;",
                "Envio e recebimento de mensagens via WhatsApp Business;",
                "Automação de confirmações, lembretes e notificações;",
                "Organização de contatos e histórico de conversas;",
                "Apoio à comunicação entre empresas e seus clientes."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-2.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">2</span>
              Elegibilidade
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              O uso da plataforma é permitido apenas a pessoas maiores de 18 anos ou representantes autorizados de empresas e organizações.
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              O usuário declara possuir poderes para utilizar a conta do WhatsApp Business conectada à plataforma.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">3</span>
              Integração com a Plataforma da Meta
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              A plataforma utiliza recursos fornecidos pela Meta Platforms, Inc., incluindo a API Oficial do WhatsApp Business.
            </p>
            <p className="text-sm md:text-base text-slate-300 font-medium">
              O usuário é responsável por:
            </p>
            <ul className="space-y-2 pt-1 text-sm md:text-base">
              {[
                "Manter sua conta do WhatsApp Business em conformidade com as políticas da Meta;",
                "Obter o consentimento necessário para o envio de mensagens;",
                "Respeitar as regras de comunicação aplicáveis ao seu setor de atuação."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-2.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-400 pt-2 bg-slate-800/50 border border-slate-800 p-3.5 rounded-xl">
              O Centro Kátia Mello não é responsável por suspensões, bloqueios ou restrições aplicadas pela Meta em razão do descumprimento de suas políticas.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">4</span>
              Responsabilidades do usuário
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              O usuário compromete-se a:
            </p>
            <ul className="space-y-2 pt-1 text-sm md:text-base">
              {[
                "Fornecer informações verdadeiras e atualizadas;",
                "Proteger suas credenciais de acesso;",
                "Utilizar a plataforma apenas para finalidades lícitas;",
                "Não enviar mensagens em massa sem autorização dos destinatários;",
                "Não utilizar a plataforma para spam, fraude, assédio ou qualquer atividade ilícita."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-2.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">5</span>
              Responsabilidades da plataforma
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              O Centro Kátia Mello compromete-se a:
            </p>
            <ul className="space-y-2 pt-1 text-sm md:text-base">
              {[
                "Disponibilizar a plataforma de forma razoavelmente estável;",
                "Adotar medidas de segurança para proteção dos dados tratados;",
                "Buscar a correção de falhas técnicas identificadas;",
                "Respeitar a legislação aplicável, especialmente a Lei Geral de Proteção de Dados (LGPD)."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-2.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">6</span>
              Disponibilidade do serviço
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Embora sejam empregados esforços para manter a plataforma disponível, poderão ocorrer interrupções por motivos de manutenção, atualização, falhas de infraestrutura, problemas de conectividade ou indisponibilidade de serviços de terceiros, incluindo a Plataforma da Meta.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">7</span>
              Propriedade intelectual
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Todos os direitos relacionados ao software, código-fonte, interface, funcionalidades, marcas, logotipos e demais elementos da plataforma pertencem ao Centro Kátia Mello ou a seus licenciadores.
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              É proibida a reprodução, modificação, distribuição ou engenharia reversa da plataforma sem autorização expressa.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">8</span>
              Limitação de responsabilidade
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              O Centro Kátia Mello não será responsável por:
            </p>
            <ul className="space-y-2 pt-1 text-sm md:text-base">
              {[
                "Perdas decorrentes de informações fornecidas incorretamente pelo usuário;",
                "Indisponibilidade da Plataforma da Meta;",
                "Bloqueios de contas do WhatsApp Business por violação das políticas da Meta;",
                "Danos indiretos, lucros cessantes ou perda de oportunidades comerciais."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-2.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">9</span>
              Proteção de dados
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              O tratamento de dados pessoais é realizado conforme descrito em nossa Política de Privacidade, disponível em:
            </p>
            <div className="pt-1">
              <button
                onClick={() => onNavigate('privacy')}
                className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 underline bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700/80 transition-colors cursor-pointer"
              >
                <Lock size={14} />
                https://www.centrokatiamello.com.br/politica-de-privacidade
              </button>
            </div>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">10</span>
              Alterações dos Termos
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Estes Termos poderão ser atualizados a qualquer momento para refletir alterações legais, regulatórias ou operacionais.
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              A versão vigente estará sempre disponível nesta página.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">11</span>
              Legislação aplicável
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Estes Termos são regidos pelas leis da República Federativa do Brasil, especialmente pelo Código Civil, pelo Código de Defesa do Consumidor, quando aplicável, e pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Fica eleito o foro da Comarca de Duque de Caxias/RJ para dirimir eventuais controvérsias, salvo disposição legal em contrário.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4 pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">12</span>
              Contato
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              Em caso de dúvidas sobre estes Termos de Uso, entre em contato:
            </p>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white">Centro Kátia Mello</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <Globe size={18} className="text-brand-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Website</span>
                    <a href="https://www.centrokatiamello.com.br" target="_blank" rel="noreferrer" className="text-brand-300 hover:text-white transition-colors">
                      www.centrokatiamello.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Mail size={18} className="text-brand-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">E-mail</span>
                    <a href="mailto:setoratendimento@centrokatiamello.com.br" className="text-brand-300 hover:text-white transition-colors">
                      setoratendimento@centrokatiamello.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Phone size={18} className="text-brand-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Telefone</span>
                    <a href="tel:+552133447321" className="text-brand-300 hover:text-white transition-colors">
                      (21) 3344-7321
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Back Button Bottom */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-md cursor-pointer"
          >
            <ArrowLeft size={16} />
            Voltar para a página inicial
          </button>
        </div>

      </div>
    </div>
  );
};

export default TermsOfUsePage;

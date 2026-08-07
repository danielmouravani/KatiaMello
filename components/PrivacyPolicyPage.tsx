import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Phone, Mail, Globe, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: 'home' | 'cataract' | 'refractive' | 'exams' | 'oculoplastics' | 'survey' | 'privacy') => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
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

        {/* Header Header Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 mb-10 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-5 text-white pointer-events-none">
            <Shield size={240} />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock size={12} />
            Documento Oficial
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Política de Privacidade
          </h1>
          <p className="text-slate-400 text-sm">
            Última atualização: <span className="text-slate-200 font-medium">07 de agosto de 2026</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 md:p-10 space-y-8 text-slate-300 leading-relaxed shadow-lg">
          
          <p className="text-base md:text-lg text-slate-200 leading-relaxed">
            O <strong className="text-white">Centro Kátia Mello</strong> (&quot;nós&quot;, &quot;nosso&quot; ou &quot;empresa&quot;) respeita a privacidade de seus usuários e clientes e está comprometido em proteger os dados pessoais tratados por meio de nossa plataforma e dos serviços oferecidos.
          </p>

          <p className="text-sm md:text-base text-slate-300">
            Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos as informações utilizadas em nosso sistema e em nossas integrações com a Plataforma da Meta, incluindo a API Oficial do WhatsApp Business.
          </p>

          <hr className="border-slate-800" />

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">1</span>
              Informações coletadas
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              Podemos coletar e processar as seguintes informações:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
              {[
                "Nome do usuário",
                "Número de telefone",
                "Mensagens enviadas e recebidas pelo WhatsApp Business",
                "Informações de perfil disponibilizadas pela Plataforma da Meta",
                "Dados necessários para autenticação e utilização da API Oficial do WhatsApp Business",
                "Informações técnicas de acesso, como endereço IP, navegador e registros de utilização do sistema"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm bg-slate-800/50 border border-slate-800 p-3 rounded-xl text-slate-200">
                  <CheckCircle2 size={16} className="text-brand-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">2</span>
              Como utilizamos essas informações
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              As informações são utilizadas para:
            </p>
            <ul className="space-y-2 pt-1 text-sm md:text-base">
              {[
                "Enviar e receber mensagens por meio da API Oficial do WhatsApp Business;",
                "Gerenciar atendimentos realizados através da plataforma;",
                "Registrar o histórico de conversas para consulta pelos usuários autorizados;",
                "Automatizar processos de comunicação, como confirmações de consultas, lembretes, notificações e atendimento automatizado;",
                "Melhorar a qualidade, segurança e desempenho da plataforma;",
                "Cumprir obrigações legais e regulatórias."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-2.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">3</span>
              Compartilhamento de informações
            </h2>
            <p className="text-sm md:text-base font-semibold text-brand-300 bg-brand-500/10 border border-brand-500/20 px-4 py-2.5 rounded-xl inline-block">
              Não comercializamos dados pessoais.
            </p>
            <p className="text-sm md:text-base text-slate-300">
              As informações poderão ser compartilhadas somente quando necessário com:
            </p>
            <ul className="space-y-2 pt-1 text-sm md:text-base">
              {[
                "Meta Platforms, Inc., para utilização da API Oficial do WhatsApp Business;",
                "Prestadores de serviços responsáveis pela hospedagem e infraestrutura da plataforma;",
                "Autoridades competentes, quando exigido por lei."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-2.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">4</span>
              Armazenamento e segurança
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Adotamos medidas técnicas e administrativas adequadas para proteger os dados contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              As informações são armazenadas apenas pelo período necessário para a prestação dos serviços ou para cumprimento de obrigações legais.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">5</span>
              Direitos do titular
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), o titular poderá solicitar:
            </p>
            <ul className="space-y-2 pt-1 text-sm md:text-base">
              {[
                "confirmação da existência de tratamento;",
                "acesso aos dados pessoais;",
                "correção de informações incompletas ou incorretas;",
                "anonimização, bloqueio ou eliminação dos dados quando aplicável;",
                "portabilidade dos dados, quando cabível;",
                "revogação do consentimento, quando aplicável."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-2.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-400 pt-2">
              Solicitações poderão ser realizadas pelos canais de contato indicados nesta política.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">6</span>
              Uso da Plataforma da Meta
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              Nossa plataforma utiliza recursos disponibilizados pela Meta Platforms, Inc., incluindo a API Oficial do WhatsApp Business.
            </p>
            <p className="text-sm md:text-base text-slate-300">
              O tratamento de informações provenientes desses serviços também está sujeito às políticas da Meta, disponíveis em:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href="https://www.facebook.com/privacy/policy/" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-brand-400 hover:text-brand-300 underline break-all bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 transition-colors"
              >
                https://www.facebook.com/privacy/policy/
              </a>
              <a 
                href="https://www.whatsapp.com/legal/privacy-policy" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-brand-400 hover:text-brand-300 underline break-all bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 transition-colors"
              >
                https://www.whatsapp.com/legal/privacy-policy
              </a>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">7</span>
              Cookies e tecnologias semelhantes
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Nosso sistema poderá utilizar cookies e tecnologias semelhantes para manter sessões autenticadas, melhorar a experiência do usuário e garantir o funcionamento adequado da plataforma.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">8</span>
              Alterações desta Política
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Esta Política poderá ser atualizada periodicamente para refletir alterações legais, técnicas ou operacionais.
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              A versão mais recente estará sempre disponível nesta página.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 text-sm font-extrabold">9</span>
              Contato
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados pessoais, entre em contato:
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

export default PrivacyPolicyPage;

import React, { useState, useEffect } from 'react';
import { ClipboardCheck, ArrowRight, ArrowLeft, CheckCircle, Send, Star, MessageSquare, ShieldAlert } from 'lucide-react';

interface SurveyPageProps {
  onNavigate: (page: 'home' | 'cataract' | 'refractive' | 'exams' | 'oculoplastics' | 'survey') => void;
}

const SurveyPage: React.FC<SurveyPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pesquisa de Percepção sobre Catarata - Centro de Saúde Ocular Katia Mello";
  }, []);

  // Form State
  const [q1, setQ1] = useState<string>('');
  const [q2, setQ2] = useState<string[]>([]);
  const [q3, setQ3] = useState<string>('');
  const [q4, setQ4] = useState<string>('');
  const [q5, setQ5] = useState<string>('');
  const [q6, setQ6] = useState<string>('');
  const [q7, setQ7] = useState<string[]>([]);
  const [q8, setQ8] = useState<string>('');
  const [q9, setQ9] = useState<string>('');
  const [q10, setQ10] = useState<number | null>(null);
  const [comment, setComment] = useState<string>('');

  // Status and Submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Validation
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleCheckboxChange = (value: string, currentList: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (currentList.includes(value)) {
      setter(currentList.filter(item => item !== value));
    } else {
      setter([...currentList, value]);
    }
  };

  const validateForm = () => {
    if (!q1) return "Por favor, responda à pergunta 1.";
    if (q2.length === 0) return "Por favor, marque pelo menos uma opção na pergunta 2.";
    if (!q3) return "Por favor, responda à pergunta 3.";
    if (!q4) return "Por favor, responda à pergunta 4.";
    if (!q5) return "Por favor, responda à pergunta 5.";
    if (!q6) return "Por favor, responda à pergunta 6.";
    if (q7.length === 0) return "Por favor, marque pelo menos uma opção na pergunta 7.";
    if (!q8) return "Por favor, responda à pergunta 8.";
    if (!q9) return "Por favor, responda à pergunta 9.";
    if (q10 === null) return "Por favor, atribua uma nota na pergunta 10.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    setErrorMsg(null);

    const error = validateForm();
    if (error) {
      setValidationError(error);
      const element = document.getElementById('error-message-anchor');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setIsSubmitting(true);

    const payload = {
      "1. Voce sabe o que e catarata?": q1,
      "2. Na sua opiniao, catarata pode causar": q2.join(', '),
      "3. Voce acredita que catarata": q3,
      "4. Voce sabia que a cirurgia de catarata costuma ser segura?": q4,
      "5. Realizou consulta oftalmologica nos ultimos 12 meses?": q5,
      "6. Conhece alguem que ja fez cirurgia de catarata?": q6,
      "7. Na sua opiniao, quem tem maior chance de desenvolver?": q7.join(', '),
      "8. Antes desta acao, ja tinha recebido orientacao?": q8,
      "9. Apos receber informacoes da campanha, considera que": q9,
      "10. Nota de utilidade da campanha (0 a 10)": q10,
      "Comentario adicional": comment
    };

    try {
      const response = await fetch("https://formspree.io/f/xdajaljd", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setErrorMsg(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setErrorMsg("Houve um erro no envio. Por favor, tente novamente.");
        }
      }
    } catch (err) {
      setErrorMsg("Falha ao conectar com o servidor. Verifique sua conexão à internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20 animate-fade-in-up font-sans px-4">
      <div className="container mx-auto max-w-2xl">
        
        {/* HEADER BRANDING */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-brand-50 rounded-2xl p-4 shadow-sm border border-brand-100 mb-6 transition-all">
            <ClipboardCheck size={28} className="text-brand-600 animate-pulse" />
            <h1 className="text-xl font-display font-medium text-brand-900">Saúde Catarata</h1>
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
            Pesquisa de Percepção sobre Catarata
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 max-w-lg mx-auto">
            Gostaríamos de contar com sua preciosa contribuição. Suas respostas nos ajudam a propagar mais saúde ocular para toda a comunidade.
          </p>
        </div>

        {/* ERROR SUMMARY */}
        {(validationError || errorMsg) && (
          <div id="error-message-anchor" className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-red-700 animate-pulse">
            <ShieldAlert className="shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-bold text-sm">Atenção:</p>
              <p className="text-sm">{validationError || errorMsg}</p>
            </div>
          </div>
        )}

        {/* COMPRESSION SCREEN FOR SUBMITTED DATA */}
        {submitted ? (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center space-y-6 animate-fade-in-up">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle size={44} className="stroke-2" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900">
              Muito obrigado por participar!
            </h3>
            <p className="text-slate-600 max-w-md mx-auto leading-relaxed text-sm md:text-base">
              Suas respostas foram enviadas com sucesso e são extremamente importantes para nos ajudar a conscientizar e cuidar cada vez melhor do nosso público.
            </p>
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('home')}
                className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                Voltar ao site primordial <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10 space-y-10">
            
            {/* QUESTION 1 */}
            <div className="space-y-4">
              <label className="block text-base font-bold text-slate-800 leading-snug">
                1. Você sabe o que é catarata? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Sim",
                  "Não",
                  "Já ouvi falar, mas não sei explicar"
                ].map((option) => (
                  <label 
                    key={option} 
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      q1 === option ? 'border-brand-500 bg-brand-50/50 text-brand-900 font-medium' : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="q1" 
                      value={option}
                      checked={q1 === option}
                      onChange={() => setQ1(option)}
                      className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* QUESTION 2 */}
            <div className="space-y-4">
              <label className="block text-base font-bold text-slate-800 leading-snug">
                2. Na sua opinião, catarata pode causar: <span className="text-red-500">*</span> <span className="text-xs text-slate-400 font-normal">(Marque quantas quiser)</span>
              </label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Visão embaçada",
                  "Dor intensa constante",
                  "Dificuldade para enxergar à noite",
                  "Não sei"
                ].map((option) => (
                  <label 
                    key={option} 
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      q2.includes(option) ? 'border-brand-500 bg-brand-50/50 text-brand-900 font-medium' : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      value={option}
                      checked={q2.includes(option)}
                      onChange={() => handleCheckboxChange(option, q2, setQ2)}
                      className="w-4 h-4 rounded text-brand-600 border-slate-300 focus:ring-brand-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* QUESTION 3 */}
            <div className="space-y-4">
              <label className="block text-base font-bold text-slate-800 leading-snug">
                3. Você acredita que catarata: <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Tem tratamento",
                  "Não tem tratamento",
                  "Não sei"
                ].map((option) => (
                  <label 
                    key={option} 
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      q3 === option ? 'border-brand-500 bg-brand-50/50 text-brand-900 font-medium' : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="q3" 
                      value={option}
                      checked={q3 === option}
                      onChange={() => setQ3(option)}
                      className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* QUESTION 4 */}
            <div className="space-y-4">
              <label className="block text-base font-bold text-slate-800 leading-snug">
                4. Você sabia que a cirurgia de catarata costuma ser um procedimento seguro e comum? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Sim",
                  "Não"
                ].map((option) => (
                  <label 
                    key={option} 
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      q4 === option ? 'border-brand-500 bg-brand-50/50 text-brand-900 font-medium' : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="q4" 
                      value={option}
                      checked={q4 === option}
                      onChange={() => setQ4(option)}
                      className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* QUESTION 5 */}
            <div className="space-y-4">
              <label className="block text-base font-bold text-slate-800 leading-snug">
                5. Você já realizou consulta oftalmológica nos últimos 12 meses? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Sim",
                  "Não"
                ].map((option) => (
                  <label 
                    key={option} 
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      q5 === option ? 'border-brand-500 bg-brand-50/50 text-brand-900 font-medium' : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="q5" 
                      value={option}
                      checked={q5 === option}
                      onChange={() => setQ5(option)}
                      className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* QUESTION 6 */}
            <div className="space-y-4">
              <label className="block text-base font-bold text-slate-800 leading-snug">
                6. Você conhece alguém que já fez cirurgia de catarata? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Sim",
                  "Não"
                ].map((option) => (
                  <label 
                    key={option} 
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      q6 === option ? 'border-brand-500 bg-brand-50/50 text-brand-900 font-medium' : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="q6" 
                      value={option}
                      checked={q6 === option}
                      onChange={() => setQ6(option)}
                      className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* QUESTION 7 */}
            <div className="space-y-4">
              <label className="block text-base font-bold text-slate-800 leading-snug">
                7. Na sua opinião, quem tem maior chance de desenvolver catarata? <span className="text-red-500">*</span> <span className="text-xs text-slate-400 font-normal">(Marque quantas quiser)</span>
              </label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Pessoas idosas",
                  "Pessoas com diabetes",
                  "Qualquer pessoa",
                  "Não sei"
                ].map((option) => (
                  <label 
                    key={option} 
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      q7.includes(option) ? 'border-brand-500 bg-brand-50/50 text-brand-900 font-medium' : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      value={option}
                      checked={q7.includes(option)}
                      onChange={() => handleCheckboxChange(option, q7, setQ7)}
                      className="w-4 h-4 rounded text-brand-600 border-slate-300 focus:ring-brand-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* QUESTION 8 */}
            <div className="space-y-4">
              <label className="block text-base font-bold text-slate-800 leading-snug">
                8. Antes desta ação, você já tinha recebido orientação sobre catarata? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Sim",
                  "Não"
                ].map((option) => (
                  <label 
                    key={option} 
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      q8 === option ? 'border-brand-500 bg-brand-50/50 text-brand-900 font-medium' : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="q8" 
                      value={option}
                      checked={q8 === option}
                      onChange={() => setQ8(option)}
                      className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* QUESTION 9 */}
            <div className="space-y-4">
              <label className="block text-base font-bold text-slate-800 leading-snug">
                9. Após receber as informações desta campanha, você considera que: <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Aprendi algo novo",
                  "Entendi melhor sobre catarata",
                  "Pretendo cuidar mais da saúde ocular",
                  "Não mudou minha percepção"
                ].map((option) => (
                  <label 
                    key={option} 
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      q9 === option ? 'border-brand-500 bg-brand-50/50 text-brand-900 font-medium' : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="q9" 
                      value={option}
                      checked={q9 === option}
                      onChange={() => setQ9(option)}
                      className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* QUESTION 10 */}
            <div className="space-y-4">
              <label className="block text-base font-bold text-slate-800 leading-snug">
                10. Em uma nota de 0 a 10, quanto esta campanha foi útil? <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap justify-between gap-1 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                {Array.from({ length: 11 }, (_, i) => i).map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setQ10(num)}
                    className={`w-10 h-10 rounded-xl font-bold flex items-center justify-center text-sm transition-all shadow-sm ${
                      q10 === num 
                        ? 'bg-brand-500 text-white scale-110 shadow-brand-500/35' 
                        : 'bg-white text-slate-700 border hover:bg-slate-100'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* COMMENT */}
            <div className="space-y-4">
              <label className="block text-base font-bold text-slate-800 leading-snug flex items-center gap-2">
                <MessageSquare size={18} className="text-slate-400" />
                <span>Espaço para comentário (opcional):</span>
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Deixe suas sugestões, dúvidas ou feedback..."
                rows={4}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all placeholder-slate-400 text-slate-705 text-sm md:text-base resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl text-white font-bold text-base transition-all shadow-lg flex items-center justify-center gap-3 ${
                isSubmitting 
                  ? 'bg-slate-400 cursor-not-allowed shadow-none' 
                  : 'bg-brand-500 hover:bg-brand-600 shadow-brand-500/30'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Enviando Pesquisa...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Enviar Minhas Respostas</span>
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </div>
  );
};

export default SurveyPage;

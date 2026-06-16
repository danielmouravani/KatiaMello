import React, { useState } from 'react';
import { DOCTORS, WHATSAPP_LINK } from '../constants';
import { X, GraduationCap, Award, Checklist, Heart, User } from 'lucide-react';

const DOCTOR_DETAILS: Record<string, {
  fullName: string;
  items: string[];
}> = {
  "Dra. Katia Mello": {
    fullName: "Dra. Katia Mello",
    items: [
      "Formada em medicina pela Universidade Federal do Rio de Janeiro.",
      "MBA em Gestão de Administração em Saúde pela FGV.",
      "Residência médica em Pediatria e pós-graduanda em Oftalmologia Geriátrica.",
      "Fundadora do Centro da Saúde Ocular Kátia Mello."
    ]
  },
  "Dra. Fabia Crespo": {
    fullName: "Dra. Fabia Helena Silva Carvalho Crespo",
    items: [
      "Formada em medicina pela Faculdade de medicina de Valença.",
      "Residência médica em oftalmologia na universidade do Rio de janeiro - Unirio. Hospital gaffree e guinle.",
      "Registrada no quadro de especialistas em Oftalmologia no CREMERJ com registro de RQE.",
      "Diretora médica do centro da saúde ocular Kátia Mello.",
      "Responsável pelo serviço de glaucoma do Centro da Saúde Ocular Kátia Mello.",
      "MBA em gestão de saúde pela Universidade Estácio de Sá.",
      "Coordenadora do serviço de residência médica e da pós graduação em oftalmologia do IBAP (instituto Brasileiro de Assistência e Pesquisa)."
    ]
  }
};

const Team: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<typeof DOCTORS[0] | null>(null);

  const handleOpenDetail = (doctor: typeof DOCTORS[0]) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseDetail = () => {
    setSelectedDoctor(null);
  };

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2">Corpo Clínico</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Especialistas Dedicados</h3>
            <p className="text-slate-600 text-lg">
              Nosso corpo clínico é composto por médicos prontos para lhe atender em todas as áreas clínicas e cirúrgicas da oftalmologia.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-slate-200 rounded-full text-slate-700 font-semibold hover:border-brand-500 hover:text-brand-600 transition-colors inline-flex items-center gap-2"
          >
            Falar com a equipe
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doctor, index) => (
            <div 
              key={index} 
              onClick={() => handleOpenDetail(doctor)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-96 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/25 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-brand-300 text-sm font-medium mb-1">{doctor.specialty}</p>
                <h4 className="text-white text-xl font-bold">{doctor.name}</h4>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                   {doctor.crm && (
                     <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                       CRM {doctor.crm}
                     </p>
                   )}
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       handleOpenDetail(doctor);
                     }}
                     className="mt-3 text-white text-sm font-semibold hover:underline block"
                   >
                     Ver perfil completo
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Detail Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop with elegant blur */}
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity"
            onClick={handleCloseDetail}
          ></div>

          {/* Modal Card */}
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] animate-fade-in-up">
            
            {/* Close Button */}
            <button 
              onClick={handleCloseDetail}
              className="absolute top-4 right-4 z-25 bg-slate-100 hover:bg-slate-200 text-slate-700 p-2.5 rounded-full transition-all border border-slate-200/50 hover:scale-110"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>

            {/* Scrollable Content Container */}
            <div className="overflow-y-auto p-6 md:p-10 space-y-6">
              
              {/* Doctor Quick Header Row */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left border-b border-slate-100 pb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-brand-100">
                  <img 
                    src={selectedDoctor.image} 
                    alt={selectedDoctor.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1.5 pt-2">
                  <span className="inline-block bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {selectedDoctor.specialty}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-950">
                    {DOCTOR_DETAILS[selectedDoctor.name]?.fullName || selectedDoctor.name}
                  </h3>
                  {selectedDoctor.crm && (
                    <p className="text-slate-500 text-sm font-medium">CRM: {selectedDoctor.crm}</p>
                  )}
                </div>
              </div>

              {/* Bio Items list */}
              <div className="space-y-4">
                <h4 className="text-slate-900 font-bold text-lg flex items-center gap-2">
                  <GraduationCap className="text-brand-500" size={22} />
                  <span>Qualificações e Carreira</span>
                </h4>

                {DOCTOR_DETAILS[selectedDoctor.name] ? (
                  <ul className="space-y-3.5">
                    {DOCTOR_DETAILS[selectedDoctor.name].items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0 mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl">
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      Especialista dedicado(a) a proporcionar um atendimento humanizado, preciso e seguro no Centro de Saúde Ocular Katia Mello. Atende diagnósticos, consultas clínicas e acompanhamento cirúrgico com a mais alta tecnologia disponível.
                    </p>
                    <div className="mt-4 flex gap-2 items-center text-xs font-semibold text-brand-600">
                      <Heart size={14} className="fill-brand-100 text-brand-500" />
                      <span>Excelência e acolhimento com mais de 25 anos de tradição</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Booking CTA right in the detail view */}
              <div className="bg-brand-500 text-white rounded-2xl p-5 md:p-6 text-center space-y-3.5 shadow-lg shadow-brand-500/20">
                <p className="font-semibold text-sm md:text-base">
                  Deseja agendar uma consulta com {selectedDoctor.name}?
                </p>
                <div className="flex justify-center">
                  <a 
                    href={`${WHATSAPP_LINK}&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20${encodeURIComponent(selectedDoctor.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-slate-50 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:scale-105 active:scale-100"
                  >
                    Agendar pelo WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Team;
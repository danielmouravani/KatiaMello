import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface FooterProps {
  onNavigate: (page: 'home' | 'cataract' | 'refractive' | 'exams' | 'oculoplastics' | 'survey') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 pt-20 border-t border-slate-800">
      
      <div className="container mx-auto px-4 md:px-6 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center text-white font-bold">K</div>
             <span className="text-white font-display font-bold text-lg">Katia Mello</span>
           </div>
           <p className="text-sm leading-relaxed text-slate-400">
             Cuidando da sua visão com tecnologia de ponta e atendimento humanizado em Duque de Caxias há mais de 25 anos.
           </p>
           <div className="flex gap-4">
             <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-500 hover:text-white transition-colors"><Instagram size={20} /></a>
             <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-500 hover:text-white transition-colors"><Facebook size={20} /></a>
           </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-brand-400 transition-colors">Home</a></li>
            <li><a href="#catarata" className="hover:text-brand-400 transition-colors text-brand-300">Cirurgia de Catarata</a></li>
            <li><a href="#refrativa" className="hover:text-brand-400 transition-colors text-brand-300">Cirurgia Refrativa</a></li>
            <li><a href="#oculoplastica" className="hover:text-brand-400 transition-colors text-brand-300">Oculoplástica</a></li>
            <li><a href="#exames" className="hover:text-brand-400 transition-colors text-brand-300">Exames</a></li>
            <li><a href="#specialties" className="hover:text-brand-400 transition-colors">Especialidades</a></li>
            <li><a href="#partners" className="hover:text-brand-400 transition-colors">Convênios</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contato</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-500 shrink-0 mt-0.5" />
              <span>Av Presidente Vargas, 132<br/>Edificio Fertonani<br/>Centro Duque de Caxias</span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500 shrink-0" />
                <a href="tel:+552133447321" className="hover:text-brand-400 transition-colors">(21) 3344-7321</a>
              </div>
              <div className="flex items-center gap-3 pl-8">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-brand-400 text-brand-300 transition-colors flex items-center gap-1.5">
                  <span>(21) 98744-5823</span>
                  <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded font-bold font-sans uppercase tracking-wider">WhatsApp</span>
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-500 shrink-0" />
              <span>setoratendimento@<br/>centrokatiamello.com.br</span>
            </li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-bold mb-6">Horário de Atendimento</h4>
           <ul className="space-y-3 text-sm">
             <li className="flex items-center justify-between">
               <span className="flex items-center gap-2"><Clock size={16} /> Seg - Sex</span>
               <span className="text-white">08:00 - 18:00</span>
             </li>
             <li className="flex items-center justify-between">
               <span className="flex items-center gap-2"><Clock size={16} /> Sábado</span>
               <span className="text-white">08:00 - 12:00</span>
             </li>
           </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Centro de Saúde Ocular Katia Mello. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
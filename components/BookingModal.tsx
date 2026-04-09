import React from 'react';
import { X, Calendar, MessageCircle, ExternalLink } from 'lucide-react';
import { WHATSAPP_LINK, DOCTORALIA_LINK } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={onClose}
        ></div>
        
        {/* Modal Content */}
        <div className="relative bg-white rounded-3xl p-6 md:p-8 w-full max-w-lg shadow-2xl animate-fade-in-up transform scale-100 transition-all">
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors"
            >
                <X size={20} />
            </button>
            
            <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Como prefere agendar?</h3>
                <p className="text-slate-500">Selecione a opção mais conveniente para você.</p>
            </div>
            
            <div className="grid gap-4">
                {/* Option 1: Doctoralia */}
                <a 
                    href={DOCTORALIA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 hover:border-brand-500 hover:bg-brand-50 transition-all duration-300"
                >
                    <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        <Calendar size={24} />
                    </div>
                    <div className="text-left flex-1">
                        <h4 className="font-bold text-slate-900 group-hover:text-brand-700">Agendar Online</h4>
                        <p className="text-sm text-slate-500">Veja horários disponíveis e agende sozinho agora.</p>
                    </div>
                    <ExternalLink size={18} className="text-slate-300 group-hover:text-brand-500" />
                </a>

                {/* Option 2: WhatsApp */}
                <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 hover:border-[#25D366] hover:bg-green-50 transition-all duration-300"
                >
                    <div className="w-12 h-12 bg-green-100 text-[#25D366] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                        <MessageCircle size={24} />
                    </div>
                    <div className="text-left flex-1">
                        <h4 className="font-bold text-slate-900 group-hover:text-green-700">Agendar no WhatsApp</h4>
                        <p className="text-sm text-slate-500">Fale com nossa equipe de atendimento.</p>
                    </div>
                    <ExternalLink size={18} className="text-slate-300 group-hover:text-[#25D366]" />
                </a>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400">
                    Ao clicar, você será redirecionado para a plataforma escolhida.
                </p>
            </div>
        </div>
    </div>
  );
};

export default BookingModal;
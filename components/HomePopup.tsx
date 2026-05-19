
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const HomePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('hasSeenHomePopup');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenHomePopup', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closePopup}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Image / Link */}
        <a 
          href="https://wa.me/5521987445823?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20para%20campanha%20de%20R%24130%20reais"
          target="_blank"
          rel="noreferrer"
          className="relative block aspect-auto cursor-pointer"
          onClick={closePopup}
        >
          <img 
            src="https://res.cloudinary.com/dm2aqydrq/image/upload/v1779188924/rxujrjogihkilogpau5p.png" 
            alt="Comunicado" 
            className="w-full h-auto object-contain max-h-[85vh]"
          />
        </a>
      </div>
    </div>
  );
};

export default HomePopup;

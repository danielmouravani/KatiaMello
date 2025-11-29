import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="md:w-1/3">
                 <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2">Estrutura</h2>
                 <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Conforto e Tecnologia</h3>
                 <p className="text-slate-600 mb-6">
                     Um ambiente projetado para oferecer bem-estar e segurança durante todo o seu atendimento.
                 </p>
                 <a href="#footer" className="text-brand-600 font-bold hover:underline">
                     Visite nossa unidade
                 </a>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-12 gap-4 h-96 w-full">
                <div className="col-span-8 row-span-2 rounded-2xl overflow-hidden shadow-lg relative group">
                    <img src="https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/whatsapp-image-2025-04-10-at-12.26.12-2-m6LZvBnB6asgLZqa.jpeg" alt="Estrutura da Clínica Principal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="col-span-4 row-span-1 rounded-2xl overflow-hidden shadow-lg relative group">
                    <img src="https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/whatsapp-image-2025-04-10-at-12.26.12-1-d951pxJxqWi2aJ82.jpeg" alt="Equipamentos Modernos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="col-span-4 row-span-1 rounded-2xl overflow-hidden shadow-lg relative group">
                    <img src="https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/whatsapp-image-2025-04-10-at-12.26.12-4-YX4lPR3q9nIRWwxY.jpeg" alt="Ambiente Confortável" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
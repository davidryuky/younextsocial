import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-200 relative">
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-700 to-transparent"></div>
      <div className="container mx-auto px-6 py-8 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} YouNextSocial. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Construindo sua presença online, um seguidor de cada vez.</p>
      </div>
    </footer>
  );
};
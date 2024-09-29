import React from 'react';

export const Header = () => (
  <header className="flex justify-between max-w-[1366px] mx-auto px-20 py-10">
    <div>
      <p className="font-bold text-white text-text1 opacity-70 hover:opacity-100">Home</p>
    </div>

    <div className="flex gap-10">
      <p className="text-white text-text1 opacity-70 hover:opacity-100">Sobre</p>
      <p className="text-white text-text1 opacity-70 hover:opacity-100">Experiências</p>
      <p className="text-white text-text1 opacity-70 hover:opacity-100">Projetos</p>
      <p className="text-white text-text1 opacity-70 hover:opacity-100">Contato</p>
    </div>
  </header>
);

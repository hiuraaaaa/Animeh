import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { UI_TEXT } from '../../config/settings';

const BackButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="mb-6 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 flex items-center gap-2 backdrop-blur-sm hover:scale-105"
    >
      <ArrowLeft size={20} />
      {UI_TEXT.buttons.back}
    </button>
  );
};

export default BackButton;

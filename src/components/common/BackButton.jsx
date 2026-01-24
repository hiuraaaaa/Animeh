import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { UI_TEXT } from '../../config/settings';

const BackButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="mb-8 btn-solid bg-white text-gray-900 px-6 py-3 flex items-center gap-3 group"
    >
      <ArrowLeft 
        size={18} 
        className="transition-transform duration-300 group-hover:-translate-x-1" 
      />
      <span>{UI_TEXT.buttons.back}</span>
    </button>
  );
};

export default BackButton;

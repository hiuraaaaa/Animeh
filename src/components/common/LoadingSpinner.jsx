import React from 'react';
import { UI_TEXT } from '../../config/settings';

const LoadingSpinner = ({ message = UI_TEXT.loading.default }) => {
  return (
    <div className="text-white text-center py-20 animate-fade-in">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-main mb-4"></div>
      <p className="text-xl text-gray-300">{message}</p>
    </div>
  );
};

export default LoadingSpinner;

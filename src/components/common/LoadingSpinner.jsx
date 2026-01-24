import React from 'react';
import { UI_TEXT } from '../../config/settings';

const LoadingSpinner = ({ message = UI_TEXT.loading.default }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Industrial Spinner */}
        <div className="inline-flex items-center justify-center mb-6">
          {/* Outer square border */}
          <div className="relative w-20 h-20 border-2 border-gray-800 bg-white">
            {/* Corner dots */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
            
            {/* Rotating inner circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          </div>
        </div>

        {/* Loading Message */}
        <p className="text-sm font-bold uppercase tracking-widest text-gray-800">
          {message}
        </p>
        
        {/* Loading Dots Animation */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-2 h-2 bg-gray-800 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-2 h-2 bg-gray-800 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-2 h-2 bg-gray-800 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

import React from 'react';
import { SITE_CONFIG } from '../../config/settings';

const Preloader = () => {
  return (
    <div className="page-loader">
      <div className="text-center">
        {/* Industrial Logo Box */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center">
            {/* Logo Container with Industrial Border */}
            <div className="relative border-2 border-dashed border-gray-400 bg-white p-8">
              {/* Corner Dots */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
              
              {/* Logo Text */}
              <div className="text-center">
                <h1 className="text-4xl font-bold uppercase tracking-tighter text-gray-900 mb-1">
                  {SITE_CONFIG.logo.icon && (
                    <span className="mr-2">{SITE_CONFIG.logo.icon}</span>
                  )}
                  {SITE_CONFIG.preloader.siteName}
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  {SITE_CONFIG.preloader.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Spinner */}
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16 border-2 border-gray-800 bg-white">
            {/* Corner dots */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
            
            {/* Rotating circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-xs font-bold uppercase tracking-widest text-gray-800">
          Loading
        </p>

        {/* Bouncing Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-2 h-2 bg-gray-800 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-2 h-2 bg-gray-800 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-2 h-2 bg-gray-800 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

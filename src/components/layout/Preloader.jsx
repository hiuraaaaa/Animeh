import React from 'react';
import { SITE_CONFIG } from '../../config/settings';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0a0e1a] via-[#1a2332] to-[#0f1419]">
      <div className="text-center">
        <div className="mb-8 animate-pulse-slow">
          <h1 className="text-6xl font-bold text-white mb-2">
            <span className="text-secondary-main">{SITE_CONFIG.logo.icon}</span>{' '}
            {SITE_CONFIG.preloader.siteName}
          </h1>
          <p className="text-gray-400 text-lg">{SITE_CONFIG.preloader.tagline}</p>
        </div>
        
        {/* Spinner */}
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-main"></div>
      </div>
    </div>
  );
};

export default Preloader;

import React from 'react';
import { SITE_CONFIG } from '../../config/settings';

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-800 mt-20">
      <div className="container mx-auto px-6 lg:px-10 py-12">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-tighter text-gray-900 mb-1">
              {SITE_CONFIG.siteName}
            </h3>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">
              {SITE_CONFIG.footer.text}
            </p>
          </div>

          {/* Industrial Decoration */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-16 h-0.5 bg-gray-800"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-16 h-0.5 bg-gray-800"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              © {SITE_CONFIG.footer.year} • All Rights Reserved
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Tech Badge */}
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 bg-gray-800 border-2 border-gray-900">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white">
                  Powered by React
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-[10px] font-semibold uppercase tracking-wide text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy
              </a>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <a 
                href="#" 
                className="text-[10px] font-semibold uppercase tracking-wide text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms
              </a>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <a 
                href="#" 
                className="text-[10px] font-semibold uppercase tracking-wide text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

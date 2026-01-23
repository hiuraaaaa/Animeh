import React from 'react';
import { SITE_CONFIG } from '../../config/settings';

const Footer = () => {
  return (
    <footer className="bg-[#0f1419] border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © {SITE_CONFIG.footer.year} {SITE_CONFIG.siteName}
          </p>
          <p className="text-gray-500 text-sm">
            {SITE_CONFIG.footer.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

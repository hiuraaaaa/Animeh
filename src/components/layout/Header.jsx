import React from 'react';
import { Home, Clock, TrendingUp } from 'lucide-react';
import { SITE_CONFIG, UI_TEXT, ROUTES } from '../../config/settings';
import SearchBar from '../common/SearchBar';

const Header = ({ onNavigate, onSearch }) => {
  const navItems = [
    { route: ROUTES.HOME, icon: Home, label: UI_TEXT.nav.home },
    { route: ROUTES.LATEST, icon: Clock, label: UI_TEXT.nav.latest },
    { route: ROUTES.POPULAR, icon: TrendingUp, label: UI_TEXT.nav.popular }
  ];

  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 shadow-lg sticky top-0 z-40 backdrop-blur-glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <h1 className="text-3xl font-bold text-white flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(ROUTES.HOME)}>
            <span className="text-secondary-main">{SITE_CONFIG.logo.icon}</span>
            <span>{SITE_CONFIG.logo.text.replace(SITE_CONFIG.logo.highlight, '')}</span>
            <span className="text-secondary-main">{SITE_CONFIG.logo.highlight}</span>
          </h1>
          <nav className="flex gap-4">
            {navItems.map(({ route, icon: Icon, label }) => (
              <button
                key={route}
                onClick={() => onNavigate(route)}
                className="text-white hover:text-secondary-main transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Icon size={20} />
                <span className="hidden md:inline">{label}</span>
              </button>
            ))}
          </nav>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;

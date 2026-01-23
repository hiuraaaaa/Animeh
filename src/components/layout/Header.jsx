import React from 'react';
import { Home, Clock, TrendingUp, Menu, X } from 'lucide-react';
import { SITE_CONFIG, UI_TEXT, ROUTES } from '../../config/settings';
import SearchBar from '../common/SearchBar';

const Header = ({ onNavigate, onSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { route: ROUTES.HOME, icon: Home, label: UI_TEXT.nav.home },
    { route: ROUTES.LATEST, icon: Clock, label: UI_TEXT.nav.latest },
    { route: ROUTES.POPULAR, icon: TrendingUp, label: UI_TEXT.nav.popular }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('noscroll');
  };

  const handleNavClick = (route) => {
    onNavigate(route);
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-gray-800 shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto px-6 lg:px-10">
          {/* Top Bar */}
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <h1 
              className="text-white font-bold tracking-tighter uppercase text-sm cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleNavClick(ROUTES.HOME)}
            >
              {SITE_CONFIG.logo.text.replace(SITE_CONFIG.logo.highlight, '')}
              <span className="text-gray-400">{SITE_CONFIG.logo.highlight}</span>
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map(({ route, icon: Icon, label }) => (
                <button
                  key={route}
                  onClick={() => handleNavClick(route)}
                  className="text-white hover:text-gray-300 transition-all text-xs font-semibold uppercase tracking-wide flex items-center gap-2"
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center bg-white bg-opacity-10 rounded-lg hover:bg-opacity-15 transition-all"
            >
              {mobileMenuOpen ? (
                <X size={20} className="text-white" />
              ) : (
                <Menu size={20} className="text-white" />
              )}
            </button>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block pb-4">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-16 right-0 w-80 h-[calc(100vh-4rem)] bg-white shadow-xl z-40 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Navigation Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-100">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
              <Menu size={18} className="text-white" />
            </div>
            <div>
              <span className="text-sm font-bold text-gray-900 uppercase tracking-tight block">Navigation</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider">Anime Hub</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2 mb-6">
            {navItems.map(({ route, icon: Icon, label }, index) => (
              <button
                key={route}
                onClick={() => handleNavClick(route)}
                className={`w-full flex items-center gap-4 px-4 py-4 text-gray-700 hover:bg-gray-50 font-semibold text-sm uppercase tracking-wide rounded-lg transition-all hover:shadow-sm ${
                  index === 0 ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  index === 0 ? 'bg-white bg-opacity-20' : 'bg-gray-100'
                }`}>
                  <Icon size={16} className={index === 0 ? 'text-white' : 'text-gray-600'} />
                </div>
                <span>{label}</span>
              </button>
            ))}
          </nav>

          {/* Search Bar - Mobile */}
          <div className="mt-6 pt-6 border-t-2 border-gray-100">
            <SearchBar onSearch={(query) => {
              onSearch(query);
              toggleMobileMenu();
            }} />
          </div>

          {/* Footer Info */}
          <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-700">Quick Info</span>
            </div>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Stream your favorite anime series with high quality and fast loading times.
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-28"></div>
    </>
  );
};

export default Header;

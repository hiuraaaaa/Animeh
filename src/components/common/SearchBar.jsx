import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { UI_TEXT } from '../../config/settings';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="flex gap-2">
      <div className="flex-1 relative">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
          size={20} 
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={UI_TEXT.search.placeholder}
          className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-main transition-all duration-300"
        />
      </div>
      <button 
        onClick={handleSubmit}
        className="px-6 py-2 bg-secondary-main hover:bg-secondary-hover text-white rounded-lg transition-all duration-300 font-semibold hover:scale-105"
      >
        {UI_TEXT.search.button}
      </button>
    </div>
  );
};

export default SearchBar;

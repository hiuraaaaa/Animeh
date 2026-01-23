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
    <div className="flex gap-3">
      <div className="flex-1 relative">
        <Search 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
          size={18} 
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={UI_TEXT.search.placeholder}
          className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-300 text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-gray-800 transition-all duration-200"
        />
      </div>
      <button 
        onClick={handleSubmit}
        className="btn-solid bg-gray-800 text-white px-6 py-3 flex items-center gap-2 hover:bg-gray-900"
      >
        <Search size={16} />
        <span className="hidden sm:inline">{UI_TEXT.search.button}</span>
      </button>
    </div>
  );
};

export default SearchBar;

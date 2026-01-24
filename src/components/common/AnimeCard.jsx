import React from 'react';

const AnimeCard = ({ anime, onClick }) => {
  return (
    <div 
      onClick={() => onClick(anime.slug)}
      className="card-industrial cursor-pointer group bg-white"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={anime.poster} 
          alt={anime.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Episode Badge - Top Right */}
        <div className="absolute top-3 right-3">
          <span className="text-[9px] font-bold uppercase tracking-widest bg-gray-900 bg-opacity-90 text-white px-3 py-1.5 border border-white">
            {anime.episode_info}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <div className="w-12 h-12 bg-white border-2 border-gray-900 flex items-center justify-center">
              <svg 
                className="w-6 h-6 text-gray-900" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="p-4 border-t-2 border-gray-800">
        <h3 className="text-gray-900 font-bold text-xs uppercase tracking-wide line-clamp-2 leading-relaxed">
          {anime.title}
        </h3>
      </div>
    </div>
  );
};

export default AnimeCard;

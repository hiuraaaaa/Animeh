import React from 'react';

const AnimeCard = ({ anime, onClick }) => {
  return (
    <div 
      onClick={() => onClick(anime.slug)}
      className="bg-white/5 rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary-main/50 backdrop-blur-sm"
    >
      <div className="relative aspect-[3/4]">
        <img 
          src={anime.poster} 
          alt={anime.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
          <p className="text-secondary-main text-sm font-semibold">
            {anime.episode_info}
          </p>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm line-clamp-2 hover:text-secondary-main transition-colors duration-300">
          {anime.title}
        </h3>
      </div>
    </div>
  );
};

export default AnimeCard;

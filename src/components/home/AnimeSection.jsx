import React from 'react';
import AnimeCard from '../common/AnimeCard';

const AnimeSection = ({ title, icon, animeList, onAnimeClick }) => {
  return (
    <section className="mb-16 animate-slide-up">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        {/* Icon */}
        <div className="w-10 h-10 bg-gray-800 flex items-center justify-center border-2 border-gray-900">
          <span className="text-xl">{icon}</span>
        </div>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tight">
          {title}
        </h2>
        
        {/* Industrial Line */}
        <div className="flex-1 h-0.5 bg-gray-800"></div>
        
        {/* End Dot */}
        <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
      </div>

      {/* Anime Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {animeList.map(anime => (
          <AnimeCard 
            key={anime.slug} 
            anime={anime} 
            onClick={onAnimeClick} 
          />
        ))}
      </div>
    </section>
  );
};

export default AnimeSection;

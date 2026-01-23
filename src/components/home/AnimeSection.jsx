import React from 'react';
import AnimeCard from '../common/AnimeCard';

const AnimeSection = ({ title, icon, animeList, onAnimeClick }) => {
  return (
    <section className="mb-12 animate-slide-up">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-secondary-main">{icon}</span>
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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

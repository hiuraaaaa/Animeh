import React from 'react';
import { animeApi } from '../services/api';
import { useAnimeData } from '../hooks/useAnimeData';
import { UI_TEXT } from '../config/settings';
import BackButton from '../components/common/BackButton';
import AnimeCard from '../components/common/AnimeCard';
import LoadingSpinner from '../components/common/LoadingSpinner';

const SearchPage = ({ query, onBack, onNavigateToDetail }) => {
  const { data, loading } = useAnimeData(animeApi.search, query);

  if (loading) return <LoadingSpinner message={UI_TEXT.loading.search} />;

  return (
    <div>
      <BackButton onClick={onBack} />
      <section className="animate-slide-up">
        <h2 className="text-3xl font-bold text-white mb-6">
          {UI_TEXT.search.resultsFor} "{query}"
        </h2>
        
        {data && data.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {data.map(anime => (
              <AnimeCard 
                key={anime.slug} 
                anime={anime} 
                onClick={onNavigateToDetail} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">{UI_TEXT.search.noResults}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default SearchPage;

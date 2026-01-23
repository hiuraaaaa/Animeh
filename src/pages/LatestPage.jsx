import React from 'react';
import { animeApi } from '../services/api';
import { useAnimeData } from '../hooks/useAnimeData';
import { UI_TEXT } from '../config/settings';
import BackButton from '../components/common/BackButton';
import AnimeCard from '../components/common/AnimeCard';
import LoadingSpinner from '../components/common/LoadingSpinner';

const LatestPage = ({ onBack, onNavigateToDetail }) => {
  const { data, loading } = useAnimeData(animeApi.getLatest, 1);

  if (loading) return <LoadingSpinner message={UI_TEXT.loading.anime} />;

  return (
    <div>
      <BackButton onClick={onBack} />
      <section className="animate-slide-up">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-secondary-main">🕒</span>
          {UI_TEXT.sections.latest}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data && data.map(anime => (
            <AnimeCard 
              key={anime.slug} 
              anime={anime} 
              onClick={onNavigateToDetail} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LatestPage;

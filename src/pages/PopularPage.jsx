import React from 'react';
import { animeApi } from '../services/api';
import { useAnimeData } from '../hooks/useAnimeData';
import { UI_TEXT } from '../config/settings';
import BackButton from '../components/common/BackButton';
import AnimeCard from '../components/common/AnimeCard';
import LoadingSpinner from '../components/common/LoadingSpinner';

const PopularPage = ({ onBack, onNavigateToDetail }) => {
  const { data, loading } = useAnimeData(animeApi.getPopular, 1);

  if (loading) return <LoadingSpinner message={UI_TEXT.loading.anime} />;

  return (
    <div className="container mx-auto px-6 lg:px-10 py-8">
      <BackButton onClick={onBack} />
      
      <section className="animate-slide-up">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          {/* Icon */}
          <div className="w-10 h-10 bg-gray-800 flex items-center justify-center border-2 border-gray-900">
            <span className="text-xl">⭐</span>
          </div>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tight">
            {UI_TEXT.sections.popular}
          </h2>
          
          {/* Industrial Line */}
          <div className="flex-1 h-0.5 bg-gray-800"></div>
          
          {/* Count Badge */}
          <div className="px-3 py-1.5 bg-gray-800 border-2 border-gray-900">
            <span className="text-[9px] font-bold uppercase tracking-widest text-white">
              {data ? data.length : 0} {data && data.length === 1 ? 'Anime' : 'Anime'}
            </span>
          </div>
        </div>

        {/* Anime Grid */}
        {data && data.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {data.map(anime => (
              <AnimeCard 
                key={anime.slug} 
                anime={anime} 
                onClick={onNavigateToDetail} 
              />
            ))}
          </div>
        ) : (
          // Empty State
          <div className="industrial-banner bg-white p-12 text-center">
            <div className="dot -top-1.5 -left-1.5"></div>
            <div className="dot -top-1.5 -right-1.5"></div>
            <div className="dot -bottom-1.5 -left-1.5"></div>
            <div className="dot -bottom-1.5 -right-1.5"></div>
            
            <div className="text-6xl mb-4">⭐</div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-gray-900 mb-2">
              No Popular Anime
            </h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Popular anime will appear here
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default PopularPage;

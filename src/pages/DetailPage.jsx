import React from 'react';
import { animeApi } from '../services/api';
import { useAnimeData } from '../hooks/useAnimeData';
import { UI_TEXT } from '../config/settings';
import BackButton from '../components/common/BackButton';
import EpisodeGrid from '../components/detail/EpisodeGrid';
import AnimeCard from '../components/common/AnimeCard';
import LoadingSpinner from '../components/common/LoadingSpinner';

const DetailPage = ({ slug, onBack, onWatch }) => {
  const { data, loading } = useAnimeData(animeApi.getDetail, slug);

  if (loading) return <LoadingSpinner message={UI_TEXT.loading.anime} />;
  if (!data) return null;

  return (
    <div className="container mx-auto px-6 lg:px-10 py-8">
      <BackButton onClick={onBack} />

      {/* Anime Detail Section */}
      <div className="industrial-banner mb-12 animate-slide-up bg-white p-8 md:p-12">
        {/* Corner Dots */}
        <div className="dot -top-1.5 -left-1.5"></div>
        <div className="dot -top-1.5 -right-1.5"></div>
        <div className="dot -bottom-1.5 -left-1.5"></div>
        <div className="dot -bottom-1.5 -right-1.5"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="md:col-span-1">
            <div className="border-2 border-gray-800 overflow-hidden">
              <img 
                src={data.poster} 
                alt={data.title}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight leading-tight">
              {data.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {data.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 bg-gray-800 border-2 border-gray-900 text-white text-[10px] font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Synopsis */}
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-gray-800"></div>
                Synopsis
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {data.synopsis}
              </p>
            </div>

            {/* Info Box */}
            <div className="border-2 border-gray-800 bg-gray-50 p-6">
              <div className="grid grid-cols-2 gap-4">
                {/* Total Episodes */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-2">
                    {UI_TEXT.detail.totalEpisodes}
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    {data.total_episodes}
                  </span>
                </div>

                {/* Status Badge */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-2">
                    Status
                  </span>
                  <div className="inline-block px-3 py-1.5 bg-gray-800 border-2 border-gray-900">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white">
                      {data.status || 'Ongoing'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Episodes Section */}
      <EpisodeGrid episodes={data.episodes} onEpisodeClick={onWatch} />

      {/* Recommendations Section */}
      {data.recommendations && data.recommendations.length > 0 && (
        <section className="mt-16 animate-slide-up">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            {/* Icon */}
            <div className="w-10 h-10 bg-gray-800 flex items-center justify-center border-2 border-gray-900">
              <span className="text-xl">💡</span>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tight">
              {UI_TEXT.sections.recommendations}
            </h2>
            
            {/* Industrial Line */}
            <div className="flex-1 h-0.5 bg-gray-800"></div>
            
            {/* End Dot */}
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
          </div>

          {/* Recommendations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {data.recommendations.map(anime => (
              <AnimeCard 
                key={anime.slug} 
                anime={anime} 
                onClick={() => onWatch(anime.slug, '1')} 
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default DetailPage;

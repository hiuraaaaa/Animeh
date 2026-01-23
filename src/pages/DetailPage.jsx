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
    <div>
      <BackButton onClick={onBack} />

      <div className="grid md:grid-cols-3 gap-8 mb-12 animate-slide-up">
        <div className="md:col-span-1">
          <img 
            src={data.poster} 
            alt={data.title}
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-white mb-4">{data.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {data.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-secondary-main/20 text-secondary-main rounded-full text-sm backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">{data.synopsis}</p>
          <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-white">
              <span className="font-semibold text-secondary-main">{UI_TEXT.detail.totalEpisodes}:</span>{' '}
              {data.total_episodes}
            </p>
          </div>
        </div>
      </div>

      <EpisodeGrid episodes={data.episodes} onEpisodeClick={onWatch} />

      {data.recommendations && data.recommendations.length > 0 && (
        <section className="mt-12 animate-slide-up">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-secondary-main">💡</span>
            {UI_TEXT.sections.recommendations}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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

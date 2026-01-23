import React from 'react';
import { animeApi } from '../services/api';
import { useAnimeData } from '../hooks/useAnimeData';
import { UI_TEXT } from '../config/settings';
import BackButton from '../components/common/BackButton';
import VideoPlayer from '../components/player/VideoPlayer';
import LoadingSpinner from '../components/common/LoadingSpinner';

const WatchPage = ({ slug, episodeIndex, onBack }) => {
  const { data, loading } = useAnimeData(animeApi.getEpisode, slug, episodeIndex);

  if (loading) return <LoadingSpinner message={UI_TEXT.loading.video} />;
  if (!data) return null;

  return (
    <div>
      <BackButton onClick={onBack} />

      <h1 className="text-3xl font-bold text-white mb-6 animate-slide-up">{data.title}</h1>
      
      <VideoPlayer videos={data.videos} poster={data.poster} />

      <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm animate-slide-up">
        <h3 className="text-xl font-semibold text-white mb-2">
          {UI_TEXT.player.episode} {data.episode}
        </h3>
        <p className="text-gray-400">{UI_TEXT.player.enjoy}</p>
      </div>
    </div>
  );
};

export default WatchPage;

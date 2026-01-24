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
    <div className="container mx-auto px-6 lg:px-10 py-8">
      <BackButton onClick={onBack} />

      {/* Title Section */}
      <div className="mb-8 animate-slide-up">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-1 h-8 bg-gray-800"></div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tight">
            {data.title}
          </h1>
        </div>
        <div className="ml-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            {UI_TEXT.player.episode} {data.episode}
          </span>
        </div>
      </div>

      {/* Video Player */}
      <VideoPlayer videos={data.videos} poster={data.poster} />

      {/* Episode Info Box */}
      <div className="industrial-banner bg-white p-6 animate-slide-up">
        {/* Corner Dots */}
        <div className="dot -top-1.5 -left-1.5"></div>
        <div className="dot -top-1.5 -right-1.5"></div>
        <div className="dot -bottom-1.5 -left-1.5"></div>
        <div className="dot -bottom-1.5 -right-1.5"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Left: Episode Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-2">
              {UI_TEXT.player.episode} {data.episode}
            </h3>
            <p className="text-xs text-gray-600 tracking-wide">
              {UI_TEXT.player.enjoy}
            </p>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex gap-3">
            {/* Previous Episode Button */}
            {episodeIndex > 1 && (
              <button 
                onClick={() => onBack(slug, episodeIndex - 1)}
                className="px-4 py-2 border-2 border-gray-800 bg-white text-gray-900 text-xs font-bold uppercase tracking-wide hover:bg-gray-800 hover:text-white transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Previous
              </button>
            )}

            {/* Next Episode Button */}
            <button 
              onClick={() => onBack(slug, episodeIndex + 1)}
              className="btn-solid bg-gray-800 text-white px-4 py-2 flex items-center gap-2"
            >
              Next
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Additional Info (Optional) */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {/* Watch Count */}
        <div className="border-2 border-gray-300 bg-white p-4 hover:border-gray-800 transition-colors">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
            Views
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {data.views || '---'}
          </div>
        </div>

        {/* Release Date */}
        <div className="border-2 border-gray-300 bg-white p-4 hover:border-gray-800 transition-colors">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
            Released
          </div>
          <div className="text-sm font-bold text-gray-900">
            {data.release_date || 'N/A'}
          </div>
        </div>

        {/* Duration */}
        <div className="border-2 border-gray-300 bg-white p-4 hover:border-gray-800 transition-colors">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
            Duration
          </div>
          <div className="text-sm font-bold text-gray-900">
            {data.duration || '~24 min'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;

import React from 'react';
import { UI_TEXT } from '../../config/settings';

const EpisodeGrid = ({ episodes, onEpisodeClick }) => {
  return (
    <section className="animate-slide-up mb-16">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        {/* Icon */}
        <div className="w-10 h-10 bg-gray-800 flex items-center justify-center border-2 border-gray-900">
          <span className="text-xl">📺</span>
        </div>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tight">
          {UI_TEXT.sections.episodes}
        </h2>
        
        {/* Industrial Line */}
        <div className="flex-1 h-0.5 bg-gray-800"></div>
        
        {/* Episode Count Badge */}
        <div className="px-3 py-1.5 bg-gray-800 border-2 border-gray-900">
          <span className="text-[9px] font-bold uppercase tracking-widest text-white">
            {episodes.length} {episodes.length === 1 ? 'Episode' : 'Episodes'}
          </span>
        </div>
      </div>

      {/* Episode Grid */}
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3">
        {episodes.map(ep => (
          <button
            key={ep.index}
            onClick={() => onEpisodeClick(ep.slug, ep.index)}
            className="aspect-square border-2 border-gray-800 bg-white hover:bg-gray-800 text-gray-900 hover:text-white font-bold transition-all duration-200 flex items-center justify-center text-base group relative overflow-hidden"
          >
            {/* Episode Number */}
            <span className="relative z-10 text-sm md:text-base">
              {ep.episode}
            </span>

            {/* Hover Background Animation */}
            <div className="absolute inset-0 bg-gray-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            
            {/* Active Indicator Dot (optional - if episode is watched) */}
            {ep.watched && (
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-500 rounded-full z-20"></div>
            )}
          </button>
        ))}
      </div>

      {/* Helper Text */}
      <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-6 text-center">
        Click an episode to start watching
      </p>
    </section>
  );
};

export default EpisodeGrid;

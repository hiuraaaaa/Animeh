import React from 'react';
import { UI_TEXT } from '../../config/settings';

const EpisodeGrid = ({ episodes, onEpisodeClick }) => {
  return (
    <section className="animate-slide-up">
      <h2 className="text-3xl font-bold text-white mb-6">{UI_TEXT.sections.episodes}</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3">
        {episodes.map(ep => (
          <button
            key={ep.index}
            onClick={() => onEpisodeClick(ep.slug, ep.index)}
            className="aspect-square bg-white/10 hover:bg-secondary-main text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-lg hover:scale-110 backdrop-blur-sm"
          >
            {ep.episode}
          </button>
        ))}
      </div>
    </section>
  );
};

export default EpisodeGrid;

import React from 'react';
import { Play } from 'lucide-react';
import { useSlider } from '../../hooks/useSlider';
import { UI_TEXT } from '../../config/settings';

const HeroSlider = ({ items, onItemClick }) => {
  const { currentIndex, goToSlide } = useSlider(items.length);

  return (
    <div className="relative h-96 rounded-xl overflow-hidden mb-8 shadow-2xl">
      {items.map((item, index) => (
        <div
          key={item.slug}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={item.poster} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8 animate-slide-up">
              <span className="inline-block px-3 py-1 bg-secondary-main text-white text-sm font-semibold rounded-full mb-2">
                {item.episode_info}
              </span>
              <h2 className="text-4xl font-bold text-white mb-4">{item.title}</h2>
              <button 
                onClick={() => onItemClick(item.slug)}
                className="px-6 py-3 bg-secondary-main hover:bg-secondary-hover text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Play size={20} fill="white" />
                {UI_TEXT.buttons.watchNow}
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Dots */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-secondary-main w-8' : 'bg-white/50 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

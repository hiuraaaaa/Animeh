import React from 'react';
import { Play } from 'lucide-react';
import { useSlider } from '../../hooks/useSlider';
import { UI_TEXT } from '../../config/settings';

const HeroSlider = ({ items, onItemClick }) => {
  const { currentIndex, goToSlide } = useSlider(items.length);

  return (
    <div className="industrial-banner mb-12 relative overflow-hidden bg-white">
      {/* Dots in corners */}
      <div className="dot -top-1.5 -left-1.5"></div>
      <div className="dot -top-1.5 -right-1.5"></div>
      <div className="dot -bottom-1.5 -left-1.5"></div>
      <div className="dot -bottom-1.5 -right-1.5"></div>

      {/* Slider Container - 16:9 Aspect Ratio */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {items.map((item, index) => (
          <div
            key={item.slug}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image */}
            <img 
              src={item.poster} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                {/* Episode Badge */}
                <div className="inline-block mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-800 text-white px-4 py-2 border-2 border-white">
                    {item.episode_info}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight max-w-2xl">
                  {item.title}
                </h2>

                {/* Watch Button */}
                <button 
                  onClick={() => onItemClick(item.slug)}
                  className="btn-solid bg-white text-gray-900 px-8 py-4 flex items-center gap-3 group"
                >
                  <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                  <span>{UI_TEXT.buttons.watchNow}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 border border-white ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-transparent w-2 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20 bg-gray-900 bg-opacity-80 px-4 py-2 border-2 border-white">
        <span className="text-white text-xs font-bold tracking-widest uppercase">
          {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default HeroSlider;

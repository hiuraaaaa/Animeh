import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/settings';

export const useSlider = (itemsLength) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (itemsLength <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemsLength);
    }, SITE_CONFIG.features.autoPlayDelay);

    return () => clearInterval(interval);
  }, [itemsLength]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return { currentIndex, goToSlide };
};

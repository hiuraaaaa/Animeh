import React from 'react';
import { animeApi } from '../services/api';
import { useAnimeData } from '../hooks/useAnimeData';
import { UI_TEXT } from '../config/settings';
import HeroSlider from '../components/home/HeroSlider';
import AnimeSection from '../components/home/AnimeSection';
import LoadingSpinner from '../components/common/LoadingSpinner';

const HomePage = ({ onNavigateToDetail }) => {
  const { data, loading } = useAnimeData(animeApi.getHome);

  if (loading) return <LoadingSpinner message={UI_TEXT.loading.anime} />;
  if (!data) return null;

  return (
    <div>
      <HeroSlider items={data.slider} onItemClick={onNavigateToDetail} />
      <AnimeSection 
        title={UI_TEXT.sections.latest}
        icon="🕒"
        animeList={data.latest} 
        onAnimeClick={onNavigateToDetail} 
      />
      <AnimeSection 
        title={UI_TEXT.sections.popular}
        icon="⭐"
        animeList={data.popular} 
        onAnimeClick={onNavigateToDetail} 
      />
    </div>
  );
};


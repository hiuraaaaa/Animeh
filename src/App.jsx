import React, { useState, useEffect } from 'react';
import { ROUTES } from './config/settings';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Preloader from './components/layout/Preloader';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import WatchPage from './pages/WatchPage';
import LatestPage from './pages/LatestPage';
import PopularPage from './pages/PopularPage';
import SearchPage from './pages/SearchPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentRoute, setCurrentRoute] = useState(ROUTES.HOME);
  const [routeParams, setRouteParams] = useState({});

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigate = (route, params = {}) => {
    setCurrentRoute(route);
    setRouteParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentRoute) {
      case ROUTES.HOME:
        return <HomePage onNavigateToDetail={(slug) => navigate(ROUTES.DETAIL, { slug })} />;
      case ROUTES.LATEST:
        return (
          <LatestPage
            onBack={() => navigate(ROUTES.HOME)}
            onNavigateToDetail={(slug) => navigate(ROUTES.DETAIL, { slug })}
          />
        );
      case ROUTES.POPULAR:
        return (
          <PopularPage
            onBack={() => navigate(ROUTES.HOME)}
            onNavigateToDetail={(slug) => navigate(ROUTES.DETAIL, { slug })}
          />
        );
      case ROUTES.DETAIL:
        return (
          <DetailPage
            slug={routeParams.slug}
            onBack={() => navigate(ROUTES.HOME)}
            onWatch={(slug, index) => navigate(ROUTES.WATCH, { slug, index })}
          />
        );
      case ROUTES.WATCH:
        return (
          <WatchPage
            slug={routeParams.slug}
            episodeIndex={routeParams.index}
            onBack={() => navigate(ROUTES.DETAIL, { slug: routeParams.slug })}
          />
        );
      case ROUTES.SEARCH:
        return (
          <SearchPage
            query={routeParams.query}
            onBack={() => navigate(ROUTES.HOME)}
            onNavigateToDetail={(slug) => navigate(ROUTES.DETAIL, { slug })}
          />
        );
      default:
        return <HomePage onNavigateToDetail={(slug) => navigate(ROUTES.DETAIL, { slug })} />;
    }
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#1a2332] to-[#0f1419]">
      <Header
        onNavigate={(route) => navigate(route)}
        onSearch={(query) => navigate(ROUTES.SEARCH, { query })}
      />
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

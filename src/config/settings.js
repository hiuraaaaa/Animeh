export const SITE_CONFIG = {
  siteName: "NeoirLive",
  siteTagline: "Nonton Dracin Gratis",
  siteDescription: "Streaming dracin terbaru dan terpopuler dengan kualitas HD",
  
  logo: {
    text: "NeoirStream",
    highlight: "Stream",
    icon: "▶"
  },
  
  preloader: {
    enabled: true,
    duration: 2000,
    siteName: "NeoirStream",
    tagline: "Loading Your Favorite...",
  },
  
  api: {
    baseUrl: "https://www.sankavollerei.com/anime/drachin",
  },
  
  features: {
    autoPlayDelay: 5000,
  },
  
  footer: {
    text: "Created with ❤️ using Drachin API by Robin",
    year: new Date().getFullYear(),
  },
};

export const ROUTES = {
  HOME: "home",
  LATEST: "latest",
  POPULAR: "popular",
  DETAIL: "detail",
  WATCH: "watch",
  SEARCH: "search"
};

export const UI_TEXT = {
  nav: {
    home: "Home",
    latest: "Latest",
    popular: "Popular",
  },
  
  search: {
    placeholder: "Cari Dracin favorit kamu...",
    button: "Search",
    noResults: "Tidak ada hasil ditemukan",
    resultsFor: "Hasil pencarian untuk"
  },
  
  buttons: {
    back: "Kembali",
    watchNow: "Tonton Sekarang",
    loadMore: "Muat Lebih Banyak"
  },
  
  loading: {
    default: "Loading...",
    anime: "Memuat dracin...",
    video: "Memuat video..."
  },
  
  sections: {
    latest: "Rilis Terbaru",
    popular: "Dracin Populer",
    recommendations: "Rekomendasi",
    episodes: "Episode"
  },
  
  detail: {
    totalEpisodes: "Total Episode",
    synopsis: "Sinopsis",
  },
  
  player: {
    episode: "Episode",
    enjoy: "Selamat menonton!"
  },
};

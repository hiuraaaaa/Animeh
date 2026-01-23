export const SITE_CONFIG = {
  siteName: "AnimeStream",
  siteTagline: "Nonton Anime Gratis",
  siteDescription: "Streaming anime terbaru dan terpopuler dengan kualitas HD",
  
  logo: {
    text: "AnimeStream",
    highlight: "Stream",
    icon: "▶"
  },
  
  preloader: {
    enabled: true,
    duration: 2000,
    siteName: "AnimeStream",
    tagline: "Loading Your Favorite Anime...",
  },
  
  api: {
    baseUrl: "https://www.sankavollerei.com/anime/drachin",
  },
  
  features: {
    autoPlayDelay: 5000,
  },
  
  footer: {
    text: "Created with ❤️ using Drachin API by Sanka Vollerei",
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
    placeholder: "Cari anime favorit kamu...",
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
    anime: "Memuat anime...",
    video: "Memuat video..."
  },
  
  sections: {
    latest: "Rilis Terbaru",
    popular: "Anime Populer",
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

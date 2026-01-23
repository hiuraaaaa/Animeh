import { SITE_CONFIG } from '../config/settings';

const BASE_URL = SITE_CONFIG.api.baseUrl;

export const animeApi = {
  getHome: async () => {
    const response = await fetch(`${BASE_URL}/home`);
    return response.json();
  },

  getLatest: async (page = 1) => {
    const response = await fetch(`${BASE_URL}/latest?page=${page}`);
    return response.json();
  },

  getPopular: async (page = 1) => {
    const response = await fetch(`${BASE_URL}/popular?page=${page}`);
    return response.json();
  },

  search: async (query) => {
    const response = await fetch(`${BASE_URL}/search/${encodeURIComponent(query)}`);
    return response.json();
  },

  getDetail: async (slug) => {
    const response = await fetch(`${BASE_URL}/detail/${slug}`);
    return response.json();
  },

  getEpisode: async (slug, index) => {
    const response = await fetch(`${BASE_URL}/episode/${slug}?index=${index}`);
    return response.json();
  }
};

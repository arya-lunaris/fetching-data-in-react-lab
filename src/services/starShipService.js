import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/starships';

export const getStarships = async (searchTerm = '') => {
  try {
      const response = await axios.get(BASE_URL, {
          params: { search: searchTerm }
      });
      return response;
  } catch (error) {
      console.error('Error fetching starships:', error);
      throw error;
  }
};
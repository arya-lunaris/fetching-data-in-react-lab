import axios from 'axios';

const BASE_URL = 'https://swapi.info/api/starships';

export const getStarships = (searchTerm) => {
  return axios.get(`${BASE_URL}/${searchTerm}`)
};
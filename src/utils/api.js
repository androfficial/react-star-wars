import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const mainAPI = {
  async getPeople(page = 1) {
    try {
      return await instance.get(`people?page=${page}`);
    } catch (error) {
      console.error(`Could not fetch: ${error.message}`);
      return false;
    }
  },
};
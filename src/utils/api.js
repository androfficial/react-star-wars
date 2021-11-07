import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const mainAPI = {
  getPeople: async () => {
    try {
      return await instance.get('people');
    } catch (error) {
      console.error(`Could not fetch: ${error.message}`);
      return false;
    }
  },
};
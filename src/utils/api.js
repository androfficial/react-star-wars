import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const mainAPI = {
  async getPeople(page = 1) {
    try {
      return await instance.get(`people/?page=${page}`);
    } catch (error) {
      console.error(`Could not fetch: ${error.message}`);
      return false;
    }
  },
  async getPerson(id) {
    try {
      const { data } = await instance.get(`people/${id}`);
      const filmsUrl = data.films;

      const films = await Promise.all(
        filmsUrl.map(async (url) => {
          const { data } = await axios.get(url);
          return {
            episodeId: data.episode_id,
            title: data.title,
          };
        }),
      );

      data.films = films;

      return data;
    } catch (error) {
      console.error(`Could not fetch: ${error.message}`);
      return false;
    }
  },
  async getSearchData(value) {
    try {
      return await instance.get(`people/?search=${value}`);
    } catch (error) {
      console.error(`Could not fetch: ${error.message}`);
      return false;
    }
  },
};
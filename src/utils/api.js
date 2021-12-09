import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.py4e.com/',
});

export const mainAPI = {
  async getPeople(page = 1) {
    try {
      const { data } = await instance.get(`people/?page=${page}`);
      console.log(data);

      return {
        data,
      };
    } catch (error) {
      if (error.response) {
        return {
          error: true,
          code: error.response.status,
        };
      }
    }
  },
  async getPerson(id) {
    try {
      const { data } = await instance.get(`people/${id}`);

      data.films = await Promise.all(
        data.films.map(async (url) => {
          const { data } = await axios.get(url);
          return {
            episodeId: data.episode_id,
            title: data.title,
          };
        }),
      );

      return data;
    } catch (error) {
      if (error.response) {
        return {
          error: true,
          code: error.response.status,
        };
      }
    }
  },
  async getSearchData(value) {
    try {
      const { data } = await instance.get(`people/?search=${value}`);

      return {
        data,
      };
    } catch (error) {
      if (error.response) {
        return {
          error: true,
          code: error.response.status,
        };
      }
    }
  },
};
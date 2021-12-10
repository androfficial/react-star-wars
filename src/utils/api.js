import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

const mainAPI = {
  async getPeople(page = 1) {
    try {
      const { data } = await instance.get(`people/?page=${page}`);

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
      return {
        error: true,
      };
    }
  },
  async getPerson(id) {
    try {
      const { data } = await instance.get(`people/${id}`);

      data.films = await Promise.all(
        data.films.map(async (url) => {
          const { data: episodes } = await axios.get(url);
          return {
            episodeId: episodes.episode_id,
            title: episodes.title,
          };
        })
      );

      return data;
    } catch (error) {
      if (error.response) {
        return {
          error: true,
          code: error.response.status,
        };
      }
      return {
        error: true,
      };
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
      return {
        error: true,
      };
    }
  },
};

export default mainAPI;

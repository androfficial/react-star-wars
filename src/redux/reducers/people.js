import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { Types } from '@redux/actions/people';

let initialState = {
  items: [],
  countItems: null,
  person: [],
  errorApi: false,
  prevPage: null,
  currentPage: null,
  nextPage: null,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_PEOPLE: {
      const { count, next: nextPage, previous: prevPage, results: items } = action.payload;

      const peopleList = items.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });

      return {
        ...state,
        items: peopleList,
        countItems: count,
        errorApi: false,
        prevPage: prevPage,
        currentPage: action.page,
        nextPage: nextPage,
      };
    }
    case Types.SET_PERSON: {
      const id = getPeopleId(action.payload.url);
      const img = getPeopleImage(id);

      const filteredPersonInfo = {
        name: action.payload.name,
        image: img,
        films: action.payload.films,
        details: [
          {
            title: 'Height',
            data: action.payload.height,
          },
          {
            title: 'Mass',
            data: action.payload.mass,
          },
          {
            title: 'Hair Color',
            data: action.payload.hair_color,
          },
          {
            title: 'Skin Color',
            data: action.payload.skin_color,
          },
          {
            title: 'Eye Color',
            data: action.payload.eye_color,
          },
          {
            title: 'Birth Year',
            data: action.payload.birth_year,
          },
          {
            title: 'Gender',
            data: action.payload.gender,
          },
        ],
      };

      return {
        ...state,
        person: filteredPersonInfo,
      };
    }
    case Types.SET_ERROR_API:
      return {
        ...state,
        errorApi: action.payload,
      };
    default:
      return state;
  }
};

export default cart;

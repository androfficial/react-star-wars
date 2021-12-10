import { Types } from '@redux/actions/person';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';

const initialState = {
  personInfo: {},
  isLoaded: false,
};

const person = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.SET_PERSON: {
      const id = getPeopleId(action.payload.url);
      const img = getPeopleImage(id);

      const filteredPersonInfo = {
        personId: id,
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
        personInfo: filteredPersonInfo,
        isLoaded: true,
      };
    }
    case Types.SET_ERROR_API:
      return {
        ...state,
        errorApi: action.payload,
      };
    case Types.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default person;

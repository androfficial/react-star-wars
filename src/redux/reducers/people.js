import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { Types } from '@redux/actions/people';

let initialState = {
  items: [],
  errorApi: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_PEOPLE: {
      const peopleList = action.payload.map(({ name, url }) => {
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
        errorApi: false,
      };
    }
    case Types.SET_ERROR_API: 
      return {
        ...state,
        errorApi: action.payload,
      }
    default:
      return state;
  }
};

export default cart;
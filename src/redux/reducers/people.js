import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import { Types } from '../actions/people';

let initialState = {
  items: [],
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
      };
    }
    default:
      return state;
  }
};

export default cart;
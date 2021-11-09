import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { Types } from '@redux/actions/people';

let initialState = {
  items: [],
  countItems: null,
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
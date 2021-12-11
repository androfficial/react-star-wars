import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { Types } from '@redux/actions/people';

const initialState = {
  items: [],
  countItems: null,
  errorApi: false,
  prevPage: null,
  currentPage: null,
  nextPage: null,
  isLoaded: false,
};

const cart = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.SET_PEOPLE: {
      const {
        count,
        next: nextPage,
        previous: prevPage,
        results: items,
      } = action.payload;

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
        prevPage,
        currentPage: action.page,
        nextPage,
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

export default cart;

import { Types } from '@redux/actions/favorites';
import { getLocalStorage } from '@utils/localStorage';

const initialState = getLocalStorage('store');

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_FAVORITES: {
      const newItems = state.items.find((obj) => obj.personId === action.payload.personId)
        ? state.items.filter((obj) => obj.personId !== action.payload.personId)
        : [...state.items, action.payload];

      return {
        ...state,
        items: newItems,
      };
    }
    default:
      return state;
  }
};

export default favorites;
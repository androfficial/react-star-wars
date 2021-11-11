import { mainAPI } from '@utils/api';

export const Types = {
  SET_FAVORITES: 'PEOPLE@SET:FAVORITES',
};

export const setFavorites = (payload) => ({
  type: Types.SET_FAVORITES,
  payload,
});

// export const getPerson = (id) => async (dispatch) => {
//   const data = await mainAPI.getPerson(id);
//   if (data) {
//     dispatch(setPerson(data));
//   } else {
//     dispatch(setErrorApi(true));
//   }
// };
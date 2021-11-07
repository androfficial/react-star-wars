import { mainAPI } from '../../utils/api';

export const Types = {
  SET_PEOPLE: 'PEOPLE@SET:PEOPLE',
};

export const setItems = (payload) => ({
  type: Types.SET_PEOPLE,
  payload,
});

export const getItems = () => async (dispatch) => {
  const { data } = await mainAPI.getPeople();
  dispatch(setItems(data.results));
};
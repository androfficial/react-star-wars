import { mainAPI } from '@utils/api';

export const Types = {
  SET_PEOPLE: 'PEOPLE@SET:PEOPLE',
  SET_ERROR_API: 'PEOPLE@SET:ERROR_API',
};

export const setItems = (payload) => ({
  type: Types.SET_PEOPLE,
  payload,
});

export const setErrorApi = (payload) => ({
  type: Types.SET_ERROR_API,
  payload,
});

export const getItems = () => async (dispatch) => {
  const data = await mainAPI.getPeople();
  if (data) {
    dispatch(setItems(data.data.results));
  } else {
    dispatch(setErrorApi(true));
  }
};
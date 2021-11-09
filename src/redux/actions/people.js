import { mainAPI } from '@utils/api';

export const Types = {
  SET_PEOPLE: 'PEOPLE@SET:PEOPLE',
  SET_ERROR_API: 'PEOPLE@SET:ERROR_API',
  SET_CURRENT_PAGE: 'PEOPLE@SET:CURRENT_PAGE',
};

export const setItems = (page, payload) => ({
  type: Types.SET_PEOPLE,
  page,
  payload,
});

export const setErrorApi = (payload) => ({
  type: Types.SET_ERROR_API,
  payload,
});

export const setCurrentPage = (payload) => ({
  type: Types.SET_CURRENT_PAGE,
  payload,
});

export const getItems = (page) => async (dispatch) => {
  const data = await mainAPI.getPeople(page);
  if (data) {
    dispatch(setItems(page, data.data));
  } else {
    dispatch(setErrorApi(true));
  }
};
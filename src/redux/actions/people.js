import mainAPI from '@utils/api';

export const Types = {
  SET_PEOPLE: 'PEOPLE@SET:PEOPLE',
  SET_ERROR_API: 'PEOPLE@SET:ERROR_API',
  SET_CURRENT_PAGE: 'PEOPLE@SET:CURRENT_PAGE',
  SET_PERSON: 'PEOPLE@SET:PERSON',
  SET_IS_LOADED: 'PEOPLE@SET:IS_LOADED',
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

export const setIsLoaded = (payload) => ({
  type: Types.SET_IS_LOADED,
  payload,
});

export const setCurrentPage = (payload) => ({
  type: Types.SET_CURRENT_PAGE,
  payload,
});

export const getItems = (page) => async (dispatch) => {
  const response = await mainAPI.getPeople(page);
  if (response.code) {
    dispatch(setErrorApi(response));
  } else {
    dispatch(setItems(page, response.data));
  }
};

import { mainAPI } from '@utils/api';

export const Types = {
  SET_PERSON: 'PEOPLE@SET:PERSON',
  SET_IS_LOADED: 'PEOPLE@SET:IS_LOADED',
  SET_ERROR_API: 'PEOPLE@SET:ERROR_API',
};

export const setPerson = (payload) => ({
  type: Types.SET_PERSON,
  payload,
});

export const setIsLoaded = (payload) => ({
  type: Types.SET_IS_LOADED,
  payload,
});

export const setErrorApi = (payload) => ({
  type: Types.SET_ERROR_API,
  payload,
});

export const getPerson = (id) => async (dispatch) => {
  const data = await mainAPI.getPerson(id);
  data ? dispatch(setPerson(data)) : dispatch(setErrorApi(true));
};
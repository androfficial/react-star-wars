import { Constants } from '@constants';

// Проверка протокола: HTTP или HTTPS
const checkProtocol = (url) => {
  if (url.indexOf(Constants.HTTPS) !== -1) {
    return Constants.HTTPS;
  }

  return Constants.HTTP;
};

// Получить ID персонажа с URL
const getId = (url, category) => {
  const protocol = checkProtocol(url);

  const id = url.replace(protocol + Constants.SWAPI_ROOT + category, '').replace(/\//g, '');

  return id;
};

export const getPeopleId = (url) => getId(url, Constants.SWAPI_PEOPLE);

// Получить изображение для персонажа
export const getPeopleImage = (id) =>
  `${Constants.URL_IMG_PERSON}/${id + Constants.GUIDE_IMG_EXTENSION}`;
export const Types = {
  SET_FAVORITES: 'PEOPLE@SET:FAVORITES',
};

export const setFavorites = (payload) => ({
  type: Types.SET_FAVORITES,
  payload,
});
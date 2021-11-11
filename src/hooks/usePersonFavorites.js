import { useSelector } from 'react-redux';

export const usePersonFavorites = (personId) => {
  const items = useSelector(({ favorites }) => favorites.items);

  return items.some((obj) => obj.personId === personId);
};
import { useSelector } from 'react-redux';

export const PersonFavorites = (personId) => {
  const items = useSelector(({ favorites }) => favorites.items);

  return items.some((obj) => obj.personId === personId);
};
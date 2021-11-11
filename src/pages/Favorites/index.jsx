import React from 'react';
import { Link } from 'react-router-dom';

import { Title, Empty } from '@components';

import { useSelector } from 'react-redux';

import s from '@styles/style.module.scss';

const Favorites = () => {
  const items = useSelector(({ favorites }) => favorites.items);

  return (
    <div className={s.my_favorites}>
      <Title text="Your Favorites" />
      {items.length > 0 ? (
        <ul className={s.favorites_list}>
          {items.map(({ personId, name, image }, i) => (
            <li key={`${name}_${i}`} className={s.favorites_item}>
              <Link to={`/people/${personId}`} className={s.favorites_link}>
                <img src={image} alt={name} />
                <p className={s.favorites_name}>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Favorites;
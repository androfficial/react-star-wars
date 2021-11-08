import React from 'react';
import { useLocation } from 'react-router-dom';
import NotFoundImage from '@assets/images/NotFound/not-found.png';

import s from '@styles/style.module.scss';

const NotFound = () => {
  let location = useLocation();

  return (
    <div className={s.not_found}>
      <img src={NotFoundImage} alt="Not Found" />
      <p className={s.not_found_text}>
        No matches for <u>{location.pathname}</u>
      </p>
    </div>
  );
};

export default NotFound;
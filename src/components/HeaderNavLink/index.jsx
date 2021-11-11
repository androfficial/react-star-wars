import React from 'react';
import { NavLink } from 'react-router-dom';

import s from '@styles/style.module.scss';

const HeaderNavLink = ({ path, className, text }) => {
  return (
    <li className={s.item}>
      <NavLink to={path} className={className}>
        {text}
      </NavLink>
    </li>
  );
};

export default HeaderNavLink;
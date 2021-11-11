import React from 'react';

import { useTheme } from '@context/ThemeProvider';

import s from '@styles/style.module.scss';

const Card = ({ theme, image, text }) => {
  const isTheme = useTheme();

  return (
    <li className={s.home_card} onClick={() => isTheme.change(theme)}>
      <img src={image} alt={text} />
      <p className={s.home_text}>{text}</p>
    </li>
  );
};

export default Card;
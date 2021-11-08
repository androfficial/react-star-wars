import React from 'react';
import { Card1, Card2, Card3 } from '@assets/images/Home/';

import s from '@styles/style.module.scss';
import Title from '@components/Title';

const Home = () => {
  return (
    <div className={s.home}>
      <Title text="Choose your side" />
      <ul className={s.home_cards}>
        <li className={s.home_card}>
          <img src={Card1} alt="Card" />
          <p className={s.home_text}>Light Side</p>
        </li>
        <li className={s.home_card}>
          <img src={Card2} alt="Card" />
          <p className={s.home_text}>Dark Side</p>
        </li>
        <li className={s.home_card}>
          <img src={Card3} alt="Card" />
          <p className={s.home_text}>I'm Han Solo</p>
        </li>
      </ul>
    </div>
  );
};

export default Home;
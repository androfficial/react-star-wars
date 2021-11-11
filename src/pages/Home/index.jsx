import React from 'react';

import { Title, Card } from '@components';
import { LightSide, DarkSide, Falcon } from '@assets/images/Home';

import { THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';

import s from '@styles/style.module.scss';

const Home = () => {
  return (
    <div className={s.home}>
      <Title text="Choose your side" />
      <ul className={s.home_cards}>
        <Card theme={THEME_LIGHT} image={LightSide} text="Light Side" />
        <Card theme={THEME_DARK} image={DarkSide} text="Dark Side" />
        <Card theme={THEME_NEITRAL} image={Falcon} text="I'm Han Solo" />
      </ul>
    </div>
  );
};

export default Home;
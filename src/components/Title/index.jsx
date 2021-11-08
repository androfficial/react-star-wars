import React from 'react';

import s from '@styles/style.module.scss';

const Title = ({ text }) => {
  return (
    <div className={s.top}>
      <h1 className={s.title}>{text}</h1>
    </div>
  );
};

export default Title;

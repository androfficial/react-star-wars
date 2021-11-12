import React from 'react'

import s from '@styles/style.module.scss';

const Empty = ({ text }) => {
  return (
    <div className={s.empty}>
      <h3 className={s.empty_title}>{text}</h3>
    </div>
  )
}

export default Empty;
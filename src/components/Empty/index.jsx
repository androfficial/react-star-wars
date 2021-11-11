import React from 'react'

import s from '@styles/style.module.scss';

const Empty = () => {
  return (
    <div className={s.empty}>
      <h3 className={s.empty_title}>You haven't added anyone yet :(</h3>
    </div>
  )
}

export default Empty;
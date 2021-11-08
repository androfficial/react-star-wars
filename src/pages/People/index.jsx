import React from 'react';
import PropTypes from 'prop-types';

import s from '@styles/style.module.scss';

const People = ({ people }) => {
  return (
    <div className={s.people}>
      <ul className={s.people_list}>
        {people &&
          people.map(({ id, name: personName, img }) => (
            <li key={`${id}_${personName}`} className={s.people_item}>
              <a href="/#" className={s.people_link}>
                <img src={img} alt={personName} />
                <p className={s.people_name}>{personName}</p>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

People.propTypes = {
  people: PropTypes.array,
};

export default People;
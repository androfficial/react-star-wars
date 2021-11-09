import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '@components/Navigation';

import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '@redux/actions/people';
import { useQueryParams } from '@hooks/useQueryParams';

import s from '@styles/style.module.scss';

const People = () => {
  let queryPage = useQueryParams().get('page');

  const dispatch = useDispatch();
  const { people, currentPage, prevPage, nextPage } = useSelector(({ people }) => ({
    people: people.items,
    currentPage: people.currentPage,
    prevPage: people.prevPage,
    nextPage: people.nextPage,
  }));

  React.useEffect(() => {
    if (queryPage === null) {
      queryPage = 1;
    }
    dispatch(getItems(+queryPage));
  }, [dispatch, queryPage]);

  return (
    <div className={s.people}>
      <ul className={s.people_list}>
        {people &&
          people.map(({ id, name: personName, img }) => (
            <li key={`${id}_${personName}`} className={s.people_item}>
              <Link to={`/people/${id}`} className={s.people_link}>
                <img src={img} alt={personName} />
                <p className={s.people_name}>{personName}</p>
              </Link>
            </li>
          ))}
      </ul>
      <Navigation
        currentPage={currentPage} 
        prevPage={prevPage} 
        nextPage={nextPage} 
      />
    </div>
  );
};

export default People;
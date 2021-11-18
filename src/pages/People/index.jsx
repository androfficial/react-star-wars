import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Navigation, Preloader } from '@components';

import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '@redux/actions/people';
import { setIsLoaded } from '@redux/actions/people';
import { useQueryParams } from '@hooks/useQueryParams';

import s from '@styles/style.module.scss';

const People = () => {
  let queryPage = useQueryParams().get('page');

  const dispatch = useDispatch();
  const { people, currentPage, prevPage, nextPage, isLoaded } = useSelector(({ people }) => ({
    people: people.items,
    currentPage: people.currentPage,
    prevPage: people.prevPage,
    nextPage: people.nextPage,
    isLoaded: people.isLoaded,
  }));

  useEffect(() => {
    if (queryPage === null) {
      queryPage = 1;
    }
    dispatch(getItems(+queryPage));
    return () => dispatch(setIsLoaded(false));
  }, [dispatch, queryPage]);

  return (
    <>
      {isLoaded ? (
        <div className={s.people}>
          <ul className={s.people_list}>
            {people.map(({ id, name: personName, img }) => (
              <li key={`${id}_${personName}`} className={s.people_item}>
                <Link to={`/people/${id}`} className={s.people_link}>
                  <img src={img} alt={personName} />
                  <p className={s.people_name}>{personName}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Navigation currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} />
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default People;

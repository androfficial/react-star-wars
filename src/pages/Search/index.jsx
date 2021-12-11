import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import mainAPI from '@utils/api';

import { Title, Empty, Preloader } from '@components';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';

import { setErrorApi } from '@redux/actions/people';

import s from '@styles/style.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [value, setValue] = useState('');
  const [people, setPeople] = useState([]);

  const getSearchApi = useCallback(
    async (valueDebounce) => {
      setInProgress(true);
      const res = await mainAPI.getSearchData(valueDebounce);
      if (res.code) {
        setInProgress(false);
        dispatch(setErrorApi(res));
      } else {
        const resPeople = res.data.results;
        const resFilteredPeople = resPeople.map(({ name, url }) => {
          const id = getPeopleId(url);
          const img = getPeopleImage(id);

          return {
            id,
            name,
            image: img,
          };
        });
        setInProgress(false);
        setPeople(resFilteredPeople);

        dispatch(setErrorApi(false));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    (async () => {
      await getSearchApi('');
      setIsLoaded(true);
    })();
    return () => setIsLoaded(false);
  }, [getSearchApi]);

  const debounceGetResp = useCallback(
    debounce((valueDebounce) => getSearchApi(valueDebounce), 400),
    []
  );

  const handleInputChange = (e) => {
    const { value: valueDebounce } = e.target;
    setValue(valueDebounce);

    debounceGetResp(valueDebounce);
  };

  const handleInputClear = () => {
    setValue('');

    getSearchApi('');
  };

  return isLoaded ? (
    <div className={s.search}>
      <Title text='Search' />
      <div className={s.search_wrapper}>
        <input
          onChange={handleInputChange}
          value={value}
          type='text'
          className={s.search_input}
          placeholder="Input character's name"
        />
        {inProgress ? (
          <svg
            className={s.search_in_progress}
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            style={{ shapeRendering: 'auto' }}
            viewBox='0 0 100 100'
            preserveAspectRatio='xMidYMid'
          >
            <path
              d='M10 50A40 40 0 0 0 90 50A40 45 0 0 1 10 50'
              fill='#808080'
              stroke='none'
            >
              <animateTransform
                attributeName='transform'
                type='rotate'
                dur='1s'
                repeatCount='indefinite'
                keyTimes='0;1'
                values='0 50 52.5;360 50 52.5'
              />
            </path>
          </svg>
        ) : (
          <svg
            onClick={handleInputClear}
            className={cn(s.search_svg, !value && s.disabled)}
            viewBox='0 0 492 492'
          >
            <path
              d='M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
            c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
            c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
            L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
            c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
            c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
            c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z'
            />
          </svg>
        )}
      </div>
      {people.length > 0 ? (
        <ul className={s.search_list}>
          {people.map(({ id, name, image }) => (
            <li key={`${name}_${id}`} className={s.search_item}>
              <Link to={`/people/${id}`} className={s.search_link}>
                <img src={image} alt={name} />
                <p className={s.search_name}>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Empty text='No results' />
      )}
    </div>
  ) : (
    <Preloader />
  );
};

export default Search;

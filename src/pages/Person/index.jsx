import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { Button, Preloader } from '@components';

import { getPerson, setIsLoaded } from '@redux/actions/person';
import { setFavorites } from '@redux/actions/favorites';

import { useTheme } from '@context/ThemeProvider';

import s from '@styles/style.module.scss';

const Person = () => {
  const { id } = useParams();
  const { personFavorites } = useTheme();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { personId, name, image, films, details } = useSelector(
    ({ person }) => person.personInfo
  );
  const isLoaded = useSelector(({ person }) => person.isLoaded);

  const onAddToFavorites = () => {
    const obj = {
      personId,
      name,
      image,
    };

    dispatch(setFavorites(obj));
  };

  useEffect(() => {
    dispatch(getPerson(id));
    return () => dispatch(setIsLoaded(false));
  }, [id, dispatch]);

  return isLoaded ? (
    <div className={s.person}>
      <Button onClick={() => navigate(-1)} arrow init>
        Go Back
      </Button>
      <div className={s.person_body}>
        <span className={s.person_name}>{name}</span>
        <div className={s.person_content}>
          <div className={s.person_picture}>
            <button
              onClick={onAddToFavorites}
              className={s.person_button}
              type='button'
            >
              {personFavorites(personId) ? (
                <svg viewBox='0 0 512 512'>
                  <g fill='#ffff00' stroke='#000'>
                    <path d='m135.5 190.667h51.945v-190.667h-92.111c-8.285 0-15 6.716-15 15v120.5c0 30.419 24.747 55.167 55.166 55.167z' />
                    <path d='m256 130.666c14.924 0 28.548 6.36 38.557 17.546v-148.212h-77.111v148.21c10.007-11.185 23.63-17.544 38.554-17.544z' />
                    <path d='m431.666 135.5v-120.5c0-8.284-6.717-15-15-15h-92.109v190.667h51.943c30.418 0 55.166-24.748 55.166-55.167z' />
                    <path d='m431.218 317.732c7.399-7.213 10.102-16.098 7.412-24.376s-10.097-13.878-20.323-15.364l-88.879-12.913c-4.294-.625-10.867-5.4-12.787-9.291l-39.748-80.538c-4.572-9.269-12.188-14.584-20.893-14.584-8.706 0-16.321 5.315-20.893 14.582l-39.75 80.542c-1.918 3.89-8.49 8.664-12.784 9.289l-88.88 12.913c-10.225 1.485-17.633 7.085-20.322 15.362-2.69 8.277.01 17.162 7.41 24.378l64.312 62.691c3.107 3.029 5.617 10.754 4.883 15.031l-15.182 88.52c-1.388 8.098.293 15.457 4.732 20.723 3.971 4.71 9.672 7.304 16.052 7.304 4.265 0 8.645-1.167 13.021-3.468l79.494-41.791c1.385-.728 4.189-1.506 7.905-1.506s6.52.777 7.902 1.505l79.496 41.792c4.377 2.301 8.758 3.468 13.021 3.468 6.381 0 12.08-2.594 16.052-7.304 4.439-5.266 6.12-12.625 4.731-20.724l-15.182-88.518c-.732-4.276 1.778-12.004 4.884-15.032z' />
                  </g>
                </svg>
              ) : (
                <svg viewBox='0 0 512 512'>
                  <g fill='#fff' stroke='#000'>
                    <path d='m135.5 190.667h51.945v-190.667h-92.111c-8.285 0-15 6.716-15 15v120.5c0 30.419 24.747 55.167 55.166 55.167z' />
                    <path d='m256 130.666c14.924 0 28.548 6.36 38.557 17.546v-148.212h-77.111v148.21c10.007-11.185 23.63-17.544 38.554-17.544z' />
                    <path d='m431.666 135.5v-120.5c0-8.284-6.717-15-15-15h-92.109v190.667h51.943c30.418 0 55.166-24.748 55.166-55.167z' />
                    <path d='m431.218 317.732c7.399-7.213 10.102-16.098 7.412-24.376s-10.097-13.878-20.323-15.364l-88.879-12.913c-4.294-.625-10.867-5.4-12.787-9.291l-39.748-80.538c-4.572-9.269-12.188-14.584-20.893-14.584-8.706 0-16.321 5.315-20.893 14.582l-39.75 80.542c-1.918 3.89-8.49 8.664-12.784 9.289l-88.88 12.913c-10.225 1.485-17.633 7.085-20.322 15.362-2.69 8.277.01 17.162 7.41 24.378l64.312 62.691c3.107 3.029 5.617 10.754 4.883 15.031l-15.182 88.52c-1.388 8.098.293 15.457 4.732 20.723 3.971 4.71 9.672 7.304 16.052 7.304 4.265 0 8.645-1.167 13.021-3.468l79.494-41.791c1.385-.728 4.189-1.506 7.905-1.506s6.52.777 7.902 1.505l79.496 41.792c4.377 2.301 8.758 3.468 13.021 3.468 6.381 0 12.08-2.594 16.052-7.304 4.439-5.266 6.12-12.625 4.731-20.724l-15.182-88.518c-.732-4.276 1.778-12.004 4.884-15.032z' />
                  </g>
                </svg>
              )}
            </button>
            <img src={image} alt={name} />
          </div>
          <div className={s.person_details}>
            <ul className={s.person_info}>
              {details &&
                details.map(({ title, data }, i) => (
                  <li key={`${data}_${i}`} className={s.person_item}>
                    <p className={s.person_text}>
                      <span>{title}</span>: {data}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
          <div className={s.person_episodes}>
            <ul className={s.person_episodes_list}>
              {films &&
                films
                  .sort((a, z) => a.episodeId - z.episodeId)
                  .map(({ episodeId, title }, i) => (
                    <li
                      key={`${title}_${i}`}
                      className={s.person_episodes_item}
                    >
                      <span className={s.person_episodes_num}>
                        Episode: {episodeId}
                      </span>
                      <span className={s.person_episodes_colon}>:</span>
                      <span className={s.person_episodes_title}>{title}</span>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Preloader />
  );
};

export default Person;

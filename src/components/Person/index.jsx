import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PersonGoBack from '@components/PersonGoBack';

import { getPerson } from '../../redux/actions/people';

import s from '@styles/style.module.scss';

const Person = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { name, image, films, details } = useSelector(({ people }) => people.person);

  React.useEffect(() => {
    dispatch(getPerson(id));
  }, [id, dispatch]);

  return (
    <div className={s.person}>
      <PersonGoBack />
      <div className={s.person_body}>
        <span className={s.person_name}>{name}</span>
        <div className={s.person_content}>
          <div className={s.person_picture}>
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
                    <li key={`${title}_${i}`} className={s.person_episodes_item}>
                      <span className={s.person_episodes_num}>Episode: {episodeId}</span>
                      <span className={s.person_episodes_colon}>:</span>
                      <span className={s.person_episodes_title}>{title}</span>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
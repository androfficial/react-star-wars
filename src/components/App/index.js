import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../redux/actions/people';

import { People } from '../../pages';
import { Header } from '../';

import s from '../../styles/style.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const people = useSelector(({ people }) => people.items);

  React.useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className={s.app_wrapper}>
      <Header />
      <People people={people} />
    </div>
  );
};

export default App;
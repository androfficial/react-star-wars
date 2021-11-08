import React from 'react';
import cn from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '@redux/actions/people';

import { People } from '@pages';
import { Header, ErrorMessage } from '@components';

import s from '@styles/style.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const [people, errorApi] = useSelector(({ people }) => [people.items, people.errorApi]);

  React.useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div
      className={cn(s.app_wrapper, {
        [s.app_wrapper_active]: errorApi,
      })}>
      {errorApi ? (
        <ErrorMessage />
      ) : (
        <>
          <Header />
          <People people={people} />
        </>
      )}
    </div>
  );
};

export default App;
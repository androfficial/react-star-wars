import React from 'react';
import { Routes, Route } from 'react-router-dom';
import cn from 'classnames';

import { Header, ErrorMessage, NotFound } from '@components';
import { Home, People } from '@pages';

import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '@redux/actions/people';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People people={people} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
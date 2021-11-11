import React from 'react';
import { Routes, Route } from 'react-router-dom';
import cn from 'classnames';

import { Header, ErrorMessage, NotFound, Person } from '@components';
import { Home, Favorites, People } from '@pages';

import { useSelector } from 'react-redux';

import s from '@styles/style.module.scss';

const App = () => {
  const errorApi = useSelector(({ people }) => people.errorApi);

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
          <div className={s.content_wrapper}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
              <Route path="/people/:id" element={<Person />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
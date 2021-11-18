import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Header, ErrorMessage, NotFound } from '@components';
import { Home, People, Person, Search, Fail, Favorites } from '@pages';
import { addMarginRight } from '@services/addMarginRight';

import s from '@styles/style.module.scss';

const App = () => {
  const errorApi = useSelector(({ people }) => people.errorApi);

  useEffect(() => {
    addMarginRight();
  }, []);

  return (
    <div className={s.app_wrapper}>
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
              <Route path="/search" element={<Search />} />
              <Route path="/fail" element={<Fail />} />
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
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { withErrorApi } from '@hoc/withErrorApi';
import { Header, NotFound } from '@components';
import { Home, People, Person, Search, Fail, Favorites } from '@pages';
import { addMarginRight } from '@services/addMarginRight';

import s from '@styles/style.module.scss';

const App = () => {

  useEffect(() => {
    addMarginRight();
  }, []);

  return (
    <div className={s.app_wrapper}>
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
    </div>
  );
};

export default withErrorApi(App);
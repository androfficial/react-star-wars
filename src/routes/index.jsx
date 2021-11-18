import { Routes, Route } from 'react-router-dom';

import { App, NotFound, Person } from '@components';
import { Home, People, Search, Fail, Favorites } from '@pages';

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<Person />} />
        <Route path="search" element={<Search />} />
        <Route path="fail" element={<Fail />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routes;
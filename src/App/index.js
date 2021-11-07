import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../redux/actions/people';

import { People } from '../pages';

const App = () => {
  const dispatch = useDispatch();
  const people = useSelector(({ people }) => people.items);

  React.useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return <People people={people} />;
};

export default App;
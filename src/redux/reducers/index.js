import { combineReducers } from 'redux';

import people from './people';
import person from './person';
import favorites from './favorites';

export default combineReducers({
  people,
  person,
  favorites,
});

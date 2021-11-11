import { combineReducers } from 'redux';

import people from './people';
import favorites from './favorites';

export default combineReducers({
  people,
  favorites,
});
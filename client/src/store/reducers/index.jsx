import { combineReducers } from 'redux';

import authReducer from './auth';
import errorReducer from './errors';
import accountReducer from './account';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  plaid: accountReducer,
});

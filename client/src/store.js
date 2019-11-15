import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import listing from './app/reducers/listing.js';
import notification from './app/reducers/notification.js';
import auth from './app/reducers/auth.js';

const general = combineReducers({
  listing: listing,
  notification: notification,
  auth: auth
})

const store = createStore(
  general,
  applyMiddleware(thunk)
);

export default store;
import Redux from 'redux';
import ReactRouterRedux from 'react-router-redux';
import ReactRouter from 'react-router';

// import the root reducer
import rootReducer from "./reducers/index";

//create a default object for store
const defaultState = {};

const store = Redux.createStore(rootReducer, defaultState);

export const history = ReactRouterRedux.syncHistoryWithStore(
  ReactRouter.browserHistory,
  store
);

export default store;

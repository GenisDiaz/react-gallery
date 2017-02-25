import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import page from './page.js';
import photo from './photo.js';

const rootReducer = combineReducers({page, photo, routing: routerReducer});

export default rootReducer;

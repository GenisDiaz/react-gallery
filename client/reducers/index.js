import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import page from './page.js';
import photos from './photos.js';

const rootReducer = combineReducers({page, photos, routing: routerReducer});

export default rootReducer;

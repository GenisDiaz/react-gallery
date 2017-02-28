import React from 'react';
import ReactDOM from 'react-dom';

// import components
import App from './components/App';
import GalleryGrid from './components/GalleryGrid';
import Single from './components/Single';

// css
import './components/css/bootstrap.css';
import './components/css/style.css';

// import router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// import init app action
import { initApp } from './actions/actionCreators';

store.dispatch(initApp());

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={GalleryGrid}/>
        <Route path="/view/:photoId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

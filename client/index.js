import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Main from './components/Main';
import GalleryGrid from './components/GalleryGrid';
import Single from './components/Single';

//import router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

//import Config file
import Config from './data/config';

console.log('Config', Config);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={GalleryGrid}>
          <Route path="/view/:postId" component={Single}></Route>
        </IndexRoute>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

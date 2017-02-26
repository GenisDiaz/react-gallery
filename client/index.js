import React from 'react';
import ReactDOM from 'react-dom';

// import components
import App from './components/App';
import GalleryGrid from './components/GalleryGrid';
import Single from './components/Single';

//import router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
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

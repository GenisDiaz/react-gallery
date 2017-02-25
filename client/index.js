import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Main from './components/Main';
import GalleryGrid from './components/GalleryGrid';
import Single from './components/Single';

//import router
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={GalleryGrid}>
        <Route path="/view/:postId" component={Single}></Route>
      </IndexRoute>
    </Route>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

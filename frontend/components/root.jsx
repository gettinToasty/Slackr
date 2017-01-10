import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app.jsx';
import SplashFormContainer from './splash/splash_form_container';

export default ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <Route path='/signup' component={ SplashFormContainer } />
        <Route path='/login' component ={ SplashFormContainer } />
      </Route>
    </Router>
  </Provider>
);

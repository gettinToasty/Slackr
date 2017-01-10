import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app.jsx';
import SplashFormContainer from './splash/splash_form_container';
import ChatWindowContainer from './chat_window/chat_window_container';



export default ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser) {
      replace('/login');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute
            component={ ChatWindowContainer }
            onEnter={ _ensureLoggedIn } />
          <Route
            path='/signup'
            component={ SplashFormContainer }
            onEnter={ _redirectIfLoggedIn } />
          <Route
            path='/login'
            component ={ SplashFormContainer }
            onEnter={ _redirectIfLoggedIn } />
        </Route>
      </Router>
    </Provider>
);
};

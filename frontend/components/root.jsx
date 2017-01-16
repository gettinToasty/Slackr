import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app.jsx';
import SplashFormContainer from './splash/splash_form_container';
import ChatWindowContainer from './chat_window/chat_window_container';
import { getUserChannels } from '../reducers/selectors';
import { fetchChannels, fetchChannel } from '../actions/channel_actions';
import { fetchDms } from '../actions/dm_actions';
import { receiveMessage } from '../actions/message_actions.js';



export default ({ store }) => {

  const removeSocket = () => {
    window.App.cable.subscriptions.remove(window.App.channel);
  };

  const addSocket = channelName => {
    window.App.channel = window.App.cable.subscriptions.create({
      channel: 'MessageChannel',
      channel_name: channelName
    }, {
      connected: () => {},
      disconnected: () => {},
      received: data => { store.dispatch(receiveMessage(data.message)); }
    });
  };


  const setSocket = channelName => {
    if (window.App.channel) {
      removeSocket();
    }
    addSocket(channelName);
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _enterRoot = (nextState, replace) => {
    const state = () => store.getState();
    const channelName = () => {
      if(state().curChannel.title) {
        return state().curChannel.title;
      } else {
        return 'direct_message';
      }
    };
    const userChannels = () => getUserChannels(state().channels, state().session.currentUser.id);
    if (!state().session.currentUser) {
      replace('/login');
    } else {
      store.dispatch(fetchChannels())
      .then(() => store.dispatch(fetchDms()))
      .then(() => store.dispatch(fetchChannel(userChannels()[0].id, 'Channel')))
      .then(() => setSocket(channelName()));
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute
            component={ ChatWindowContainer }
            onEnter={ _enterRoot } />
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

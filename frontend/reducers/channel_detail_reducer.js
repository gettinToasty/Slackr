import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

import { merge } from 'lodash';

const defaultState = {
  messages: {}
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, action.curChannel, defaultState);
    case RECEIVE_MESSAGE:
      return merge(
        {},
        state,
        { messages: {[action.message.id]: action.message} }
      );
    default:
      return state;
  }
};

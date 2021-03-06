import { RECEIVE_CHANNELS } from '../actions/channel_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    default:
      return state;
  }
};

import { RECEIVE_CHANNEL } from '../actions/channel_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return action.curChannel;
    default:
      return state;
  }
};

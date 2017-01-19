import {
  RECEIVE_DMS,
  RECEIVE_DM,
  REMOVE_DM } from '../actions/dm_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DMS:
      return action.dms;
    case RECEIVE_DM:
      return merge({}, state, {[action.dm.id]: action.dm});
    default:
      return state;
  }
};

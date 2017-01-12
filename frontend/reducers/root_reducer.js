import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import channelsReducer from './channels_reducer';
import channelDetailReducer from './channel_detail_reducer';

export default combineReducers({
  session: SessionReducer,
  channels: channelsReducer,
  curChannel: channelDetailReducer
});

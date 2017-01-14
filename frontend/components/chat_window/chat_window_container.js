import { connect } from 'react-redux';

import ChatWindow from './chat_window';
import { fetchChannels, fetchChannel } from '../../actions/channel_actions';
import { fetchDms } from '../../actions/dm_actions';
import { receiveMessage } from '../../actions/message_actions';
import {
  getAllChannels,
  getUserChannels,
  getUserMessages
} from '../../reducers/selectors';

const removeSocket = () => {
  window.App.cable.subscriptions.remove(window.App.channel);
};

const addSocket = (channelName, dispatch) => {
  window.App.channel = window.App.cable.subscriptions.create({
    channel: 'MessageChannel',
    channel_name: channelName
  }, {
    connected: () => {},
    disconnected: () => {},
    received: data => { dispatch(receiveMessage(data.message)); }
  });
};


const setSocket = (channelName, dispatch) => {
  if (window.App.channel) {
    removeSocket();
  }
  addSocket(channelName, dispatch);
};

const mapStateToProps = state => ({
  allChannels: getAllChannels(state.channels),
  curChannel: state.curChannel,
  currentUser: state.session.currentUser,
  userChannels: getUserChannels(state.channels, state.session.currentUser.id),
  userMessages: getUserMessages(state.directMessages)
});

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchChannel: (id, type) => dispatch(fetchChannel(id, type)),
  fetchDms: () => dispatch(fetchDms()),
  setSocket: channelName => setSocket(channelName, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);

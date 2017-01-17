import { connect } from 'react-redux';

import ChatWindow from './chat_window';
import {
  fetchChannels,
  fetchChannel,
  joinChannel,
  leaveChannel
} from '../../actions/channel_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchDms, createDm } from '../../actions/dm_actions';
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

const userChannels = (channels, user) => {
  if(user) {
    return getUserChannels(channels, user.id);
  }
};

const mapStateToProps = state => ({
  allChannels: getAllChannels(state.channels),
  curChannel: state.curChannel,
  currentUser: state.session.currentUser,
  userChannels: userChannels(state.channels, state.session.currentUser),
  userMessages: getUserMessages(state.directMessages),
  users: state.users

});

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchChannel: (id, type) => dispatch(fetchChannel(id, type)),
  fetchUsers: () => dispatch(fetchUsers()),
  joinChannel: channelJoin => dispatch(joinChannel(channelJoin)),
  leaveChannel: id => dispatch(leaveChannel(id)),
  fetchDms: () => dispatch(fetchDms()),
  createDm: users => dispatch(createDm(users)),
  setSocket: channelName => setSocket(channelName, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);

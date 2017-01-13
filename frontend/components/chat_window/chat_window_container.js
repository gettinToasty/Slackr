import { connect } from 'react-redux';

import ChatWindow from './chat_window';
import { fetchChannels, fetchChannel } from '../../actions/channel_actions';
import { fetchDms } from '../../actions/dm_actions';
import {
  getAllChannels,
  getUserChannels,
  getUserMessages
} from '../../reducers/selectors';

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
  fetchDms: () => dispatch(fetchDms())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);

import { connect } from 'react-redux';

import ChatWindow from './chat_window';
import { fetchChannels, fetchChannel } from '../../actions/channel_actions';
import { getAllChannels, getUserChannels } from '../../reducers/selectors';

const mapStateToProps = state => ({
  allChannels: getAllChannels(state.channels),
  curChannel: state.curChannel,
  currentUser: state.session.currentUser,
  userChannels: getUserChannels(state.channels, state.session.currentUser.id)
});

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchChannel: id => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);

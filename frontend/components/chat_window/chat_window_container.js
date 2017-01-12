import { connect } from 'react-redux';

import ChatWindow from './chat_window';
import { fetchChannels, fetchChannel } from '../../actions/channel_actions';
import { getChannelIndex } from '../../reducers/selectors';

const mapStateToProps = state => ({
  channels: getChannelIndex(state.channels),
  curChannel: state.curChannel,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchChannel: id => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);

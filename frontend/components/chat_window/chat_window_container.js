import { connect } from 'react-redux';

import ChatWindow from './chat_window';
import { fetchChannels } from '../../actions/channel_actions';
import { getChannelIndex } from '../../reducers/selectors';

const mapStateToProps = state => ({
  channels: getChannelIndex(state.channels)
});

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);

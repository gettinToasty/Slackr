import { connect } from 'react-redux';

import NavBar from './nav_bar';
import { logout } from '../actions/session_actions';
import { searchMessages, fetchChannel, fetchChannels } from '../actions/channel_actions';
import { getUserChannels } from '../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  curChannel: state.curChannel
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  fetchChannels: () => dispatch(fetchChannels()),
  searchMessages: query => dispatch(searchMessages(query)),
  fetchChannel: (id, type) => dispatch(fetchChannel(id, type))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

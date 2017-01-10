import { connect } from 'react-redux';

import ChatWindow from './chat_window';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);

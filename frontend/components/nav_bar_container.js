import { connect } from 'react-redux';

import NavBar from './nav_bar';
import { logout } from '../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return ({
  pageName: ownProps.location.pathname.slice(1),
  logout: () => dispatch(logout())
});
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

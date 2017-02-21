import { connect } from 'react-redux';

import { login, signup, clearErrors } from '../../actions/session_actions';
import SplashForm from './splash_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  let processForm = user => dispatch(signup(user));
  if(formType === 'login') {
    processForm = user => dispatch(login(user));
  }
  return {
    guestLogin: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType,
    processForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashForm);

import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER, user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS, errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const signup = user => dispatch => (
  SessionUtil.signup(user)
    .then(resp => dispatch(receiveCurrentUser(resp)))
    .fail(xhr => dispatch(receiveErrors(xhr.responseJSON)))
);

export const login = user => dispatch => (
  SessionUtil.login(user)
    .then(resp => dispatch(receiveCurrentUser(resp)))
    .fail(xhr => dispatch(receiveErrors(xhr.responseJSON)))
);

export const logout = () => dispatch => (
  SessionUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)))
    .fail(xhr => dispatch(receiveErrors(xhr.responseJSON)))
);

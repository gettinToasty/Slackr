import * as UserUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const fetchUsers = () => dispatch => (
  UserUtil.fetchUsers()
    .then(resp => dispatch(receiveUsers(resp)))
);

import * as DmUtil from '../util/dm_api_util';

export const RECEIVE_DMS = 'RECEIVE_DMS';
export const RECEIVE_DM = 'RECEIVE_DM';
export const REMOVE_DM = 'REMOVE_DM';

export const receiveDms = dms => ({
  type: RECEIVE_DMS,
  dms
});

export const receiveDm = dm => ({
  type: RECEIVE_DM,
  dm
});

export const removeDm = dm => ({
  type: REMOVE_DM,
  dm
});

export const fetchDms = () => dispatch => (
  DmUtil.fetchDms()
    .then(resp => dispatch(receiveDms(resp)))
);

export const createDm = users => dispatch => (
  DmUtil.createDm(users)
    .then(resp => dispatch(receiveDm(resp)))
);

export const leaveDm = id => dispatch => (
  DmUtil.leaveDm(id)
);

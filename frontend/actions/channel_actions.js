import * as ChannelUtil from '../util/channel_api_util';
import * as DmUtil from '../util/dm_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveChannel = curChannel => ({
  type: RECEIVE_CHANNEL,
  curChannel
});

export const fetchChannels = () => dispatch => (
  ChannelUtil.fetchIndex()
    .then(resp => dispatch(receiveChannels(resp)))
);

export const fetchChannel = (id, type) => dispatch => {
  if(type === 'Channel') {
    return (
      ChannelUtil.fetchChannel(id)
      .then(resp => dispatch(receiveChannel(resp)))
    );
  } else if(type === 'DirectMessage') {
    return (
      DmUtil.fetchDm(id)
        .then(resp => dispatch(receiveChannel(resp)))
    );
  }
};

export const joinChannel = channelJoin => dispatch => (
  ChannelUtil.joinChannel(channelJoin)
    .then(resp => dispatch(receiveChannel(resp)))
);

export const leaveChannel = id => dispatch => (
  ChannelUtil.leaveChannel(id)
);

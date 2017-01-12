import * as ChannelUtil from '../util/channel_api_util';

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

window.fetchChannels = fetchChannels;

export const fetchChannel = id => dispatch => (
  ChannelUtil.fetchChannel(id)
    .then(resp => dispatch(receiveChannel(resp)))
);

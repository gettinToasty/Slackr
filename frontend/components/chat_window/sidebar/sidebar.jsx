import React from 'react';

import ChannelDetail from './channel_detail';
import ChannelIndex from './channel_index';

export default ({allChannels, userChannels, updateChannel, curChannel, currentUser}) => (
  <div className='sidebar'>
    <ChannelDetail curChannel={curChannel} currentUser={currentUser} />
    <h3>Channels ({allChannels.length})</h3>
    <ChannelIndex userChannels={userChannels} updateChannel={updateChannel} />
    <h3>Direct Messages</h3>
  </div>
);

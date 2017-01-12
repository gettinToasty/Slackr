import React from 'react';

import ChannelDetail from './channel_detail';
import ChannelIndex from './channel_index';

export default ({channels, updateChannel, curChannel, currentUser}) => (
  <div className='sidebar'>
    <ChannelDetail curChannel={curChannel} currentUser={currentUser} />
    <h3>Channels</h3>
    <ChannelIndex channels={channels} updateChannel={updateChannel} />
    <h3>Direct Messages</h3>
  </div>
);

import React from 'react';

import ChannelDetail from './channel_detail';
import ChannelIndex from './channel_index';

export default ({channels}) => (
  <div className='sidebar'>
    <h3>Channel Index</h3>
    <ChannelIndex channels={channels} />
  </div>
);

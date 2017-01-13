import React from 'react';

export default ({userChannels, updateChannel}) => (
  <ul>
    {userChannels.map(channel => (
      <li key={channel.id} onClick={() => updateChannel(channel.id, 'Channel')}>
        *{channel.title}
      </li>
    ))}
  </ul>
);

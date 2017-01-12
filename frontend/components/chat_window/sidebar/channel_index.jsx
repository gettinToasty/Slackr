import React from 'react';

export default ({channels, updateChannel}) => (
  <ul>
    {channels.map(channel => (
      <li key={channel.id} onClick={() => updateChannel(channel.id)}>
        *{channel.title}
      </li>
    ))}
  </ul>
);

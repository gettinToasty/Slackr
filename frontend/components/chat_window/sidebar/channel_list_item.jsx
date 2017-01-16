import React from 'react';

export default ({channel, joinChannel}) => (
  <li onClick={() => joinChannel(channel.id)}>
    <h5>*{channel.title}</h5>
    <p>{channel.users.length} users</p>
  </li>
);

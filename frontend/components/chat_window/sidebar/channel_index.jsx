import React from 'react';

export default ({channels}) => (
  <ul>
    {channels.map(channel => (
      <li key={channel.id}>*{channel.title}</li>
    ))}
  </ul>
);

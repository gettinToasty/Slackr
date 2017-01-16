import React from 'react';

export default ({channel}) => (
  <li>
    <h5>*{channel.title}</h5>
    <p>{channel.users.length} users</p>
  </li>
);

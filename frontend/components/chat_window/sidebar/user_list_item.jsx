import React from 'react';

export default ({user, handleAdd}) => (
  <li onClick={() => handleAdd(user.username)}>
    <h5>@{user.username}</h5>
  </li>
);

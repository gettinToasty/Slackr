import React from 'react';

export default ({ message }) => (
  <div className='chat-message'>
    <h4>{message.author}</h4>
    <p>{message.body}</p>
    <h5>Posted {message.timestamp} ago</h5>
  </div>
);

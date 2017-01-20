import React from 'react';
import parseBody from '../../../util/parse_body';

export default ({ message }) => {

  return (
    <div className='chat-message group'>
      <h4>{message.author}</h4>
      {parseBody(message.body)}
      <h5>Posted {message.timestamp} ago</h5>
    </div>
  );
};

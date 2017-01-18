import React from 'react';
import emojione from 'emojione';

const parseBody = body => {
  emojione.ascii = true;
  
  let match = body.match(/GIPHY_DATA (.+) _ (.+) _ (.+)/);
  if(match) {
    return (
      <div className='giphy'>
        <a href={match[1]}>{match[2]}</a><br />
        <p>Posted using /giphy [text]</p>
        <img src={match[3]} />
      </div>
    );
  } else {
    return <p>{emojione.shortnameToUnicode(body)}</p>;
  }
};

export default ({ message }) => {

  return (
    <div className='chat-message group'>
      <h4>{message.author}</h4>
      {parseBody(message.body)}
      <h5>Posted {message.timestamp} ago</h5>
    </div>
  );
};

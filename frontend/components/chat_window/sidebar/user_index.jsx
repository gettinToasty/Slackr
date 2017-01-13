import React from 'react';

export default ({userMessages, updateChannel, currentUser}) => {
  const title = () => {
    
  };


  return (
    <ul>
      {userMessages.map(message => (
        <li key={message.id} onClick={() => updateChannel(message.id)}>
          *{message.title}
        </li>
      ))}
    </ul>
  );
};

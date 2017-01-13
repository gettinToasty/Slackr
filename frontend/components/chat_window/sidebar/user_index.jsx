import React from 'react';

export default ({userMessages, updateChannel, currentUser}) => {
  const title = (dm) => {
    return dm.from === currentUser.username ? dm.to : dm.from;
  };


  return (
    <ul>
      {userMessages.map(dm => (
        <li key={dm.id} onClick={() => updateChannel(dm.id, 'DirectMessage')}>
          @{title(dm)}
        </li>
      ))}
    </ul>
  );
};

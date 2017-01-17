import React from 'react';

export default ({userMessages, updateChannel, currentUser}) => {
  console.log(userMessages);
  return (
    <ul>
      {userMessages.map(dm => (
        <li key={dm.id} onClick={() => updateChannel(dm.id, 'DirectMessage')}>
          @{dm.title}
        </li>
      ))}
    </ul>
  );
};

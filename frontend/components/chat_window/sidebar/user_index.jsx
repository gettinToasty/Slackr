import React from 'react';

export default ({userMessages, updateChannel, currentUser}) => {
  return (
    <ul>
      {userMessages.map(dm => {
        let rgx = new RegExp(`${currentUser.username},?\\s?`);
        let title = dm.title.replace(rgx, '');
        let dots = title.length > 16 ? '...' : '';
        return (
          <li key={dm.id} onClick={() => updateChannel(dm.id, 'DirectMessage')}>
            @{title.slice(0, 16)}{dots}
          </li>
        );
        }
      )}

    </ul>
  );
};

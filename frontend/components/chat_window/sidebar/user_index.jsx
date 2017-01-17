import React from 'react';

export default ({userMessages, updateChannel}) => {
  return (
    <ul>
      {userMessages.map(dm => {
        let dots = dm.title.length > 16 ? '...' : '';
        return (
          <li key={dm.id} onClick={() => updateChannel(dm.id, 'DirectMessage')}>
            @{dm.title.slice(0, 16)}{dots}
          </li>
        );
        }
      )}

    </ul>
  );
};

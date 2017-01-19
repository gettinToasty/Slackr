import React from 'react';

export default ({userMessages, updateChannel, currentUser, leaveDm}) => {
  return (
    <ul>
      {userMessages.map(dm => {
        let rgx;
        if(currentUser) {
          rgx = new RegExp(`${currentUser.username},?\\s?`);
        }
        let title = dm.title.replace(rgx, '');
        let dots = title.length > 16 ? '...' : '';
        return (
          <li key={dm.id} onClick={() => updateChannel(dm.id, 'DirectMessage')}>
            @{title.slice(0, 16)}{dots}
            <div onClick={() => leaveDm(dm.id)}>
              <i
                className="fa fa-times-circle"
                aria-hidden="true">
              </i>
            </div>
          </li>
        );
        }
      )}

    </ul>
  );
};

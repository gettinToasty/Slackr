import React from 'react';

const channelData = (curChannel, currentUser) => {
  let content;
  if(curChannel.type === 'Channel') {
    content = curChannel.title;
  } else if(curChannel.type === 'DirectMessage' && currentUser) {
    content = curChannel.from === currentUser.username ?
      `@${curChannel.to}` : `@${curChannel.from}`;
  }
  return <h4>{content}</h4>;
};

const username = user => {
  if(user) {
    return user.username;
  }
};

export default ({curChannel, currentUser}) => (
  <div className="channel-detail">
    {channelData(curChannel, currentUser)}
    <i className="fa fa-user-circle" aria-hidden="true"></i>
    <p>{username(currentUser)}</p>
  </div>
);

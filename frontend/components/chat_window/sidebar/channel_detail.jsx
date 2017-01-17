import React from 'react';

const channelData = (curChannel) => {
  let content, dots;
  if(curChannel.type === 'Channel') {
    content = curChannel.title;
  } else if(curChannel.type === 'DirectMessage') {
    content = `@${curChannel.title.slice(0,16)}`;
    dots = curChannel.title.length > 16 ? '...' : '';
  }
  return <h4>{content}{dots}</h4>;
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

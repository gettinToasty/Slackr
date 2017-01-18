import React from 'react';

const channelData = (curChannel, currentUser) => {
  let rgx = new RegExp(`${currentUser.username},?\\s?`);
  let content, dots;
  if(curChannel.type === 'Channel') {
    content = curChannel.title;
  } else if(curChannel.type === 'DirectMessage') {
    let title = `@${curChannel.title.replace(rgx, '')}`;
    content = title.slice(0, 16);
    dots = title.length > 16 ? '...' : '';
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

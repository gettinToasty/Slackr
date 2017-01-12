import React from 'react';

const channelData = (curChannel) => {
  if(curChannel) {
    return (
      <h4>{curChannel.title}</h4>
    );
  }
};

export default ({curChannel, currentUser}) => (
  <div className="channel-detail">
    {channelData(curChannel)}
    <i className="fa fa-user-circle" aria-hidden="true"></i>
    <p>{currentUser.username}</p>
  </div>
);

import React from 'react';

const mapChannels = (userChannels, updateChannel, leaveChannel) => {
  if(userChannels) {
    return userChannels.map(channel => (
      <li
        key={channel.id}
        onClick={() => updateChannel(channel.id, 'Channel')}>
        *{channel.title}
        <div onClick={() => leaveChannel(channel.id)}>
          <i
            className="fa fa-times-circle"
            aria-hidden="true">
          </i>
        </div>
      </li>
    ));
  }
};

export default ({userChannels, updateChannel, leaveChannel}) => (
  <ul>
    {mapChannels(userChannels, updateChannel, leaveChannel)}
  </ul>
);

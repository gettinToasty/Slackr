import React from 'react';

const mapChannels = (userChannels, updateChannel) => {
  if(userChannels) {
    return userChannels.map(channel => (
      <li key={channel.id} onClick={() => updateChannel(channel.id, 'Channel')}>
        *{channel.title}
        <i
          className="fa fa-times-circle"
          aria-hidden="true">
        </i>
      </li>
    ));
  }
};

export default ({userChannels, updateChannel}) => (
  <ul>
    {mapChannels(userChannels, updateChannel)}
  </ul>
);

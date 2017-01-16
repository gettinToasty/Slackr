import React from 'react';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
  }

  render() {
    return (
      <div>
        <h2>Channels</h2>
        <input type='text' />
        <ul>
          {
            this.props.channels.map(channel => (
              <ChannelListItem channel={channel} key={channel.id} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ChannelList;

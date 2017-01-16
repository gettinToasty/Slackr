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
        <h2>Browse All {this.props.channels.length} Channels</h2>
        <input type='text' />
        <ul>
          {
            this.props.channels.map(channel => (
              <ChannelListItem
                channel={channel}
                key={channel.id}
                joinChannel={this.props.joinChannel} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ChannelList;

import React from 'react';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", channels: this.props.channels };
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(e) {
    this.setState({ query: e.target.value }, () => {
      let channels = this.props.channels.filter(channel => (
        channel.title.includes(this.state.query)
      ));
      if(this.state.query === "") { channels = this.props.channels; }
      this.setState({ channels });
    });
  }

  render() {
    return (
      <div>
        <h2>Browse All {this.props.channels.length} Channels</h2>
        <input
          type='text'
          onChange={this.updateQuery}
          value={this.state.query}
          placeholder='Search Channels' />
        <ul>
          {
            this.state.channels.map(channel => (
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

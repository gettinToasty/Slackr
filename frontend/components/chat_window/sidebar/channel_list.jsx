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
        <input type='text' />
        <ul>
          <ChannelListItem />
        </ul>
      </div>
    );
  }
}

export default ChannelList;

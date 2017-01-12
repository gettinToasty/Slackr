import React from 'react';
import { withRouter } from 'react-router';

import Sidebar from './sidebar/sidebar';
import ChatElementsContainer from './chat_elements/chat_elements_container';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.updateChannel = this.updateChannel.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels()
      .then(() => this.props.fetchChannel(this.props.channels[0].id));
  }

  updateChannel(id) {
    this.props.fetchChannel(id);
  }

  render() {
    return (
      <div className='group'>
        <Sidebar
          channels={this.props.channels}
          updateChannel={this.updateChannel}
          curChannel={this.props.curChannel}
          currentUser={this.props.currentUser} />
        <ChatElementsContainer />
      </div>
    );
  }
}

export default withRouter(ChatWindow);

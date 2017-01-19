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
    this.props.fetchUsers()
      .then(() => this.props.setSocket(this.props.curChannel.title));
  }

  updateChannel(id, type) {
    this.props.fetchChannel(id, type)
      .then(() => this.props.setSocket(this.props.curChannel.title));
  }

  render() {
    return (
      <div className='chat-window'>
        <Sidebar
          allChannels={this.props.allChannels}
          userChannels={this.props.userChannels}
          updateChannel={this.updateChannel}
          curChannel={this.props.curChannel}
          currentUser={this.props.currentUser}
          userMessages={this.props.userMessages}
          joinChannel={this.props.joinChannel}
          leaveChannel={this.props.leaveChannel}
          fetchChannels={this.props.fetchChannels}
          users={this.props.users}
          createDm={this.props.createDm} />
        <ChatElementsContainer />
      </div>
    );
  }
}

export default withRouter(ChatWindow);

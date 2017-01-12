import React from 'react';
import { withRouter } from 'react-router';

import Sidebar from './sidebar/sidebar';
import ChatElementsContainer from './chat_elements/chat_elements_container';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    return (
      <div className='group'>
        <Sidebar channels={this.props.channels} />
        <ChatElementsContainer />
      </div>
    );
  }
}

export default withRouter(ChatWindow);

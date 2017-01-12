import React from 'react';
import { withRouter } from 'react-router';

import Sidebar from './sidebar/sidebar';
import ChatElementsContainer from './chat_elements/chat_elements_container';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Sidebar />
        <ChatElementsContainer />
      </div>
    );
  }
}

export default withRouter(ChatWindow);

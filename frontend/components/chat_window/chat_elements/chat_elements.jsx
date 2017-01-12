import React from 'react';

import TextEntry from './text_entry';
import ChatElement from './chat_element';

class ChatElements extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TextEntry />
      </div>
    );
  }
}

export default ChatElements;

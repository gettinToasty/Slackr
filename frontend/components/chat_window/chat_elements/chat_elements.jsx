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
        <div>
          {this.props.messages.map(message => (
            <ChatElement key={message.id} message={message} />
          ))}
        </div>
        <TextEntry curChannel={this.props.curChannel} />
      </div>
    );
  }
}

export default ChatElements;

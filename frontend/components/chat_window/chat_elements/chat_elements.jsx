import React from 'react';

import TextEntry from './text_entry';
import ChatElement from './chat_element';

class ChatElements extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const bottom = this.refs.messages.scrollHeight;
    this.refs.messages.scrollTop = bottom;
  }



  render() {
    return (
      <div>
        <div className='messages' ref='messages'>
          {this.props.messages.map(message => (
            <ChatElement key={message.id} message={message} />
          ))}
        </div>
        <TextEntry
          curChannel={this.props.curChannel}
          createMessage={this.props.createMessage}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}

export default ChatElements;

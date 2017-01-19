// react-emoji-picker available here: https://www.npmjs.com/package/react-emoji-picker

import React from 'react';
import EmojiPicker from 'react-emoji-picker';
import emojiMap from 'react-emoji-picker/lib/emojiMap';

const emojiPickerStyles = {
  position: 'absolute',
  right: '-16px', top: '-300px',
  backgroundColor: 'white',
  width: '300px',
  padding: '16px',
  border: '1px solid #79707F',
  borderRadius: '8px 8px 2px 8px',
  boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  zIndex: '2'
};

class EmojiInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emoji: null, showEmojiPicker: false };
    this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    this.setEmoji = this.setEmoji.bind(this);
    this.emojiPicker = this.emojiPicker.bind(this);
  }

  toggleEmojiPicker() {
    this.setState({ showEmojiPicker: !this.state.showEmojiPicker });
  }

  setEmoji(emoji) {
    this.props.addEmoji(emoji);
    this.toggleEmojiPicker();
  }

  emojiPicker() {
    if(this.state.showEmojiPicker) {
      return (
        <EmojiPicker
          style={emojiPickerStyles}
          onSelect={this.setEmoji}
        />
      );
    }
  }

  render() {
    return (
      <div ref="emoji" className='emoji-picker-container'>
        <i
          onClick={this.toggleEmojiPicker}
          className="fa fa-smile-o fa-lg"
          aria-hidden="true">
        </i>
        <div className='emoji-picker'>{this.emojiPicker()}</div>
      </div>
    );
  }
}

export default EmojiInput;

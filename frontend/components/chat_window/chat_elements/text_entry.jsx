import React from 'react';

class TextEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { body: "" };
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <div className='text-entry'>
        <input
          type='text'
          placeholder={`Message *${this.props.curChannel.title}`} />
      </div>
    );
  }
}

export default TextEntry;

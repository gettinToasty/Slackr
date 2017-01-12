import React from 'react';

class TextEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { body: "" };
  }

  render() {
    return (
      <div className='text-entry'>
        <input type='text' />
      </div>
    );
  }
}

export default TextEntry;

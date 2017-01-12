import React from 'react';

class TextEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { body: "" };
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    if(e.keyCode===13) {
      let message = {
        body: this.state.body,
        author_id: this.props.currentUser.id,
        postable_type: this.props.curChannel.type,
        postable_id: this.props.curChannel.id
      };
      this.props.createMessage(message)
        .then(this.resetForm);
    }
  }

  resetForm() {
    this.setState({ body: "" });
  }

  render() {
    return (
      <div className='text-entry'>
        <input
          type='text'
          placeholder={`Message *${this.props.curChannel.title}`}
          value={this.state.body}
          onChange={this.updateBody}
          onKeyUp={this.handleSubmit} />
      </div>
    );
  }
}

export default TextEntry;

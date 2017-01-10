import React from 'react';
import { withRouter } from 'react-router';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => this.props.router.push('/login'));
  }

  render() {
    return (
      <div>
        <button type='button' onClick={this.handleLogout}>Log Out</button>
      </div>
    );
  }
}

export default withRouter(ChatWindow);

import React from 'react';
import UserListItem from './user_list_item';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", users: this.props.users, formUsers: [] };
    this.updateQuery = this.updateQuery.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateQuery(e) {
    this.setState({ query: e.target.value }, () => {
      let users = this.props.users.filter(user => (
        user.username.includes(this.state.query)
      ));
      if(this.state.query === "") { users = this.props.users; }
      this.setState({ users });
    });
  }

  handleAdd(username) {
    if(!this.state.formUsers.includes(username)) {
      this.setState({
        formUsers: this.state.formUsers.concat([username])
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDm(this.state.formUsers)
      .then(this.props.fetchDms)
      .then(this.props.toggleModal);
  }

  handleRemove(username) {
    let newState = this.state.formUsers.slice(0);
    for (var i = 0; i < newState.length; i++) {
      if(newState[i] === username) {
        newState.splice(i, 1);
      }
    }
    this.setState({ formUsers: newState });
  }

  render() {
    return (
      <div>
        <h2>Browse All {this.props.users.length} Users</h2>
        <input
          type='text'
          onChange={this.updateQuery}
          value={this.state.query}
          placeholder='Search Users' />
        <input type='submit' onClick={this.handleSubmit} value='Add DM' />
        <ul className="selected-users">
          {this.state.formUsers.map((user, i) => (
            <li
              key={i}
              onClick={() => this.handleRemove(user)}>
              @{user}
            </li>
          ))}
        </ul>
        <ul>
          {
            this.state.users.map(user => (
              <UserListItem
                user={user}
                key={user.id}
                handleAdd={this.handleAdd} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default UserList;

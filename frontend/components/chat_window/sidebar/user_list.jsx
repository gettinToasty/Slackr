import React from 'react';
import UserListItem from './user_list_item';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", users: this.props.users };
    this.updateQuery = this.updateQuery.bind(this);
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

  render() {
    return (
      <div>
        <h2>Browse All {this.props.users.length} Users</h2>
        <input
          type='text'
          onChange={this.updateQuery}
          value={this.state.query}
          placeholder='Search Users' />
        <ul>
          {
            this.state.users.map(user => (
              <UserListItem
                user={user}
                key={user.id} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default UserList;

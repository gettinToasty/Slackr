import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: false, lastChanId: null };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentWillUpdate() {
    this.props.fetchChannels();
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout()
      .then(this.redirect);
  }

  redirect() {
    this.props.router.push('/login');
  }

  handleDrop() {
    this.setState({ dropdown: !this.state.dropdown });
  }

  updateSearch(e) {
    if(this.props.curChannel.id !== 0) {
      this.setState({ lastChanId: this.props.curChannel.id });
    }
    if(e.target.value === "") {
      this.props.fetchChannel(this.state.lastChanId, 'Channel');
    } else {
      this.props.searchMessages(e.target.value);
    }
  }


  render() {
    const dropped = () => {
      return this.state.dropdown ? "visible" : "";
    };

    const ulContent = () => {
      let content;
      if (this.props.currentUser) {
        content = (
          <ul className={dropped()}>
            <li>Welcome, {this.props.currentUser.username}</li>
            <li>
              <button type='button' onClick={this.handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        );
      } else {
        content = (
          <ul className={dropped()}>
            <li><Link to='/login'>Log In</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
          </ul>
        );
      }

      return content;
    };

    const searchBar = () => {
      let content;
      if (this.props.currentUser) {
        content = (
          <label>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type='text' onChange={this.updateSearch} />
          </label>
        );
      }
      return content;
    };

    return (
      <nav>
        <h1>*slackr</h1>
        <div>
          {searchBar()}
          <aside onClick={this.handleDrop}>
            <i className="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
            {ulContent()}
          </aside>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);

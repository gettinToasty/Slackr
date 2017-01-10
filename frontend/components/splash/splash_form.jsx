import React from 'react';
import { Link, withRouter } from 'react-router';

class SplashForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAttr = this.updateAttr.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidUpdate() {
    // this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn) {
      this.redirect();
    }
  }

  updateAttr(type, e) {
    this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.redirect());
  }

  redirect() {
    this.props.router.push('/');
  }

  guestLogin(e) {
    e.preventDefault();
  }

  render() {
    let text = () => (
      this.props.formType === 'login' ?
        { submit: 'Log In', link: '/signup', linkText: 'Sign Up' } :
        { submit: 'Sign Up', link: '/login', linkText: 'Log In' }
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username
          <input
            type='text'
            onChange={this.updateAttr.bind(null,'username')}
            value={this.state.username} />
        </label>
        <label>
          Password
          <input
            type='password'
            onChange={this.updateAttr.bind(null, 'password')}
            value={this.state.password} />
        </label>
        <input type='submit' value={text().submit} />
        <button type='button' onClick={this.guestLogin}>Demo</button>
        <Link to={text().link}>{text().linkText}</Link>
      </form>
    );
  }
}

export default withRouter(SplashForm);

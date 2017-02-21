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

  redirectIfLoggedIn() {
    if(this.props.loggedIn) {
      this.redirect();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.formType !== nextProps.formType) {
      this.props.clearErrors();
    }
  }

  updateAttr(type, e) {
    this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(this.redirect);
  }

  redirect() {
    this.props.router.push('/');
  }

  guestLogin(e) {
    e.preventDefault();
    const guest = { username: 'Guest', password: 'password' };
    this.props.guestLogin(guest)
      .then(this.redirect);
  }

  render() {
    let text = () => (
      this.props.formType === 'login' ?
        {
          submit: 'Log In',
          link: '/signup',
          blurb: "Don't have an account?",
          linkText: "Sign up here"
        } :
        {
          submit: 'Sign Up',
          link: '/login',
          blurb: "Already a member?",
          linkText: "Log in here"
        }
    );

    const renderErrors = () => {
      let errors = this.props.errors || [];
      return (
        <ul>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      );
    };



    return (
      <div className='splash-bg'>
        <img src='https://res.cloudinary.com/gettintoasty/image/upload/v1484111141/background-img_ig0iox.jpg' />
        <form onSubmit={this.handleSubmit} className='splash'>
          <h2>{text().submit}</h2>
          {renderErrors()}
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
          <span>
            {text().blurb} <Link to={text().link}>{text().linkText}</Link>
          </span>

        </form>
      </div>
    );
  }
}

export default withRouter(SplashForm);

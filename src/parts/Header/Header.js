import React from 'react';
import { Redirect } from 'react-router-dom';
import './header.scss';
import { Navigation } from '../Navigation';
// import {  logOut } from '../../users'


export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createUser: false
    };
  }
  render() {
    const isLoginPage = location.href.includes('login');
    return (
      <header className="header">
        <div className="wrapper">
          <a href="/" className="logo">Logo</a>
          {!isLoginPage && <button onClick={() => setLoginState()}>Logout</button>}
          <Navigation user={this.props.user} />
          {!this.props.login && <button className="createUser" onClick={() => this.setState({ createUser: true })}>Create User</button>}
          {this.state.createUser && <Redirect to="/createuser" />}
        </div>
    </header>
    );
  }
}

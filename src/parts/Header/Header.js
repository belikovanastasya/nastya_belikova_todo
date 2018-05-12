import React from 'react';
import { Redirect } from 'react-router-dom';
import './header.scss';
import { Navigation } from '../Navigation';
import { logOut } from '../../servises/users';


export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createUser: false
    };
  }
  logOut = () => {
    logOut();
    this.props.setLoginState(null);
  }
  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <a href="/" className="logo">Logo</a>
          {this.props.user && <button className="btn"  onClick={this.logOut}>Logout</button>}
          <Navigation user={this.props.user} />
          {!this.props.user && <button className="btn" onClick={() => this.setState({ createUser: true })}>Create User</button>}
          {this.state.createUser && <Redirect to="/createuser" />}
        </div>
      </header>
    );
  }
}

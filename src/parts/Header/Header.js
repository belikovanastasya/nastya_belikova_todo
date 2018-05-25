import React from 'react';
import './header.scss';
import { Navigation } from '../Navigation';
import { logOut } from '../../servises/users';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeUser } from '../../store';

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }
  logOut = () => {
    logOut()
      .then(() => {
        this.props.dispatch(removeUser());
      })
    
  }
  createUser = () => {
    this.props.history.push(`/createuser`);
  };
  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <a href="/" className="logo">Logo</a>
          {this.props.user && <button className="btn"  onClick={this.logOut}>Logout</button>}
          <Navigation user={this.props.user} />
          {!this.props.user && <button className="btn" onClick={() => this.createUser()}>Create User</button>}
        </div>
      </header>
    );
  }
}


const mapStoreToProps = state => ({
  user: state.user
})
export const Header = withRouter(connect(mapStoreToProps)(HeaderComponent));

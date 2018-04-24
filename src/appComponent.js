import React from 'react';
import { Header } from './parts';
import { Footer } from './parts';
import { Pages } from './pages';
import './appComponent.scss';


export class App extends Component {
  state = {
    login: false,
    user: ''
  }

  setLoginState = (login, user) => {
    this.setState({ login, user });
  }
  render() {
    const { login, user } = this.state;
    return (<React.Fragment>
      <Header
        login={login}
        setLoginState={this.setLoginState}
        user={user}
      />
      <Pages
        login={login}
        setLoginState={this.setLoginState} />
      <Footer />
    </React.Fragment>
    );
  }
}

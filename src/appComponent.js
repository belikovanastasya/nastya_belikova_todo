import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Pages } from './Pages';
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

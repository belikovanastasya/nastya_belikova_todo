import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { Pages } from './Pages';
import { Route } from 'react-router-dom'
import './appComponent.scss';

// export const App = () => (
//   <React.Fragment>
//     <Header />
//     <Pages />
//     <Footer />
//   </React.Fragment>
// );
export class App extends Component {
  state = {
    login: true,
    user: ''
  }
 
  setLoginState = (login, user) => {
    this.setState({ login, user });
  }
  render() {
    const { login, user } = this.state;
 
    return ( <React.Fragment>
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

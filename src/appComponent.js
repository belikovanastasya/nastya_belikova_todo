import React from 'react';
import { Header } from './parts';
import { Footer } from './parts';
import { Pages } from './pages';
import { checkUser } from './servises'
import './appComponent.scss';


export class App extends Component {
  state = {
    user: undefined
  }

  setLoginState = (user) => {
    this.setState({ user });
  }
  componentDidMount() {
    checkUser()
      .then((data) => {
        this.setLoginState(data);
      })
      .catch(err => console.log('Can\'t login', err));
  }
  
  render() {
    const { user } = this.state;
    return (<React.Fragment>
      <Header
        setLoginState={this.setLoginState}
        user={user}
      />
      {user !== undefined ?
      <Pages
      login={user}
      setLoginState={this.setLoginState} />
       : 'Checking'}
      <Footer />
    </React.Fragment>
    );
  }
}

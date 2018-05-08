import React from 'react';
import { Header, Footer } from './parts';
import { Pages } from './pages';
import { checkUser } from './servises'
import './appComponent.scss';
import { ToastContainer } from 'react-toastr';
import { errObserver } from './servises/observer';



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
      .catch(err => {
        this.setLoginState(null);
        console.log('Can\'t login', err)
      });
      errObserver.addObserver((err = 'Something wrong') => this.state.user !== undefined && this.container.error(
        <strong>{err}</strong>,
        <em>Error</em>
      ));
  }
  
  render() {
    const { user } = this.state;
    return (<React.Fragment>
      <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />
      <Header
        setLoginState={this.setLoginState}
        user={user}
      />
      {user !== undefined ?
      <Pages
          login={user}
          setLoginState={this.setLoginState} 
        />
       : 'Checking'}
      <Footer />
    </React.Fragment>
    );
  }
}

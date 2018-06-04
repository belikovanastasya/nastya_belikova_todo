import React from 'react';
import { Header, Footer } from './parts';
import { Pages } from './pages';
import { checkUser } from './servises';
import './appComponent.scss';
import { ToastContainer } from 'react-toastr';
import { errObserver } from './servises/observer';
import { connect } from 'react-redux';
import { setUser } from './store';
import { removeUser } from './store';
import { withRouter } from 'react-router-dom';

export class AppComponent extends Component {
  setLoginState = (user) => {
    this.props.dispatch(setUser(user));
  }
  componentDidMount() {
    checkUser()
      .then((data) => {
        this.props.dispatch(setUser(data));
      })
      .catch(err => {
        this.props.dispatch(removeUser())
        console.log('Can\'t login', err)
      });
      errObserver.addObserver((err = 'Something wrong') => this.props.user !== false && this.container.error(
        <strong>{err}</strong>,
        <em>Error</em>
      ));
  }
  render() {
    const { user } = this.props;
    return (<React.Fragment>
      <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />
      <Header
      />
      {user !== undefined ?
      <Pages
          user={user}
        />
       : 'Checking'}
      <Footer />
    </React.Fragment>
    );
  }
}
const mapStoreToProps = state => ({
  user: state.user
})
export const App = withRouter(connect(mapStoreToProps)(AppComponent));

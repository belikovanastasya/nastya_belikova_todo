
import './login.scss';
import { login } from '../../servises';
import { setUser } from '../../store';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


export const Loader = () => {
  return (
    <div className="loader_wrap">
      <div className="loader"></div>
    </div>
  );
};

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false
    };
  }
  submit = (e) => {
    const { email, password } = e.target;
    e.preventDefault();
    this.setState({ showLoader: true });

    login({email: email.value, password: password.value})
      .then((data) => {
        this.props.dispatch(setUser(data));
        
      })
      .catch(err => {
        console.log('Can\'t login', err);
        this.setState({showLoader: false})
      });
  }
  render() {
    return (
      !this.state.showLoader ?
        <div className="form_wrap">
          <form onSubmit={this.submit}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              defaultValue="admin@a.com"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              defaultValue="admin"
              required
            />
            <input
              type="submit"
              value="Log in"
            />
          </form>
        </div> :
        <Loader />
    );
  }
}

const mapStoreToProps = state => ({
  user: state.user
})
export const Login = withRouter(connect(mapStoreToProps)(LoginComponent));


import './login.scss';
import { login } from '../../servises';


export const Loader = () => {
  return (
    <div className="loader_wrap">
      <div className="loader"></div>
    </div>
  );
};

export class Login extends Component {
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
    // setTimeout(() => {
    //   this.props.onLogin(true, value);
    // }, 2000);
    login({email: email.value, password: password.value})
      .then((data) => {
        this.props.onLogin(data);
      })
      .catch(err => console.log('Can\'t login', err));
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

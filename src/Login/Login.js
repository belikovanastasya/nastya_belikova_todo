
import './login.scss';

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
    const value = e.target.name.value;
    e.preventDefault();
    this.setState({ showLoader: true });
    setTimeout(() => {
      this.props.onLogin(true, value);
    }, 2000);
  }
  render() {
    return (
      !this.state.showLoader ?
        <div className="form_wrap">
          <form onSubmit={this.submit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              type="password"
              placeholder="Password"
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

import { userInfo } from '../../servises/users';


export class Invitation extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      done: 0,
      inProgress: 0,
      waiting: 0
    };

  }
  componentDidMount() {
    userInfo()
      .then(({total, done, inProgress, waiting}) => this.setState({ total, done, inProgress, waiting }))
  };
  render() {
    return (
      <div className="invitation">
        {/* <p>Hello, { this.props.user.firstName}</p> */}
        <div>You have {this.state.total} tasks</div>
        <div>Done: {this.state.done}</div>
        <div>In Progress: {this.state.inProgress}</div>
        <div>Waiting: {this.state.waiting}</div>
        <a href="task.html">Go to the task list</a>
    </div>
    );
   
  }
}
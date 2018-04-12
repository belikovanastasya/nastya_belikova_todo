import './main.scss';
import { GeoBtn } from './Geo';
import { Timer } from './Timer';

export class UserTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: 10,
      done: 3,
      inProgress: 1,
      waiting: 5
    };
  }
  render() {
    return (
      <div className="tasksList">
        <p>Hello, UserName!</p>
        <div>You have {this.state.tasks} tasks</div>
        <div>Done: {this.state.done}</div>
        <div>In Progress: {this.state.inProgress}</div>
        <div>Waiting: {this.state.waiting}</div>
        <a href="task.html">Go to the task list</a>
      </div>
    );
  }
}

const Text = () => <div className="modal">Some important text</div>;

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false, hidden: true };
  }
  toggle = () => {
    this.setState({ addClass: !this.state.addClass, hidden: !this.state.hidden });
  }
  render() {
    return (
      <div>
        <button className={this.state.addClass ? 'active' : null} onClick={this.toggle} >Click me</button>
        {!this.state.hidden && <Text />}
      </div>
    );
  }
}
// const Posts = ({ posts, field }) => {
//   const post = posts.map(post => <li key={post.id}>{post.body}</li>);
//   return <ul>{post}</ul>;
// };
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], posts: [], show: true };
    this.getUsers();
  }
  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }
  getUserPosts(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(data => data.json())
      .then(posts => this.setState({ posts }));
  }
  render() {
    return (
      <main>
        <div className="wrapper">
          <div className="box_1">
            <ul className="userList">
              {this.state.users.map(user =>
                <li key={user.id} onClick={() => this.getUserPosts(user.id)}>{user.name}</li>)}
            </ul>
            {
              this.state.posts.length > 0 ? <ul className="posts">{this.state.posts.map(post =>
                <li key={post.id}>{post.body}</li>)
              }
              </ul> : <span>Posts are empty</span>
            }
            <Button />
            <GeoBtn />
            <UserTasks />
          </div>
          <div className="box_2">
            {this.state.show && <Timer />}
            <button onClick={() => this.setState({ show: false })}>Destroy</button>
          </div>
        </div>
      </main>
    );
  }
}

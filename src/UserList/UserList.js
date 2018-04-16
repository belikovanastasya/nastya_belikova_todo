export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], posts: [] };
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
      <React.Fragment>
        <ul className="userList">
          {this.state.users.map(user =>
            <li key={user.id} onClick={() => this.getUserPosts(user.id)}>{user.name}</li>)}
        </ul>
        {
            this.state.posts.length > 0 ? <ul className="posts">{this.state.posts.map(post =>
              <li key={post.id}>{post.body}</li>)
            }
            </ul> :
            <span>
              Posts are empty
            </span>
          }
      </React.Fragment>
    );
  }
}

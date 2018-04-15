import './main.scss';
import { Geo } from './Geo';
import { Timer } from './Timer';
import { EditableComponent } from './EditableComponent';
import { TodoList } from './TodoList';
import { Tabs, Tab } from '../Tabs';
import { UserList } from '../UserList';
import { Gallery } from '../Gallery';
import { TaskList } from '../TaskList';


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
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  render() {
    return (
      <main>
        <div className="wrapper">
          <div className="box_1">
            <UserList />
            <Button />
            <UserTasks />
          </div>
          <div className="box_2">
            {this.state.show && <Timer />}
            <button onClick={() => this.setState({ show: false })}>Destroy</button>
          </div>
          <div className="box_3">
            <EditableComponent onLoose={text => console.log(text)} />
            <TodoList />
            <Geo />
          </div>
          <div className="box_4">
            <Tabs selectedIndex="1">
              <Tab title="User List">
                <h3>User List</h3>
                <UserList />
              </Tab>
              <Tab title="Gallery">
                <h2>Gallery</h2>
                <Gallery />
              </Tab>
            </Tabs>
          </div>
          <div className="box_5">
            <TaskList />
          </div>
        </div>
      </main>
    );
  }
}

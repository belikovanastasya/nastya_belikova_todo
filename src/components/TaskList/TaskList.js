import { Link } from 'react-router-dom';
import { Tabs, Tab } from '../Tabs';
import { getTasks } from '../../servises/tasks'

const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
export class TaskList extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      tasksInWeek: []
    }  
  };
  componentDidMount() {
    getTasks()
    .then(data => this.setState({tasksInWeek: data}))
  }
  createNewTask = (day) => {
    this.props.history.push(`tasklist/newtask?day=${day}`);
  };
  getDay = () => {
    return this.props.location.search.replase(/\D+/, '')
  };
  createNewTask = (day) => {
    this.props.history.push(`tasklist/newtask?day=${day}`);
  };
  getDay = () => {
    return this.props.location.search.replase(/\D+/, '')
  };
  render() {
    const currentDay = new Date().getDay();
    return (
      <Tabs selectedIndex={currentDay}>
      {this.state.tasksInWeek.map((tasks, index) =>
        (<Tab
          key={index}
          title={days[index]}
        >
          <ol>
            {tasks.map(task => <li key={task.id}>
              <Link to={{
                pathname: `/tasklist/${task.id}`,
                state: {
                  task
                }
              }}>
                {task.title}
              </Link>
            </li>)}
          </ol>
          <button onClick={() => this.createNewTask(index)}>Add new</button>
        </Tab>))
      }
    </Tabs>
    )
   
  }
}



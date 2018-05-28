import { Link } from 'react-router-dom';
import { Tabs, Tab } from '../../components/Tabs';
import { getTasks, updateTask, deleteTask } from '../../servises/tasks';
import { days } from '../../constants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTaskList, updateCurrentTask, updateTaskList, deleteCurrentTask } from '../../store';
import { errObserver } from '../../servises/observer';
import './tasklist.scss';


const icons = [
  { id: 'done',  class: 'done', label: 'done', delete: false },
  { id: 'inprogress',  class: 'inProgress', label: 'inProgress', delete: false },
  { id: 'delete',  class: 'delete', label: 'delete', delete: true },
  
]

export class TaskListComponent extends Component {

  componentDidMount() {
    getTasks()
      .then((taskList) => this.props.dispatch(getTaskList(taskList)))
      .catch(err => console.log('Can\'t update', err));
  }

  createNewTask = (day) => {
    this.props.history.push(`tasklist/newtask?day=${day}`);
  };
  getDay = () => {
    return this.props.location.search.replase(/\D+/, '');
  };
  changeStatus = (task, key) => {
    const tasksInWeek = [...this.props.taskList];
    const todayTasks = tasksInWeek[task.day];
    if (key === 'done') {
      task.done = true;
    }
    else if (key === 'inprogress') {
      let inProgressTasks = todayTasks.filter(dayTask => dayTask.done === false);
      if (inProgressTasks.length < 2) {
        task.done = false;
      } else {
        errObserver.trigger('Sorry, only two tasks can be in progress');
      }
    } 
    updateTask(task).then(() => this.props.dispatch(updateTaskList(task)));
 
  }
  deleteTask = (task) => {
    deleteTask(task.id)
      .then((deletedTask) => this.props.dispatch(deleteCurrentTask(deletedTask)));
  }
  computeClassTask = (status) => {
    const taskClasses = {
      'true': 'done',
      'false': 'inprogress',
      'undefined': ''   
    }
    return taskClasses[status]
    
   }
  render() {
    const currentDay = new Date().getDay();
    return (
      <Tabs selectedIndex={currentDay}>
        {this.props.taskList.map((tasks, index) =>
          (<Tab
            key={index}
            title={days[index]}
          >
            <ol>
              {tasks.map(task => <li className={this.computeClassTask(task.done)} key={task.id} >
                <Link to={{
                  pathname: `/tasklist/${task.id}`,
                  state: {
                    task
                  }
                }}>
                  {task.title}
                </Link>
                <ul className="icons">
                  {icons.map(icon => !task.done && <button
                    key={icon.id}
                    className={icon.class}
                    onClick={!icon.delete ? () => this.changeStatus(task, icon.id) : () => this.deleteTask(task)} >{icon.label}
                  </button>)}  
                </ul>
              </li>)}
            </ol>
            <button className="btn" onClick={() => this.createNewTask(index)}>Add new</button>
          </Tab>))
        }
      </Tabs>
    );
  }
}

const mapStoreToProps = state => ({
  taskList: state.taskList
})
export const TaskList = withRouter(connect(mapStoreToProps)(TaskListComponent));

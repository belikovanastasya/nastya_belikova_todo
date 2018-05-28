import './task.scss';
import { getTask, updateTask, createTask } from '../../servises/tasks';
import { days } from '../../constants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setTask, updateCurrentTask } from '../../store';


export class TaskComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { task } = this.props.match.params;

    if (task === 'newtask') {
      this.props.dispatch(updateCurrentTask({ day: this.getDay() }));
      return;
    }

    getTask(task)
      .then((task) => this.props.dispatch(setTask( task )))
  }

  getDay() {
    return this.props.location.search.replace(/\D+/, '') || '';
  }

  updateTask = (event) => {
    const { task } = this.props.match.params;
    const promise = task === 'newtask' ? createTask(this.props.task) : updateTask(this.props.task);
    event.preventDefault();
    promise
      .then(() => this.props.history.push('/tasklist'));
  };
  onChange = (event) => {
    const { target } = event;
    this.props.dispatch(updateCurrentTask({ [target.name]: target.value }))

  }

  render() {
    const { title, description, day } = this.props.task;

    return (
      <form
        onSubmit={this.updateTask}
      >
        <p>Day: {days[day]}</p>
        <input
          type="text"
          name="title"
          value={this.props.task.title}
          onChange={this.onChange}
          placeholder="Enter a title"
          required
        />
        <br />
        <br />
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={this.onChange}
        />

        <br />
        <br />
        <input
          type="submit"
          value="Save"
        />
      </form>
    );
  }
}


const mapStoreToProps = state => ({
  task: state.current_task
})
export const Task = withRouter(connect(mapStoreToProps)(TaskComponent));


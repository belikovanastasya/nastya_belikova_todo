import './task.scss';
import { getTask, updateTask, createTask } from '../../servises/tasks';



export class Task extends Component {
  constructor(props) {
    super(props);

    this.days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    this.state = {
      title: '',
      description: '',
      id: null
    };
  }

  componentDidMount() {
    const { task } = this.props.match.params;

    if (task === 'newtask') {
      this.setState({ day: this.getDay() });
      return;
    }

    getTask(task)
      .then(task => this.setState({ ...task }))
  }

  getDay() {
    return this.props.location.search.replace(/\D+/, '') || '';
  }

  updateTask = (event) => {
    const { task } = this.props.match.params;
    let promise = task === 'newtask' ? createTask(this.state) : updateTask(this.state);
    event.preventDefault();
    promise
    .then(() => this.props.history.push('/tasklist'))    
  }

  onChange = (event) => {
    const { target } = event;

    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, description, day } = this.state;

    return (
      <form
        onSubmit={this.updateTask}
      >
        <p>Day: {this.days[day]}</p>
        <input
          type="text"
          name="title"
          value={title}
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


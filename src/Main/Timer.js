import PropTypes from 'prop-types';

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: null };
    this.timer = setInterval(() => this.setTime(), 1000);
  }

  setTime() {
    const currentTime = new Date().toLocaleString();
    this.setState({ time: currentTime });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="timerBox">
        <p>Hello, User!</p>
        <div>{this.state.time}</div>
      </div>
    );
  }
}
Timer.propTypes = {
  time: PropTypes.string
};


import './main.scss';
import { TaskList } from '../TaskList';
import { Invitation } from './Invitation';

export class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="wrapper">
          <div className="box_5">
            <Invitation user={this.props.user}/>
          </div>
        </div>
      </main>
    );
  }
}

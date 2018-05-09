import './main.scss';
import { Invitation } from './Invitation';

export class Main extends Component {
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

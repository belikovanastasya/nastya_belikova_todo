import { Autorised } from './Autorised';
import { NonAuthorised } from './NonAuthorised';


export class Pages extends Component {
  render() {
    return (
      this.props.login ?
        <Autorised /> :
        <NonAuthorised setLoginState={this.props.setLoginState} />
    );
  }
}

import { Autorised } from './Autorised';
import { NonAuthorised } from './NonAuthorised';


export class Pages extends Component {
  render() {
    return (
      this.props.user ?
        <Autorised user={this.props.user}/> :
        <NonAuthorised setLoginState={this.props.setLoginState} />
    );
  }
}

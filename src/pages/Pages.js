import { Authorised } from './Authorised';
import { NonAuthorised } from './NonAuthorised';


export class Pages extends Component {
  render() {
    return (
      this.props.user ?
        <Authorised user={this.props.user}/> :
        <NonAuthorised setLoginState={this.props.setLoginState} />
    );
  }
}

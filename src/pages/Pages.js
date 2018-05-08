import { Autorised } from './Autorised';
import { NonAuthorised } from './NonAuthorised';


export class Pages extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      this.props.login ?
        <Autorised user={this.props.login}/> :
        <NonAuthorised setLoginState={this.props.setLoginState} />
    );
  }
}

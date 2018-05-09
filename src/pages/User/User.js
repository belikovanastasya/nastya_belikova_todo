import './user.scss';
import { Form } from '../../components/Form';
import { updateUser } from '../../servises/users';


export class User extends Component {
  saveUser = (user) => {
    updateUser(user)
      .then(user => console.log(user))
      .catch(err => console.log('Can\'t update', err));
  }
  render() {
    return (
      <Form
        disabled={['email']}
        skipped={['password', 'repeatPassword']}
        data={this.props.user}
        onSubmit={this.saveUser}
      />
    );
  }
}

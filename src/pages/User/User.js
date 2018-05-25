import './user.scss';
import { Form } from '../../components/Form';
import { updateUser } from '../../servises/users';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export const UserComponent = ({ user, dispatch}) => {
  const saveUser = (user) => {
    updateUser(user)
      .then(() => this.props.dispatch(updateUser(user)))
      .catch(err => console.log('Can\'t update', err));
  }; 
    return (
      <Form
        disabled={['email']}
        skipped={['password', 'repeatPassword']}
        data={user}
        onSubmit={saveUser}
      />
    );
}


const mapStoreToProps = state => ({
  user: state.user
})
export const User = withRouter(connect(mapStoreToProps)(UserComponent));

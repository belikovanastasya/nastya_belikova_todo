import './createUser.scss';
import { createUser } from '../../servises/users';
import { Form } from '../Form';


export const CreateUser = ({ history }) => {
  const create = (user) => {
    createUser(user)
      .then(() => {
        history.push('/success');
      });
  };
  return (
    <div className="createUser">
      <Form onSubmit={create} excluded={[]} />
    </div>
  );
};

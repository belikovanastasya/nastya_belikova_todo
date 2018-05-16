import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './Login';
import { CreateUser } from '../components';
import { Success } from './Success';

export const NonAuthorised = ({ setLoginState }) => {
  return (
    <Switch>
      <Route
        path="/createuser"
        render={props => <CreateUser {...props} onLogin={setLoginState} />}
      />
      <Route path="/success" component={Success}/>
      <Route
        path="/login"
        render={() => <Login onLogin={setLoginState} />}
      />
      <Redirect to="/login" />
    </Switch>
  );
};

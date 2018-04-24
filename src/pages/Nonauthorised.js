import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './Login';
// import { CreateUser } from './CreateUser';

export const NonAuthorised = ({ setLoginState }) => {
  return (
    <Switch>
      {/* <Route path="/createuser" component={CreateUser} /> */}
      <Route
        path="/login"
        render={() => <Login onLogin={setLoginState} />}
      />
      <Redirect to="/login" />
    </Switch>
  );
};

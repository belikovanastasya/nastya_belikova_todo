import { Route, Switch, Redirect } from 'react-router-dom';
import { TaskList, Task, Main } from '../components';
import { User, NotFound, Gallery } from '../pages';


export const Autorised = ({ user }) => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route
        path="/home"
        exact
        render={props => <Main {...props} user={user} />}
      />
      <Route
        path="/user"
        exact
        render={(props) => <User{...props} user={user} />}
      />
      <Route path="/tasklist" exact component={TaskList} />
      <Route path="/tasklist/:task" component={Task} />
      <Route path="/gallery" component={Gallery} />
      <Redirect from="/login" to="/home" />
      <Route component={NotFound} /> 
    </Switch>
  );
};

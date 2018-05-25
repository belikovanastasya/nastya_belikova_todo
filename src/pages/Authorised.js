import { Route, Switch, Redirect } from 'react-router-dom';
//import {  } from '../components';
import { User, NotFound, Gallery, TaskList, Task, Main } from '../pages';


export const Authorised = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => <Main />}
      />
      <Route
        path="/home"
        exact
        render={() => <Main />}
      />
      <Route
        path="/user"
        exact
        render={() => <User/>}
      />
      <Route path="/tasklist" exact component={TaskList} />
      <Route path="/tasklist/:task" component={Task} />
      <Route path="/gallery" component={Gallery} />
      <Redirect from="/login" to="/home" />
      <Route component={NotFound} /> 
    </Switch>
  );
};

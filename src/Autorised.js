import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './Main';
import { Gallery } from './Gallery';
import { TaskList } from './TaskList';
import { Task } from './Task';
import { NotFound } from './NotFound';


export const Autorised = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/home" exact component={Main} />
      <Route path="/tasklist" exact component={TaskList} />
      <Route path="/tasklist/:task" component={Task} />
      <Route path="/gallery" component={Gallery} />
      <Redirect from="/login" to="/home" />
      <Route component={NotFound} />
    </Switch>
  );
};

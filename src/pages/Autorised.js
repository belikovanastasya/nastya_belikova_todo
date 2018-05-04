import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from '../components';
import { Gallery } from '../pages';
import { TaskList } from '../components';
import { Task } from '../components';
import { NotFound } from '../pages';
import { Success } from '../pages';


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
      <Route path="/success" component = {Success}/>
      
    </Switch>
  );
};

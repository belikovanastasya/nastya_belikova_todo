import { Route, Switch, Redirect  } from 'react-router-dom';
import { Main } from './Main';
import { Gallery } from './Gallery';
import { TaskList } from './TaskList';
import { Task } from './Task';
import { Login } from './Login';

export class Pages extends Component {
  render() {
    return (
        this.props.login ?
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/home" exact component={Main} />
          <Route path="/tasklist" exact component={TaskList} />
          <Route path="/tasklist/:task" component={Task} />
          <Route path="/gallery" component={Gallery} />
          <Redirect from="/login" to="/home"/>
          <Route render={({ location }) => <h1>404 Page <em>{location.pathname.replace('/', '')}</em> is not exist</h1>} />
        </Switch> :
          <Switch>
            <Route
              path="/login"
              render={() => <Login onLogin={this.props.setLoginState} />}
          />
         <Redirect to="/login" />
          </Switch>
    );
  }
}

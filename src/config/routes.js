import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NewEndcapPage from '../pages/NewEndcapPage';

const routes = (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/new' component={NewEndcapPage} />
  </Switch>
);

export default routes;
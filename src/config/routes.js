import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NewEndcapPage from '../pages/NewEndcapPage';
import EditEndcapPage from '../pages/EditEndcapPage';
import NewFlankPage from '../pages/Flanks/NewFlankPage';

const routes = (
  <Switch>
    <Route exact path='/'>
      <HomePage />
    </Route>
    <Route exact path='/new' component={NewEndcapPage} />
    <Route exact path='/edit/:id' component={NewFlankPage} />
    <Route exact path='/edit/:id/flank/new' component={NewFlankPage} />
  </Switch>
);

export default routes;
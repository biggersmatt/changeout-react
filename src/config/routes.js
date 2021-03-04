import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NewEndcapPage from '../pages/NewEndcapPage';
import EditEndcapPage from '../pages/EditEndcapPage';

const routes = (
  <Switch>
    <Route exact path='/'>
      <HomePage handleChange={this.handleChange} />
    </Route>
    <Route exact path='/new' component={NewEndcapPage} />
    <Route exact path='/edit/:id' component={EditEndcapPage} />
  </Switch>
);

export default routes;
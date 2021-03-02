import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const routes = (
  <Switch>
    <Route exact path='/' component={HomePage} />
  </Switch>
);

export default routes;
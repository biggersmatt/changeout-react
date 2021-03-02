import { Link } from 'react-router-dom';
import routes from './config/routes';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <div>
        {routes}
      </div>
    </div>
  );
}

export default App;

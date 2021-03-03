import { Link } from 'react-router-dom';
import routes from './config/routes';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <img src="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Logo"/>
        <h1>Welcome</h1>
        <ul className="nav-items">
          <li>
            <Link to='/'>Home</Link>{' '}
          </li>
          <li>
            <Link to='/new'>New Endcap</Link>
          </li>
        </ul>
      </nav>
      <div>
        {routes}
      </div>
      <footer>
        ChangeOut 2021&copy;
      </footer>
    </div>
  );
}

export default App;

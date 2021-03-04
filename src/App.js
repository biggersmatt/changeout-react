import routes from './config/routes';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="content">
        {routes}
      </div>
      <footer>
        ChangeOut 2021&copy;
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewEndcapPage from './pages/NewEndcapPage';
import EditEndcapPage from './pages/EditEndcapPage';
import Navbar from './components/Navbar/Navbar';
import './App.css';

class App extends React.Component {
  state = {
    endcaps: [],
    month: '',
    period: '',
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/endcaps')
      .then((response) => response.json())
      .then((jsonData) => {
        const endcaps = jsonData.allEndcaps;
        this.setState({
          endcaps: endcaps
        })
      })
      .catch()
  }

  handleChangeMonth = (event) => {
    const updatedMonth = event.target[event.target.value].innerHTML;
    this.setState({ month: updatedMonth});
  }

  handleChangePeriod = (event) => {
    const updatedPeriod = event.target[event.target.value].outerText;
    this.setState({ period: updatedPeriod});
  }


  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <HomePage 
                endcaps={this.state.endcaps} 
                month={this.state.month} 
                period={this.state.period} 
                handleChangeMonth={this.handleChangeMonth} 
                handleChangePeriod={this.handleChangePeriod} 
              />
            </Route>
            <Route exact path='/new' component={NewEndcapPage} />
            <Route exact path='/edit/:id' component={EditEndcapPage} />
          </Switch>
        </div>
        <footer>
          ChangeOut 2021&copy;
        </footer>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewEndcapPage from './pages/Endcaps/NewEndcapPage';
import EditEndcapPage from './pages/Endcaps/EditEndcapPage';
import Navbar from './components/Navbar/Navbar';
import NewFlankPage from './pages/Flanks/NewFlankPage';
import EditFlankPage from './pages/Flanks/EditFlankPage';
import './App.css';

class App extends React.Component {
  state = {
    month: '',
    period: '',
    endcaps: [],
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To do',
        endcapIds: [],
      }
    },
    columnOrder: ['column-1'],
    hasUpdated: false,
  }
  
  componentDidMount() {
    // Collect All Endcaps
    fetch('http://localhost:4000/api/endcaps')
    .then((response) => response.json())
    .then((jsonData) => {
      const endcapData = jsonData.allEndcaps;
      // Checks and Updates Settings
      fetch('http://localhost:4000/api/settings')
        .then((response) => response.json())
        .then((jsonData) => {
          if(jsonData.settings.length === 0) {
            // If No Settings exist, creates Settings
            console.log('No Settings, Create')
            fetch('http://localhost:4000/api/settings', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.state)
            })
          }
          if(jsonData.settings.length === 1) {
            // If Settings do exist, Update date them
            fetch('http://localhost:4000/api/settings')
            .then((response) => response.json())
            .then((jsonData => {
              const currentColumnOrder = jsonData.settings[0].columnOrder.endcapIds;
              const currentPromoMonth = jsonData.settings[0].promoMonth;
              const currentPromoPeriod = jsonData.settings[0].promoPeriod;
              const newState = {
                ...this.state,
                endcaps: endcapData,
                columns: {
                  ...this.state.columns,
                  'column-1': {
                    ...this.state.columns['column-1'],
                    endcapIds: currentColumnOrder,
                  }
                },
                month: currentPromoMonth,
                period: currentPromoPeriod,
              }
              this.setState(newState);
            })
          )
        }
      })
    })
    .catch((err) => console.log(err));
  }
  
  componentDidUpdate() {
    if(this.state.hasUpdated){
      fetch('http://localhost:4000/api/endcaps')
      .then((response) => response.json())
      .then((jsonData) => {
        const endcapData = jsonData.allEndcaps;
        const endcapIds = endcapData.map((endcapId) => {
          return endcapId._id;
        })
        const hasUpdated = !this.state.hasUpdated;
        this.setState({
          endcaps: endcapData,
          hasUpdated: hasUpdated,
          columns: {
            ...this.state.columns,
            'column-1': {
              ...this.state.columns['column-1'],
              endcapIds: endcapIds,
            }
          }
        })
      })
    }
  }
  
  handleToggleEndcap = (toggle, endcapId) => {
    if(!toggle) {
      this.state.endcaps.forEach((endcap) => {
        if(endcap._id === endcapId) {
          const updatedEndcap = {
            ...endcap,
            change: true,
          }
          fetch(`http://localhost:4000/api/endcaps/${endcapId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEndcap),
          })
          .then(() => this.handleHasUpdated(true))
          .catch((err) => console.log(err));
        }
      })
    } else {
      this.state.endcaps.forEach((endcap) => {
        if(endcap._id === endcapId) {
          const updatedEndcap = {
            ...endcap,
            change: false,
          }
          fetch(`http://localhost:4000/api/endcaps/${endcapId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEndcap),
          })
          .then(() => this.handleHasUpdated(true))
          .catch((err) => console.log(err));
        }
      })
    }
  }

  handleToggleFlank = (toggle, flank) => {
    if(!toggle) {
      const updatedFlank = {
        ...flank,
        change: true,
      }
      fetch(`http://localhost:4000/api/flanks/${flank._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFlank),
      })
      .then(() => this.handleHasUpdated(true))
      .catch((err) => console.log(err));
    } else {
      const updatedFlank = {
        ...flank,
        change: false,
      }
      fetch(`http://localhost:4000/api/flanks/${flank._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFlank),
      })
      .then(() => this.handleHasUpdated(true))
      .catch((err) => console.log(err));
    }
  }

  
  handleHasUpdated = (hasUpdated) => {
    this.setState({
      hasUpdated: hasUpdated,
    })
  }

  handleChangeMonth = (event) => {
    const monthIndex = event.target.value;
    this.setState({ month: monthIndex });
  }
  
  handleChangePeriod = (event) => {
    const periodIndex = event.target.value;
    this.setState({ period: periodIndex });
  }
  
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if(!destination) {
      return;
    }
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    this.setState(function(state) {
      const newEndcapIds = [...state.columns['column-1'].endcapIds];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      newEndcapIds.splice(sourceIndex, 1);
      newEndcapIds.splice(destinationIndex, 0, draggableId);
      const newColumnOne = {
        ...state.columns['column-1'],
        endcapIds: [...newEndcapIds],
      }
      return {
        ...state,
        columns: {
          ...state.columns,
          'column-1': newColumnOne,
        }
      }
    });
    // Update column in Database
    fetch('http://localhost:4000/api/settings')
    .then((response) => response.json())
    .then((jsonData) => {
    if(jsonData.settings.length === 1) {
      // If Settings do exist, Update date them
      console.log('Update Settings')
      console.log(this.state.columns['column-1'].endcapIds)
      const settings = {
        columnOrder: {
          id: 'column-1',
          title: 'To Do',
          endcapIds: this.state.columns['column-1'].endcapIds,
        },
        promoMonth: 'March',
        promoPeriod: 'B',
      }

      jsonData.settings.forEach((setting) => {
        fetch(`http://localhost:4000/api/settings/${setting._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(settings),
        })
          .catch((err) => console.log(err));
      })
    }
    })
  }


  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <HomePage 
                month={this.state.month} 
                period={this.state.period} 
                handleToggleEndcap={this.handleToggleEndcap}
                handleToggleFlank={this.handleToggleFlank}
                handleChangeMonth={this.handleChangeMonth} 
                handleChangePeriod={this.handleChangePeriod} 
                columnOrder={this.state.columnOrder}
                columns={this.state.columns}
                endcaps={this.state.endcaps}
                onDragEnd={this.onDragEnd}
              />
            </Route>
            <Route path='/new'>
              <NewEndcapPage 
                handleHasUpdated={this.handleHasUpdated}
              />
            </Route>
            <Route path='/edit/:id/flank/new'>
              <NewFlankPage 
                handleHasUpdated={this.handleHasUpdated}
              />
            </Route>
            <Route path='/edit/:id/flank/:id'>
              <EditFlankPage 
                handleHasUpdated={this.handleHasUpdated}
              />
            </Route>
            <Route path='/edit/:id'>
              <EditEndcapPage 
                handleHasUpdated={this.handleHasUpdated}
              />›
            </Route>
          </Switch>
        </div>
        <footer>
        &copy;  Change Out {new Date().getFullYear()}
        </footer>
      </div>
    );
  }
}

export default App;

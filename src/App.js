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
    fetch('http://localhost:4000/api/endcaps')
    .then((response) => response.json())
    .then((jsonData) => {
      const endcapData = jsonData.allEndcaps;
      const updatedEndcapIds = endcapData.map((endcap) => {
        return endcap._id;
      })
      const columnOneClone = {...this.state.columns['column-1']}
      columnOneClone.endcapIds = updatedEndcapIds;
      const newState = {
        ...this.state,
        endcaps: endcapData,
        columns: {
          ...this.state.columns,
          'column-1': columnOneClone,
        }
      }
      this.setState(newState);
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
